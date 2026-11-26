// Sends photos of the fridge to Claude and gets back the exact list of ingredients.
//
// Mesa is a static site (no server), so the call is made straight from the
// browser with the user's own Anthropic API key, which is saved only in this
// browser's localStorage.

import { INGREDIENTS, INGREDIENT_BY_KEY, textToKey } from "./ingredients.js";

const SDK_URL = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@1.8.0/+esm";
const MODEL = "claude-opus-5-5";
const KEY_STORAGE = "mesaAnthropicKey";

export function getApiKey() {
  return localStorage.getItem(KEY_STORAGE) || "";
}

export function setApiKey(key) {
  if (key) localStorage.setItem(KEY_STORAGE, key.trim());
  else localStorage.removeItem(KEY_STORAGE);
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

let sdkPromise = null;
function loadSdk() {
  sdkPromise ||= import(SDK_URL).then(m => m.default || m.Anthropic);
  return sdkPromise;
}

/**
 * @param images array of { base64, mediaType } (from prepareImage)
 * @returns array of { name, key, quantity, confidence }
 */
export async function scanFridge(images) {
  const apiKey = getApiKey();
  if (!apiKey) throw new ScanError("Add your Anthropic API key first.", "no_key");
  if (!images.length) throw new ScanError("Add at least one photo.", "no_images");

  let Anthropic;
  try {
    Anthropic = await loadSdk();
  } catch {
    sdkPromise = null;
    throw new ScanError("Couldn't load the AI library. Check your internet connection.", "offline");
  }

  const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });

  const content = [
    ...images.map(img => ({
      type: "image",
      source: { type: "base64", media_type: img.mediaType, data: img.base64 }
    })),
    {
      type: "text",
      text: images.length > 1
        ? `These are ${images.length} photos of my fridge / kitchen. List every food item you can see across all of them.`
        : "This is a photo of my fridge. List every food item you can see."
    }
  ];

  let response;
  try {
    response = await client.beta.messages.create({
      model: MODEL,
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

  const text = response.content.filter(b => b.type === "text").map(b => b.text).join("");
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new ScanError("Couldn't read the AI's answer. Please try again.", "parse");
  }

  return (parsed.items || [])
    .filter(item => item && item.name)
    .map(item => ({
      name: item.name,
      // trust Claude's key if it's in our dictionary, otherwise map the name ourselves
      key: INGREDIENT_BY_KEY[item.key] ? item.key : textToKey(item.name),
      quantity: item.quantity || "",
      confidence: item.confidence || "medium"
    }))
    .filter(item => item.key);
}
