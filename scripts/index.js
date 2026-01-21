import { openPopup, submit } from "./ownRecipePopup.js";


//console.log("index.js loaded");




//to date on the top of the page
const date = document.querySelector(".date");
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayName = daysOfWeek[today.getDay()];


// to inner the need day
const carNeed = document.querySelector(".carNeed");
const calNeed = document.querySelector(".calNeed");
const proNeed = document.querySelector(".proNeed");
const fatNeed = document.querySelector(".fatNeed");

const pro1 = JSON.parse(localStorage.getItem("pro1"));
const cal1 = JSON.parse(localStorage.getItem("cal1"));
const car1 = JSON.parse(localStorage.getItem("car1"));
const fat1 = JSON.parse(localStorage.getItem("fat1"));

//console.log(pro1)

carNeed.innerHTML = '/' + car1;
calNeed.innerHTML = '/' + cal1;
proNeed.innerHTML = '/' + pro1;
fatNeed.innerHTML = '/' + fat1;


// for the popup 
const submitBtn = document.querySelector(".addOwnBtn");
const openBtn = document.querySelector(".own");


// for update data
let cal = localStorage.getItem("cal");
let pro = localStorage.getItem("pro");
let car = localStorage.getItem("car");
let fat = localStorage.getItem("fat");


// for list food that the user ate 
const ateListDiv = document.querySelector(".history");
let ate = JSON.parse(localStorage.getItem("ateList") || "[]");
//console.log(ate);


// for delete all 

const reastBtn = document.querySelector(".reastBtn");



date.innerText = `${year}/${month}/${day}, ${dayName}`;


const firstTime = JSON.parse(localStorage.getItem("firstTime") || "true");


if (firstTime) {
    window.location.href = "./profile.html";
}



// function for update the totals
export function updateTotals() {
    document.getElementById("calories").innerText =
        cal || 0;

    document.getElementById("proteinG").innerText =
        pro || 0;

    document.getElementById("carbsG").innerText =
        car || 0;

    document.getElementById("fatG").innerText =
        fat || 0;
}

// function that return the ate list
export function addToList(food) {

    const div = document.createElement("div");
    div.className = "historyDiv";

    div.innerHTML = `

    <div class="titleData">
        <p class="titleFood">${food.name}</p> 

        <div class="data2">
            <p class="calFood">${food.calories} cal</p>
            <p class="proFood">${food.protein}g pro</p>
            <p class="carFood">${food.carbs}g carbs</p>
            <p class="fatFood">${food.fat}g  fat</p>
        </div>
        
    </div>

    <div class="x">
        <button class="deleteBtn" type="button">X</button>
    </div>
    
    `
    return div;

}

// founction for delete all the items


function resat() {
    cal = 0;
    pro = 0;
    car = 0;
    fat = 0;

    ate = [];

    localStorage.setItem("cal", cal);
    localStorage.setItem("pro", pro);
    localStorage.setItem("car", car);
    localStorage.setItem("fat", fat);

    localStorage.setItem("ateList", JSON.stringify(ate));
    location.reload();

}


// function that delte things from ate list
function deleteFood(item, num) {

    // remove food from the list 
    ate.splice(num, 1);
    // save the new list 
    localStorage.setItem("ateList", JSON.stringify(ate));


    // less the data 
    cal -= item.calories;
    pro -= item.protein;
    car -= item.carbs;
    fat -= item.fat;

    localStorage.setItem("cal", cal) || 0;
    localStorage.setItem("pro", pro) || 0;
    localStorage.setItem("car", car) || 0;
    localStorage.setItem("fat", fat) || 0;

    location.reload();



}

updateTotals();



// present the ate history in index.html with for 

if (ate.length > 0) {

    ateListDiv.className = "h";

    for (let i = 0; i < ate.length; i++) {
        const recipe = ate[i];

        const div = addToList(recipe);

        div.querySelector(".deleteBtn").addEventListener("click", (e) => {
            //console.log("click")
            e.stopPropagation();
            deleteFood(recipe, i);
        })

        ateListDiv.appendChild(div);
    }

    reastBtn.addEventListener("click", resat)

} else {

    ateListDiv.className = "history";

    const noneMassage = document.createElement("p");
    noneMassage.className = "noneMassage"
    noneMassage.innerHTML = "You <strong>haven't</strong> eaten anything today yet!"

    ateListDiv.appendChild(noneMassage)
}




openBtn.addEventListener("click", openPopup);
submitBtn.addEventListener("click", submit);



// whan the day is over all the recipes reast 
setInterval(() => {
    const now = new Date();
    const australiaHour = now.toLocaleString("en-US", {
        timeZone: "Australia/Sydney",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    const [hourStr, minuteStr] = australiaHour.split(":");
    const hour = Number(hourStr);
    const minute = Number(minuteStr);

    if (hour === 0 && minute === 0) {
        resat();
    }
}, 60000);



