// Free speech-to-text in Hebrew.
// - In the Android app: the phone's own speech recognizer, through the
//   @capacitor-community/speech-recognition plugin.
// - In a browser (Chrome): the Web Speech API.

const LANGUAGE = "he-IL";

export class VoiceError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

function nativeBridge() {
  const cap = window.Capacitor;
  if (cap && typeof cap.nativePromise === "function" && cap.getPlatform?.() !== "web") return cap;
  return null;
}

function webRecognitionClass() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

export function voiceSupported() {
  return !!(nativeBridge() || webRecognitionClass());
}

async function listenNative(cap) {
  const call = (method, options = {}) => cap.nativePromise("SpeechRecognition", method, options);

  const { available } = await call("available").catch(() => ({ available: false }));
  if (!available) throw new VoiceError("Speech recognition isn't available on this phone.", "unavailable");

  let perm = await call("checkPermissions").catch(() => ({}));
  if (perm.speechRecognition !== "granted") {
    perm = await call("requestPermissions").catch(() => ({}));
  }
  if (perm.speechRecognition !== "granted") {
    throw new VoiceError("Allow microphone access to use voice input.", "permission");
  }

  try {
    const result = await call("start", {
      language: LANGUAGE,
      maxResults: 5,
      prompt: "אמור מה יש לך במקרר",
      partialResults: false,
      popup: true
    });
    return result?.matches || [];
  } catch (err) {
    // the recognizer reports "no match" / cancel as an error
    return [];
  }
}

function listenWeb(Recognition) {
  return new Promise((resolve, reject) => {
    const rec = new Recognition();
    rec.lang = LANGUAGE;
    rec.interimResults = false;
    rec.maxAlternatives = 5;
    let done = false;

    rec.onresult = (event) => {
      done = true;
      const alts = [...event.results[0]].map(a => a.transcript);
      resolve(alts);
    };
    rec.onerror = (event) => {
      done = true;
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        reject(new VoiceError("Allow microphone access to use voice input.", "permission"));
      } else if (event.error === "no-speech" || event.error === "aborted") {
        resolve([]);
      } else {
        reject(new VoiceError("Voice input didn't work. Try again.", event.error));
      }
    };
    rec.onend = () => { if (!done) resolve([]); };
    rec.start();
  });
}

/** Listens once and returns the recognizer's guesses (best first). */
export async function listen() {
  const cap = nativeBridge();
  if (cap) return listenNative(cap);
  const Recognition = webRecognitionClass();
  if (Recognition) return listenWeb(Recognition);
  throw new VoiceError("Voice input isn't supported here. Use the Mesa app or Chrome.", "unsupported");
}
