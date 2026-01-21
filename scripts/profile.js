let firstTime = JSON.parse(localStorage.getItem("firstTime") || "true");

if (firstTime) {
    firstTime = false;
    localStorage.setItem("firstTime", JSON.stringify(firstTime))
    window.location.href = "./profile.html";
}




// ========================================
// אובייקט לשמירת נתוני המשתמש
// ========================================
const formData = {
    age: null,           // גיל המשתמש
    gender: null,        // מין (male/female)
    height: null,        // גובה בס"מ
    weight: null,        // משקל בק"ג
    activityLevel: null, // רמת פעילות (sedentary/light/moderate/very)
    goal: null          // מטרה (lose/maintain/gain)
};




// ========================================
// משתנים גלובליים
// ========================================
let currentQuestion = 1;      // שאלה נוכחית
const totalQuestions = 6;     // סך הכל שאלות

// ========================================
// שליפת אלמנטים מה-DOM
// ========================================
const progressFill = document.getElementById('progressFill');        // מילוי פס התקדמות
const submitBtn = document.getElementById('submitBtn');              // כפתור Submit
const nextBtn = document.getElementById('nextBtn');                  // כפתור Next
const prevBtn = document.getElementById('prevBtn');                  // כפתור Previous
const questionCards = document.querySelectorAll('.question-card');   // כל כרטיסי השאלות
const questionCounter = document.getElementById('questionCounter');  // מונה שאלות

// ========================================
// אתחול ראשוני
// ========================================
updateProgress();      // עדכון פס התקדמות
updateNavigation();    // עדכון כפתורי ניווט

// ========================================
// טיפול בשדות קלט מספריים (גיל, גובה, משקל)
// ========================================
const numberInputs = document.querySelectorAll('.number-input');
numberInputs.forEach(input => {
    // האזנה לכל שינוי בשדה
    input.addEventListener('input', (e) => {
        const field = e.target.id;              // זיהוי השדה (age/height/weight)
        const value = parseFloat(e.target.value); // המרה למספר

        // בדיקה שהערך תקין ועובר validation
        if (value && e.target.checkValidity()) {
            formData[field] = value;  // שמירת הערך באובייקט
        } else {
            formData[field] = null;   // איפוס אם לא תקין
        }

        updateNavigation(); // עדכון מצב כפתור Next
    });
});

// ========================================
// טיפול בבחירת מין (Male/Female)
// ========================================
const genderButtons = document.querySelectorAll('[data-question="2"] .option-button');
genderButtons.forEach(button => {
    button.addEventListener('click', () => {
        // הסרת בחירה מכל הכפתורים
        genderButtons.forEach(btn => btn.classList.remove('selected'));

        // סימון הכפתור שנבחר
        button.classList.add('selected');

        // שמירת הבחירה
        formData.gender = button.dataset.value;
        document.getElementById('gender').value = button.dataset.value;

        updateNavigation(); // עדכון כפתור Next
    });
});

// ========================================
// טיפול בבחירת רמת פעילות
// ========================================
const activityButtons = document.querySelectorAll('.activity-button');
activityButtons.forEach(button => {
    button.addEventListener('click', () => {
        // הסרת בחירה מכל הכפתורים
        activityButtons.forEach(btn => btn.classList.remove('selected'));

        // סימון הכפתור שנבחר
        button.classList.add('selected');

        // שמירת הבחירה
        formData.activityLevel = button.dataset.value;
        document.getElementById('activityLevel').value = button.dataset.value;

        updateNavigation(); // עדכון כפתור Next
    });
});

// ========================================
// טיפול בבחירת מטרה
// ========================================
const goalButtons = document.querySelectorAll('.goal-button');
goalButtons.forEach(button => {
    button.addEventListener('click', () => {
        // הסרת בחירה מכל הכפתורים
        goalButtons.forEach(btn => btn.classList.remove('selected'));

        // סימון הכפתור שנבחר
        button.classList.add('selected');

        // שמירת הבחירה
        formData.goal = button.dataset.value;
        document.getElementById('goal').value = button.dataset.value;

        updateNavigation(); // עדכון כפתור Submit
    });
});

// ========================================
// כפתור Next - מעבר לשאלה הבאה
// ========================================
nextBtn.addEventListener('click', () => {
    if (currentQuestion < totalQuestions) {
        // הסתרת השאלה הנוכחית
        questionCards[currentQuestion - 1].classList.remove('active');

        // מעבר לשאלה הבאה
        currentQuestion++;

        // הצגת השאלה הבאה
        questionCards[currentQuestion - 1].classList.add('active');

        // עדכון UI
        updateProgress();
        updateNavigation();
    }
});

// ========================================
// כפתור Previous - חזרה לשאלה הקודמת
// ========================================
prevBtn.addEventListener('click', () => {
    if (currentQuestion > 1) {
        // הסתרת השאלה הנוכחית
        questionCards[currentQuestion - 1].classList.remove('active');

        // חזרה לשאלה הקודמת
        currentQuestion--;

        // הצגת השאלה הקודמת
        questionCards[currentQuestion - 1].classList.add('active');

        // עדכון UI
        updateProgress();
        updateNavigation();
    }
});

// ========================================
// עדכון פס התקדמות ומונה שאלות
// ========================================
function updateProgress() {
    // חישוב אחוז ההתקדמות
    const progress = (currentQuestion / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;

    // עדכון מונה שאלות
    questionCounter.textContent = `Question ${currentQuestion} of ${totalQuestions}`;
}

// ========================================
// עדכון מצב כפתורי הניווט
// ========================================
function updateNavigation() {
    // בדיקה האם השאלה הנוכחית מלאה
    const currentFieldFilled = isCurrentQuestionFilled();

    // שאלה 1 - הסתרת Previous
    if (currentQuestion === 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
    }
    // שאלה אחרונה - הצגת Submit
    else if (currentQuestion === totalQuestions) {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'flex';
        // הפעלת Submit רק אם כל השדות מלאים
        submitBtn.disabled = !isFormComplete();
    }
    // שאלות אמצע
    else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
    }

    // הפעלת Next רק אם השאלה הנוכחית מלאה
    nextBtn.disabled = !currentFieldFilled;
}

// ========================================
// בדיקה האם השאלה הנוכחית מלאה
// ========================================
function isCurrentQuestionFilled() {
    switch (currentQuestion) {
        case 1: return formData.age !== null;
        case 2: return formData.gender !== null;
        case 3: return formData.height !== null;
        case 4: return formData.weight !== null;
        case 5: return formData.activityLevel !== null;
        case 6: return formData.goal !== null;
        default: return false;
    }
}

// ========================================
// בדיקה האם כל השדות מלאים
// ========================================
function isFormComplete() {
    // בדיקה שכל הערכים אינם null
    return Object.values(formData).every(value => value !== null);
}

// ========================================
// פונקציה לחישוב צרכים תזונתיים
// ========================================
function calculateNutrition(userData) {
    // =========================================
    // שלב 1: חישוב BMR (Basal Metabolic Rate)
    // BMR = קצב חילוף החומרים הבסיסי
    // כמה קלוריות הגוף שורף במנוחה
    // =========================================
    // שימוש בנוסחת Mifflin-St Jeor (הנוסחה המדויקת ביותר)
    let bmr;

    if (userData.gender === 'male') {
        // נוסחה לגברים: BMR = 10 × משקל + 6.25 × גובה - 5 × גיל + 5
        bmr = (10 * userData.weight) + (6.25 * userData.height) - (5 * userData.age) + 5;
    } else {
        // נוסחה לנשים: BMR = 10 × משקל + 6.25 × גובה - 5 × גיל - 161
        bmr = (10 * userData.weight) + (6.25 * userData.height) - (5 * userData.age) - 161;
    }

    // =========================================
    // שלב 2: חישוב TDEE (Total Daily Energy Expenditure)
    // TDEE = סך הקלוריות שנשרפות ביום כולל פעילות
    // =========================================
    // מכפילים לפעילות - מבוסס על מחקר Harris-Benedict
    const activityMultipliers = {
        sedentary: 1.2,    // ישיבה רוב היום
        light: 1.375,      // פעילות קלה 1-3 פעמים בשבוע
        moderate: 1.55,    // פעילות בינונית 3-5 פעמים בשבוע
        very: 1.725        // פעילות אינטנסיבית 6-7 פעמים בשבוע
    };

    // חישוב TDEE = BMR × מכפיל פעילות
    const tdee = bmr * activityMultipliers[userData.activityLevel];

    // =========================================
    // שלב 3: התאמת קלוריות לפי מטרה
    // =========================================
    let targetCalories;

    if (userData.goal === 'lose') {
        // ירידה במשקל: גרעון של 500 קלוריות ביום
        // גרעון זה מוביל לירידה של כ-0.5 ק"ג בשבוע
        targetCalories = tdee - 500;

        // הגנה מפני גרעון קיצוני (מינימום 1200 לנשים, 1500 לגברים)
        const minCalories = userData.gender === 'male' ? 1500 : 1200;
        targetCalories = Math.max(targetCalories, minCalories);

    } else if (userData.goal === 'gain') {
        // עלייה במשקל: עודף של 500 קלוריות ביום
        // עודף זה מוביל לעלייה של כ-0.5 ק"ג בשבוע
        targetCalories = tdee + 500;

    } else {
        // שמירה על משקל: TDEE ללא שינוי
        targetCalories = tdee;
    }

    // =========================================
    // שלב 4: חישוב מקרו-נוטריינטים (Macros)
    // =========================================

    // חלבון: חיוני לבניית שרירים ותיקונם
    // המלצה: 1.6-2.2 גרם לק"ג משקל גוף
    const proteinGramsPerKg = userData.goal === 'gain' ? 2.0 : 1.8;
    const proteinGrams = userData.weight * proteinGramsPerKg;
    const proteinCalories = proteinGrams * 4; // 4 קלוריות לגרם חלבון

    // שומנים: חיוניים להורמונים ובריאות
    // המלצה: 25-30% מסך הקלוריות
    const fatPercentage = 0.27; // 27%
    const fatCalories = targetCalories * fatPercentage;
    const fatGrams = fatCalories / 9; // 9 קלוריות לגרם שומן

    // פחמימות: מקור אנרגיה עיקרי
    // השאר של הקלוריות אחרי חלבון ושומן
    const carbCalories = targetCalories - proteinCalories - fatCalories;
    const carbGrams = carbCalories / 4; // 4 קלוריות לגרם פחמימה

    // =========================================
    // שלב 5: החזרת התוצאות
    // =========================================
    return {
        userData: userData,  // נתוני המשתמש המקוריים
        calculations: {
            bmr: Math.round(bmr),                      // BMR מעוגל
            tdee: Math.round(tdee),                    // TDEE מעוגל
            targetCalories: Math.round(targetCalories), // יעד קלוריות יומי
            macros: {
                protein: Math.round(proteinGrams),     // חלבון בגרמים
                carbs: Math.round(carbGrams),          // פחמימות בגרמים
                fats: Math.round(fatGrams)             // שומנים בגרמים
            }
        }
    };
}

// ========================================
// טיפול בשליחת הטופס
// ========================================
document.getElementById('questionnaireForm').addEventListener('submit', (e) => {
    // מניעת רענון הדף
    e.preventDefault();

    // קריאה לפונקציית החישוב
    const results = calculateNutrition(formData);


    const firstTime = false;
    localStorage.setItem("firstTime", firstTime);


    /*
    // הצגת התוצאות בקונסול (לפיתוח)
    console.log('=== USER DATA ===');
    console.log('Age:', results.userData.age);
    console.log('Gender:', results.userData.gender);
    console.log('Height:', results.userData.height, 'cm');
    console.log('Weight:', results.userData.weight, 'kg');
    console.log('Activity:', results.userData.activityLevel);
    console.log('Goal:', results.userData.goal);
    
    console.log('\n=== CALCULATIONS ===');
    console.log('BMR:', results.calculations.bmr, 'kcal');
    console.log('TDEE:', results.calculations.tdee, 'kcal');
    console.log('Target Calories:', results.calculations.targetCalories, 'kcal');
    
    console.log('\n=== MACROS ===');
    console.log('Protein:', results.calculations.macros.protein, 'g');
    console.log('Carbs:', results.calculations.macros.carbs, 'g');
    console.log('Fats:', results.calculations.macros.fats, 'g');
    
    // הצגת תוצאות למשתמש
    alert(`🎉 Setup Complete!

📊 Your Daily Nutrition Targets:

🔥 Calories: ${results.calculations.targetCalories} kcal

💪 Protein: ${results.calculations.macros.protein}g
🍞 Carbs: ${results.calculations.macros.carbs}g
🥑 Fats: ${results.calculations.macros.fats}g

📈 Your Metabolism:
• BMR: ${results.calculations.bmr} kcal
• TDEE: ${results.calculations.tdee} kcal

Tip: ${results.userData.goal === 'lose' ? 'Stay consistent with your calorie deficit!' : 
      results.userData.goal === 'gain' ? 'Make sure to eat enough protein for muscle growth!' : 
      'Maintain your current eating habits!'}`);
    
    // כאן אפשר לשלוח לשרת או לעמוד הבא
    // דוגמה: window.location.href = '/dashboard';
    */

    localStorage.setItem("pro1", JSON.stringify(results.calculations.macros.protein))
    localStorage.setItem("cal1", JSON.stringify(results.calculations.targetCalories))
    localStorage.setItem("car1", JSON.stringify(results.calculations.macros.carbs))
    localStorage.setItem("fat1", JSON.stringify(results.calculations.macros.fats))

    window.location.href = "./index.html";

    return results; // החזרת התוצאות
});