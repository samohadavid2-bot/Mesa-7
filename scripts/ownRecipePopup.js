const popup = document.querySelector(".ownRecipe-popup");
const X = document.querySelector(".X");

const name = document.querySelector(".nameRecipe");
const pro = document.querySelector(".proInput");
const car = document.querySelector(".carInput");
const cal = document.querySelector(".calInput");
const fat = document.querySelector(".fatInput");

const ErroreMsg = document.querySelector(".ErroreMsg");

let ate = JSON.parse(localStorage.getItem("ateList") || "[]");

const resteBtn = document.querySelector(".reastBtn");


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
    console.log("ate:" + ate );

    localStorage.setItem("ateList", JSON.stringify(ate));
}



export function openPopup() {
    popup.classList.add("openPopup");
    //console.log("open popup");
    X.addEventListener("click", closePopup)
    document.body.classList.add("no-scroll");
    resteBtn.classList.add("hidden")
}

function closePopup() {
    popup.classList.remove("openPopup");
    document.body.classList.remove("no-scroll");
    resteBtn.classList.remove("hidden")
}



export function submit() {
    if (
        name.value.trim() === "" ||
        pro.value === "" ||
        car.value === "" ||
        cal.value === "" ||
        fat.value === ""
    ) {
        ErroreMsg.classList.add("open");
        return;
    }

    ErroreMsg.classList.remove("open");

    const recipe = {
        name: name.value,
        protein: Number(pro.value),
        carbs: Number(car.value),
        calories: Number(cal.value),
        fat: Number(fat.value)
    };

    add(recipe);

    name.value = "";
    pro.value = "";
    car.value = "";
    cal.value = "";
    fat.value = "";
    
    window.location.reload();

    closePopup();
}


