import addToToday from "./tracker.js";
import { openRecipePopup } from "./recipesPopup.js";
import { getKosherType, kosherLabel, getMealType } from "./recipeMeta.js";

const MEAL_LABEL = { breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner", anytime: "Anytime" };

/**
 * Builds a recipe card element (same look on the search page and the fridge page).
 * @param recipe
 * @param extra optional element appended under the nutrition row
 */
export function createRecipeCard(recipe, extra = null) {
  const card = document.createElement("div");
  card.className = "recipe-card";

  const kosher = getKosherType(recipe);

  card.innerHTML = `
    <div class="image-box">
      <span class="kosher-badge kosher-${kosher}">${kosherLabel(kosher)}</span>
      <div class="image-info">
        <span class="time"></span>
        <span class="meal-label"></span>
      </div>
    </div>

    <div class="recipe-content">
      <div class="recipe-title-row">
        <p class="recipe-title"></p>
        <button class="add-btn" type="button" aria-label="Add to today">+</button>
      </div>

      <div class="nutrition">
        <div class="nut cal">
          <p class="nut-label">CAL</p>
          <p class="nut-value calories"></p>
        </div>
        <div class="nut pro">
          <p class="nut-label">PRO</p>
          <p class="nut-value protein"></p>
        </div>
        <div class="nut carb">
          <p class="nut-label">CARB</p>
          <p class="nut-value carbs"></p>
        </div>
        <div class="nut fat">
          <p class="nut-label">FAT</p>
          <p class="nut-value fats"></p>
        </div>
      </div>

      <p class="view-recipe">Tap to view full recipe</p>
    </div>
  `;

  card.querySelector(".image-box").style.backgroundImage = `url(${recipe.image})`;
  card.querySelector(".time").textContent = `⏱ ${recipe.prepTime} min`;
  card.querySelector(".meal-label").textContent = MEAL_LABEL[getMealType(recipe)];
  card.querySelector(".recipe-title").textContent = recipe.name;
  card.querySelector(".calories").textContent = recipe.calories;
  card.querySelector(".protein").textContent = recipe.protein + "g";
  card.querySelector(".carbs").textContent = recipe.carbs + "g";
  card.querySelector(".fats").textContent = recipe.fat + "g";

  if (extra) {
    card.querySelector(".nutrition").after(extra);
  }

  card.querySelector(".add-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    addToToday(recipe);
    window.location.assign("index.html");
  });

  card.addEventListener("click", () => openRecipePopup(recipe));

  return card;
}
