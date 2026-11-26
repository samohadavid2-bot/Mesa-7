# Mesa

A kosher, fitness-focused meal tracker. Track calories and macros, browse 300+ kosher recipes, and photograph your fridge to see what you can cook right now.

## Pages

| Page | What it does |
|---|---|
| `index.html` (Home) | Today's calories / protein / carbs / fat against your daily targets, and what you've eaten |
| `searchPage.html` (Search) | Browse recipes, filtered by meal (breakfast / lunch / dinner / anytime) and kosher type (meat / dairy / parve), or by ingredient / name |
| `fridge.html` (Fridge) | Photograph your fridge, get the list of ingredients, and see which recipes you can make |
| `profile.html` | First-time questionnaire that sets your daily targets |

## Adding what's in your fridge (free, no key needed)

- **Quick pick**: on the Fridge page, tap items by shelf (dairy, meat & fish, vegetables...). Every item has a Hebrew name and an emoji.
- **Voice**: tap 🎤 and say what you have in Hebrew, e.g. "ביצים, קוטג', עגבניות ומלפפונים". The Android app uses the phone's own speech recognizer (`@capacitor-community/speech-recognition`); in Chrome it uses the Web Speech API.
- **Typing**: Hebrew or English, with suggestions.

Hebrew names and words for every ingredient live in `scripts/ingredientsHe.js`. The Search page also understands Hebrew ("קוטג'" finds every cottage cheese recipe), and the recipe popup shows the Hebrew name next to each ingredient.

## Fridge scanner (optional AI photo scan)

1. Open **Fridge** and tap **⚙ AI settings**. Pick an AI engine and paste its key:
   - **Google Gemini (free, default)**: create a key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) with a Google account. No credit card. If billing isn't turned on for that Google project, Google can't charge you; when the free daily limit runs out, scanning stops until it resets.
   - **Claude (paid, most accurate)**: a key from [console.anthropic.com](https://console.anthropic.com/settings/keys), billed per scan from prepaid credits (a Claude subscription doesn't cover the API).

   Keys are saved only on the device (`localStorage`) and sent only to that AI service.
2. Take or upload up to 4 photos (fridge shelves, door, freezer).
3. Tap **Scan ingredients**. The AI reads every shelf, including Hebrew labels, and returns each item mapped to Mesa's ingredient list.
4. Check the chips: remove mistakes (items it wasn't sure about are marked **?**) and add anything it missed.
5. Under **Pantry items I always have**, tick what's in your cupboard (salt, oil, spices, rice...), since a fridge photo can't see those.
6. Recipes are grouped into **Ready to cook**, **Missing 1 ingredient** and **Missing 2 ingredients**, and show exactly what's missing.

Without any key you can still type ingredients in by hand and get the same recipe matching.

## Code map

- `scripts/recipes.js`: the recipe list. New recipes have `mealType` and `kosher` fields.
- `scripts/recipeMeta.js`: meal type and kosher category (works out older recipes from their id range and ingredients).
- `scripts/ingredients.js`: ingredient dictionary (aliases, staples, parent/child like "cheese" → "feta") and recipe matching.
- `scripts/fridgeScan.js`: resizes photos and calls Google Gemini (`@google/genai`) or Claude (`@anthropic-ai/sdk`) from the device; both SDKs load from jsDelivr.
- `scripts/fridgePage.js`: the Fridge page UI.
- `scripts/recipeCard.js`, `scripts/recipesPopup.js`, `scripts/tracker.js`: recipe card, recipe popup, and "add to today", shared by the pages.

Run it with any static server, e.g. `python3 -m http.server`, then open `http://localhost:8000`. ES modules don't load from `file://`.

## Android app (APK)

The app is wrapped with [Capacitor](https://capacitorjs.com/) (`android/` folder). To build a debug APK you need Node 22+, JDK 21 and the Android SDK (platform 36, build-tools 35):

```bash
npm install
npm run apk        # copies the site to www/, syncs it into android/, runs ./gradlew assembleDebug
```

The APK ends up at `android/app/build/outputs/apk/debug/app-debug.apk`. After changing any HTML/JS/CSS, run `npm run apk` again.
