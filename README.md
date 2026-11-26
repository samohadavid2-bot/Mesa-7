# Mesa

A kosher, fitness-focused meal tracker. Track calories and macros, browse 300+ kosher recipes, and photograph your fridge to see what you can cook right now.

## Pages

| Page | What it does |
|---|---|
| `index.html` (Home) | Today's calories / protein / carbs / fat against your daily targets, and what you've eaten |
| `searchPage.html` (Search) | Browse recipes, filtered by meal (breakfast / lunch / dinner / anytime) and kosher type (meat / dairy / parve), or by ingredient / name |
| `fridge.html` (Fridge) | Photograph your fridge, get the list of ingredients, and see which recipes you can make |
| `profile.html` | First-time questionnaire that sets your daily targets |

## Fridge scanner

1. Open **Fridge** and tap **⚙ AI settings**. Paste an Anthropic API key from [console.anthropic.com](https://console.anthropic.com/settings/keys). The key is saved only in your browser (`localStorage`) and sent only to Anthropic.
2. Take or upload up to 4 photos (fridge shelves, door, freezer).
3. Tap **Scan ingredients**. Claude (`claude-opus-5-5`) reads every shelf, including Hebrew labels, and returns each item mapped to Mesa's ingredient list.
4. Check the chips: remove mistakes (items it wasn't sure about are marked **?**) and add anything it missed.
5. Under **Pantry items I always have**, tick what's in your cupboard (salt, oil, spices, rice...), since a fridge photo can't see those.
6. Recipes are grouped into **Ready to cook**, **Missing 1 ingredient** and **Missing 2 ingredients**, and show exactly what's missing.

Without an API key you can still type ingredients in by hand and get the same recipe matching.

Each scan is a paid API call on your own Anthropic account.

## Code map

- `scripts/recipes.js`: the recipe list. New recipes have `mealType` and `kosher` fields.
- `scripts/recipeMeta.js`: meal type and kosher category (works out older recipes from their id range and ingredients).
- `scripts/ingredients.js`: ingredient dictionary (aliases, staples, parent/child like "cheese" → "feta") and recipe matching.
- `scripts/fridgeScan.js`: resizes photos and calls the Claude API from the browser (Anthropic TypeScript SDK loaded from jsDelivr).
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
