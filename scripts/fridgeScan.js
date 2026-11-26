// Sends photos of the fridge to an AI model and gets back the exact list of ingredients.
//
// Two engines are supported:
//   - Google Gemini (default): free tier with a Google AI Studio key, no credit card.
//   - Claude (optional): paid per scan with an Anthropic API key, most accurate.
//
// Mesa is a static site / app with no server, so the call is made straight from
// the device with the user's own key, which is saved only in localStorage.

import { INGREDIENTS, INGREDIENT_BY_KEY, textToKey } from "./ingredients.js";

export const PROVIDERS = {
  gemini: {
    label: "Google Gemini (free)",
    storage: "mesaGeminiKey",
    keyHint: "AIza...",
    keyUrl: "https://aistudio.google.com/apikey",
    keySite: "aistudio.google.com",
    note: "Free: sign in with a Google account and create a key. No credit card needed. Without billing turned on, Google can't charge you; if the free daily limit runs out, scanning just pauses until tomorrow."
  },
  claude: {
    label: "Claude (paid, most accurate)",
    storage: "mesaAnthropicKey",
    keyHint: "sk-ant-...",
    keyUrl: "https://console.anthropic.com/settings/keys",
    keySite: "console.anthropic.com",
    note: "Paid per scan from prepaid Anthropic credits (not covered by a Claude subscription)."
  }
};

const PROVIDER_STORAGE = "mesaAiProvider";

export function getProvider() {
  const p = localStorage.getItem(PROVIDER_STORAGE);
  return PROVIDERS[p] ? p : "gemini";
}

export function setProvider(p) {
  if (PROVIDERS[p]) localStorage.setItem(PROVIDER_STORAGE, p);
}

export function getApiKey(provider = getProvider()) {
  return localStorage.getItem(PROVIDERS[provider].storage) || "";
}

export function setApiKey(key, provider = getProvider()) {
  const storage = PROVIDERS[provider].storage;
  if (key) localStorage.setItem(storage, key.trim());
  else localStorage.removeItem(storage);
}

// ---------------------------------------------------------------------------
// Image preparation: phone photos are huge, Claude doesn't need more than
// ~1568px on the long side. Re-encode as JPEG to keep the request small.

const MAX_SIDE = 1568;

export async function prepareImage(file) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
  const w = Math.round(bitmap.width * scale);
  const h = Math.round(bitmap.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  canvas.getContext("2d").drawImage(bitmap, 0, 0, w, h);
  bitmap.close?.();

  const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
  return { dataUrl, base64: dataUrl.split(",")[1], mediaType: "image/jpeg" };
}

// ---------------------------------------------------------------------------

function buildSystemPrompt() {
  const byCategory = {};
  for (const ing of INGREDIENTS) {
    (byCategory[ing.category] ||= []).push(`${ing.key} (${ing.label})`);
  }
  const vocabulary = Object.entries(byCategory)
    .map(([cat, items]) => `- ${cat}: ${items.join("; ")}`)
    .join("\n");

  return `You are the ingredient scanner of Mesa, a kosher recipe app used mostly in Israel.
The user sends one or more photos of their fridge (and maybe freezer or pantry shelves).
Your job is to list every food item that is actually visible, as precisely as possible, so the app can tell which recipes they can cook.

How to look:
- Go shelf by shelf, including the door, drawers and anything partly hidden behind other items.
- Read packaging labels, including Hebrew ones (e.g. קוטג' = cottage cheese, גבינה לבנה = white cheese, גבינה צהובה = yellow cheese, שמנת = cream, לבנה = labneh, חומוס = hummus, טחינה = tahini, יוגורט = yogurt, ביצים = eggs, חלב = milk, פסטרמה = sliced turkey/deli meat, חזה עוף = chicken breast).
- Only list what you can see or read. Do not guess items that are not visible. If you are unsure what something is, still list it with confidence "low".
- Ignore non-food objects and empty containers.
- List each kind of food once (e.g. "eggs" once even if there are two cartons).

For every item return:
- name: short English name of what you see, specific (e.g. "cherry tomatoes", "cottage cheese 5%", "chicken breast").
- key: the best matching key from the vocabulary below, copied exactly. Use "" if nothing in the list fits.
- quantity: rough amount you can see (e.g. "6 eggs", "1 tub", "half a bag", "a few").
- confidence: "high", "medium" or "low".

Vocabulary of ingredient keys (key (description)):
${vocabulary}`;
}

const OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          key: { type: "string" },
          quantity: { type: "string" },
          confidence: { type: "string", enum: ["high", "medium", "low"] }
        },
        required: ["name", "key", "quantity", "confidence"],
        additionalProperties: false
      }
    }
  },
  required: ["items"],
  additionalProperties: false
};

export class ScanError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

function userText(count) {
  return count > 1
    ? `These are ${count} photos of my fridge / kitchen. List every food item you can see across all of them.`
    : "This is a photo of my fridge. List every food item you can see.";
}

function normalizeItems(items) {
  return (items || [])
    .filter(item => item && item.name)
    .map(item => ({
      name: item.name,
      // trust the model's key if it's in our dictionary, otherwise map the name ourselves
      key: INGREDIENT_BY_KEY[item.key] ? item.key : textToKey(item.name),
      quantity: item.quantity || "",
      confidence: ["high", "medium", "low"].includes(item.confidence) ? item.confidence : "medium"
    }))
    .filter(item => item.key);
}

function parseItems(text) {
  try {
    return normalizeItems(JSON.parse(text).items);
  } catch {
    throw new ScanError("Couldn't read the AI's answer. Please try again.", "parse");
  }
}

/**
 * @param images array of { base64, mediaType } (from prepareImage)
 * @returns array of { name, key, quantity, confidence }
 */
export async function scanFridge(images) {
  const provider = getProvider();
  const apiKey = getApiKey(provider);
  if (!apiKey) throw new ScanError("Add your API key first (AI settings).", "no_key");
  if (!images.length) throw new ScanError("Add at least one photo.", "no_images");
  return provider === "claude" ? scanWithClaude(images, apiKey) : scanWithGemini(images, apiKey);
}

// ---------------------------------------------------------------------------
// Google Gemini (free tier)

const GEMINI_SDK_URL = "https://cdn.jsdelivr.net/npm/@google/genai@3.2.0/+esm";
// tried in order: if a model isn't available for this key (404) or its free
// quota is used up (429), the next one is tried
const GEMINI_MODELS = ["gemini-3.8-flash", "gemini-flash-latest"];

let geminiSdk = null;

function withoutAdditionalProperties(schema) {
  return JSON.parse(JSON.stringify(schema, (k, v) => (k === "additionalProperties" ? undefined : v)));
}

async function scanWithGemini(images, apiKey) {
  let GoogleGenAI, ApiError;
  try {
    geminiSdk ||= import(GEMINI_SDK_URL);
    ({ GoogleGenAI, ApiError } = await geminiSdk);
  } catch {
    geminiSdk = null;
    throw new ScanError("Couldn't load the AI library. Check your internet connection.", "offline");
  }

  const ai = new GoogleGenAI({ apiKey });
  const request = {
    contents: [{
      role: "user",
      parts: [
        ...images.map(img => ({ inlineData: { mimeType: img.mediaType, data: img.base64 } })),
        { text: userText(images.length) }
      ]
    }],
    config: {
      systemInstruction: buildSystemPrompt(),
      responseMimeType: "application/json",
      responseJsonSchema: withoutAdditionalProperties(OUTPUT_SCHEMA)
    }
  };

  let lastError = null;
  for (const model of GEMINI_MODELS) {
    let response;
    try {
      response = await ai.models.generateContent({ model, ...request });
    } catch (err) {
      lastError = err;
      const status = err instanceof ApiError ? err.status : 0;
      if (status === 404 || status === 429) continue;           // try the next model
      if (status === 400 && /api[_ ]?key/i.test(err.message || "")) {
        throw new ScanError("Your Google API key was rejected. Check it in AI settings.", "bad_key");
      }
      if (status === 401 || status === 403) {
        throw new ScanError("Your Google API key was rejected. Check it in AI settings.", "bad_key");
      }
      if (status >= 500) throw new ScanError("Google's AI service had a problem. Try again in a moment.", "server");
      if (status) throw new ScanError("The request was rejected: " + (err.message || status), "bad_request");
      throw new ScanError("Couldn't reach the AI service. Check your internet connection.", "offline");
    }

    if (response.promptFeedback?.blockReason) {
      throw new ScanError("The AI couldn't process these photos. Try different photos.", "refusal");
    }
    const finish = response.candidates?.[0]?.finishReason;
    if (finish === "MAX_TOKENS") throw new ScanError("The answer was cut off. Try fewer photos at a time.", "truncated");
    if (!response.text) throw new ScanError("The AI couldn't process these photos. Try different photos.", "refusal");
    return parseItems(response.text);
  }

  if (lastError instanceof ApiError && lastError.status === 429) {
    throw new ScanError("Today's free scans are used up. Try again later (the free limit resets daily).", "rate_limit");
  }
  throw new ScanError("Google's AI model isn't available for this key right now.", "server");
}

// ---------------------------------------------------------------------------
// Claude (paid)

const CLAUDE_SDK_URL = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@1.8.0/+esm";
const CLAUDE_MODEL = "claude-opus-5-5";

let claudeSdk = null;

async function scanWithClaude(images, apiKey) {
  let Anthropic;
  try {
    claudeSdk ||= import(CLAUDE_SDK_URL).then(m => m.default || m.Anthropic);
    Anthropic = await claudeSdk;
  } catch {
    claudeSdk = null;
    throw new ScanError("Couldn't load the AI library. Check your internet connection.", "offline");
  }

  const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });

  const content = [
    ...images.map(img => ({
      type: "image",
      source: { type: "base64", media_type: img.mediaType, data: img.base64 }
    })),
    { type: "text", text: userText(images.length) }
  ];

  let response;
  try {
    response = await client.beta.messages.create({
      model: CLAUDE_MODEL,
      max_tokens: 16000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      system: buildSystemPrompt(),
      output_config: {
        effort: "high",
        format: { type: "json_schema", schema: OUTPUT_SCHEMA }
      },
      messages: [{ role: "user", content }]
    });
  } catch (err) {
    if (err instanceof Anthropic.AuthenticationError) {
      throw new ScanError("Your API key was rejected. Check it in AI settings.", "bad_key");
    }
    if (err instanceof Anthropic.PermissionDeniedError) {
      throw new ScanError("This API key doesn't have access to the model.", "bad_key");
    }
    if (err instanceof Anthropic.RateLimitError) {
      throw new ScanError("Too many requests right now. Wait a minute and try again.", "rate_limit");
    }
    if (err instanceof Anthropic.BadRequestError) {
      throw new ScanError("The request was rejected: " + (err.message || "bad request"), "bad_request");
    }
    if (err instanceof Anthropic.APIConnectionError) {
      throw new ScanError("Couldn't reach the AI service. Check your internet connection.", "offline");
    }
    if (err instanceof Anthropic.APIError) {
      throw new ScanError("The AI service had a problem. Try again in a moment.", "server");
    }
    throw err;
  }

  if (response.stop_reason === "refusal") {
    throw new ScanError("The AI couldn't process these photos. Try different photos.", "refusal");
  }
  if (response.stop_reason === "max_tokens") {
    throw new ScanError("The answer was cut off. Try fewer photos at a time.", "truncated");
  }

  return parseItems(response.content.filter(b => b.type === "text").map(b => b.text).join(""));
}
