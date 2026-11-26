// Helpers that describe a recipe: meal type (breakfast / lunch / dinner / anytime)
// and kosher category (meat / dairy / parve).
//
// New recipes carry explicit `mealType` and `kosher` fields.
// Older recipes don't, so we derive them (meal type from the id ranges the app
// always used, kosher category from the ingredients).

export const MEAL_TYPES = [
  { key: "all", label: "All" },
  { key: "breakfast", label: "Breakfast" },
  { key: "lunch", label: "Lunch" },
  { key: "dinner", label: "Dinner" },
  { key: "anytime", label: "Anytime" }
];

export const KOSHER_TYPES = [
  { key: "all", label: "All" },
  { key: "meat", label: "Meat" },
  { key: "dairy", label: "Dairy" },
  { key: "parve", label: "Parve" }
];

export function getMealType(recipe) {
  if (recipe.mealType) return recipe.mealType;
  const id = recipe.id;
  if (id >= 71 && id <= 160) return "breakfast";
  if (id >= 161 && id <= 210) return "lunch";
  if (id >= 211 && id <= 250) return "dinner";
  return "anytime";
}

const MEAT_RE = /\b(chicken|beef|turkey|lamb|steak|veal|duck|sausage|pastrami|salami|schnitzel|kebab|brisket|burger|shawarma|meatballs?|kofta|liver|drumsticks?|sirloin|ground meat)\b/i;
const DAIRY_RE = /\b(cheese|milk|yogurt|yoghurt|labneh|cream|parmesan|feta|mozzarella|cottage|ricotta|whey|kefir|ghee|kashkaval|tzatziki|halloumi|paneer|cheddar|butter|protein powder)\b/i; // protein powder is usually whey (dairy)
// things that contain a dairy-looking word but are not dairy
const NOT_DAIRY_RE = /\b(almond|coconut|soy|oat|rice|peanut|nut|cashew|cocoa) (milk|butter|cream|yogurt)\b|\bparve\b|dairy-free|cream of tartar/gi;

export function getKosherType(recipe) {
  if (recipe.kosher) return recipe.kosher;
  const text = (recipe.name + " | " + recipe.ingredients.map(i => i.item).join(" | "))
    .replace(NOT_DAIRY_RE, " ");
  if (MEAT_RE.test(text)) return "meat";
  if (DAIRY_RE.test(text)) return "dairy";
  return "parve";
}

export function kosherLabel(type) {
  return { meat: "Meat", dairy: "Dairy", parve: "Parve" }[type] || type;
}

// Which meal the user is most likely looking for right now (local time)
export function currentMealType(date = new Date()) {
  const hour = date.getHours();
  if (hour >= 4 && hour < 11) return "breakfast";
  if (hour >= 11 && hour < 17) return "lunch";
  if (hour >= 17 && hour < 23) return "dinner";
  return "anytime";
}
