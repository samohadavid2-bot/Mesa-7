// Ingredient dictionary + matching logic.
//
// Every recipe ingredient (e.g. "Cherry tomatoes, halved") is mapped to a
// canonical ingredient key (e.g. "tomato"). The fridge scanner asks Claude to
// answer with the same keys, so what's in the photo can be compared exactly
// with what each recipe needs.

// [key, label, category, aliases, options]
// - aliases are matched as whole words (plural/singular doesn't matter)
// - the longest alias wins ("almond milk" beats "milk")
// - parent: having this item also satisfies a recipe that asks for the parent
//   (a recipe that needs "cheese" is happy with feta)
// - staple: assumed to be in the pantry by default (user can change it)
const RAW = [
  // ---------- eggs & dairy ----------
  ["egg", "Eggs", "dairy & eggs", ["egg", "eggs", "egg white", "large egg", "hard boiled egg", "hard-boiled egg", "scrambled egg"]],
  ["milk", "Milk", "dairy & eggs", ["milk", "low fat milk", "skim milk"]],
  ["yogurt", "Yogurt / Greek yogurt", "dairy & eggs", ["yogurt", "yoghurt", "greek yogurt", "plain yogurt", "plain greek yogurt", "skyr"]],
  ["labneh", "Labneh", "dairy & eggs", ["labneh", "labane"]],
  ["cottage cheese", "Cottage cheese", "dairy & eggs", ["cottage cheese", "cottage"], { parent: "cheese" }],
  ["white cheese", "White cheese (gvina levana)", "dairy & eggs", ["white cheese", "quark", "gvina levana", "soft white cheese"], { parent: "cheese" }],
  ["cream cheese", "Cream cheese", "dairy & eggs", ["cream cheese", "light cream cheese"], { parent: "cheese" }],
  ["feta", "Feta / Bulgarian cheese", "dairy & eggs", ["feta", "feta cheese", "bulgarian cheese", "safed cheese", "goat cheese"], { parent: "cheese" }],
  ["yellow cheese", "Yellow cheese", "dairy & eggs", ["yellow cheese", "kashkaval", "kashkaval cheese", "cheddar", "cheddar cheese", "cheddar cheese slice", "emek cheese", "gouda", "shredded cheese", "cheese slice"], { parent: "cheese" }],
  ["mozzarella", "Mozzarella", "dairy & eggs", ["mozzarella", "fresh mozzarella"], { parent: "cheese" }],
  ["parmesan", "Parmesan", "dairy & eggs", ["parmesan", "parmesan cheese", "parmigiano"], { parent: "cheese" }],
  ["halloumi", "Halloumi", "dairy & eggs", ["halloumi", "halloumi cheese"], { parent: "cheese" }],
  ["paneer", "Paneer", "dairy & eggs", ["paneer"], { parent: "cheese" }],
  ["ricotta", "Ricotta", "dairy & eggs", ["ricotta"], { parent: "cheese" }],
  ["cheese", "Cheese (any)", "dairy & eggs", ["cheese"]],
  ["butter", "Butter", "dairy & eggs", ["butter"]],
  ["cream", "Cream (cooking / sweet)", "dairy & eggs", ["cream", "cooking cream", "light cooking cream", "sweet cream", "sour cream", "heavy cream"]],
  ["protein powder", "Protein powder", "pantry", ["protein powder", "whey", "whey protein"]],

  // ---------- meat, fish & protein ----------
  ["chicken", "Chicken (breast / thighs / pieces)", "meat & fish", ["chicken", "chicken breast", "chicken thigh", "chicken piece", "chicken cutlet", "chicken breast cutlet", "grilled chicken", "chicken schnitzel", "chicken drumstick", "drumstick", "pargit", "chicken wing"]],
  ["ground chicken", "Ground chicken", "meat & fish", ["ground chicken", "minced chicken"]],
  ["chicken hearts", "Chicken hearts / livers", "meat & fish", ["chicken heart", "chicken liver"]],
  ["turkey", "Turkey breast", "meat & fish", ["turkey", "turkey breast", "turkey breast cutlet", "turkey cutlet", "turkey steak"]],
  ["sliced turkey", "Sliced turkey / deli meat", "meat & fish", ["sliced turkey", "sliced turkey breast", "turkey breast slice", "smoked turkey", "deli turkey", "pastrami", "salami"]],
  ["ground turkey", "Ground turkey", "meat & fish", ["ground turkey", "minced turkey"]],
  ["ground beef", "Ground beef", "meat & fish", ["ground beef", "lean ground beef", "minced beef", "ground meat", "minced meat"]],
  ["beef", "Beef (steak / stew meat)", "meat & fish", ["beef", "steak", "sirloin", "sirloin steak", "beef sirloin", "beef chuck", "entrecote", "stew beef", "roast beef"]],
  ["beef sausage", "Sausages / hot dogs", "meat & fish", ["sausage", "beef sausage", "hot dog", "kabanos", "merguez"]],
  ["ground lamb", "Ground lamb", "meat & fish", ["ground lamb", "lamb"]],
  ["salmon", "Salmon", "meat & fish", ["salmon", "salmon fillet"]],
  ["smoked salmon", "Smoked salmon", "meat & fish", ["smoked salmon", "lox"]],
  ["white fish", "White fish (cod / tilapia / sea bass)", "meat & fish", ["white fish", "white fish fillet", "fish fillet", "cod", "cod fillet", "tilapia", "tilapia fillet", "sea bass", "sea bass fillet", "denis", "musar", "hake", "nile perch", "fish"]],
  ["trout", "Trout", "meat & fish", ["trout", "trout fillet"]],
  ["tuna steak", "Fresh tuna steak", "meat & fish", ["tuna steak", "ahi tuna"]],
  ["canned tuna", "Canned tuna", "pantry", ["tuna", "canned tuna", "tuna in water", "canned tuna in water", "tuna can"]],
  ["sardines", "Sardines (canned)", "pantry", ["sardine", "canned sardine"]],
  ["tofu", "Tofu", "meat & fish", ["tofu", "firm tofu"]],
  ["falafel", "Falafel", "meat & fish", ["falafel", "falafel ball"]],
  ["hummus", "Hummus", "dairy & eggs", ["hummus"]],

  // ---------- vegetables ----------
  ["tomato", "Tomatoes", "vegetables", ["tomato", "cherry tomato", "plum tomato"]],
  ["cucumber", "Cucumbers", "vegetables", ["cucumber"]],
  ["onion", "Onions", "vegetables", ["onion", "red onion", "white onion", "yellow onion"]],
  ["green onion", "Green onions", "vegetables", ["green onion", "scallion", "spring onion"]],
  ["garlic", "Garlic", "vegetables", ["garlic", "garlic clove"]],
  ["bell pepper", "Bell peppers", "vegetables", ["bell pepper", "red bell pepper", "green bell pepper", "yellow bell pepper", "pepper", "red pepper", "green pepper"]],
  ["hot pepper", "Hot peppers", "vegetables", ["hot pepper", "chili pepper", "jalapeno", "green chili"]],
  ["carrot", "Carrots", "vegetables", ["carrot"]],
  ["potato", "Potatoes", "vegetables", ["potato", "baby potato"]],
  ["sweet potato", "Sweet potatoes", "vegetables", ["sweet potato"]],
  ["zucchini", "Zucchini", "vegetables", ["zucchini", "courgette"]],
  ["eggplant", "Eggplant", "vegetables", ["eggplant", "aubergine"]],
  ["broccoli", "Broccoli", "vegetables", ["broccoli", "broccoli floret"]],
  ["cauliflower", "Cauliflower", "vegetables", ["cauliflower", "cauliflower floret"]],
  ["spinach", "Spinach", "vegetables", ["spinach", "baby spinach", "spinach leaf"]],
  ["kale", "Kale", "vegetables", ["kale"]],
  ["lettuce", "Lettuce / salad greens", "vegetables", ["lettuce", "romaine", "romaine lettuce", "mixed greens", "mixed lettuce", "arugula", "rocket", "salad greens", "lettuce leaf", "romaine lettuce leaf"]],
  ["cabbage", "Cabbage", "vegetables", ["cabbage", "red cabbage", "white cabbage"]],
  ["mushroom", "Mushrooms", "vegetables", ["mushroom", "portobello", "portobello mushroom", "champignon"]],
  ["celery", "Celery", "vegetables", ["celery", "celery stalk"]],
  ["beet", "Beets", "vegetables", ["beet", "beetroot"]],
  ["corn", "Corn", "vegetables", ["corn", "corn kernel", "sweet corn"]],
  ["peas", "Peas", "vegetables", ["pea", "green pea", "snap pea"]],
  ["green beans", "Green beans", "vegetables", ["green bean", "string bean"]],
  ["asparagus", "Asparagus", "vegetables", ["asparagus", "asparagus spear"]],
  ["edamame", "Edamame", "vegetables", ["edamame"]],
  ["avocado", "Avocado", "vegetables", ["avocado"]],
  ["mixed vegetables", "Frozen mixed vegetables", "vegetables", ["mixed vegetable", "frozen mixed vegetable", "frozen vegetable", "frozen pea and carrot", "pea and carrot"]],
  ["parsnip", "Parsnips", "vegetables", ["parsnip"]],
  ["ginger", "Fresh ginger", "vegetables", ["ginger", "fresh ginger"]],
  ["olives", "Olives", "pantry", ["olive", "kalamata olive", "green olive", "black olive"]],
  ["pickles", "Pickles", "pantry", ["pickle", "dill pickle", "pickled cucumber", "pickled turnip", "pickled cabbage"]],
  ["sun-dried tomatoes", "Sun-dried tomatoes", "pantry", ["sun dried tomato", "sun-dried tomato"]],
  ["israeli salad", "Israeli salad (ready)", "vegetables", ["israeli salad"]],
  ["coleslaw", "Coleslaw", "vegetables", ["coleslaw"]],

  // ---------- fresh herbs ----------
  ["parsley", "Parsley", "herbs", ["parsley", "fresh parsley"], { parent: "herbs" }],
  ["cilantro", "Cilantro (coriander leaves)", "herbs", ["cilantro", "fresh cilantro", "coriander leaf", "fresh coriander"], { parent: "herbs" }],
  ["dill", "Dill", "herbs", ["dill", "fresh dill"], { parent: "herbs" }],
  ["basil", "Basil", "herbs", ["basil", "fresh basil", "basil leaf", "fresh basil leaf"], { parent: "herbs" }],
  ["mint", "Mint", "herbs", ["mint", "mint leaf", "fresh mint"], { parent: "herbs" }],
  ["thyme", "Fresh thyme", "herbs", ["fresh thyme"], { parent: "herbs" }],
  ["rosemary", "Rosemary", "herbs", ["rosemary", "fresh rosemary"], { parent: "herbs" }],
  ["herbs", "Fresh herbs (any)", "herbs", ["herb", "fresh herb"]],

  // ---------- fruit ----------
  ["lemon", "Lemons", "fruit", ["lemon", "lemon juice", "lemon zest", "lemon wedge"]],
  ["lime", "Limes", "fruit", ["lime", "lime juice"]],
  ["banana", "Bananas", "fruit", ["banana"]],
  ["apple", "Apples", "fruit", ["apple"]],
  ["strawberries", "Strawberries", "fruit", ["strawberry"], { parent: "berries" }],
  ["blueberries", "Blueberries", "fruit", ["blueberry"], { parent: "berries" }],
  ["berries", "Berries (fresh or frozen)", "fruit", ["berry", "mixed berry", "frozen berry", "fresh berry", "frozen mixed berry", "raspberry"]],
  ["mango", "Mango", "fruit", ["mango"]],
  ["kiwi", "Kiwi", "fruit", ["kiwi"]],
  ["orange", "Oranges", "fruit", ["orange", "clementine"]],
  ["dates", "Dates", "fruit", ["date", "medjool date"]],
  ["dried apricots", "Dried apricots", "pantry", ["dried apricot"]],

  // ---------- bread & grains ----------
  ["bread", "Bread / toast", "bread & grains", ["bread", "whole wheat bread", "whole grain bread", "toast", "whole wheat toast", "bread slice", "sourdough", "challah", "english muffin", "baguette", "roll", "whole wheat roll", "bun"]],
  ["pita", "Pita / laffa", "bread & grains", ["pita", "pita bread", "whole wheat pita", "laffa"]],
  ["tortilla", "Tortillas / wraps", "bread & grains", ["tortilla", "whole wheat tortilla", "large tortilla", "corn tortilla", "wrap"]],
  ["bagel", "Bagels", "bread & grains", ["bagel", "whole wheat bagel"]],
  ["rice", "Rice", "bread & grains", ["rice", "white rice", "brown rice", "basmati rice", "cooked rice", "arborio rice", "jasmine rice", "cooked white rice", "cooked brown rice"]],
  ["pasta", "Pasta / noodles", "bread & grains", ["pasta", "spaghetti", "penne", "whole wheat pasta", "whole wheat penne pasta", "whole wheat spaghetti", "noodle", "whole wheat noodle", "dry pasta", "rice noodle"]],
  ["couscous", "Couscous / ptitim", "bread & grains", ["couscous", "israeli couscous", "pearl couscous", "ptitim", "whole wheat couscous"]],
  ["quinoa", "Quinoa", "bread & grains", ["quinoa", "cooked quinoa", "uncooked quinoa"]],
  ["bulgur", "Bulgur", "bread & grains", ["bulgur", "bulgur wheat"]],
  ["barley", "Barley", "bread & grains", ["barley", "pearl barley"]],
  ["farro", "Farro", "bread & grains", ["farro"]],
  ["polenta", "Polenta", "bread & grains", ["polenta"]],
  ["oats", "Oats", "bread & grains", ["oat", "rolled oat", "oatmeal", "oat flour", "quick oat"]],
  ["granola", "Granola", "bread & grains", ["granola"]],
  ["cereal", "Cereal", "bread & grains", ["cereal", "whole grain cereal", "cornflakes"]],
  ["crackers", "Crackers / rice cakes", "bread & grains", ["cracker", "whole grain cracker", "whole wheat cracker", "rice cake"]],
  ["breadcrumbs", "Breadcrumbs / panko", "pantry", ["breadcrumb", "panko", "panko breadcrumb", "whole wheat breadcrumb", "whole wheat panko", "matzo meal", "crouton", "whole grain crouton"]],
  ["malawach", "Malawach / jachnun (frozen)", "bread & grains", ["malawach", "jachnun", "jachnun dough", "semolina dough"]],

  // ---------- legumes ----------
  ["chickpeas", "Chickpeas", "pantry", ["chickpea", "canned chickpea", "garbanzo"]],
  ["lentils", "Lentils", "pantry", ["lentil", "red lentil", "brown lentil", "green lentil"]],
  ["black beans", "Black beans", "pantry", ["black bean"]],
  ["white beans", "White beans", "pantry", ["white bean", "cannellini"]],
  ["kidney beans", "Kidney beans", "pantry", ["kidney bean", "red bean"]],
  ["fava beans", "Fava beans (ful)", "pantry", ["fava bean", "ful", "foul"]],

  // ---------- nuts & seeds ----------
  ["peanut butter", "Peanut butter", "pantry", ["peanut butter"]],
  ["almonds", "Almonds", "pantry", ["almond"]],
  ["walnuts", "Walnuts", "pantry", ["walnut"]],
  ["cashews", "Cashews", "pantry", ["cashew"]],
  ["pine nuts", "Pine nuts", "pantry", ["pine nut"]],
  ["chia seeds", "Chia seeds", "pantry", ["chia", "chia seed"]],
  ["sesame seeds", "Sesame seeds", "pantry", ["sesame seed"]],
  ["sunflower seeds", "Sunflower seeds", "pantry", ["sunflower seed"]],

  // ---------- plant milks ----------
  ["almond milk", "Almond milk", "dairy & eggs", ["almond milk"]],
  ["soy milk", "Soy milk", "dairy & eggs", ["soy milk"]],
  ["oat milk", "Oat milk", "dairy & eggs", ["oat milk"]],
  ["coconut milk", "Coconut milk", "pantry", ["coconut milk", "light coconut milk"]],

  // ---------- sauces & condiments ----------
  ["tahini", "Tahini", "sauces", ["tahini", "tahini sauce", "raw tahini"]],
  ["mayonnaise", "Mayonnaise", "sauces", ["mayonnaise", "mayo", "light mayonnaise"]],
  ["mustard", "Mustard", "sauces", ["mustard", "dijon mustard", "dijon"]],
  ["ketchup", "Ketchup", "sauces", ["ketchup"]],
  ["soy sauce", "Soy sauce", "sauces", ["soy sauce", "coconut amino", "teriyaki", "teriyaki sauce"]],
  ["tomato sauce", "Tomato sauce / crushed tomatoes", "sauces", ["tomato sauce", "marinara", "marinara sauce", "crushed tomato", "canned crushed tomato", "tomato paste", "passata", "canned tomato"]],
  ["salsa", "Salsa", "sauces", ["salsa"]],
  ["pesto", "Pesto", "sauces", ["pesto", "basil pesto", "dairy free basil pesto"]],
  ["hot sauce", "Hot sauce / schug / harissa", "sauces", ["hot sauce", "schug", "harissa", "harissa paste", "sriracha"]],
  ["amba", "Amba", "sauces", ["amba", "amba sauce"]],
  ["bbq sauce", "BBQ sauce", "sauces", ["bbq sauce", "barbecue sauce"]],
  ["salad dressing", "Salad dressing", "sauces", ["caesar dressing", "parve caesar dressing", "ranch dressing", "salad dressing"]],
  ["honey", "Honey", "pantry", ["honey"]],
  ["silan", "Silan (date syrup)", "pantry", ["silan", "date syrup"]],
  ["maple syrup", "Maple syrup", "pantry", ["maple syrup"]],
  ["jam", "Jam", "pantry", ["jam", "jelly"]],
  ["miso", "Miso paste", "sauces", ["miso", "miso paste"]],
  ["capers", "Capers", "pantry", ["caper"]],
  ["vegetable broth", "Vegetable broth / soup powder", "pantry", ["vegetable broth", "broth", "stock", "soup powder"]],
  ["wine", "Kosher wine", "pantry", ["wine", "white wine", "red wine"]],
  ["water chestnuts", "Water chestnuts", "pantry", ["water chestnut"]],
  ["nutritional yeast", "Nutritional yeast", "pantry", ["nutritional yeast"]],
  ["cocoa", "Cocoa powder", "pantry", ["cocoa", "cocoa powder", "cacao nib", "cacao"]],

  // ---------- pantry staples (assumed available by default) ----------
  ["salt", "Salt", "spices", ["salt", "sea salt", "salt and pepper", "salt & pepper"], { staple: true }],
  ["black pepper", "Black pepper", "spices", ["black pepper", "ground pepper"], { staple: true }],
  ["olive oil", "Olive oil", "spices", ["olive oil", "extra virgin olive oil", "olive oil spray"], { staple: true }],
  ["oil", "Cooking oil / spray", "spices", ["oil", "vegetable oil", "canola oil", "cooking spray", "oil for cooking", "coconut oil", "sesame oil", "oil spray"], { staple: true }],
  ["water", "Water / ice", "spices", ["water", "ice", "ice cube"], { staple: true }],
  ["sugar", "Sugar", "spices", ["sugar", "brown sugar"], { staple: true }],
  ["flour", "Flour", "spices", ["flour", "white flour", "whole wheat flour"], { staple: true }],
  ["baking powder", "Baking powder / soda", "spices", ["baking powder", "baking soda"], { staple: true }],
  ["vinegar", "Vinegar", "spices", ["vinegar", "balsamic vinegar", "white vinegar", "rice vinegar", "red wine vinegar", "apple cider vinegar"], { staple: true }],
  ["vanilla", "Vanilla extract", "spices", ["vanilla", "vanilla extract", "vanilla sugar"], { staple: true }],
  ["kitchen", "Skewers / foil / baking paper", "spices", ["skewer", "wooden skewer", "toothpick", "foil", "aluminum foil", "baking paper"], { staple: true }],
  ["spices", "Dry spices (cumin, paprika, etc.)", "spices", [
    "cumin", "paprika", "sweet paprika", "smoked paprika", "turmeric", "cinnamon", "curry powder", "curry", "garlic powder", "onion powder",
    "oregano", "dried oregano", "dried thyme", "thyme", "italian seasoning", "za'atar", "zaatar", "za'atar spice", "baharat", "baharat spice",
    "ras el hanout", "sumac", "coriander", "ground coriander", "bay leaf", "chili flake", "red pepper flake", "chili powder", "cayenne",
    "everything bagel seasoning", "shawarma spice", "shawarma spice mix", "tikka spice", "nutmeg", "cardamom", "wasabi", "wasabi paste", "seasoning", "spice"
  ], { staple: true }]
];

// ----------------------------------------------------------------------------

const DESCRIPTORS = new Set([
  "fresh", "chopped", "diced", "sliced", "minced", "grated", "cooked", "uncooked", "large", "small", "medium",
  "ripe", "canned", "halved", "quartered", "cubed", "shredded", "thinly", "finely", "roughly", "boneless", "skinless",
  "lean", "low", "fat", "light", "plain", "raw", "dry", "dried", "frozen", "whole", "baked", "roasted", "mashed",
  "peeled", "crushed", "ground", "store", "bought", "optional", "kosher", "dairy", "parve", "free", "to", "taste",
  "a", "of", "for", "the", "in", "with", "and", "or", "into", "piece", "pieces", "strip", "strips", "chunk", "chunks",
  "julienned", "spiralized", "riced", "stalk", "stalks", "leaves", "leaf", "slice", "slices", "fillet", "fillets"
]);

function singular(w) {
  if (w.length <= 3) return w;
  if (/(ss|us|is)$/.test(w)) return w;          // hummus, couscous, asparagus
  if (w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.endsWith("aves")) return w.slice(0, -3) + "f";   // leaves -> leaf
  if (w.endsWith("oes")) return w.slice(0, -2);
  if (/(ches|shes|xes)$/.test(w)) return w.slice(0, -2);
  if (w.endsWith("s")) return w.slice(0, -1);
  return w;
}

export function toWords(text) {
  return String(text)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9'\s-]/g, " ")
    .replace(/-/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map(singular);
}

export const INGREDIENTS = RAW.map(([key, label, category, aliases, opts = {}]) => ({
  key, label, category, aliases, parent: opts.parent || null, staple: !!opts.staple
}));

export const INGREDIENT_BY_KEY = Object.fromEntries(INGREDIENTS.map(i => [i.key, i]));

// all aliases, longest first
const ALIASES = INGREDIENTS
  .flatMap(ing => [ing.key, ...ing.aliases].map(a => ({ words: toWords(a), key: ing.key })))
  .sort((a, b) => b.words.length - a.words.length || b.words.join(" ").length - a.words.join(" ").length);

function findAlias(words, used) {
  for (const alias of ALIASES) {
    const n = alias.words.length;
    for (let i = 0; i + n <= words.length; i++) {
      let ok = true;
      for (let j = 0; j < n; j++) {
        if (used[i + j] || words[i + j] !== alias.words[j]) { ok = false; break; }
      }
      if (ok) return { key: alias.key, start: i, end: i + n };
    }
  }
  return null;
}

function unknownKey(words) {
  const core = words.filter(w => !DESCRIPTORS.has(w) && !/^\d/.test(w));
  return core.length ? "x:" + core.join(" ") : null;
}

/** Map free text ("Cherry tomatoes, halved") to canonical keys (["tomato"]). */
export function textToKeys(text) {
  const words = toWords(text);
  const used = new Array(words.length).fill(false);
  const keys = [];
  let hit;
  while ((hit = findAlias(words, used))) {
    for (let i = hit.start; i < hit.end; i++) used[i] = true;
    if (!keys.includes(hit.key)) keys.push(hit.key);
  }
  if (keys.length) return keys;
  const unk = unknownKey(words);
  return unk ? [unk] : [];
}

/** Single best key for something the user typed or Claude detected. */
export function textToKey(text) {
  return textToKeys(text)[0] || null;
}

export function keyLabel(key) {
  if (INGREDIENT_BY_KEY[key]) return INGREDIENT_BY_KEY[key].label;
  return key.startsWith("x:") ? key.slice(2).replace(/^\w/, c => c.toUpperCase()) : key;
}

/**
 * What a single recipe ingredient line needs.
 * Returns { optional, options: [[key, key], [key]] } - any one option satisfies it.
 */
export function parseRecipeIngredient(ing) {
  const raw = `${ing.item}`;
  const optional = /optional/i.test(raw) || /optional/i.test(ing.amount || "");
  const main = raw.replace(/\(.*?\)/g, " ").split(",")[0];
  const options = main.split(/\bor\b/i).map(part => textToKeys(part)).filter(k => k.length);
  return { optional, options, text: ing.item };
}

// ---------------------------------------------------------------------------
// Pantry (things a photo of the fridge can't see)

export const PANTRY_CHOICES = [
  ...INGREDIENTS.filter(i => i.staple).map(i => i.key),
  "honey", "soy sauce", "tahini", "rice", "pasta", "couscous", "oats", "lentils", "chickpeas", "canned tuna",
  "breadcrumbs", "peanut butter", "tomato sauce", "vegetable broth", "garlic", "onion", "potato", "bread"
];

export const DEFAULT_PANTRY = INGREDIENTS.filter(i => i.staple).map(i => i.key);

// ---------------------------------------------------------------------------
// Matching

function buildHave(keys) {
  const have = new Set();
  for (const k of keys) {
    have.add(k);
    const parent = INGREDIENT_BY_KEY[k]?.parent;
    if (parent) have.add(parent);
  }
  return have;
}

function keySatisfied(key, have, haveText) {
  if (have.has(key)) return true;
  if (key.startsWith("x:")) {
    const words = key.slice(2).split(" ");
    return haveText.some(t => words.every(w => t.includes(w)));
  }
  return false;
}

/**
 * Compare a recipe with what the user has.
 * @param recipe   a recipe object
 * @param haveKeys array of canonical keys the user has (fridge + pantry)
 */
export function matchRecipe(recipe, haveKeys, haveSet = buildHave(haveKeys)) {
  const haveText = haveKeys.filter(k => k.startsWith("x:")).map(k => " " + k.slice(2) + " ");
  const have = [];
  const missing = [];
  let fromFridge = 0;

  for (const ing of recipe.ingredients) {
    const need = parseRecipeIngredient(ing);
    if (!need.options.length) continue;
    const ok = need.options.some(opt => opt.every(k => keySatisfied(k, haveSet, haveText)));
    if (ok) {
      have.push(ing.item);
      const isStapleOnly = need.options.every(opt => opt.every(k => INGREDIENT_BY_KEY[k]?.staple));
      if (!isStapleOnly) fromFridge++;
    } else if (!need.optional) {
      missing.push(ing.item);
    }
  }
  const total = have.length + missing.length;
  return { recipe, have, missing, fromFridge, score: total ? have.length / total : 0 };
}

/** Rank all recipes by how cookable they are with what the user has. */
export function findRecipes(recipes, haveKeys, { maxMissing = 2 } = {}) {
  const haveSet = buildHave(haveKeys);
  return recipes
    .map(r => matchRecipe(r, haveKeys, haveSet))
    .filter(m => m.fromFridge > 0 && m.missing.length <= maxMissing)
    .sort((a, b) => a.missing.length - b.missing.length || b.fromFridge - a.fromFridge || b.score - a.score);
}
