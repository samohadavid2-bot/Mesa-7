// Adds a recipe to today's eaten list and updates the daily totals.
// Shared by the search page, the fridge page and the recipe popup.
export default function addToToday(recipe) {
  const proteinG = (Number(localStorage.getItem("pro")) || 0) + recipe.protein;
  const calories = (Number(localStorage.getItem("cal")) || 0) + recipe.calories;
  const carbsG = (Number(localStorage.getItem("car")) || 0) + recipe.carbs;
  const fatG = (Number(localStorage.getItem("fat")) || 0) + recipe.fat;

  localStorage.setItem("pro", proteinG);
  localStorage.setItem("cal", calories);
  localStorage.setItem("car", carbsG);
  localStorage.setItem("fat", fatG);

  const ate = JSON.parse(localStorage.getItem("ateList") || "[]");
  ate.push(recipe);
  localStorage.setItem("ateList", JSON.stringify(ate));
}
