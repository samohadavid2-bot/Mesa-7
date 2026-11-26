import recipes from "./recipes.js";
import { closeRecipePopup } from "./recipesPopup.js";
import addToToday from "./tracker.js";
import { createRecipeCard } from "./recipeCard.js";
import { MEAL_TYPES, KOSHER_TYPES, getMealType, getKosherType, currentMealType } from "./recipeMeta.js";
import { spokenToKeys, parseRecipeIngredient, INGREDIENT_BY_KEY } from "./ingredients.js";
window.closeRecipePopup = closeRecipePopup;

// kept for backwards compatibility (other code imported `add` from this file)
export default addToToday;

const foodList = document.querySelector(".foodList");
const searchInput = document.querySelector(".search-input");
const addBtn = document.querySelector(".addBtn");
const selectFoodDiv = document.querySelector(".selectFood");
const typeFoodTitle = document.querySelector(".typeFoodTitle");
const mealTabs = document.querySelector(".mealTabs");
const kosherTabs = document.querySelector(".kosherTabs");

// ---------- filters ----------
let mealFilter = currentMealType();   // starts with the meal that fits the time of day
let kosherFilter = "all";
let selectFood = [];                  // ingredients / names the user searched for

function renderTabs(container, options, active, onPick) {
  if (!container) return;
  container.innerHTML = "";
  for (const opt of options) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filterTab" + (opt.key === active ? " active" : "");
    btn.textContent = opt.label;
    btn.dataset.key = opt.key;
    btn.addEventListener("click", () => onPick(opt.key));
    container.appendChild(btn);
  }
}

function renderFilters() {
  renderTabs(mealTabs, MEAL_TYPES, mealFilter, (key) => { mealFilter = key; update(); });
  renderTabs(kosherTabs, KOSHER_TYPES, kosherFilter, (key) => { kosherFilter = key; update(); });
}

const recipeKeys = new Map();   // recipe id -> Set of ingredient keys
function keysOf(recipe) {
  if (!recipeKeys.has(recipe.id)) {
    const keys = recipe.ingredients.flatMap(ing => parseRecipeIngredient(ing).options.flat());
    // include parents too, so "גבינה" (any cheese) finds recipes with feta
    recipeKeys.set(recipe.id, new Set([...keys, ...keys.map(k => INGREDIENT_BY_KEY[k]?.parent).filter(Boolean)]));
  }
  return recipeKeys.get(recipe.id);
}

function matchesSearch(recipe) {
  return selectFood.every(selectedItem => {
    const q = selectedItem.toLowerCase();
    if (recipe.ingredients.some(ing => ing.item.toLowerCase().includes(q)) || recipe.name.toLowerCase().includes(q)) {
      return true;
    }
    // Hebrew (or other known names): "קוטג'" finds every recipe with cottage cheese
    const keys = spokenToKeys(selectedItem);
    return keys.length > 0 && keys.every(k => keysOf(recipe).has(k));
  });
}

function update() {
  renderFilters();

  const list = recipes.filter(r =>
    (mealFilter === "all" || getMealType(r) === mealFilter) &&
    (kosherFilter === "all" || getKosherType(r) === kosherFilter) &&
    matchesSearch(r)
  );

  if (typeFoodTitle) {
    typeFoodTitle.textContent = `${list.length} recipe${list.length === 1 ? "" : "s"}`;
  }

  foodList.innerHTML = "";

  if (list.length === 0) {
    const msg = document.createElement("p");
    msg.className = "emptyMsg";
    msg.textContent = "No recipes found with these filters 😕";
    foodList.appendChild(msg);
    return;
  }

  for (const recipe of list) {
    foodList.appendChild(createRecipeCard(recipe));
  }
}

// ---------- search chips ----------
function selectFoodList(food) {
  const div = document.createElement("div");
  div.className = "selectFoodList";

  const name = document.createElement("p");
  name.className = "foodName";
  name.textContent = food;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delteSelectBtn";
  deleteBtn.type = "button";
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => {
    div.remove();
    selectFood = selectFood.filter(item => item !== food);
    update();
  });

  div.append(name, deleteBtn);
  return div;
}

function clickBtn() {
  const value = searchInput.value.trim();
  if (!value || selectFood.includes(value)) return;

  selectFood.push(value);
  selectFoodDiv.appendChild(selectFoodList(value));
  searchInput.value = "";

  // searching should look through every meal, not just the current one
  mealFilter = "all";
  update();
}

if (addBtn) addBtn.addEventListener("click", clickBtn);
if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") clickBtn();
  });
}

if (foodList) update();
