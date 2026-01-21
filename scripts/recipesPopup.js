import add from './searchPage.js';

// פותח את הפופאפ
export function openRecipePopup(recipe) {
  const container = document.querySelector(".recipeDetails");
  const header = document.querySelector(".header");

  // יצירת HTML
  container.innerHTML = getRecipePopupHTML(recipe);
  container.classList.add("active");
  document.body.classList.add("no-scroll");

  // העלמת הכותרת
  if (header) {
    header.classList.add("hidden");
  }

  // כפתור Add
  const addBtn = container.querySelector(".addButton");
  if (addBtn) { 
    addBtn.addEventListener("click", () => {
      window.location.href = "./index.html";
      add(recipe)
    });
  }

  // כפתור סגירה
  const closeBtn = container.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeRecipePopup);
  }

  // לחיצה על הרקע הכהה
  const overlay = container.querySelector(".popup-overlay");
  if (overlay) {
    overlay.addEventListener("click", closeRecipePopup);
  }
}

// סוגר את הפופאפ
export function closeRecipePopup() {
  const container = document.querySelector(".recipeDetails");
  const header = document.querySelector(".header");

  container.classList.remove("active");
  container.innerHTML = "";
  document.body.classList.remove("no-scroll");

  // החזרת הכותרת
  if (header) {
    header.classList.remove("hidden");
  }
}

// HTML של הפופאפ
export function getRecipePopupHTML(recipe) {
  return `
    <div class="popup-overlay"></div>

    <div class="popup-card">
      <button class="close-btn" type="button">✕</button>

      <div 
        class="popup-image" 
        style="background-image:url('${recipe.image}')">
      </div>

      <p class="imgMsg">The picture may not match the food.</p>

      <div class="popup-content">
        <p class="popupTitle">${recipe.name}</p>

        <div class="popup-meta">
          <span>⏱ ${recipe.prepTime} min</span>
        </div>

        <div class="popup-nutrition">
          <div>
            <p class="itemTitle">Calories</p>
            <p>${recipe.calories}</p>
          </div>
          <div>
            <p class="itemTitle">Protein</p>
            <p>${recipe.protein}g</p>
          </div>
          <div>
            <p class="itemTitle">Carbs</p>
            <p>${recipe.carbs}g</p>
          </div>
          <div>
            <p class="itemTitle">Fat</p>
            <p>${recipe.fat}g</p>
          </div>
        </div>

        <p class="person">The recipe is supposed to be for 1 person.</p>

        <p class="groceiesTitle">Ingredients</p>
        <ul class="groceies">
          ${recipe.ingredients
            .map(i => `<li>${i.item} – ${i.amount}</li>`)
            .join("")}
        </ul>

        <p class="intuTitle">Instructions</p>
        <p class="instructions">${recipe.instructions}</p>
      </div>

      <button class="addButton" type="button">Add to list</button>
    </div>
  `;

}
