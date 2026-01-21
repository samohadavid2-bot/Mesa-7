import recipes from "./recipes.js";
import { openRecipePopup, closeRecipePopup } from "./recipesPopup.js";
window.closeRecipePopup = closeRecipePopup;


const foodList = document.querySelector(".foodList");
if (!foodList) {
  console.error("foodList not found");
}



let ate = JSON.parse(localStorage.getItem("ateList") || "[]");
//console.log(ate);

// craet num of g for the food 

// the input of the search 
const foodSearch = document.querySelector(".foodSearch");
const searchInput = document.querySelector(".search-input");
const addBtn = document.querySelector(".addBtn")
const selectFoodDiv = document.querySelector(".selectFood");

// for time 
const typeFoodTitle = document.querySelector(".typeFoodTitle");


function createRecipeCard() {
  const card = document.createElement("div");
  card.className = "recipe-card";

  card.innerHTML = `
    <div class="image-box">
      <div class="image-info">
        <span class="time"></span>
      </div>
    </div>

    <div class="recipe-content">
      <div class="recipe-title-row">
        <p class="recipe-title"></p>
        <button class="add-btn">+</button>
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

  return card;
}



export default function add(recipe) {
  let proteinG = Number(localStorage.getItem("pro")) || 0;
  let calories = Number(localStorage.getItem("cal")) || 0;
  let carbsG = Number(localStorage.getItem("car")) || 0;
  let fatG = Number(localStorage.getItem("fat")) || 0;

  proteinG += recipe.protein;
  calories += recipe.calories;
  carbsG += recipe.carbs;
  fatG += recipe.fat;

  localStorage.setItem("pro", proteinG);
  localStorage.setItem("cal", calories);
  localStorage.setItem("car", carbsG);
  localStorage.setItem("fat", fatG);

  //add to food list 
  ate.push(recipe);
  //console.log("ate:" + ate );

  localStorage.setItem("ateList", JSON.stringify(ate));
}

// function to get part of the day in Australia
function getDayPartAustralia() {

  const hour = Number(
    new Date().toLocaleString("en-US", {
      timeZone: "Australia/Sydney",
      hour: "2-digit",
      hour12: false
    })
  );


  if (hour >= 4 && hour < 12) {
    return "breakfast";


  } else if (hour >= 12 && hour < 18) {
    return "lunch";

  } else if (hour >= 18 && hour < 23) {
    return "dinner";

  } else {
    return "night";

  }
}

//console.log(getDayPartAustralia());


/**
 * הכנסת הנתונים לכל כרטיס
 */

function displayRecipes(list, filterByTime = false) {
  const time = getDayPartAustralia(); // חלק היום בסידני
  foodList.innerHTML = ""; // ניקוי ה-DOM לפני הצגה

  for (let i = 0; i < list.length; i++) {
    const recipe = list[i];
    const card = createRecipeCard();

    // ---------- מילוי תוכן הכרטיס ----------
    card.querySelector(".image-box").style.backgroundImage = `url(${recipe.image})`;
    card.querySelector(".time").textContent = `⏱ ${recipe.prepTime} min`;
    card.querySelector(".recipe-title").textContent = recipe.name;
    card.querySelector(".calories").textContent = recipe.calories;
    card.querySelector(".protein").textContent = recipe.protein + "g";
    card.querySelector(".carbs").textContent = recipe.carbs + "g";
    card.querySelector(".fats").textContent = recipe.fat + "g";

    // ---------- לחצן הוספה ----------
    const cardAddBtn = card.querySelector(".add-btn");
    cardAddBtn.addEventListener("click", () => {
      add(recipe);
      window.location.assign("index.html");
    });

    // ---------- פתיחת פופאפ ----------
    card.addEventListener("click", () => {
      openRecipePopup(recipe);
    });

    // ---------- סינון לפי שעה (אם נדרש) ----------
    let appendCard = true; // ברירת מחדל: להוסיף כרטיס
    if (filterByTime) {
      if (time === "breakfast") appendCard = recipe.id >= 71 && recipe.id <= 160;
      else if (time === "lunch") appendCard = recipe.id >= 161 && recipe.id <= 210;
      else if (time === "dinner") appendCard = recipe.id >= 211 && recipe.id <= 250;
      else appendCard = recipe.id >= 1 && recipe.id <= 70; // night
    }

    if (appendCard) foodList.appendChild(card);
  }
}



displayRecipes(recipes, true);




// search 




// array the slect food that the user choice 
let selectFood = [];

function selectFoodList(food) {
  const div = document.createElement("div");
  div.className = "selectFoodList";

  div.innerHTML = `
    <p class="foodName">${food}</p> 
    <button class="delteSelectBtn">X</button>
  `;

  const deleteBtn = div.querySelector(".delteSelectBtn");

  deleteBtn.
    addEventListener("click", () => {
      // 1. מחיקה מה־DOM
      div.remove();

      // 2. מחיקה מה־array
      selectFood = selectFood.filter(item => item !== food);

      // 3. עדכון החיפוש
      filterRecipes();
    });

  return div;
}

function filterRecipes() {
  foodList.innerHTML = "";

  if (selectFood.length === 0) {
    displayRecipes(recipes, true);
    return;
  }

  const matchedRecipes = recipes.filter(recipe =>
    selectFood.every(selectedItem =>
      // לבדוק אם אחד המרכיבים מתאים
      recipe.ingredients.some(ing =>
        ing.item.toLowerCase().includes(selectedItem.toLowerCase())
      )
      // או אם שם המתכון עצמו מתאים
      || recipe.name.toLowerCase().includes(selectedItem.toLowerCase())
    )
  );

  if (matchedRecipes.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No recipes found with these ingredients or names 😕";
    msg.style.padding = "20px";
    foodList.appendChild(msg);
    return;
  }

  displayRecipes(matchedRecipes, false);
}



function clickBtn() {
  const value = searchInput.value.trim();
  if (!value) return;

  // למנוע כפילויות (מומלץ)
  if (selectFood.includes(value)) return;

  selectFood.push(value);

  const div = selectFoodList(value);
  selectFoodDiv.appendChild(div);

  searchInput.value = "";

  filterRecipes();
}

// when the user click on the Enter or click the button 
// בדיקה שפתור ההוספה קיים בדף הנוכחי
if (addBtn) {
  addBtn.addEventListener("click", clickBtn);
}

// בדיקה ששדה החיפוש קיים בדף הנוכחי
if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      clickBtn();
    }
  });
}





//console.log(recipes.ingredients)
