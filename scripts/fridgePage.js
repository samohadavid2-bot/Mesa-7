import recipes from "./recipes.js";
import { closeRecipePopup } from "./recipesPopup.js";
import { createRecipeCard } from "./recipeCard.js";
import { MEAL_TYPES, KOSHER_TYPES, getMealType, getKosherType } from "./recipeMeta.js";
import { INGREDIENTS, PANTRY_CHOICES, DEFAULT_PANTRY, textToKey, spokenToKeys, keyLabel, keyLabelHe, keyEmoji, ingredientHe, findRecipes } from "./ingredients.js";
import { HE_CATEGORIES } from "./ingredientsHe.js";
import { listen, voiceSupported, VoiceError } from "./voiceInput.js";
import { PROVIDERS, getProvider, setProvider, getApiKey, setApiKey, prepareImage, scanFridge, ScanError } from "./fridgeScan.js";
window.closeRecipePopup = closeRecipePopup;

const MAX_PHOTOS = 4;
const FRIDGE_STORAGE = "mesaFridge";     // [{ key, name, quantity, confidence }]
const PANTRY_STORAGE = "mesaPantry";     // [key]

const $ = (sel) => document.querySelector(sel);

// ---------- state ----------
let photos = [];                                   // [{ dataUrl, base64, mediaType }]
let fridge = loadJSON(FRIDGE_STORAGE, []);
let pantry = loadJSON(PANTRY_STORAGE, DEFAULT_PANTRY);
let mealFilter = "all";
let kosherFilter = "all";

function loadJSON(key, fallback) {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return Array.isArray(v) ? v : fallback;
  } catch {
    return fallback;
  }
}

function saveFridge() {
  localStorage.setItem(FRIDGE_STORAGE, JSON.stringify(fridge));
}

function savePantry() {
  localStorage.setItem(PANTRY_STORAGE, JSON.stringify(pantry));
}

// ---------- AI settings ----------
const settingsPanel = $(".settingsPanel");
const apiKeyInput = $(".apiKeyInput");
const keyStatus = $(".keyStatus");

const providerSelect = $(".providerSelect");

function refreshKeyStatus() {
  const provider = getProvider();
  const info = PROVIDERS[provider];
  providerSelect.value = provider;
  $(".providerNote").textContent = info.note;
  const link = $(".keyLink");
  link.href = info.keyUrl;
  link.textContent = info.keySite;
  apiKeyInput.placeholder = info.keyHint;

  const key = getApiKey(provider);
  keyStatus.textContent = key ? `✓ Key saved (…${key.slice(-4)})` : "No key saved yet.";
  keyStatus.className = "keyStatus" + (key ? " ok" : "");
}

providerSelect.addEventListener("change", () => {
  setProvider(providerSelect.value);
  refreshKeyStatus();
});

function openSettings() {
  settingsPanel.hidden = false;
  apiKeyInput.focus();
}

$(".settingsToggle").addEventListener("click", () => {
  settingsPanel.hidden = !settingsPanel.hidden;
});

$(".saveKeyBtn").addEventListener("click", () => {
  const value = apiKeyInput.value.trim();
  if (value) {
    setApiKey(value);
    apiKeyInput.value = "";
    settingsPanel.hidden = true;
    setStatus("API key saved. You can scan now.", "ok");
  }
  refreshKeyStatus();
});

apiKeyInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") $(".saveKeyBtn").click();
});

// ---------- photos ----------
const thumbs = $(".thumbs");
const scanBtn = $(".scanBtn");
const scanStatus = $(".scanStatus");

function setStatus(text, type = "") {
  scanStatus.textContent = text;
  scanStatus.className = "scanStatus" + (type ? " " + type : "");
}

function renderPhotos() {
  thumbs.innerHTML = "";
  photos.forEach((photo, index) => {
    const div = document.createElement("div");
    div.className = "thumb";
    div.style.backgroundImage = `url(${photo.dataUrl})`;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "thumbRemove";
    remove.textContent = "✕";
    remove.setAttribute("aria-label", "Remove photo");
    remove.addEventListener("click", () => {
      photos.splice(index, 1);
      renderPhotos();
    });

    div.appendChild(remove);
    thumbs.appendChild(div);
  });
  scanBtn.disabled = photos.length === 0;
}

async function addFiles(fileList) {
  const files = [...fileList].filter(f => f.type.startsWith("image/") || f.name.match(/\.(heic|heif)$/i));
  for (const file of files) {
    if (photos.length >= MAX_PHOTOS) {
      setStatus(`Up to ${MAX_PHOTOS} photos per scan.`, "warn");
      break;
    }
    try {
      photos.push(await prepareImage(file));
    } catch {
      setStatus("Couldn't open one of the photos. Try a JPG or PNG.", "error");
    }
  }
  renderPhotos();
}

for (const input of [$(".cameraInput"), $(".uploadInput")]) {
  input.addEventListener("change", async () => {
    await addFiles(input.files);
    input.value = "";
  });
}

scanBtn.addEventListener("click", async () => {
  if (!getApiKey()) {
    setStatus("Add a free Google Gemini key (or a Claude key) in AI settings to scan photos.", "warn");
    openSettings();
    return;
  }

  scanBtn.disabled = true;
  scanBtn.classList.add("loading");
  setStatus("Looking at every shelf… this can take up to a minute.");

  try {
    const items = await scanFridge(photos);
    let added = 0;
    for (const item of items) {
      if (addToFridge(item)) added++;
    }
    saveFridge();
    renderAll();
    setStatus(
      items.length
        ? `Found ${items.length} item${items.length === 1 ? "" : "s"} (${added} new). Check the list below.`
        : "No food found in the photos. Try a clearer photo with the light on.",
      items.length ? "ok" : "warn"
    );
    if (items.length) $(".ingredientChips").scrollIntoView({ behavior: "smooth", block: "center" });
  } catch (err) {
    console.error(err);
    if (err instanceof ScanError) {
      setStatus(err.message, "error");
      if (err.code === "no_key" || err.code === "bad_key") openSettings();
    } else {
      setStatus("Something went wrong. Please try again.", "error");
    }
  } finally {
    scanBtn.disabled = photos.length === 0;
    scanBtn.classList.remove("loading");
  }
});

// ---------- ingredients ----------
const chips = $(".ingredientChips");
const ingredientInput = $(".ingredientInput");

function addToFridge(item) {
  if (!item.key || fridge.some(f => f.key === item.key)) return false;
  fridge.push(item);
  return true;
}

function renderIngredients() {
  chips.innerHTML = "";

  if (fridge.length === 0) {
    const empty = document.createElement("p");
    empty.className = "emptyChips";
    empty.textContent = "No ingredients yet. Tap items below, use 🎤, or scan a photo.";
    chips.appendChild(empty);
    return;
  }

  fridge.forEach((item, index) => {
    const chip = document.createElement("div");
    chip.className = "chip" + (item.confidence === "low" ? " unsure" : "");

    const label = document.createElement("span");
    label.className = "chipLabel";
    const main = document.createElement("bdi");
    main.textContent = `${keyEmoji(item.key)} ${keyLabelHe(item.key, { short: true })}`;
    label.appendChild(main);
    chip.title = [item.name, item.quantity].filter(Boolean).join(" · ");

    // second line: English name, plus what the photo scan actually saw
    const seen = document.createElement("span");
    seen.className = "chipSeen";
    const seenParts = [keyLabel(item.key)];
    if (item.name && ![keyLabel(item.key), keyLabelHe(item.key)].some(n => n.toLowerCase() === item.name.toLowerCase())) {
      seenParts.push(item.name);
    }
    if (item.quantity) seenParts.push(item.quantity);
    const seenText = document.createElement("bdi");   // keeps Hebrew and English readable side by side
    seenText.textContent = seenParts.join(" · ");
    seen.appendChild(seenText);
    label.appendChild(seen);

    if (item.confidence === "low") {
      const q = document.createElement("span");
      q.className = "chipUnsure";
      q.textContent = "?";
      q.title = "Not sure — remove it if it's wrong";
      chip.appendChild(q);
    }

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "chipRemove";
    remove.textContent = "✕";
    remove.setAttribute("aria-label", `Remove ${keyLabelHe(item.key)}`);
    remove.addEventListener("click", () => {
      fridge.splice(index, 1);
      saveFridge();
      renderAll();
    });

    chip.prepend(label);
    chip.appendChild(remove);
    chips.appendChild(chip);
  });
}

function addTyped() {
  const value = ingredientInput.value.trim();
  if (!value) return;
  // the datalist shows Hebrew and English names, map them (or anything typed) to a key
  const byLabel = INGREDIENTS.find(i => [i.label, i.he].some(n => n.toLowerCase() === value.toLowerCase()));
  const key = byLabel ? byLabel.key : textToKey(value);
  if (key) {
    addToFridge({ key, name: value, quantity: "", confidence: "high" });
    saveFridge();
    renderAll();
  }
  ingredientInput.value = "";
}

$(".addIngredientBtn").addEventListener("click", addTyped);
ingredientInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTyped();
});

$(".clearBtn").addEventListener("click", () => {
  if (fridge.length && !confirm("Clear all ingredients?")) return;
  fridge = [];
  saveFridge();
  renderAll();
});

const datalist = $("#ingredientOptions");
for (const ing of INGREDIENTS.filter(i => !i.staple)) {
  for (const name of [ing.he, ing.label]) {
    const opt = document.createElement("option");
    opt.value = name;
    datalist.appendChild(opt);
  }
}

// ---------- voice input ----------
const micBtn = $(".micBtn");
const voiceStatus = $(".voiceStatus");

function setVoiceStatus(text, type = "") {
  voiceStatus.textContent = text;
  voiceStatus.className = "voiceStatus" + (type ? " " + type : "");
}

if (!voiceSupported()) micBtn.hidden = true;

micBtn.addEventListener("click", async () => {
  micBtn.classList.add("listening");
  setVoiceStatus("🎤 מקשיב… אמור מה יש לך, למשל: ביצים, קוטג', עגבניות");
  try {
    const guesses = await listen();
    // use the recognizer's best guess that contains known ingredients
    let keys = [];
    let heard = guesses[0] || "";
    for (const g of guesses) {
      keys = spokenToKeys(g);
      if (keys.length) { heard = g; break; }
    }
    if (!keys.length) {
      setVoiceStatus(heard ? `שמעתי "${heard}" אבל לא זיהיתי מצרכים. נסה שוב.` : "לא שמעתי כלום. נסה שוב.", "warn");
      return;
    }
    const added = keys.filter(key => addToFridge({ key, name: "", quantity: "", confidence: "high" }));
    saveFridge();
    renderAll();
    setVoiceStatus(
      added.length
        ? "✓ הוספתי: " + added.map(k => keyLabelHe(k, { short: true })).join(", ")
        : "כל מה שאמרת כבר ברשימה.",
      "ok"
    );
  } catch (err) {
    console.error(err);
    setVoiceStatus(err instanceof VoiceError ? err.message : "Voice input didn't work. Try again.", "error");
  } finally {
    micBtn.classList.remove("listening");
  }
});

// ---------- quick pick ----------
const QUICK_CATEGORIES = Object.keys(HE_CATEGORIES).filter(c => c !== "spices");
let quickCategory = QUICK_CATEGORIES[0];

function renderQuickPick() {
  renderTabs($(".quickTabs"), QUICK_CATEGORIES.map(c => ({ key: c, label: HE_CATEGORIES[c] })), quickCategory, (c) => {
    quickCategory = c;
    renderQuickPick();
  });

  const grid = $(".quickGrid");
  grid.innerHTML = "";
  for (const ing of INGREDIENTS.filter(i => i.category === quickCategory && !i.staple)) {
    const on = fridge.some(f => f.key === ing.key);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quickItem" + (on ? " on" : "");
    btn.setAttribute("aria-pressed", on);

    const emoji = document.createElement("span");
    emoji.className = "quickEmoji";
    emoji.textContent = ing.emoji;
    const he = document.createElement("span");
    he.className = "quickHe";
    he.textContent = ing.he;
    const en = document.createElement("span");
    en.className = "quickEn";
    en.textContent = ing.label;
    btn.append(emoji, he, en);

    btn.addEventListener("click", () => {
      if (on) fridge = fridge.filter(f => f.key !== ing.key);
      else addToFridge({ key: ing.key, name: "", quantity: "", confidence: "high" });
      saveFridge();
      renderAll();
    });
    grid.appendChild(btn);
  }
}

// ---------- pantry ----------
function renderPantry() {
  const box = $(".pantryChips");
  box.innerHTML = "";
  for (const key of PANTRY_CHOICES) {
    const btn = document.createElement("button");
    btn.type = "button";
    const on = pantry.includes(key);
    btn.className = "pantryChip" + (on ? " on" : "");
    btn.textContent = `${on ? "✓" : "+"} ${keyEmoji(key)} ${keyLabelHe(key)}`;
    btn.title = keyLabel(key);
    btn.addEventListener("click", () => {
      pantry = on ? pantry.filter(k => k !== key) : [...pantry, key];
      savePantry();
      renderAll();
    });
    box.appendChild(btn);
  }
  $(".pantryCount").textContent = `(${pantry.length})`;
}

// ---------- results ----------
function renderTabs(container, options, active, onPick) {
  container.innerHTML = "";
  for (const opt of options) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filterTab" + (opt.key === active ? " active" : "");
    btn.textContent = opt.label;
    btn.addEventListener("click", () => onPick(opt.key));
    container.appendChild(btn);
  }
}

function matchInfo(match) {
  const box = document.createElement("div");
  box.className = "matchInfo";

  const have = document.createElement("p");
  have.className = "matchHave";
  have.textContent = `✓ You have ${match.have.length} of ${match.have.length + match.missing.length} ingredients`;
  box.appendChild(have);

  if (match.missing.length) {
    const missing = document.createElement("p");
    missing.className = "matchMissing";
    missing.textContent = "✗ Missing: " + match.missing.map(item => {
      const he = ingredientHe(item);
      return he ? `${item} (${he})` : item;
    }).join(", ");
    box.appendChild(missing);
  }
  return box;
}

function renderResults() {
  renderTabs($(".mealTabs"), MEAL_TYPES, mealFilter, (k) => { mealFilter = k; renderResults(); });
  renderTabs($(".kosherTabs"), KOSHER_TYPES, kosherFilter, (k) => { kosherFilter = k; renderResults(); });

  const results = $(".results");
  results.innerHTML = "";

  if (fridge.length === 0) {
    const p = document.createElement("p");
    p.className = "emptyMsg";
    p.textContent = "Scan your fridge (or add ingredients) to see recipes here.";
    results.appendChild(p);
    return;
  }

  const filtered = recipes.filter(r =>
    (mealFilter === "all" || getMealType(r) === mealFilter) &&
    (kosherFilter === "all" || getKosherType(r) === kosherFilter)
  );
  const haveKeys = [...new Set([...fridge.map(f => f.key), ...pantry])];
  const matches = findRecipes(filtered, haveKeys, { maxMissing: 2 });

  const groups = [
    { title: "✅ Ready to cook", hint: "You have everything", items: matches.filter(m => m.missing.length === 0) },
    { title: "🛒 Missing 1 ingredient", hint: "", items: matches.filter(m => m.missing.length === 1) },
    { title: "🛒 Missing 2 ingredients", hint: "", items: matches.filter(m => m.missing.length === 2) }
  ];

  if (matches.length === 0) {
    const p = document.createElement("p");
    p.className = "emptyMsg";
    p.textContent = "No matching recipes yet. Add a few more ingredients or pantry items.";
    results.appendChild(p);
    return;
  }

  for (const group of groups) {
    if (!group.items.length) continue;
    const head = document.createElement("h3");
    head.className = "groupTitle";
    head.textContent = `${group.title} (${group.items.length})`;
    results.appendChild(head);

    const list = document.createElement("div");
    list.className = "foodList";
    for (const match of group.items.slice(0, 30)) {
      list.appendChild(createRecipeCard(match.recipe, matchInfo(match)));
    }
    results.appendChild(list);
  }
}

function renderAll() {
  renderIngredients();
  renderQuickPick();
  renderPantry();
  renderResults();
}

refreshKeyStatus();
renderPhotos();
renderAll();
