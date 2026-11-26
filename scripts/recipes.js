/*
propmt to claud for added more 10 recipes 
__________________________________


Hey, add to my list 10 more {type of meal} {that are easy to make with basic ingredients that are in every home (no need)}. The recipes should be kosher. 
Show me only the recipes you added. It is advisable that the recipes are for exercisers (people who want to gain or lose weight, or eat more protein, mass or tone up). 
It is important that you pay attention to the fact that the picture and the food are compatible (for example: I will not be a picture of a melawah in a hard-boiled egg recipe)

the recipes shold be food for 1 person. 
Add mealType (breakfast / lunch / dinner) and kosher (meat / dairy / parve) to every recipe.
Use simple, common ingredient names (e.g. "Eggs", "Cottage cheese 5%", "Cherry tomatoes, halved") so the fridge scanner can match them.

{               
    id: {the lest ID recipe in the list},
    name: "Malawach with Egg and Cheese",
    mealType: "breakfast",   // breakfast | lunch | dinner
    kosher: "dairy",         // meat | dairy | parve  (never mix meat and dairy!)
    ingredients: [
      { item: "Malawach (frozen)", amount: "1 sheet" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Kashkaval cheese, grated", amount: "50g" },
      { item: "Tomatoes, diced", amount: "1 cup" },
      { item: "Schug", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Cook malawach in pan until crispy and golden.\nIn another pan, fry eggs sunny-side up.\nPlace malawach on plate.\nTop with fried eggs and grated cheese.\nAdd diced tomatoes on the side.\nServe with schug.\nEnjoy this Yemenite breakfast favorite.",
    protein: 22,
    carbs: 34,
    fat: 28,
    calories: 480,
    prepTime: 15,
    image: "https://images.pexels.com/photos/6419603/pexels-photo-6419603.jpeg"
  },


]
```
*/







const recipes = [
  {
    id: 1,
    name: "Grilled Chicken Salad",
    ingredients: [
      { item: "Chicken breast", amount: "150g" },
      { item: "Romaine lettuce", amount: "2 cups" },
      { item: "Tomato, diced", amount: "1 medium" },
      { item: "Cucumber, sliced", amount: "1/2 medium" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Lemon juice", amount: "1/2 lemon" }
    ],
    instructions: "Season chicken breast with salt and pepper.\nGrill chicken for 6-7 minutes per side until internal temp reaches 165°F.\nLet chicken rest for 5 minutes, then slice.\nWash and chop lettuce, dice tomato, and slice cucumber.\nCombine vegetables in a bowl.\nTop with sliced chicken.\nDrizzle with olive oil and lemon juice.",
    protein: 32,
    carbs: 8,
    fat: 12,
    calories: 270,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
  },
  {
    id: 2,
    name: "Salmon with Quinoa",
    ingredients: [
      { item: "Salmon fillet", amount: "150g" },
      { item: "Uncooked quinoa", amount: "1/2 cup" },
      { item: "Broccoli florets", amount: "1 cup" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Rinse quinoa and cook in 1 cup water for 15 minutes.\nSteam broccoli for 5 minutes until tender-crisp.\nSeason salmon with salt and pepper.\nHeat olive oil in pan, add minced garlic.\nPan-sear salmon skin-side down for 4 minutes.\nFlip and cook for 3 more minutes.\nPlate quinoa, top with salmon and broccoli.",
    protein: 30,
    carbs: 22,
    fat: 16,
    calories: 352,
    prepTime: 30,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800"
  },
  {
    id: 3,
    name: "Turkey Avocado Wrap",
    ingredients: [
      { item: "Sliced turkey breast", amount: "100g" },
      { item: "Avocado, sliced", amount: "1/2 avocado" },
      { item: "Tomato, sliced", amount: "1 medium" },
      { item: "Lettuce", amount: "1/2 cup" },
      { item: "Whole wheat tortilla", amount: "1 large (10-inch)" }
    ],
    instructions: "Lay tortilla flat on clean surface.\nLayer lettuce in center of tortilla.\nAdd turkey slices on top of lettuce.\nPlace tomato and avocado slices.\nFold in sides and roll tightly.\nCut in half diagonally.\nServe immediately.",
    protein: 28,
    carbs: 32,
    fat: 14,
    calories: 368,
    prepTime: 10,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800"
  },
  {
    id: 4,
    name: "Greek Yogurt Parfait",
    ingredients: [
      { item: "Plain Greek yogurt", amount: "200g" },
      { item: "Mixed berries", amount: "1/2 cup" },
      { item: "Granola", amount: "1/4 cup" },
      { item: "Honey", amount: "1 tbsp" }
    ],
    instructions: "Spoon half the yogurt into a glass or bowl.\nAdd half the berries and half the granola.\nLayer remaining yogurt.\nTop with remaining berries and granola.\nDrizzle honey over the top.\nServe immediately or refrigerate.",
    protein: 18,
    carbs: 38,
    fat: 8,
    calories: 290,
    prepTime: 5,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800"
  },
  {
    id: 5,
    name: "Beef Stir Fry with Rice",
    ingredients: [
      { item: "Beef sirloin, thinly sliced", amount: "150g" },
      { item: "Broccoli florets", amount: "1 cup" },
      { item: "Bell pepper, sliced", amount: "1/2 pepper" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Cooked white rice", amount: "3/4 cup" }
    ],
    instructions: "Cook rice according to package directions.\nHeat wok or large pan over high heat.\nAdd beef and stir-fry for 2-3 minutes.\nRemove beef and set aside.\nAdd vegetables to pan, stir-fry for 3-4 minutes.\nReturn beef to pan, add soy sauce.\nToss everything together for 1 minute.\nServe over rice.",
    protein: 28,
    carbs: 48,
    fat: 12,
    calories: 420,
    prepTime: 25,
    image: "https://images.pexels.com/photos/26341190/pexels-photo-26341190.jpeg"
  },
  {
    id: 6,
    name: "Classic Omelette",
    ingredients: [
      { item: "Large eggs", amount: "3 eggs" },
      { item: "Milk", amount: "2 tbsp" },
      { item: "Butter", amount: "1 tsp" },
      { item: "Salt", amount: "to taste" },
      { item: "Black pepper", amount: "to taste" }
    ],
    instructions: "Beat eggs, milk, salt and pepper in a bowl.\nMelt butter in non-stick pan over medium heat.\nPour in egg mixture.\nAs eggs begin to set, gently lift edges with spatula.\nWhen mostly set but still slightly runny on top, fold in half.\nSlide onto plate and serve.",
    protein: 18,
    carbs: 2,
    fat: 16,
    calories: 210,
    prepTime: 7,
    image: "https://images.pexels.com/photos/18109104/pexels-photo-18109104.jpeg"
  },
  {
    id: 7,
    name: "Egg Fried Rice",
    ingredients: [
      { item: "Large eggs", amount: "2 eggs" },
      { item: "Cooked rice (day-old)", amount: "1.5 cups" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Peas", amount: "1/2 cup" },
      { item: "Carrot, diced", amount: "1 small" },
      { item: "Green onions, chopped", amount: "2 stalks" }
    ],
    instructions: "Beat eggs and scramble in hot wok, set aside.\nAdd a bit of oil to wok.\nAdd diced carrots and peas, stir-fry for 2 minutes.\nAdd rice, breaking up clumps.\nStir-fry for 3-4 minutes.\nAdd soy sauce and scrambled eggs.\nToss everything together, add green onions.\nServe hot.",
    protein: 14,
    carbs: 48,
    fat: 10,
    calories: 360,
    prepTime: 15,
    image: "https://images.pexels.com/photos/15681167/pexels-photo-15681167.jpeg"
  },
  {
    id: 8,
    name: "Tuna Pasta",
    ingredients: [
      { item: "Tuna in water, drained", amount: "1 can (120g)" },
      { item: "Dry pasta", amount: "100g" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Fresh parsley, chopped", amount: "2 tbsp" }
    ],
    instructions: "Cook pasta according to package directions.\nReserve 1/2 cup pasta water, then drain.\nHeat olive oil in pan, add garlic.\nSauté garlic for 30 seconds until fragrant.\nAdd tuna and break up with fork.\nAdd cooked pasta and some pasta water.\nToss together, add parsley.\nSeason with salt and pepper to taste.",
    protein: 28,
    carbs: 52,
    fat: 12,
    calories: 430,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800"
  },
  {
    id: 9,
    name: "Avocado Toast",
    ingredients: [
      { item: "Whole grain bread", amount: "2 slices" },
      { item: "Ripe avocado", amount: "1 avocado" },
      { item: "Salt", amount: "pinch" },
      { item: "Black pepper", amount: "pinch" },
      { item: "Lemon juice", amount: "1/2 lemon" }
    ],
    instructions: "Toast bread until golden brown.\nHalve avocado, remove pit, and scoop flesh into bowl.\nMash avocado with fork.\nAdd lemon juice, salt, and pepper.\nMix well.\nSpread avocado mixture on toasted bread.\nAdd extra pepper or red pepper flakes if desired.",
    protein: 6,
    carbs: 28,
    fat: 15,
    calories: 280,
    prepTime: 5,
    image: "https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg"
  },
  {
    id: 10,
    name: "Protein Pancakes",
    ingredients: [
      { item: "Large eggs", amount: "2 eggs" },
      { item: "Ripe banana", amount: "1 banana" },
      { item: "Rolled oats", amount: "1/4 cup" },
      { item: "Vanilla protein powder", amount: "1 scoop (30g)" }
    ],
    instructions: "Blend all ingredients until smooth.\nHeat non-stick pan over medium heat.\nPour batter to make 4-5 small pancakes.\nCook for 2-3 minutes until bubbles form.\nFlip and cook for another 2 minutes.\nStack and serve with berries or syrup.",
    protein: 24,
    carbs: 35,
    fat: 8,
    calories: 320,
    prepTime: 10,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800"
  },
  {
    id: 11,
    name: "Veggie Omelette",
    ingredients: [
      { item: "Large eggs", amount: "3 eggs" },
      { item: "Bell pepper, diced", amount: "1/4 pepper" },
      { item: "Onion, diced", amount: "1/4 onion" },
      { item: "Spinach", amount: "1/2 cup" },
      { item: "Shredded cheese", amount: "30g" }
    ],
    instructions: "Beat eggs in a bowl.\nHeat non-stick pan over medium heat.\nSauté onion and pepper for 2 minutes.\nAdd spinach and cook until wilted.\nPour eggs over vegetables.\nWhen eggs set, sprinkle cheese on half.\nFold over and serve.",
    protein: 20,
    carbs: 6,
    fat: 15,
    calories: 240,
    prepTime: 10,
    image: "https://images.pexels.com/photos/6294366/pexels-photo-6294366.jpeg"
  },
  {
    id: 12,
    name: "Chicken Burrito Bowl",
    ingredients: [
      { item: "Grilled chicken, diced", amount: "150g" },
      { item: "Cooked brown rice", amount: "3/4 cup" },
      { item: "Black beans", amount: "1/2 cup" },
      { item: "Corn", amount: "1/4 cup" },
      { item: "Salsa", amount: "2 tbsp" },
      { item: "Lettuce", amount: "1/2 cup" }
    ],
    instructions: "Cook rice according to package.\nGrill and dice chicken.\nHeat black beans and corn.\nPlace rice in bowl.\nTop with chicken, beans, corn, and lettuce.\nAdd salsa on top.\nMix together when ready to eat.",
    protein: 32,
    carbs: 50,
    fat: 12,
    calories: 460,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800"
  },
  {
    id: 13,
    name: "Spaghetti Bolognese",
    ingredients: [
      { item: "Ground beef", amount: "150g" },
      { item: "Tomato sauce", amount: "1 cup" },
      { item: "Spaghetti", amount: "100g" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Onion, diced", amount: "1/4 onion" }
    ],
    instructions: "Cook spaghetti according to package.\nBrown ground beef in pan.\nAdd onion and garlic, cook for 2 minutes.\nAdd tomato sauce and simmer for 10 minutes.\nSeason with salt, pepper, and herbs.\nDrain pasta and plate.\nTop with bolognese sauce.",
    protein: 30,
    carbs: 55,
    fat: 15,
    calories: 520,
    prepTime: 30,
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800"
  },

  {
    id: 15,
    name: "Egg & Tuna Salad",
    ingredients: [
      { item: "Hard-boiled eggs, chopped", amount: "2 eggs" },
      { item: "Tuna in water", amount: "1 can (120g)" },
      { item: "Mayonnaise", amount: "1 tbsp" },
      { item: "Mixed lettuce", amount: "2 cups" },
      { item: "Dill pickles, chopped", amount: "2 pickles" }
    ],
    instructions: "Boil eggs for 10 minutes, cool and peel.\nChop eggs and mix with tuna.\nAdd mayonnaise and pickles.\nMix well and season to taste.\nServe over lettuce.",
    protein: 32,
    carbs: 3,
    fat: 20,
    calories: 330,
    prepTime: 12,
    image: "https://images.pexels.com/photos/5713731/pexels-photo-5713731.jpeg"
  },
  
  {
    id: 17,
    name: "Berry Smoothie Bowl",
    ingredients: [
      { item: "Mixed berries (frozen)", amount: "1 cup" },
      { item: "Banana", amount: "1 banana" },
      { item: "Greek yogurt", amount: "150g" },
      { item: "Granola", amount: "1/4 cup" }
    ],
    instructions: "Blend berries, banana, and yogurt until smooth.\nPour into bowl.\nTop with granola.\nAdd fresh berries if desired.\nServe immediately.",
    protein: 12,
    carbs: 45,
    fat: 8,
    calories: 310,
    prepTime: 5,
    image: "https://images.pexels.com/photos/31472329/pexels-photo-31472329.jpeg"
  },
  {
    id: 18,
    name: "Beef & Sweet Potato Bowl",
    ingredients: [
      { item: "Ground beef", amount: "150g" },
      { item: "Sweet potato", amount: "1 medium (200g)" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Garlic, minced", amount: "2 cloves" }
    ],
    instructions: "Dice sweet potato and roast at 400°F for 25 minutes.\nBrown ground beef in pan.\nAdd garlic and cook 1 minute.\nAdd spinach and wilt.\nCombine beef mixture with sweet potato.\nSeason and serve.",
    protein: 28,
    carbs: 40,
    fat: 14,
    calories: 430,
    prepTime: 25,
    image: "https://images.pexels.com/photos/30635686/pexels-photo-30635686.jpeg"
  },
  {
    id: 19,
    name: "Tofu Stir Fry",
    ingredients: [
      { item: "Firm tofu, cubed", amount: "200g" },
      { item: "Broccoli florets", amount: "1 cup" },
      { item: "Bell pepper, sliced", amount: "1 pepper" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Garlic, minced", amount: "2 cloves" }
    ],
    instructions: "Press tofu to remove excess water, cube.\nHeat wok over high heat.\nStir-fry tofu until golden, 5 minutes.\nRemove tofu and set aside.\nStir-fry vegetables with garlic for 3 minutes.\nReturn tofu, add soy sauce.\nToss and serve over rice.",
    protein: 20,
    carbs: 22,
    fat: 10,
    calories: 290,
    prepTime: 15,
    image: "https://images.pexels.com/photos/29145753/pexels-photo-29145753.jpeg"
  },
  {
    id: 20,
    name: "Scrambled Eggs & Toast",
    ingredients: [
      { item: "Large eggs", amount: "3 eggs" },
      { item: "Butter", amount: "1 tsp" },
      { item: "Whole wheat bread", amount: "2 slices" },
      { item: "Salt", amount: "to taste" }
    ],
    instructions: "Beat eggs with salt.\nToast bread.\nMelt butter in pan over medium heat.\nAdd eggs and stir gently.\nCook until soft curds form.\nServe with toast.",
    protein: 18,
    carbs: 18,
    fat: 14,
    calories: 260,
    prepTime: 6,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800"
  },
  {
    id: 21,
    name: "Chicken Pita Pocket",
    ingredients: [
      { item: "Grilled chicken, sliced", amount: "120g" },
      { item: "Pita bread", amount: "1 pita" },
      { item: "Lettuce", amount: "1/2 cup" },
      { item: "Tomato, diced", amount: "1 tomato" },
      { item: "Tahini sauce", amount: "2 tbsp" }
    ],
    instructions: "Warm pita bread slightly.\nCut pita in half to create pockets.\nSpread tahini inside each pocket.\nAdd lettuce, tomato, and chicken.\nServe immediately.",
    protein: 30,
    carbs: 36,
    fat: 10,
    calories: 390,
    prepTime: 12,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800"
  },
  
  {
    id: 23,
    name: "Egg Salad Sandwich",
    ingredients: [
      { item: "Hard-boiled eggs", amount: "3 eggs" },
      { item: "Mayonnaise", amount: "2 tbsp" },
      { item: "Mustard", amount: "1 tsp" },
      { item: "Bread", amount: "2 slices" },
      { item: "Lettuce leaves", amount: "2 leaves" }
    ],
    instructions: "Boil eggs for 10 minutes, cool and peel.\nChop eggs finely.\nMix with mayonnaise and mustard.\nSeason with salt and pepper.\nSpread on bread.\nAdd lettuce leaves.\nTop with second slice of bread.",
    protein: 16,
    carbs: 28,
    fat: 18,
    calories: 350,
    prepTime: 8,
    image: "https://images.pexels.com/photos/31150259/pexels-photo-31150259.jpeg"
  },
  {
    id: 24,
    name: "Veggie Pasta",
    ingredients: [
      { item: "Pasta", amount: "100g" },
      { item: "Zucchini, sliced", amount: "1 zucchini" },
      { item: "Tomato, diced", amount: "1 tomato" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Garlic", amount: "2 cloves" }
    ],
    instructions: "Cook pasta according to package.\nHeat olive oil in pan.\nSauté garlic for 30 seconds.\nAdd zucchini and cook for 3 minutes.\nAdd tomatoes and cook for 2 minutes.\nToss with drained pasta.\nSeason and serve.",
    protein: 12,
    carbs: 52,
    fat: 10,
    calories: 380,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800"
  },
  {
    id: 25,
    name: "Chicken Egg Stir Fry",
    ingredients: [
      { item: "Chicken, diced", amount: "120g" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Rice", amount: "3/4 cup" },
      { item: "Carrot, diced", amount: "1 carrot" },
      { item: "Soy sauce", amount: "2 tbsp" }
    ],
    instructions: "Cook rice according to package.\nScramble eggs in hot wok, set aside.\nStir-fry chicken until cooked through.\nAdd diced carrots and cook for 2 minutes.\nAdd cooked rice and break up clumps.\nAdd scrambled eggs and soy sauce.\nToss everything together.\nServe hot.",
    protein: 36,
    carbs: 42,
    fat: 12,
    calories: 440,
    prepTime: 15,
    image: "https://images.pexels.com/photos/31692606/pexels-photo-31692606.jpeg"
  },

  {
    id: 27,
    name: "Lentil Dahl",
    ingredients: [
      { item: "Red lentils", amount: "1 cup" },
      { item: "Curry powder", amount: "1 tbsp" },
      { item: "Tomato, diced", amount: "1 tomato" },
      { item: "Onion, diced", amount: "1 onion" },
      { item: "Garlic", amount: "2 cloves" }
    ],
    instructions: "Rinse lentils thoroughly.\nSauté onion and garlic until soft.\nAdd curry powder and cook for 1 minute.\nAdd lentils, tomato, and water.\nSimmer for 25-30 minutes until lentils are soft.\nSeason with salt.\nServe with rice or naan.",
    protein: 18,
    carbs: 36,
    fat: 6,
    calories: 300,
    prepTime: 35,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800"
  },

  {
    id: 29,
    name: "Caprese Salad",
    ingredients: [
      { item: "Fresh mozzarella", amount: "150g" },
      { item: "Tomatoes", amount: "2 tomatoes" },
      { item: "Fresh basil leaves", amount: "10 leaves" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Balsamic vinegar", amount: "1 tbsp" }
    ],
    instructions: "Slice mozzarella and tomatoes into rounds.\nArrange alternating slices on a plate.\nTuck basil leaves between slices.\nDrizzle with olive oil and balsamic vinegar.\nSeason with salt and pepper.\nServe immediately.",
    protein: 12,
    carbs: 6,
    fat: 14,
    calories: 200,
    prepTime: 10,
    image: "https://images.pexels.com/photos/13241736/pexels-photo-13241736.jpeg"
  },
  {
    id: 30,
    name: "Mushroom Risotto",
    ingredients: [
      { item: "Arborio rice", amount: "1 cup" },
      { item: "Mushrooms", amount: "200g" },
      { item: "Parmesan", amount: "50g" },
      { item: "Onion", amount: "1 onion" },
      { item: "White wine", amount: "1/4 cup" }
    ],
    instructions: "Sauté onion until soft.\nAdd mushrooms and cook until golden.\nAdd rice and stir to coat.\nAdd wine and let it absorb.\nGradually add warm broth, stirring constantly.\nCook for 18-20 minutes until rice is creamy.\nStir in parmesan.\nServe immediately.",
    protein: 10,
    carbs: 60,
    fat: 14,
    calories: 460,
    prepTime: 35,
    image: "https://images.unsplash.com/photo-1476124369491-f61c20c8a4a6?w=800"
  },
  {
    id: 31,
    name: "Pesto Chicken Pasta",
    ingredients: [
      { item: "Chicken", amount: "150g" },
      { item: "Pasta", amount: "100g" },
      { item: "Dairy-free basil pesto (parve)", amount: "3 tbsp" },
      { item: "Pine nuts", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Cook pasta according to package.\nCook chicken until done, slice.\nDrain pasta and return to pot.\nAdd pesto and olive oil, toss.\nAdd chicken and pine nuts.\nMix well.\nServe immediately.",
    protein: 34,
    carbs: 50,
    fat: 18,
    calories: 560,
    prepTime: 25,
    image: "https://images.pexels.com/photos/14070550/pexels-photo-14070550.jpeg"
  },
  {
    id: 32,
    name: "Black Bean Burrito",
    ingredients: [
      { item: "Black beans", amount: "1 cup" },
      { item: "Rice", amount: "1/2 cup" },
      { item: "Large tortilla", amount: "1 tortilla" },
      { item: "Salsa", amount: "1/4 cup" },
      { item: "Avocado", amount: "1/2 avocado" }
    ],
    instructions: "Cook rice according to package.\nHeat black beans.\nWarm tortilla.\nLayer rice and beans in center.\nAdd sliced avocado and salsa.\nFold in sides and roll tightly.\nServe immediately.",
    protein: 14,
    carbs: 60,
    fat: 12,
    calories: 420,
    prepTime: 15,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800"
  },

  {
    id: 34,
    name: "Chickpea Salad Sandwich",
    ingredients: [
      { item: "Chickpeas", amount: "1 can" },
      { item: "Mayonnaise", amount: "2 tbsp" },
      { item: "Celery stalk", amount: "1 stalk" },
      { item: "Bread", amount: "2 slices" },
      { item: "Lettuce", amount: "2 leaves" }
    ],
    instructions: "Drain and mash chickpeas with fork.\nChop celery finely.\nMix chickpeas, celery, and mayo.\nSeason with salt and pepper.\nSpread on bread.\nAdd lettuce.\nTop with second slice.",
    protein: 14,
    carbs: 30,
    fat: 12,
    calories: 320,
    prepTime: 10,
    image: "https://images.pexels.com/photos/27600334/pexels-photo-27600334.jpeg"
  },
  {
    id: 36,
    name: "Quinoa & Black Beans",
    ingredients: [
      { item: "Quinoa", amount: "1/2 cup" },
      { item: "Black beans", amount: "1 cup" },
      { item: "Corn", amount: "1/2 cup" },
      { item: "Lime", amount: "1 lime" },
      { item: "Fresh cilantro", amount: "1/4 cup" }
    ],
    instructions: "Cook quinoa according to package.\nHeat black beans and corn.\nCombine quinoa, beans, and corn in bowl.\nSqueeze lime juice over.\nChop and add cilantro.\nSeason with salt and pepper.\nServe warm or cold.",
    protein: 12,
    carbs: 44,
    fat: 8,
    calories: 320,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800"
  },
  {
    id: 37,
    name: "Miso Soup with Tofu",
    ingredients: [
      { item: "Miso paste", amount: "3 tbsp" },
      { item: "Tofu", amount: "100g" },
      { item: "Scallions", amount: "2 scallions" },
      { item: "Wakame", amount: "1 tbsp" },
      { item: "Soy sauce", amount: "1 tsp" }
    ],
    instructions: "Bring 2 cups water to boil.\nCube tofu and chop scallions.\nReduce heat and add wakame.\nDissolve miso paste in small amount of hot water.\nAdd miso mixture to pot.\nAdd tofu and soy sauce.\nSimmer 2 minutes (don't boil).\nGarnish with scallions and serve.",
    protein: 10,
    carbs: 8,
    fat: 6,
    calories: 120,
    prepTime: 10,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800"
  },
  {
    id: 38,
    name: "Korean Beef Bowl",
    ingredients: [
      { item: "Ground beef", amount: "150g" },
      { item: "Rice", amount: "3/4 cup" },
      { item: "Soy sauce", amount: "3 tbsp" },
      { item: "Garlic", amount: "2 cloves" },
      { item: "Sesame oil", amount: "1 tsp" }
    ],
    instructions: "Cook rice according to package.\nBrown ground beef with minced garlic.\nAdd soy sauce and sesame oil.\nCook for 2-3 minutes.\nPlace rice in bowl.\nTop with beef mixture.\nGarnish with sesame seeds if desired.",
    protein: 28,
    carbs: 50,
    fat: 18,
    calories: 540,
    prepTime: 20,
    image: "https://images.pexels.com/photos/5774004/pexels-photo-5774004.jpeg"
  },
  {
    id: 39,
    name: "Breakfast Burrito",
    ingredients: [
      { item: "Eggs", amount: "2 eggs" },
      { item: "Tortilla", amount: "1 tortilla" },
      { item: "Cheese", amount: "30g" },
      { item: "Small potato", amount: "1 potato" },
      { item: "Salsa", amount: "2 tbsp" }
    ],
    instructions: "Dice and cook potato until crispy.\nScramble eggs.\nWarm tortilla.\nLayer eggs, potato, and cheese in center.\nTop with salsa.\nFold in sides and roll tightly.\nServe immediately.",
    protein: 20,
    carbs: 40,
    fat: 18,
    calories: 450,
    prepTime: 12,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800"
  },

  {
    id: 41,
    name: "Paneer Tikka Bowl",
    ingredients: [
      { item: "Paneer", amount: "200g" },
      { item: "Yogurt", amount: "150g" },
      { item: "Tikka spices", amount: "2 tbsp" },
      { item: "Bell pepper", amount: "1 pepper" },
      { item: "Onion", amount: "1 onion" }
    ],
    instructions: "Cut paneer into cubes.\nMix yogurt with tikka spices.\nMarinate paneer for 15 minutes.\nCut peppers and onion into chunks.\nThread onto skewers alternating with paneer.\nGrill or bake until charred.\nServe over rice.",
    protein: 22,
    carbs: 18,
    fat: 20,
    calories: 360,
    prepTime: 30,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800"
  },
  {
    id: 42,
    name: "French Toast",
    ingredients: [
      { item: "Bread", amount: "2 slices" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Milk", amount: "1/4 cup" },
      { item: "Cinnamon", amount: "1 tsp" },
      { item: "Honey", amount: "1 tbsp" }
    ],
    instructions: "Beat eggs, milk, and cinnamon together.\nDip bread slices in mixture.\nHeat pan over medium heat.\nCook bread 2-3 minutes per side until golden.\nDrizzle with honey.\nServe immediately.",
    protein: 12,
    carbs: 40,
    fat: 10,
    calories: 360,
    prepTime: 10,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800"
  },
  {
    id: 43,
    name: "Teriyaki Salmon",
    ingredients: [
      { item: "Salmon", amount: "150g" },
      { item: "Teriyaki sauce", amount: "3 tbsp" },
      { item: "Rice", amount: "3/4 cup" },
      { item: "Broccoli", amount: "1 cup" }
    ],
    instructions: "Cook rice according to package.\nSteam broccoli until tender.\nMarinate salmon in teriyaki for 10 minutes.\nPan-sear or bake salmon until cooked.\nPlace rice in bowl.\nTop with salmon and broccoli.\nDrizzle remaining teriyaki over dish.",
    protein: 34,
    carbs: 40,
    fat: 16,
    calories: 480,
    prepTime: 22,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800"
  },
  {
    id: 44,
    name: "Sweet Potato Hash with Egg",
    ingredients: [
      { item: "Sweet potato", amount: "1 potato" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Onion", amount: "1/4 onion" },
      { item: "Bell pepper", amount: "1/2 pepper" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Dice sweet potato, onion, and pepper.\nHeat oil in pan.\nCook sweet potato for 10 minutes.\nAdd onion and pepper, cook 5 minutes.\nMake two wells in hash.\nCrack eggs into wells.\nCover and cook until eggs are done.\nServe immediately.",
    protein: 12,
    carbs: 34,
    fat: 14,
    calories: 340,
    prepTime: 18,
    image: "https://images.pexels.com/photos/6529692/pexels-photo-6529692.jpeg"
  },
  {
    id: 45,
    name: "Tomato Basil Soup",
    ingredients: [
      { item: "Tomatoes", amount: "4 tomatoes" },
      { item: "Fresh basil", amount: "1/4 cup" },
      { item: "Cream", amount: "1/4 cup" },
      { item: "Onion", amount: "1 onion" },
      { item: "Garlic", amount: "2 cloves" }
    ],
    instructions: "Sauté onion and garlic until soft.\nAdd chopped tomatoes.\nSimmer for 15 minutes.\nAdd basil and blend until smooth.\nStir in cream.\nSeason with salt and pepper.\nServe hot.",
    protein: 4,
    carbs: 18,
    fat: 8,
    calories: 170,
    prepTime: 25,
    image: "https://images.pexels.com/photos/14614069/pexels-photo-14614069.jpeg"
  },
  {
    id: 46,
    name: "Grilled Veggie Sandwich",
    ingredients: [
      { item: "Bread", amount: "2 slices" },
      { item: "Zucchini", amount: "1 zucchini" },
      { item: "Eggplant", amount: "1/2 eggplant" },
      { item: "Bell pepper", amount: "1 pepper" },
      { item: "Cheese", amount: "50g" }
    ],
    instructions: "Slice vegetables thinly.\nGrill vegetables until tender.\nToast bread lightly.\nLayer grilled vegetables on bread.\nAdd cheese slices.\nTop with second slice.\nCut in half and serve.",
    protein: 12,
    carbs: 36,
    fat: 14,
    calories: 350,
    prepTime: 12,
    image: "https://images.pexels.com/photos/4409303/pexels-photo-4409303.jpeg"
  },
  
  {
    id: 48,
    name: "Garlic Herb Chicken",
    ingredients: [
      { item: "Chicken breast", amount: "150g" },
      { item: "Garlic", amount: "3 cloves" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Fresh herbs", amount: "2 tbsp" },
      { item: "Lemon", amount: "1/2 lemon" }
    ],
    instructions: "Season chicken with salt and pepper.\nHeat olive oil in pan with minced garlic.\nCook chicken 6-7 minutes per side.\nAdd herbs and lemon juice.\nBaste chicken with the garlic oil.\nLet rest 5 minutes.\nServe with vegetables or rice.",
    protein: 34,
    carbs: 4,
    fat: 20,
    calories: 380,
    prepTime: 25,
    image: "https://images.pexels.com/photos/145804/pexels-photo-145804.jpeg"
  },
  {
    id: 49,
    name: "Vegan Buddha Bowl",
    ingredients: [
      { item: "Quinoa", amount: "1/2 cup" },
      { item: "Tofu", amount: "100g" },
      { item: "Avocado", amount: "1/2 avocado" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Chickpeas", amount: "1/2 cup" }
    ],
    instructions: "Cook quinoa according to package.\nPan-fry cubed tofu until golden.\nArrange quinoa in bowl.\nTop with spinach, tofu, and chickpeas.\nAdd sliced avocado.\nDrizzle with tahini or dressing.\nServe immediately.",
    protein: 18,
    carbs: 46,
    fat: 14,
    calories: 420,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800"
  },
  {
    id: 50,
    name: "BBQ Pulled Beef",
    ingredients: [
      { item: "Beef chuck (kosher)", amount: "300g" },
      { item: "BBQ sauce", amount: "1/4 cup" },
      { item: "Bun", amount: "1 bun" },
      { item: "Coleslaw", amount: "1/2 cup" }
    ],
    instructions: "Slow cook beef for 3 hours until tender.\nShred beef with forks.\nMix with BBQ sauce.\nToast bun lightly.\nPile pulled beef on bun.\nTop with coleslaw.\nServe immediately.",
    protein: 30,
    carbs: 40,
    fat: 24,
    calories: 620,
    prepTime: 180,
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800"
  },
  {
    id: 51,
    name: "Smashed Chickpea Toast",
    ingredients: [
      { item: "Chickpeas", amount: "1 can" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Lemon", amount: "1/2 lemon" },
      { item: "Bread", amount: "2 slices" },
      { item: "Fresh herbs", amount: "2 tbsp" }
    ],
    instructions: "Drain and rinse chickpeas.\nMash chickpeas with fork.\nMix with olive oil, lemon juice, and herbs.\nSeason with salt and pepper.\nToast bread.\nSpread chickpea mixture on toast.\nServe immediately.",
    protein: 10,
    carbs: 28,
    fat: 10,
    calories: 260,
    prepTime: 8,
    image: "https://images.pexels.com/photos/34861560/pexels-photo-34861560.jpeg"
  },
  {
    id: 52,
    name: "Teriyaki Tofu Bowl",
    ingredients: [
      { item: "Tofu", amount: "200g" },
      { item: "Rice", amount: "3/4 cup" },
      { item: "Teriyaki", amount: "3 tbsp" },
      { item: "Broccoli", amount: "1 cup" },
      { item: "Carrot", amount: "1 carrot" }
    ],
    instructions: "Cook rice according to package.\nCube tofu and pan-fry until golden.\nSteam broccoli and sliced carrot.\nAdd teriyaki sauce to tofu.\nPlace rice in bowl.\nTop with tofu and vegetables.\nServe immediately.",
    protein: 20,
    carbs: 48,
    fat: 12,
    calories: 420,
    prepTime: 18,
    image: "https://images.pexels.com/photos/30506297/pexels-photo-30506297.jpeg"
  },

  {
    id: 54,
    name: "Mango Chicken Salad",
    ingredients: [
      { item: "Chicken", amount: "150g" },
      { item: "Mango", amount: "1 mango" },
      { item: "Lettuce", amount: "2 cups" },
      { item: "Red onion", amount: "1/4 onion" },
      { item: "Lime", amount: "1 lime" }
    ],
    instructions: "Grill and slice chicken.\nDice mango.\nSlice red onion thinly.\nArrange lettuce in bowl.\nTop with chicken, mango, and onion.\nSqueeze lime juice over.\nSeason and serve.",
    protein: 30,
    carbs: 18,
    fat: 8,
    calories: 320,
    prepTime: 12,
    image: "https://images.pexels.com/photos/35290622/pexels-photo-35290622.jpeg"
  },
  {
    id: 55,
    name: "Polenta with Mushrooms",
    ingredients: [
      { item: "Polenta", amount: "1 cup" },
      { item: "Mushrooms", amount: "200g" },
      { item: "Parmesan", amount: "50g" },
      { item: "Garlic", amount: "2 cloves" },
      { item: "Fresh thyme", amount: "1 tbsp" }
    ],
    instructions: "Cook polenta according to package.\nSauté mushrooms with garlic and thyme.\nStir parmesan into cooked polenta.\nPlate polenta.\nTop with mushroom mixture.\nServe immediately.",
    protein: 8,
    carbs: 46,
    fat: 12,
    calories: 360,
    prepTime: 30,
    image: "https://images.unsplash.com/photo-1476124369491-f61c20c8a4a6?w=800"
  },
  {
    id: 56,
    name: "Beef Sausage Pasta",
    ingredients: [
      { item: "Beef sausage (kosher)", amount: "200g" },
      { item: "Pasta", amount: "150g" },
      { item: "Tomato sauce", amount: "1 cup" },
      { item: "Bell pepper", amount: "1 pepper" },
      { item: "Onion", amount: "1 onion" }
    ],
    instructions: "Cook pasta according to package.\nBrown sausage in pan.\nAdd sliced peppers and onions.\nCook until softened.\nAdd tomato sauce and simmer.\nToss with drained pasta.\nServe hot.",
    protein: 30,
    carbs: 60,
    fat: 22,
    calories: 640,
    prepTime: 30,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800"
  },
  {
    id: 57,
    name: "Green Smoothie",
    ingredients: [
      { item: "Spinach", amount: "1 cup" },
      { item: "Banana", amount: "1 banana" },
      { item: "Apple", amount: "1 apple" },
      { item: "Almond milk", amount: "1 cup" },
      { item: "Chia seeds", amount: "1 tbsp" }
    ],
    instructions: "Add all ingredients to blender.\nBlend until smooth.\nAdd more milk if too thick.\nPour into glass.\nServe immediately.",
    protein: 8,
    carbs: 40,
    fat: 6,
    calories: 220,
    prepTime: 5,
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800"
  },
  {
    id: 58,
    name: "Beet & Goat Cheese Salad",
    ingredients: [
      { item: "Beets", amount: "2 beets" },
      { item: "Goat cheese", amount: "100g" },
      { item: "Walnuts", amount: "1/4 cup" },
      { item: "Arugula", amount: "2 cups" },
      { item: "Olive oil", amount: "2 tbsp" }
    ],
    instructions: "Roast beets until tender, slice.\nArrange arugula on plate.\nTop with beet slices.\nCrumble goat cheese over.\nAdd walnuts.\nDrizzle with olive oil.\nServe immediately.",
    protein: 8,
    carbs: 12,
    fat: 16,
    calories: 240,
    prepTime: 12,
    image: "https://images.pexels.com/photos/27969815/pexels-photo-27969815.jpeg"
  },
  {
    id: 59,
    name: "Chicken Teriyaki Skewers",
    ingredients: [
      { item: "Chicken", amount: "200g" },
      { item: "Teriyaki", amount: "1/4 cup" },
      { item: "Bell pepper", amount: "1 pepper" },
      { item: "Onion", amount: "1 onion" },
      { item: "Wooden skewers", amount: "4 skewers" }
    ],
    instructions: "Cut chicken into cubes.\nMarinate in teriyaki for 15 minutes.\nCut peppers and onion into chunks.\nThread alternating chicken and vegetables onto skewers.\nGrill or bake until chicken is cooked.\nBrush with remaining teriyaki.\nServe hot.",
    protein: 32,
    carbs: 12,
    fat: 10,
    calories: 300,
    prepTime: 20,
    image: "https://images.pexels.com/photos/13065193/pexels-photo-13065193.jpeg"
  },




  {
    id: 60,
    name: "Shakshuka",
    ingredients: [
      { item: "Eggs", amount: "3 large" },
      { item: "Tomatoes, diced", amount: "3 medium" },
      { item: "Bell pepper, diced", amount: "1 medium" },
      { item: "Onion, diced", amount: "1 medium" },
      { item: "Garlic, minced", amount: "3 cloves" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Paprika", amount: "1 tsp" }
    ],
    instructions: "Heat olive oil in a pan over medium heat.\nSauté onion and bell pepper until soft, about 5 minutes.\nAdd garlic and spices, cook for 1 minute.\nAdd diced tomatoes and simmer for 10 minutes.\nMake 3 wells in the sauce and crack eggs into them.\nCover and cook until eggs are set, about 8 minutes.\nSeason with salt and pepper to taste.",
    protein: 20,
    carbs: 18,
    fat: 22,
    calories: 340,
    prepTime: 30,
    image: "https://images.pexels.com/photos/2067470/pexels-photo-2067470.jpeg"
  },
  {
    id: 61,
    name: "Baked Salmon with Vegetables",
    ingredients: [
      { item: "Salmon fillet", amount: "180g" },
      { item: "Broccoli florets", amount: "1 cup" },
      { item: "Zucchini, sliced", amount: "1 medium" },
      { item: "Olive oil", amount: "1.5 tbsp" },
      { item: "Lemon", amount: "1/2" },
      { item: "Dill", amount: "1 tbsp" }
    ],
    instructions: "Preheat oven to 200°C (400°F).\nPlace salmon and vegetables on a baking sheet.\nDrizzle with olive oil and lemon juice.\nSeason with salt, pepper, and dill.\nBake for 15-18 minutes until salmon flakes easily.\nServe immediately.",
    protein: 38,
    carbs: 12,
    fat: 18,
    calories: 360,
    prepTime: 25,
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800"
  },
  {
    id: 62,
    name: "Hummus Bowl with Tahini",
    ingredients: [
      { item: "Chickpeas, cooked", amount: "1.5 cups" },
      { item: "Tahini", amount: "3 tbsp" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Garlic", amount: "2 cloves" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Cherry tomatoes", amount: "1 cup" },
      { item: "Cucumber", amount: "1 medium" }
    ],
    instructions: "Blend chickpeas, tahini, lemon juice, and garlic until smooth.\nAdd water as needed for desired consistency.\nSpread hummus in a bowl.\nDrizzle with olive oil.\nTop with chopped tomatoes and cucumber.\nServe with pita or vegetables.",
    protein: 16,
    carbs: 42,
    fat: 24,
    calories: 440,
    prepTime: 15,
    image: "https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg"
  },
  {
    id: 63,
    name: "Israeli Couscous Salad",
    ingredients: [
      { item: "Israeli couscous", amount: "1 cup" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Cucumber, diced", amount: "1 medium" },
      { item: "Red onion, diced", amount: "1/4 cup" },
      { item: "Fresh parsley", amount: "1/4 cup" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "2 tbsp" }
    ],
    instructions: "Cook couscous according to package directions.\nDrain and let cool.\nChop all vegetables and herbs.\nCombine couscous with vegetables in a bowl.\nWhisk together olive oil and lemon juice.\nToss salad with dressing.\nSeason with salt and pepper.",
    protein: 8,
    carbs: 48,
    fat: 16,
    calories: 360,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800"
  },
  {
    id: 64,
    name: "Chicken Schnitzel",
    ingredients: [
      { item: "Chicken breast", amount: "200g" },
      { item: "Breadcrumbs", amount: "1/2 cup" },
      { item: "Egg", amount: "1 large" },
      { item: "Flour", amount: "1/4 cup" },
      { item: "Vegetable oil", amount: "3 tbsp" },
      { item: "Lemon wedges", amount: "2" }
    ],
    instructions: "Pound chicken breast to even thickness.\nSet up three bowls: flour, beaten egg, breadcrumbs.\nCoat chicken in flour, then egg, then breadcrumbs.\nHeat oil in a pan over medium-high heat.\nFry chicken for 4-5 minutes per side until golden.\nDrain on paper towels.\nServe with lemon wedges.",
    protein: 42,
    carbs: 28,
    fat: 18,
    calories: 440,
    prepTime: 25,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800"
  },
  {
    id: 65,
    name: "Roasted Vegetable Quinoa Bowl",
    ingredients: [
      { item: "Quinoa", amount: "3/4 cup" },
      { item: "Sweet potato, cubed", amount: "1 medium" },
      { item: "Eggplant, cubed", amount: "1 cup" },
      { item: "Red bell pepper", amount: "1 medium" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Tahini", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" }
    ],
    instructions: "Preheat oven to 220°C (425°F).\nToss vegetables with olive oil, salt, and pepper.\nRoast for 25-30 minutes until tender.\nCook quinoa according to package directions.\nMix tahini with lemon juice and water to make dressing.\nCombine quinoa with roasted vegetables.\nDrizzle with tahini dressing.",
    protein: 12,
    carbs: 52,
    fat: 16,
    calories: 400,
    prepTime: 40,
    image: "https://images.pexels.com/photos/25639529/pexels-photo-25639529.jpeg"
  },
  {
    id: 66,
    name: "Egg and Vegetable Scramble",
    ingredients: [
      { item: "Eggs", amount: "3 large" },
      { item: "Spinach", amount: "2 cups" },
      { item: "Mushrooms, sliced", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/4 cup" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Feta cheese", amount: "30g" }
    ],
    instructions: "Heat olive oil in a pan over medium heat.\nSauté onion and mushrooms for 5 minutes.\nAdd spinach and cook until wilted.\nBeat eggs and pour into the pan.\nScramble gently until eggs are cooked.\nCrumble feta cheese on top.\nServe immediately.",
    protein: 24,
    carbs: 8,
    fat: 20,
    calories: 300,
    prepTime: 15,
    image: "https://images.pexels.com/photos/25906336/pexels-photo-25906336.jpeg"
  },
  {
    id: 67,
    name: "Turkey and Avocado Wrap",
    ingredients: [
      { item: "Whole wheat tortilla", amount: "1 large" },
      { item: "Turkey breast slices", amount: "100g" },
      { item: "Avocado, sliced", amount: "1/2 medium" },
      { item: "Lettuce", amount: "1 cup" },
      { item: "Tomato, sliced", amount: "1 medium" },
      { item: "Mustard", amount: "1 tsp" }
    ],
    instructions: "Lay tortilla flat on a clean surface.\nSpread mustard over the tortilla.\nLayer turkey slices in the center.\nAdd avocado, lettuce, and tomato.\nFold in the sides and roll tightly.\nCut in half diagonally.\nServe immediately or wrap for later.",
    protein: 28,
    carbs: 32,
    fat: 14,
    calories: 360,
    prepTime: 10,
    image: "https://images.pexels.com/photos/4955260/pexels-photo-4955260.jpeg"
  },
  {
    id: 68,
    name: "Lentil Soup",
    ingredients: [
      { item: "Red lentils", amount: "1 cup" },
      { item: "Carrots, diced", amount: "2 medium" },
      { item: "Celery, diced", amount: "2 stalks" },
      { item: "Onion, diced", amount: "1 medium" },
      { item: "Vegetable broth", amount: "4 cups" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Heat olive oil in a pot over medium heat.\nSauté onion, carrots, and celery for 5 minutes.\nAdd lentils, broth, and cumin.\nBring to a boil, then reduce heat.\nSimmer for 25-30 minutes until lentils are tender.\nBlend partially for creamy texture if desired.\nSeason with salt and pepper.",
    protein: 18,
    carbs: 48,
    fat: 6,
    calories: 310,
    prepTime: 40,
    image: "https://images.pexels.com/photos/6120506/pexels-photo-6120506.jpeg"
  },
  {
    id: 69,
    name: "Mediterranean Tuna Salad",
    ingredients: [
      { item: "Canned tuna in water", amount: "150g" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Cucumber, diced", amount: "1 medium" },
      { item: "Olives, sliced", amount: "1/4 cup" },
      { item: "Red onion, thinly sliced", amount: "1/4 cup" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" }
    ],
    instructions: "Drain tuna and place in a bowl.\nAdd tomatoes, cucumber, olives, and onion.\nWhisk together olive oil and lemon juice.\nPour dressing over salad and toss gently.\nSeason with salt and pepper.\nServe immediately or chill for 30 minutes.\nEnjoy as is or over mixed greens.",
    protein: 32,
    carbs: 10,
    fat: 16,
    calories: 300,
    prepTime: 10,
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800"
  },


  // braekfast start
  {
    id: 71,
    name: "Baked Falafel Bowl",
    ingredients: [
      { item: "Chickpeas, cooked", amount: "1.5 cups" },
      { item: "Onion, chopped", amount: "1/2 medium" },
      { item: "Garlic cloves", amount: "3" },
      { item: "Fresh parsley", amount: "1/2 cup" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Mixed greens", amount: "2 cups" },
      { item: "Tahini sauce", amount: "2 tbsp" }
    ],
    instructions: "Preheat oven to 190°C (375°F).\nBlend chickpeas, onion, garlic, parsley, and spices in food processor.\nForm mixture into 8-10 small patties.\nPlace on lined baking sheet and brush with oil.\nBake for 25 minutes, flipping halfway.\nServe over greens with tahini sauce.\nAdd cucumber and tomato if desired.",
    protein: 20,
    carbs: 44,
    fat: 14,
    calories: 380,
    prepTime: 35,
    image: "https://images.pexels.com/photos/6275189/pexels-photo-6275189.jpeg"
  },
  {
    id: 72,
    name: "Chicken Stir-Fry with Vegetables",
    ingredients: [
      { item: "Chicken breast, sliced", amount: "180g" },
      { item: "Broccoli florets", amount: "1 cup" },
      { item: "Bell peppers, sliced", amount: "1 cup" },
      { item: "Snap peas", amount: "1 cup" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Sesame oil", amount: "1 tbsp" }
    ],
    instructions: "Heat sesame oil in a wok or large pan over high heat.\nAdd chicken and stir-fry for 5-6 minutes until cooked.\nRemove chicken and set aside.\nAdd vegetables and garlic, stir-fry for 4-5 minutes.\nReturn chicken to pan.\nAdd soy sauce and toss to combine.\nServe immediately over rice if desired.",
    protein: 36,
    carbs: 14,
    fat: 10,
    calories: 290,
    prepTime: 20,
    image: "https://images.pexels.com/photos/34599519/pexels-photo-34599519.png"
  },
  {
    id: 73,
    name: "Greek Yogurt Parfait",
    ingredients: [
      { item: "Greek yogurt", amount: "1 cup" },
      { item: "Mixed berries", amount: "1 cup" },
      { item: "Granola", amount: "1/4 cup" },
      { item: "Honey", amount: "1 tbsp" },
      { item: "Almonds, sliced", amount: "2 tbsp" },
      { item: "Chia seeds", amount: "1 tsp" }
    ],
    instructions: "Layer half the yogurt in a glass or bowl.\nAdd half the berries on top.\nSprinkle with half the granola and almonds.\nRepeat layers with remaining ingredients.\nDrizzle honey over the top.\nSprinkle chia seeds.\nServe immediately or refrigerate.",
    protein: 22,
    carbs: 46,
    fat: 12,
    calories: 370,
    prepTime: 5,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800"
  },
  {
    id: 74,
    name: "Stuffed Bell Peppers",
    ingredients: [
      { item: "Bell peppers", amount: "3 large" },
      { item: "Ground turkey", amount: "200g" },
      { item: "Brown rice, cooked", amount: "1 cup" },
      { item: "Tomato sauce", amount: "1/2 cup" },
      { item: "Onion, diced", amount: "1/2 medium" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Italian seasoning", amount: "1 tsp" }
    ],
    instructions: "Preheat oven to 180°C (350°F).\nCut tops off peppers and remove seeds.\nBrown turkey with onion and garlic in a pan.\nMix cooked turkey with rice, tomato sauce, and seasoning.\nStuff peppers with the mixture.\nPlace in baking dish with a little water.\nBake for 30-35 minutes until peppers are tender.",
    protein: 28,
    carbs: 36,
    fat: 8,
    calories: 330,
    prepTime: 50,
    image: "https://images.pexels.com/photos/15747862/pexels-photo-15747862.jpeg"
  },
  {
    id: 75,
    name: "Vegetable Omelet",
    ingredients: [
      { item: "Eggs", amount: "3 large" },
      { item: "Bell pepper, diced", amount: "1/2 cup" },
      { item: "Onion, diced", amount: "1/4 cup" },
      { item: "Mushrooms, sliced", amount: "1/2 cup" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Cheese, shredded", amount: "30g" }
    ],
    instructions: "Beat eggs with salt and pepper.\nHeat olive oil in a non-stick pan over medium heat.\nSauté vegetables for 3-4 minutes until soft.\nPour eggs over vegetables.\nCook for 2-3 minutes until edges set.\nSprinkle cheese on one half.\nFold omelet in half and cook 1 more minute.",
    protein: 26,
    carbs: 10,
    fat: 22,
    calories: 330,
    prepTime: 15,
    image: "https://images.pexels.com/photos/14302155/pexels-photo-14302155.jpeg"
  },
  {
    id: 76,
    name: "Asian Sesame Noodles",
    ingredients: [
      { item: "Whole wheat noodles", amount: "200g" },
      { item: "Edamame, shelled", amount: "1 cup" },
      { item: "Carrots, julienned", amount: "1 cup" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Sesame oil", amount: "1 tbsp" },
      { item: "Rice vinegar", amount: "1 tbsp" },
      { item: "Sesame seeds", amount: "1 tbsp" }
    ],
    instructions: "Cook noodles according to package directions.\nBlanch edamame in boiling water for 3 minutes.\nDrain noodles and rinse with cold water.\nMix soy sauce, sesame oil, and rice vinegar.\nToss noodles with sauce, edamame, and carrots.\nSprinkle with sesame seeds.\nServe cold or at room temperature.",
    protein: 16,
    carbs: 58,
    fat: 12,
    calories: 400,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800"
  },
  {
    id: 77,
    name: "Baked Cod with Herbs",
    ingredients: [
      { item: "Cod fillet", amount: "180g" },
      { item: "Cherry tomatoes", amount: "1 cup" },
      { item: "Garlic, minced", amount: "3 cloves" },
      { item: "Fresh basil", amount: "1/4 cup" },
      { item: "White wine", amount: "1/4 cup" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Lemon zest", amount: "1 tsp" }
    ],
    instructions: "Preheat oven to 200°C (400°F).\nPlace cod in a baking dish.\nScatter tomatoes and garlic around fish.\nDrizzle with olive oil and white wine.\nSprinkle with basil and lemon zest.\nSeason with salt and pepper.\nBake for 15-18 minutes until fish flakes easily.",
    protein: 36,
    carbs: 8,
    fat: 16,
    calories: 310,
    prepTime: 25,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800"
  },
  {
    id: 78,
    name: "Chickpea and Spinach Curry",
    ingredients: [
      { item: "Chickpeas, cooked", amount: "1.5 cups" },
      { item: "Spinach, fresh", amount: "3 cups" },
      { item: "Coconut milk", amount: "1 cup" },
      { item: "Onion, diced", amount: "1 medium" },
      { item: "Curry powder", amount: "2 tsp" },
      { item: "Ginger, grated", amount: "1 tbsp" },
      { item: "Garlic, minced", amount: "3 cloves" }
    ],
    instructions: "Sauté onion in a pot until soft, about 5 minutes.\nAdd garlic, ginger, and curry powder, cook 1 minute.\nAdd chickpeas and coconut milk.\nSimmer for 10 minutes.\nAdd spinach and cook until wilted.\nSeason with salt to taste.\nServe over rice or with naan bread.",
    protein: 14,
    carbs: 38,
    fat: 18,
    calories: 360,
    prepTime: 25,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800"
  },
  {
    id: 79,
    name: "Breakfast Burrito",
    ingredients: [
      { item: "Whole wheat tortilla", amount: "1 large" },
      { item: "Scrambled eggs", amount: "2 large" },
      { item: "Black beans", amount: "1/2 cup" },
      { item: "Avocado, sliced", amount: "1/4 medium" },
      { item: "Salsa", amount: "2 tbsp" },
      { item: "Cheddar cheese", amount: "30g" },
      { item: "Cilantro", amount: "2 tbsp" }
    ],
    instructions: "Warm tortilla in a dry pan.\nScramble eggs and set aside.\nWarm black beans in microwave.\nLay tortilla flat and layer eggs down the center.\nAdd beans, cheese, avocado, and salsa.\nSprinkle with cilantro.\nFold in sides and roll tightly.",
    protein: 24,
    carbs: 42,
    fat: 18,
    calories: 420,
    prepTime: 15,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800"
  },
  {
    id: 80,
    name: "Caprese Salad with Balsamic",
    ingredients: [
      { item: "Fresh mozzarella", amount: "150g" },
      { item: "Tomatoes, sliced", amount: "2 large" },
      { item: "Fresh basil leaves", amount: "1/2 cup" },
      { item: "Balsamic vinegar", amount: "2 tbsp" },
      { item: "Extra virgin olive oil", amount: "2 tbsp" },
      { item: "Sea salt", amount: "1/2 tsp" },
      { item: "Black pepper", amount: "1/4 tsp" }
    ],
    instructions: "Slice tomatoes and mozzarella into 1/4 inch rounds.\nArrange alternating slices on a plate.\nTuck basil leaves between slices.\nDrizzle with olive oil and balsamic vinegar.\nSprinkle with sea salt and black pepper.\nLet sit for 10 minutes before serving.\nEnjoy at room temperature.",
    protein: 18,
    carbs: 12,
    fat: 24,
    calories: 330,
    prepTime: 10,
    image: "https://images.pexels.com/photos/34307857/pexels-photo-34307857.jpeg"
  },
  {
    id: 82,
    name: "Jachnun with Tomato Dip",
    ingredients: [
      { item: "Jachnun dough", amount: "2 rolls" },
      { item: "Tomatoes, grated", amount: "3 medium" },
      { item: "Garlic, minced", amount: "3 cloves" },
      { item: "Schug (hot sauce)", amount: "2 tbsp" },
      { item: "Hard-boiled eggs", amount: "2 eggs" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Bake jachnun according to package (or overnight at low temp).\nGrate tomatoes and mix with garlic for dip.\nBoil eggs until hard.\nHeat tomato mixture with olive oil.\nServe warm jachnun with tomato dip.\nAdd hard-boiled eggs and schug on the side.\nEnjoy this traditional Yemenite dish.",
    protein: 16,
    carbs: 52,
    fat: 18,
    calories: 440,
    prepTime: 20,
    image: "https://images.pexels.com/photos/28956908/pexels-photo-28956908.jpeg"
  },
  {
    id: 83,
    name: "Jerusalem Mixed Grill Bowl",
    ingredients: [
      { item: "Chicken hearts", amount: "100g" },
      { item: "Chicken breast, diced", amount: "100g" },
      { item: "Onions, sliced", amount: "2 medium" },
      { item: "Baharat spice", amount: "2 tsp" },
      { item: "Pita bread", amount: "2 pitas" },
      { item: "Tahini", amount: "2 tbsp" },
      { item: "Pickles", amount: "1/4 cup" }
    ],
    instructions: "Dice chicken and hearts into small pieces.\nSauté onions until caramelized.\nAdd chicken and hearts, cook with baharat.\nCook until well done and slightly crispy.\nWarm pita bread.\nPlace meat mixture in pita or over rice.\nDrizzle with tahini and add pickles.",
    protein: 32,
    carbs: 38,
    fat: 16,
    calories: 430,
    prepTime: 25,
    image: "https://images.pexels.com/photos/6419696/pexels-photo-6419696.jpeg"
  },
  {
    id: 84,
    name: "Malawach with Egg and Cheese",
    ingredients: [
      { item: "Malawach (frozen)", amount: "1 sheet" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Kashkaval cheese, grated", amount: "50g" },
      { item: "Tomatoes, diced", amount: "1 cup" },
      { item: "Schug", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Cook malawach in pan until crispy and golden.\nIn another pan, fry eggs sunny-side up.\nPlace malawach on plate.\nTop with fried eggs and grated cheese.\nAdd diced tomatoes on the side.\nServe with schug.\nEnjoy this Yemenite breakfast favorite.",
    protein: 22,
    carbs: 34,
    fat: 28,
    calories: 480,
    prepTime: 15,
    image: "https://images.pexels.com/photos/6419603/pexels-photo-6419603.jpeg"
  },
  {
    id: 85,
    name: "Chicken Soup with Kneidlach",
    ingredients: [
      { item: "Chicken pieces", amount: "300g" },
      { item: "Carrots", amount: "2 medium" },
      { item: "Celery", amount: "2 stalks" },
      { item: "Onion", amount: "1 large" },
      { item: "Matzo meal", amount: "1/2 cup" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Fresh dill", amount: "2 tbsp" }
    ],
    instructions: "Simmer chicken with vegetables in water for 1 hour.\nMix matzo meal with eggs to form kneidlach.\nForm into balls and refrigerate 30 minutes.\nStrain soup, return chicken and vegetables.\nDrop kneidlach into simmering soup.\nCook for 20 minutes until fluffy.\nGarnish with fresh dill.",
    protein: 28,
    carbs: 24,
    fat: 12,
    calories: 330,
    prepTime: 90,
    image: "https://images.pexels.com/photos/32655229/pexels-photo-32655229.jpeg"
  },
  {
    id: 87,
    name: "Moroccan Fish with Chickpeas",
    ingredients: [
      { item: "White fish fillet", amount: "180g" },
      { item: "Chickpeas, cooked", amount: "1 cup" },
      { item: "Tomatoes, diced", amount: "2 medium" },
      { item: "Paprika", amount: "2 tsp" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Cilantro, fresh", amount: "1/4 cup" },
      { item: "Olive oil", amount: "2 tbsp" }
    ],
    instructions: "Season fish with paprika and cumin.\nHeat olive oil in pan.\nSauté tomatoes and chickpeas for 5 minutes.\nPlace fish on top of chickpea mixture.\nCover and cook for 10 minutes until fish is done.\nGarnish with fresh cilantro.\nServe with couscous or rice.",
    protein: 34,
    carbs: 28,
    fat: 16,
    calories: 400,
    prepTime: 25,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800"
  },
  {
    id: 88,
    name: "Cholent (Slow-Cooked Stew)",
    ingredients: [
      { item: "Beef chuck", amount: "200g" },
      { item: "Potatoes, cubed", amount: "2 medium" },
      { item: "Barley", amount: "1/2 cup" },
      { item: "Kidney beans", amount: "1 cup" },
      { item: "Onion", amount: "1 large" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Bay leaves", amount: "2 leaves" }
    ],
    instructions: "Layer all ingredients in slow cooker.\nAdd water to cover.\nSeason with salt, pepper, and paprika.\nAdd bay leaves.\nCook on low for 8-12 hours overnight.\nRemove bay leaves before serving.\nEnjoy this traditional Shabbat dish.",
    protein: 32,
    carbs: 48,
    fat: 14,
    calories: 460,
    prepTime: 480,
    image: "https://images.pexels.com/photos/8477816/pexels-photo-8477816.jpeg"
  },

  {
    id: 90,
    name: "Ptitim (Israeli Couscous) with Vegetables",
    ingredients: [
      { item: "Ptitim", amount: "1 cup" },
      { item: "Zucchini, diced", amount: "1 medium" },
      { item: "Eggplant, diced", amount: "1 cup" },
      { item: "Cherry tomatoes", amount: "1 cup" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Fresh basil", amount: "1/4 cup" },
      { item: "Garlic", amount: "2 cloves" }
    ],
    instructions: "Cook ptitim according to package directions.\nSauté vegetables with garlic in olive oil.\nCook until vegetables are tender.\nToss cooked ptitim with vegetables.\nAdd cherry tomatoes and heat through.\nGarnish with fresh basil.\nServe warm or at room temperature.",
    protein: 10,
    carbs: 52,
    fat: 14,
    calories: 370,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800"
  },

  {
    id: 91,
    name: "Kubbeh Soup",
    ingredients: [
      { item: "Semolina dough", amount: "1 cup" },
      { item: "Ground beef", amount: "150g" },
      { item: "Beets", amount: "2 medium" },
      { item: "Celery", amount: "2 stalks" },
      { item: "Onion", amount: "1 large" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Fresh cilantro", amount: "1/4 cup" }
    ],
    instructions: "Prepare semolina dough and let rest.\nForm small balls and fill with seasoned beef.\nBoil beets, celery, and onion in water.\nAdd lemon juice to create red broth.\nDrop kubbeh into simmering soup.\nCook for 15 minutes until kubbeh float.\nGarnish with cilantro and serve hot.",
    protein: 24,
    carbs: 42,
    fat: 12,
    calories: 380,
    prepTime: 45,
    image: "https://images.pexels.com/photos/8477816/pexels-photo-8477816.jpeg"
  },
  {
    id: 92,
    name: "Schnitzel Sandwich",
    ingredients: [
      { item: "Chicken schnitzel", amount: "1 piece (150g)" },
      { item: "Baguette or roll", amount: "1 roll" },
      { item: "Lettuce", amount: "1/2 cup" },
      { item: "Tomato, sliced", amount: "3 slices" },
      { item: "Pickles", amount: "3 pickles" },
      { item: "Mayonnaise", amount: "2 tbsp" },
      { item: "Ketchup", amount: "1 tbsp" }
    ],
    instructions: "Bread and fry chicken schnitzel until golden.\nSlice baguette lengthwise.\nSpread mayo on one side, ketchup on other.\nPlace hot schnitzel in bread.\nAdd lettuce, tomato, and pickles.\nClose sandwich and press lightly.\nCut in half and serve immediately.",
    protein: 36,
    carbs: 48,
    fat: 22,
    calories: 540,
    prepTime: 20,
    image: "https://images.pexels.com/photos/31918770/pexels-photo-31918770.jpeg"
  },
  {
    id: 93,
    name: "Mujadara (Lentils and Rice)",
    ingredients: [
      { item: "Brown lentils", amount: "1 cup" },
      { item: "Basmati rice", amount: "1 cup" },
      { item: "Onions, sliced", amount: "3 large" },
      { item: "Cumin", amount: "2 tsp" },
      { item: "Olive oil", amount: "3 tbsp" },
      { item: "Vegetable broth", amount: "3 cups" }
    ],
    instructions: "Cook lentils in broth for 15 minutes.\nCaramelize onions in olive oil until dark brown.\nAdd rice and cumin to lentils.\nSimmer for 20 minutes until rice is tender.\nTop with caramelized onions.\nServe with yogurt or salad.\nEnjoy this Middle Eastern comfort food.",
    protein: 18,
    carbs: 68,
    fat: 14,
    calories: 480,
    prepTime: 45,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800"
  },
  {
    id: 95,
    name: "Lamb Kebabs with Tahini",
    ingredients: [
      { item: "Ground lamb", amount: "200g" },
      { item: "Onion, grated", amount: "1/2 medium" },
      { item: "Fresh parsley", amount: "1/4 cup" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Tahini sauce", amount: "3 tbsp" },
      { item: "Pita bread", amount: "2 pitas" },
      { item: "Israeli salad", amount: "1 cup" }
    ],
    instructions: "Mix lamb with onion, parsley, and cumin.\nForm into long kebabs on skewers.\nGrill or pan-fry for 8-10 minutes.\nWarm pita bread.\nServe kebabs with tahini sauce.\nAdd Israeli salad on the side.\nEnjoy with pickles and hummus.",
    protein: 32,
    carbs: 36,
    fat: 24,
    calories: 500,
    prepTime: 25,
    image: "https://images.pexels.com/photos/9510363/pexels-photo-9510363.jpeg"
  },
  {
    id: 97,
    name: "Roasted Chicken with Za'atar",
    ingredients: [
      { item: "Chicken thighs", amount: "300g" },
      { item: "Za'atar spice", amount: "3 tbsp" },
      { item: "Lemon", amount: "1 lemon" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Garlic cloves", amount: "4 cloves" },
      { item: "Cherry tomatoes", amount: "1 cup" }
    ],
    instructions: "Preheat oven to 200°C (400°F).\nRub chicken with za'atar and olive oil.\nPlace in baking dish with garlic and tomatoes.\nSqueeze lemon juice over everything.\nRoast for 35-40 minutes until golden.\nBaste occasionally with pan juices.\nServe with rice or roasted vegetables.",
    protein: 38,
    carbs: 8,
    fat: 22,
    calories: 420,
    prepTime: 45,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
  },
  
  {
    id: 99,
    name: "Beet and Carrot Salad",
    ingredients: [
      { item: "Beets, cooked and diced", amount: "2 medium" },
      { item: "Carrots, grated", amount: "2 large" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Garlic, minced", amount: "1 clove" },
      { item: "Fresh parsley", amount: "1/4 cup" }
    ],
    instructions: "Cook and dice beets.\nGrate carrots finely.\nCombine beets and carrots in bowl.\nWhisk together lemon juice, olive oil, and garlic.\nPour dressing over vegetables.\nToss well and refrigerate for 30 minutes.\nGarnish with parsley before serving.",
    protein: 4,
    carbs: 22,
    fat: 14,
    calories: 220,
    prepTime: 40,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800"
  },


  {
    id: 100,
    name: "Turkey Shawarma Plate",
    ingredients: [
      { item: "Turkey breast, sliced", amount: "200g" },
      { item: "Shawarma spice mix", amount: "2 tbsp" },
      { item: "Hummus", amount: "1/2 cup" },
      { item: "Tahini", amount: "2 tbsp" },
      { item: "Pita bread", amount: "2 pitas" },
      { item: "Israeli salad", amount: "1 cup" },
      { item: "Pickled cabbage", amount: "1/4 cup" }
    ],
    instructions: "Marinate turkey in shawarma spice for 15 minutes.\nPan-fry turkey until cooked and slightly crispy.\nWarm pita bread.\nSpread hummus on serving plate.\nTop with sliced turkey.\nAdd Israeli salad and pickled cabbage.\nDrizzle tahini over everything and serve.",
    protein: 42,
    carbs: 44,
    fat: 18,
    calories: 520,
    prepTime: 25,
    image: "https://images.pexels.com/photos/32845317/pexels-photo-32845317.jpeg"
  },

  // here

  {
    id: 101,
    name: "Grilled Salmon with Quinoa & Roasted Vegetables",
    ingredients: [
      { item: "Salmon fillet", amount: "180g" },
      { item: "Quinoa, uncooked", amount: "1/2 cup" },
      { item: "Zucchini, diced", amount: "1 cup" },
      { item: "Bell peppers, diced", amount: "1 cup" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Fresh dill", amount: "2 tbsp" }
    ],
    instructions: "Cook quinoa according to package directions.\nToss vegetables with 1 tbsp olive oil and roast at 200°C for 20 minutes.\nBrush salmon with remaining olive oil and grill 4-5 minutes per side.\nCombine quinoa with roasted vegetables.\nTop with grilled salmon.\nDrizzle with lemon juice and garnish with fresh dill.",
    protein: 45,
    carbs: 52,
    fat: 22,
    calories: 590,
    prepTime: 30,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800"
  },
  {
    id: 102,
    name: "Chicken Schnitzel with Sweet Potato Mash",
    ingredients: [
      { item: "Chicken breast", amount: "200g" },
      { item: "Egg", amount: "1" },
      { item: "Breadcrumbs", amount: "1/2 cup" },
      { item: "Sweet potato", amount: "300g" },
      { item: "Olive oil", amount: "3 tbsp" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Green beans", amount: "150g" }
    ],
    instructions: "Boil sweet potato until soft, then mash with 1 tbsp olive oil.\nPound chicken breast thin.\nDip chicken in beaten egg, then coat with breadcrumbs.\nPan-fry in 2 tbsp olive oil until golden and cooked through.\nSteam green beans until tender.\nServe schnitzel with sweet potato mash and green beans.\nSprinkle with paprika.",
    protein: 48,
    carbs: 58,
    fat: 20,
    calories: 610,
    prepTime: 25,
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800"
  },
  {
    id: 103,
    name: "Beef & Lentil Power Bowl",
    ingredients: [
      { item: "Lean ground beef", amount: "180g" },
      { item: "Red lentils, cooked", amount: "1 cup" },
      { item: "Spinach", amount: "2 cups" },
      { item: "Cherry tomatoes", amount: "1 cup" },
      { item: "Tahini", amount: "2 tbsp" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Garlic, minced", amount: "2 cloves" }
    ],
    instructions: "Cook lentils according to package directions.\nSauté garlic in a pan, add ground beef and cumin.\nCook beef until browned.\nAdd spinach and cook until wilted.\nHalve cherry tomatoes.\nCombine lentils with beef mixture.\nTop with cherry tomatoes and drizzle with tahini.",
    protein: 52,
    carbs: 46,
    fat: 18,
    calories: 560,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
  },
  {
    id: 104,
    name: "Tuna Nicoise Salad Bowl",
    ingredients: [
      { item: "Tuna steak", amount: "180g" },
      { item: "Baby potatoes", amount: "200g" },
      { item: "Green beans", amount: "150g" },
      { item: "Hard-boiled egg", amount: "2" },
      { item: "Mixed greens", amount: "2 cups" },
      { item: "Kalamata olives", amount: "1/4 cup" },
      { item: "Olive oil & lemon dressing", amount: "3 tbsp" }
    ],
    instructions: "Boil baby potatoes until tender, halve them.\nBlanch green beans until crisp-tender.\nSear tuna steak 2-3 minutes per side (or to preference).\nArrange mixed greens in a bowl.\nAdd potatoes, green beans, quartered eggs, and olives.\nSlice tuna and place on top.\nDrizzle with olive oil and lemon dressing.",
    protein: 46,
    carbs: 42,
    fat: 20,
    calories: 540,
    prepTime: 25,
    image: "https://images.pexels.com/photos/19572489/pexels-photo-19572489.jpeg"
  },
  {
    id: 105,
    name: "Chicken & Chickpea Couscous",
    ingredients: [
      { item: "Chicken thigh, diced", amount: "200g" },
      { item: "Whole wheat couscous", amount: "3/4 cup" },
      { item: "Chickpeas, cooked", amount: "1 cup" },
      { item: "Dried apricots, chopped", amount: "1/4 cup" },
      { item: "Almonds, sliced", amount: "2 tbsp" },
      { item: "Cinnamon", amount: "1/2 tsp" },
      { item: "Fresh parsley", amount: "1/4 cup" }
    ],
    instructions: "Prepare couscous according to package directions.\nSauté chicken with cinnamon until cooked through.\nAdd chickpeas and dried apricots to chicken, heat through.\nFluff couscous and mix with chicken mixture.\nToast almonds lightly in a dry pan.\nTop couscous bowl with toasted almonds and fresh parsley.",
    protein: 44,
    carbs: 68,
    fat: 16,
    calories: 600,
    prepTime: 20,
    image: "https://images.pexels.com/photos/18363399/pexels-photo-18363399.jpeg"
  },
  {
    id: 107,
    name: "Turkey Meatballs with Pasta & Marinara",
    ingredients: [
      { item: "Ground turkey", amount: "200g" }, 
      { item: "Whole wheat pasta", amount: "80g" },
      { item: "Marinara sauce", amount: "1 cup" },
      { item: "Egg", amount: "1" },
      { item: "Breadcrumbs", amount: "1/4 cup" },
      { item: "Fresh basil", amount: "2 tbsp" },
      { item: "Nutritional yeast (optional, parve)", amount: "1 tbsp" }
    ],
    instructions: "Mix ground turkey with egg, breadcrumbs, and half the basil.\nForm into 6-8 meatballs.\nBake meatballs at 190°C for 20 minutes.\nCook pasta according to package directions.\nHeat marinara sauce and add cooked meatballs.\nDrain pasta and top with meatballs and sauce.\nGarnish with remaining basil and optional nutritional yeast.",
    protein: 50,
    carbs: 56,
    fat: 12,
    calories: 540,
    prepTime: 35,
    image: "https://images.pexels.com/photos/15529692/pexels-photo-15529692.jpeg"
  },
  {
    id: 108,
    name: "Steak & Roasted Root Vegetables",
    ingredients: [
      { item: "Sirloin steak", amount: "200g" },
      { item: "Carrots, chopped", amount: "1 cup" },
      { item: "Parsnips, chopped", amount: "1 cup" },
      { item: "Red onion, quartered", amount: "1" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Rosemary", amount: "2 sprigs" },
      { item: "Balsamic vinegar", amount: "1 tbsp" }
    ],
    instructions: "Preheat oven to 200°C.\nToss root vegetables with 1 tbsp olive oil and rosemary.\nRoast vegetables for 25-30 minutes until caramelized.\nSeason steak with salt and pepper.\nSear steak in remaining olive oil, 3-4 minutes per side for medium.\nLet steak rest 5 minutes, then slice.\nServe sliced steak with roasted vegetables.\nDrizzle with balsamic vinegar.",
    protein: 48,
    carbs: 38,
    fat: 20,
    calories: 540,
    prepTime: 40,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800"
  },
  {
    id: 109,
    name: "Tilapia Tacos with Avocado Slaw",
    ingredients: [
      { item: "Tilapia fillet", amount: "180g" },
      { item: "Corn tortillas", amount: "3" },
      { item: "Cabbage, shredded", amount: "1 cup" },
      { item: "Avocado", amount: "1" },
      { item: "Lime juice", amount: "2 tbsp" },
      { item: "Cilantro", amount: "1/4 cup" },
      { item: "Cumin", amount: "1 tsp" }
    ],
    instructions: "Season tilapia with cumin and lime juice.\nGrill or pan-fry tilapia 3-4 minutes per side.\nMash avocado with lime juice and cilantro.\nToss shredded cabbage with half the avocado mixture.\nBreak tilapia into chunks.\nWarm tortillas.\nFill tortillas with cabbage slaw and tilapia.\nTop with remaining avocado sauce.",
    protein: 38,
    carbs: 48,
    fat: 18,
    calories: 510,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800"
  },
  {
    id: 110,
    name: "Chicken Breast with Farro & Mediterranean Vegetables",
    ingredients: [
      { item: "Chicken breast", amount: "200g" },
      { item: "Farro, uncooked", amount: "1/2 cup" },
      { item: "Eggplant, diced", amount: "1 cup" },
      { item: "Red bell pepper, diced", amount: "1" },
      { item: "Sun-dried tomatoes", amount: "1/4 cup" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Za'atar", amount: "1 tbsp" }
    ],
    instructions: "Cook farro according to package directions.\nSeason chicken with za'atar and grill or bake until cooked through.\nSauté eggplant and bell pepper in olive oil until tender.\nChop sun-dried tomatoes and add to vegetables.\nCombine cooked farro with sautéed vegetables.\nSlice chicken breast and serve over farro mixture.\nDrizzle with any remaining olive oil.",
    protein: 46,
    carbs: 58,
    fat: 16,
    calories: 570,
    prepTime: 30,
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800"
  },
  {
    id: 111,
    name: "Protein-Packed Shakshuka",
    ingredients: [
      { item: "Eggs", amount: "3" },
      { item: "Tomato sauce", amount: "1 cup" },
      { item: "Red bell pepper, diced", amount: "1/2" },
      { item: "Onion, diced", amount: "1/4" },
      { item: "Feta cheese", amount: "30g" },
      { item: "Whole wheat pita", amount: "1" },
      { item: "Cumin & paprika", amount: "1 tsp each" }
    ],
    instructions: "Sauté onion and bell pepper until soft.\nAdd tomato sauce, cumin, and paprika, simmer 5 minutes.\nCreate 3 wells in the sauce and crack eggs into them.\nCover and cook until eggs are set to preference.\nCrumble feta on top.\nToast pita bread.\nServe shakshuka with warm pita for dipping.",
    protein: 28,
    carbs: 42,
    fat: 18,
    calories: 450,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800"
  },
  {
    id: 112,
    name: "Greek Yogurt Power Bowl",
    ingredients: [
      { item: "Greek yogurt", amount: "250g" },
      { item: "Granola", amount: "1/2 cup" },
      { item: "Mixed berries", amount: "1 cup" },
      { item: "Almonds, chopped", amount: "2 tbsp" },
      { item: "Honey", amount: "1 tbsp" },
      { item: "Chia seeds", amount: "1 tbsp" },
      { item: "Banana, sliced", amount: "1" }
    ],
    instructions: "Place Greek yogurt in a bowl.\nTop with granola, mixed berries, and banana slices.\nSprinkle with chopped almonds and chia seeds.\nDrizzle honey over everything.\nMix before eating or enjoy layered.",
    protein: 30,
    carbs: 68,
    fat: 16,
    calories: 540,
    prepTime: 5,
    image: "https://images.pexels.com/photos/29516115/pexels-photo-29516115.jpeg"
  },
  {
    id: 113,
    name: "Smoked Salmon & Avocado Toast",
    ingredients: [
      { item: "Whole grain bread", amount: "2 slices" },
      { item: "Smoked salmon", amount: "100g" },
      { item: "Avocado", amount: "1" },
      { item: "Cream cheese", amount: "2 tbsp" },
      { item: "Red onion, thinly sliced", amount: "2 tbsp" },
      { item: "Capers", amount: "1 tsp" },
      { item: "Lemon juice", amount: "1 tbsp" }
    ],
    instructions: "Toast bread slices until golden.\nMash avocado with lemon juice.\nSpread cream cheese on one slice, avocado on the other.\nLayer smoked salmon on both slices.\nTop with red onion slices and capers.\nServe immediately.",
    protein: 32,
    carbs: 38,
    fat: 22,
    calories: 490,
    prepTime: 8,
    image: "https://images.pexels.com/photos/31584178/pexels-photo-31584178.jpeg"
  },
  {
    id: 114,
    name: "Veggie-Loaded Omelet",
    ingredients: [
      { item: "Eggs", amount: "3" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Mushrooms, sliced", amount: "1/2 cup" },
      { item: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { item: "Feta cheese", amount: "30g" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Whole wheat toast", amount: "1 slice" }
    ],
    instructions: "Sauté mushrooms and spinach in olive oil until wilted.\nBeat eggs and pour into pan.\nAdd sautéed vegetables and tomatoes on one half.\nCrumble feta on top.\nFold omelet in half and cook until set.\nToast bread and serve alongside omelet.",
    protein: 26,
    carbs: 24,
    fat: 20,
    calories: 390,
    prepTime: 12,
    image: "https://images.pexels.com/photos/4103221/pexels-photo-4103221.jpeg"
  },
  {
    id: 115,
    name: "Overnight Oats with Protein",
    ingredients: [
      { item: "Rolled oats", amount: "3/4 cup" },
      { item: "Almond milk", amount: "1 cup" },
      { item: "Protein powder (vanilla)", amount: "1 scoop" },
      { item: "Peanut butter", amount: "2 tbsp" },
      { item: "Banana, sliced", amount: "1" },
      { item: "Cinnamon", amount: "1/2 tsp" },
      { item: "Walnuts, chopped", amount: "2 tbsp" }
    ],
    instructions: "Mix oats, almond milk, protein powder, and cinnamon in a jar.\nStir in peanut butter.\nRefrigerate overnight (or minimum 4 hours).\nIn the morning, top with banana slices and walnuts.\nEat cold or warm in microwave for 1-2 minutes.",
    protein: 36,
    carbs: 64,
    fat: 22,
    calories: 600,
    prepTime: 5,
    image: "https://images.pexels.com/photos/34248624/pexels-photo-34248624.jpeg"
  },

  {
    id: 117,
    name: "Banana Protein Pancakes",
    ingredients: [
      { item: "Eggs", amount: "2" },
      { item: "Banana, ripe", amount: "1 large" },
      { item: "Oat flour", amount: "1/2 cup" },
      { item: "Protein powder", amount: "1 scoop" },
      { item: "Baking powder", amount: "1/2 tsp" },
      { item: "Blueberries", amount: "1/2 cup" },
      { item: "Maple syrup", amount: "2 tbsp" }
    ],
    instructions: "Mash banana in a bowl.\nAdd eggs, oat flour, protein powder, and baking powder.\nMix until smooth batter forms.\nHeat non-stick pan and pour batter to form pancakes.\nCook 2-3 minutes per side until golden.\nTop with fresh blueberries and maple syrup.",
    protein: 38,
    carbs: 72,
    fat: 12,
    calories: 550,
    prepTime: 15,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800"
  },
  {
    id: 118,
    name: "Cottage Cheese & Veggie Bowl",
    ingredients: [
      { item: "Cottage cheese", amount: "250g" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Cucumber, diced", amount: "1 cup" },
      { item: "Avocado, sliced", amount: "1/2" },
      { item: "Sunflower seeds", amount: "2 tbsp" },
      { item: "Whole grain crackers", amount: "6" },
      { item: "Everything bagel seasoning", amount: "1 tsp" }
    ],
    instructions: "Place cottage cheese in a bowl.\nArrange tomatoes, cucumber, and avocado around cottage cheese.\nSprinkle with sunflower seeds and everything bagel seasoning.\nServe with whole grain crackers on the side.\nMix everything together or eat separately.",
    protein: 32,
    carbs: 34,
    fat: 20,
    calories: 460,
    prepTime: 7,
    image: "https://images.pexels.com/photos/4891597/pexels-photo-4891597.jpeg"
  },
  {
    id: 119,
    name: "Breakfast Burrito Bowl",
    ingredients: [
      { item: "Scrambled eggs", amount: "3" },
      { item: "Black beans, cooked", amount: "1/2 cup" },
      { item: "Brown rice, cooked", amount: "1/2 cup" },
      { item: "Salsa", amount: "1/4 cup" },
      { item: "Avocado, diced", amount: "1/2" },
      { item: "Cilantro", amount: "2 tbsp" },
      { item: "Lime juice", amount: "1 tbsp" }
    ],
    instructions: "Scramble eggs until fluffy.\nWarm black beans and brown rice.\nPlace rice in a bowl as base.\nTop with scrambled eggs and black beans.\nAdd salsa and diced avocado.\nGarnish with cilantro and squeeze lime juice over everything.",
    protein: 30,
    carbs: 46,
    fat: 18,
    calories: 480,
    prepTime: 15,
    image: "https://images.pexels.com/photos/9258726/pexels-photo-9258726.jpeg"
  },
  {
    id: 120,
    name: "Quinoa Breakfast Bowl with Fruit",
    ingredients: [
      { item: "Quinoa, cooked", amount: "1 cup" },
      { item: "Almond milk", amount: "1/2 cup" },
      { item: "Strawberries, sliced", amount: "1/2 cup" },
      { item: "Kiwi, sliced", amount: "1" },
      { item: "Almonds, slivered", amount: "2 tbsp" },
      { item: "Honey", amount: "1 tbsp" },
      { item: "Cinnamon", amount: "1/2 tsp" }
    ],
    instructions: "Warm cooked quinoa with almond milk and cinnamon.\nTransfer to a bowl.\nTop with strawberries and kiwi slices.\nSprinkle with slivered almonds.\nDrizzle honey over the top.\nServe warm.",
    protein: 12,
    carbs: 68,
    fat: 12,
    calories: 440,
    prepTime: 10,
    image: "https://images.pexels.com/photos/3805550/pexels-photo-3805550.jpeg"
  },

  {
    id: 121,
    name: "Classic Veggie Omelet",
    ingredients: [
      { item: "Eggs", amount: "3 large" },
      { item: "Onion, diced", amount: "2 tbsp" },
      { item: "Mushrooms, sliced", amount: "1/4 cup" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Beat eggs with salt and pepper.\nHeat olive oil in a non-stick pan over medium heat.\nSauté vegetables for 2-3 minutes until softened.\nPour eggs over vegetables.\nCook until edges set, then fold omelet in half.\nCook for another minute until fully set.\nServe hot.",
    protein: 18,
    carbs: 8,
    fat: 18,
    calories: 280,
    prepTime: 10,
    image: "https://images.pexels.com/photos/35071827/pexels-photo-35071827.jpeg"
  },
  {
    id: 122,
    name: "Protein-Packed Egg White Scramble",
    ingredients: [
      { item: "Egg whites", amount: "6 large" },
      { item: "Spinach, fresh", amount: "1 cup" },
      { item: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { item: "Feta cheese", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Garlic powder", amount: "1/4 tsp" },
      { item: "Black pepper", amount: "to taste" }
    ],
    instructions: "Heat olive oil in a pan over medium heat.\nAdd spinach and tomatoes, sauté for 2 minutes.\nPour in egg whites and season with garlic powder and pepper.\nScramble gently until cooked through.\nSprinkle feta cheese on top.\nServe immediately.",
    protein: 28,
    carbs: 6,
    fat: 6,
    calories: 190,
    prepTime: 8,
    image: "https://images.pexels.com/photos/14537693/pexels-photo-14537693.jpeg"
  },
  {
    id: 123,
    name: "Banana Protein Pancakes",
    ingredients: [
      { item: "Banana, mashed", amount: "1 large" },
      { item: "Eggs", amount: "2 large" },
      { item: "Protein powder (vanilla)", amount: "1 scoop" },
      { item: "Oats", amount: "1/4 cup" },
      { item: "Cinnamon", amount: "1/2 tsp" },
      { item: "Coconut oil", amount: "1 tsp" },
      { item: "Maple syrup", amount: "for serving" }
    ],
    instructions: "Blend banana, eggs, protein powder, oats, and cinnamon until smooth.\nHeat coconut oil in a non-stick pan over medium heat.\nPour batter to form small pancakes.\nCook for 2-3 minutes per side until golden.\nStack and serve with maple syrup.",
    protein: 32,
    carbs: 42,
    fat: 14,
    calories: 420,
    prepTime: 12,
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
  },
  {
    id: 124,
    name: "Avocado Toast with Poached Egg",
    ingredients: [
      { item: "Whole grain bread", amount: "2 slices" },
      { item: "Avocado", amount: "1 ripe" },
      { item: "Eggs", amount: "2 large" },
      { item: "Lemon juice", amount: "1 tsp" },
      { item: "Red pepper flakes", amount: "pinch" },
      { item: "Salt and pepper", amount: "to taste" },
      { item: "White vinegar", amount: "1 tbsp" }
    ],
    instructions: "Toast bread slices until golden.\nMash avocado with lemon juice, salt, and pepper.\nBring water to a gentle simmer, add vinegar.\nPoach eggs for 3-4 minutes.\nSpread avocado on toast.\nTop each slice with a poached egg.\nSprinkle with red pepper flakes and serve.",
    protein: 18,
    carbs: 36,
    fat: 22,
    calories: 410,
    prepTime: 10,
    image: "https://images.pexels.com/photos/3636958/pexels-photo-3636958.jpeg"
  },
  {
    id: 125,
    name: "Cottage Cheese Berry Bowl",
    ingredients: [
      { item: "Cottage cheese (low-fat)", amount: "1 cup" },
      { item: "Blueberries", amount: "1/2 cup" },
      { item: "Strawberries, sliced", amount: "1/2 cup" },
      { item: "Granola", amount: "1/4 cup" },
      { item: "Chia seeds", amount: "1 tbsp" },
      { item: "Honey", amount: "1 tsp" },
      { item: "Mint leaves", amount: "for garnish" }
    ],
    instructions: "Place cottage cheese in a bowl.\nTop with blueberries and strawberries.\nSprinkle granola and chia seeds over the top.\nDrizzle with honey.\nGarnish with mint leaves.\nServe immediately.",
    protein: 26,
    carbs: 44,
    fat: 8,
    calories: 350,
    prepTime: 5,
    image: "https://images.pexels.com/photos/15435101/pexels-photo-15435101.jpeg"
  },
  {
    id: 126,
    name: "Peanut Butter Banana Smoothie Bowl",
    ingredients: [
      { item: "Banana, frozen", amount: "2 large" },
      { item: "Peanut butter", amount: "2 tbsp" },
      { item: "Almond milk", amount: "1/2 cup" },
      { item: "Protein powder", amount: "1 scoop" },
      { item: "Granola", amount: "1/4 cup" },
      { item: "Banana, sliced", amount: "1/2" },
      { item: "Cacao nibs", amount: "1 tbsp" }
    ],
    instructions: "Blend frozen bananas, peanut butter, almond milk, and protein powder until thick.\nPour into a bowl.\nTop with granola, banana slices, and cacao nibs.\nServe immediately with a spoon.",
    protein: 30,
    carbs: 62,
    fat: 16,
    calories: 510,
    prepTime: 7,
    image: "https://images.pexels.com/photos/19802449/pexels-photo-19802449.jpeg"
  },
  {
    id: 127,
    name: "Shakshuka",
    ingredients: [
      { item: "Eggs", amount: "4 large" },
      { item: "Tomatoes, diced", amount: "1 can (14 oz)" },
      { item: "Bell pepper, diced", amount: "1" },
      { item: "Onion, diced", amount: "1 small" },
      { item: "Garlic, minced", amount: "3 cloves" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Fresh parsley", amount: "for garnish" }
    ],
    instructions: "Heat olive oil in a large skillet over medium heat.\nSauté onion and bell pepper for 5 minutes.\nAdd garlic, cumin, and paprika, cook for 1 minute.\nAdd diced tomatoes and simmer for 5 minutes.\nMake 4 wells in the sauce and crack eggs into them.\nCover and cook for 5-7 minutes until eggs are set.\nGarnish with parsley and serve with bread.",
    protein: 16,
    carbs: 18,
    fat: 16,
    calories: 290,
    prepTime: 20,
    image: "https://images.pexels.com/photos/2067470/pexels-photo-2067470.jpeg"
  },
  {
    id: 128,
    name: "Sweet Potato Hash with Eggs",
    ingredients: [
      { item: "Sweet potato, diced", amount: "1 large" },
      { item: "Eggs", amount: "2 large" },
      { item: "Onion, diced", amount: "1/4 cup" },
      { item: "Bell pepper, diced", amount: "1/4 cup" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Paprika", amount: "1/2 tsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Heat olive oil in a skillet over medium-high heat.\nAdd diced sweet potato and cook for 8-10 minutes, stirring occasionally.\nAdd onion and bell pepper, cook for 3 minutes.\nSeason with paprika, salt, and pepper.\nMake two wells and crack eggs into them.\nCover and cook until eggs reach desired doneness.\nServe hot.",
    protein: 15,
    carbs: 38,
    fat: 12,
    calories: 320,
    prepTime: 18,
    image: "https://images.pexels.com/photos/6529692/pexels-photo-6529692.jpeg"
  },
  {
    id: 129,
    name: "High-Protein Breakfast Burrito",
    ingredients: [
      { item: "Whole wheat tortilla", amount: "1 large" },
      { item: "Scrambled eggs", amount: "2 large" },
      { item: "Black beans", amount: "1/4 cup" },
      { item: "Avocado, sliced", amount: "1/4" },
      { item: "Salsa", amount: "2 tbsp" },
      { item: "Shredded cheese", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Scramble eggs in a pan with olive oil.\nWarm tortilla for 20 seconds in microwave.\nLayer scrambled eggs down the center of tortilla.\nAdd black beans, avocado, cheese, and salsa.\nFold sides in and roll tightly.\nOptionally grill seam-side down for 2 minutes.\nCut in half and serve.",
    protein: 24,
    carbs: 42,
    fat: 18,
    calories: 425,
    prepTime: 10,
    image: "https://images.pexels.com/photos/5848057/pexels-photo-5848057.jpeg"
  },
  {
    id: 130,
    name: "Tuna and Egg Breakfast Wrap",
    ingredients: [
      { item: "Whole wheat tortilla", amount: "1 large" },
      { item: "Canned tuna in water", amount: "1 can (5 oz)" },
      { item: "Hard-boiled eggs, sliced", amount: "2" },
      { item: "Cucumber, sliced", amount: "1/4 cup" },
      { item: "Tomato, sliced", amount: "1/4 cup" },
      { item: "Lemon juice", amount: "1 tsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Drain tuna and mix with lemon juice, salt, and pepper.\nWarm tortilla for 20 seconds.\nSpread tuna mixture down the center.\nTop with sliced hard-boiled eggs, cucumber, and tomato.\nRoll tightly and cut in half.\nServe immediately.",
    protein: 42,
    carbs: 32,
    fat: 12,
    calories: 410,
    prepTime: 8,
    image: "https://images.pexels.com/photos/6544221/pexels-photo-6544221.jpeg"
  },

  {
    id: 131,
    name: "Classic Scrambled Eggs with Toast",
    ingredients: [
      { item: "Eggs", amount: "3 large" },
      { item: "Milk", amount: "2 tbsp" },
      { item: "Butter", amount: "1 tbsp" },
      { item: "Whole wheat bread", amount: "2 slices" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Beat eggs with milk, salt, and pepper.\nMelt butter in a non-stick pan over medium-low heat.\nPour in eggs and gently stir until softly set.\nToast bread until golden.\nServe scrambled eggs with toast.",
    protein: 22,
    carbs: 28,
    fat: 18,
    calories: 360,
    prepTime: 8,
    image: "https://images.pexels.com/photos/34871730/pexels-photo-34871730.jpeg"
  },
  {
    id: 132,
    name: "Cinnamon French Toast",
    ingredients: [
      { item: "Bread slices", amount: "3" },
      { item: "Eggs", amount: "2 large" },
      { item: "Milk", amount: "1/4 cup" },
      { item: "Cinnamon", amount: "1 tsp" },
      { item: "Vanilla extract", amount: "1/2 tsp" },
      { item: "Butter", amount: "1 tbsp" },
      { item: "Maple syrup", amount: "for serving" }
    ],
    instructions: "Whisk together eggs, milk, cinnamon, and vanilla.\nHeat butter in a pan over medium heat.\nDip bread slices in egg mixture, coating both sides.\nCook for 2-3 minutes per side until golden brown.\nServe hot with maple syrup.",
    protein: 16,
    carbs: 52,
    fat: 14,
    calories: 400,
    prepTime: 10,
    image: "https://images.pexels.com/photos/15820912/pexels-photo-15820912.jpeg"
  },
  {
    id: 133,
    name: "Yogurt Parfait with Granola",
    ingredients: [
      { item: "Greek yogurt", amount: "1 cup" },
      { item: "Granola", amount: "1/2 cup" },
      { item: "Honey", amount: "1 tbsp" },
      { item: "Blueberries", amount: "1/4 cup" },
      { item: "Strawberries, sliced", amount: "1/4 cup" },
      { item: "Banana, sliced", amount: "1/2" }
    ],
    instructions: "Layer half the yogurt in a glass or bowl.\nAdd half the granola and berries.\nRepeat layers with remaining yogurt, granola, and fruit.\nDrizzle honey on top.\nServe immediately.",
    protein: 20,
    carbs: 58,
    fat: 8,
    calories: 380,
    prepTime: 5,
    image: "https://images.pexels.com/photos/32268820/pexels-photo-32268820.jpeg"
  },
  {
    id: 134,
    name: "Cheese and Tomato Omelet",
    ingredients: [
      { item: "Eggs", amount: "3 large" },
      { item: "Cheddar cheese, shredded", amount: "1/4 cup" },
      { item: "Tomato, diced", amount: "1/4 cup" },
      { item: "Butter", amount: "1 tbsp" },
      { item: "Salt and pepper", amount: "to taste" },
      { item: "Fresh basil", amount: "for garnish" }
    ],
    instructions: "Beat eggs with salt and pepper.\nMelt butter in a non-stick pan over medium heat.\nPour in eggs and let set slightly.\nAdd cheese and tomato to one half.\nFold omelet in half and cook for 1 minute.\nGarnish with basil and serve.",
    protein: 24,
    carbs: 4,
    fat: 22,
    calories: 310,
    prepTime: 8,
    image: "https://images.pexels.com/photos/14302155/pexels-photo-14302155.jpeg"
  },
  {
    id: 135,
    name: "Peanut Butter Toast with Banana",
    ingredients: [
      { item: "Whole wheat bread", amount: "2 slices" },
      { item: "Peanut butter", amount: "3 tbsp" },
      { item: "Banana, sliced", amount: "1" },
      { item: "Honey", amount: "1 tsp" },
      { item: "Cinnamon", amount: "pinch" }
    ],
    instructions: "Toast bread slices until golden.\nSpread peanut butter evenly on each slice.\nArrange banana slices on top.\nDrizzle with honey.\nSprinkle cinnamon and serve.",
    protein: 14,
    carbs: 54,
    fat: 16,
    calories: 420,
    prepTime: 5,
    image: "https://images.pexels.com/photos/13689952/pexels-photo-13689952.jpeg"
  },
  {
    id: 136,
    name: "Overnight Oats",
    ingredients: [
      { item: "Rolled oats", amount: "1/2 cup" },
      { item: "Milk", amount: "3/4 cup" },
      { item: "Greek yogurt", amount: "1/4 cup" },
      { item: "Honey", amount: "1 tbsp" },
      { item: "Vanilla extract", amount: "1/2 tsp" },
      { item: "Berries", amount: "1/4 cup" },
      { item: "Almonds, sliced", amount: "2 tbsp" }
    ],
    instructions: "Mix oats, milk, yogurt, honey, and vanilla in a jar.\nStir well and refrigerate overnight.\nIn the morning, top with berries and almonds.\nServe cold or warm in microwave for 1 minute.",
    protein: 16,
    carbs: 56,
    fat: 10,
    calories: 380,
    prepTime: 5,
    image: "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg"
  },
  {
    id: 137,
    name: "Bagel with Cream Cheese and Cucumber",
    ingredients: [
      { item: "Bagel", amount: "1" },
      { item: "Cream cheese", amount: "3 tbsp" },
      { item: "Cucumber, sliced thin", amount: "1/4" },
      { item: "Tomato, sliced", amount: "2 slices" },
      { item: "Red onion, thin slices", amount: "2 slices" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Slice bagel in half and toast if desired.\nSpread cream cheese on both halves.\nLayer cucumber, tomato, and onion slices.\nSeason with salt and pepper.\nTop with other bagel half and serve.",
    protein: 12,
    carbs: 48,
    fat: 12,
    calories: 340,
    prepTime: 5,
    image: "https://images.pexels.com/photos/6412960/pexels-photo-6412960.jpeg"
  },
  {
    id: 138,
    name: "Cereal with Milk and Fruit",
    ingredients: [
      { item: "Whole grain cereal", amount: "1 cup" },
      { item: "Milk", amount: "1 cup" },
      { item: "Banana, sliced", amount: "1" },
      { item: "Berries", amount: "1/4 cup" },
      { item: "Honey", amount: "1 tsp" }
    ],
    instructions: "Pour cereal into a bowl.\nAdd sliced banana and berries.\nPour milk over the cereal.\nDrizzle with honey if desired.\nServe immediately.",
    protein: 12,
    carbs: 64,
    fat: 6,
    calories: 350,
    prepTime: 3,
    image: "https://images.pexels.com/photos/13273778/pexels-photo-13273778.jpeg"
  },
  {
    id: 139,
    name: "Egg and Cheese Sandwich",
    ingredients: [
      { item: "English muffin or bread", amount: "1" },
      { item: "Eggs", amount: "2 large" },
      { item: "Cheddar cheese slice", amount: "1" },
      { item: "Butter", amount: "1 tbsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Toast English muffin or bread.\nScramble or fry eggs in butter, season with salt and pepper.\nPlace cheese on hot eggs to melt.\nAssemble eggs and cheese between toasted muffin halves.\nServe hot.",
    protein: 20,
    carbs: 28,
    fat: 18,
    calories: 350,
    prepTime: 8,
    image: "https://images.pexels.com/photos/17322390/pexels-photo-17322390.jpeg"
  },
  {
    id: 140,
    name: "Apple Cinnamon Oatmeal",
    ingredients: [
      { item: "Rolled oats", amount: "1/2 cup" },
      { item: "Water or milk", amount: "1 cup" },
      { item: "Apple, diced", amount: "1 small" },
      { item: "Cinnamon", amount: "1 tsp" },
      { item: "Honey or brown sugar", amount: "1 tbsp" },
      { item: "Walnuts, chopped", amount: "2 tbsp" },
      { item: "Salt", amount: "pinch" }
    ],
    instructions: "Bring water or milk to boil with salt.\nAdd oats and reduce heat to medium.\nStir in diced apple and cinnamon.\nCook for 5 minutes, stirring occasionally.\nRemove from heat and stir in honey.\nTop with walnuts and serve warm.",
    protein: 8,
    carbs: 52,
    fat: 10,
    calories: 320,
    prepTime: 10,
    image: "https://images.pexels.com/photos/10165864/pexels-photo-10165864.jpeg"
  },

  {
    id: 141,
    name: "Greek Yogurt Protein Bowl",
    ingredients: [
      { item: "Greek yogurt", amount: "1 cup" },
      { item: "Granola", amount: "1/4 cup" },
      { item: "Banana, sliced", amount: "1/2" },
      { item: "Berries", amount: "1/4 cup" },
      { item: "Honey", amount: "1 tsp" },
      { item: "Almonds, sliced", amount: "1 tbsp" }
    ],
    instructions: "Place Greek yogurt in a bowl.\nTop with granola, sliced banana, and berries.\nDrizzle honey over the top.\nSprinkle with sliced almonds.\nServe immediately.",
    protein: 20,
    carbs: 45,
    fat: 8,
    calories: 340,
    prepTime: 5,
    image: "https://images.pexels.com/photos/2531176/pexels-photo-2531176.jpeg"
  },
  {
    id: 142,
    name: "Protein Pancakes",
    ingredients: [
      { item: "Banana, mashed", amount: "1 medium" },
      { item: "Eggs", amount: "2" },
      { item: "Protein powder", amount: "1 scoop" },
      { item: "Cinnamon", amount: "1/2 tsp" },
      { item: "Baking powder", amount: "1/4 tsp" },
      { item: "Oil for cooking", amount: "1 tsp" }
    ],
    instructions: "Mash banana in a bowl.\nAdd eggs and whisk together.\nMix in protein powder, cinnamon, and baking powder.\nHeat oil in a pan over medium heat.\nPour small circles of batter into pan.\nCook 2-3 minutes per side until golden.\nServe with fruit or honey.",
    protein: 30,
    carbs: 35,
    fat: 12,
    calories: 360,
    prepTime: 12,
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
  },
  {
    id: 143,
    name: "Tuna Avocado Toast",
    ingredients: [
      { item: "Whole wheat bread", amount: "2 slices" },
      { item: "Canned tuna in water", amount: "1 can (5 oz)" },
      { item: "Avocado", amount: "1/2" },
      { item: "Lemon juice", amount: "1 tsp" },
      { item: "Salt and pepper", amount: "to taste" },
      { item: "Cherry tomatoes", amount: "3-4, sliced" }
    ],
    instructions: "Toast the bread slices.\nDrain tuna and mix with lemon juice, salt, and pepper.\nMash avocado and spread on toast.\nTop with tuna mixture.\nAdd sliced cherry tomatoes.\nServe immediately.",
    protein: 35,
    carbs: 30,
    fat: 14,
    calories: 380,
    prepTime: 7,
    image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg"
  },
  {
    id: 144,
    name: "Cottage Cheese Power Bowl",
    ingredients: [
      { item: "Cottage cheese", amount: "1 cup" },
      { item: "Cucumber, diced", amount: "1/2" },
      { item: "Cherry tomatoes, halved", amount: "5-6" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Salt and pepper", amount: "to taste" },
      { item: "Whole wheat crackers", amount: "4-5" }
    ],
    instructions: "Place cottage cheese in a bowl.\nAdd diced cucumber and halved tomatoes.\nDrizzle with olive oil.\nSeason with salt and pepper.\nServe with whole wheat crackers on the side.",
    protein: 28,
    carbs: 20,
    fat: 8,
    calories: 270,
    prepTime: 5,
    image: "https://images.pexels.com/photos/10165775/pexels-photo-10165775.jpeg"
  },
  {
    id: 145,
    name: "Peanut Butter Banana Smoothie",
    ingredients: [
      { item: "Banana", amount: "1 large" },
      { item: "Peanut butter", amount: "2 tbsp" },
      { item: "Milk", amount: "1 cup" },
      { item: "Honey", amount: "1 tsp" },
      { item: "Ice cubes", amount: "4-5" },
      { item: "Cinnamon", amount: "pinch" }
    ],
    instructions: "Add banana, peanut butter, milk, and honey to blender.\nAdd ice cubes and cinnamon.\nBlend on high until smooth and creamy.\nPour into a glass.\nServe immediately.",
    protein: 14,
    carbs: 45,
    fat: 18,
    calories: 400,
    prepTime: 5,
    image: "https://images.pexels.com/photos/33835510/pexels-photo-33835510.jpeg"
  },
  {
    id: 146,
    name: "Egg White Veggie Scramble",
    ingredients: [
      { item: "Egg whites", amount: "4" },
      { item: "Bell pepper, diced", amount: "1/2" },
      { item: "Onion, diced", amount: "1/4" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Heat olive oil in a pan over medium heat.\nSauté diced onion and bell pepper for 3 minutes.\nAdd spinach and cook until wilted.\nPour in egg whites and scramble until cooked.\nSeason with salt and pepper.\nServe hot.",
    protein: 18,
    carbs: 8,
    fat: 6,
    calories: 150,
    prepTime: 10,
    image: "https://images.pexels.com/photos/25906336/pexels-photo-25906336.jpeg"
  },
  {
    id: 147,
    name: "Overnight Oats with Berries",
    ingredients: [
      { item: "Rolled oats", amount: "1/2 cup" },
      { item: "Milk or yogurt", amount: "3/4 cup" },
      { item: "Chia seeds", amount: "1 tbsp" },
      { item: "Mixed berries", amount: "1/2 cup" },
      { item: "Honey", amount: "1 tsp" },
      { item: "Vanilla extract", amount: "1/4 tsp" }
    ],
    instructions: "Mix oats, milk, chia seeds, honey, and vanilla in a jar.\nStir well to combine.\nCover and refrigerate overnight.\nIn the morning, top with fresh berries.\nStir and enjoy cold or microwave briefly.",
    protein: 12,
    carbs: 48,
    fat: 8,
    calories: 310,
    prepTime: 5,
    image: "https://images.pexels.com/photos/27850095/pexels-photo-27850095.jpeg"
  },
  {
    id: 148,
    name: "High-Protein French Toast",
    ingredients: [
      { item: "Whole wheat bread", amount: "2 slices" },
      { item: "Eggs", amount: "2" },
      { item: "Milk", amount: "2 tbsp" },
      { item: "Cinnamon", amount: "1/2 tsp" },
      { item: "Vanilla extract", amount: "1/4 tsp" },
      { item: "Oil for cooking", amount: "1 tsp" }
    ],
    instructions: "Whisk eggs, milk, cinnamon, and vanilla in a bowl.\nHeat oil in a pan over medium heat.\nDip bread slices in egg mixture, coating both sides.\nCook 2-3 minutes per side until golden.\nServe with fresh fruit or a drizzle of honey.",
    protein: 16,
    carbs: 28,
    fat: 12,
    calories: 280,
    prepTime: 10,
    image: "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg"
  },
  {
    id: 149,
    name: "Quinoa Breakfast Bowl",
    ingredients: [
      { item: "Cooked quinoa", amount: "1/2 cup" },
      { item: "Milk", amount: "1/4 cup" },
      { item: "Banana, sliced", amount: "1/2" },
      { item: "Cinnamon", amount: "1/2 tsp" },
      { item: "Honey", amount: "1 tsp" },
      { item: "Almonds, chopped", amount: "1 tbsp" }
    ],
    instructions: "Heat cooked quinoa with milk in a pot.\nStir in cinnamon and heat through.\nTransfer to a bowl.\nTop with sliced banana and chopped almonds.\nDrizzle with honey and serve warm.",
    protein: 10,
    carbs: 42,
    fat: 8,
    calories: 280,
    prepTime: 8,
    image: "https://images.pexels.com/photos/15860798/pexels-photo-15860798.jpeg"
  },
  {
    id: 150,
    name: "Smoked Salmon Egg Wrap",
    ingredients: [
      { item: "Whole wheat tortilla", amount: "1" },
      { item: "Eggs", amount: "2" },
      { item: "Smoked salmon", amount: "2 oz" },
      { item: "Cream cheese", amount: "1 tbsp" },
      { item: "Spinach leaves", amount: "handful" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Heat olive oil in a pan and scramble eggs.\nWarm tortilla in microwave for 15 seconds.\nSpread cream cheese on tortilla.\nAdd scrambled eggs, smoked salmon, and spinach.\nRoll up tightly and cut in half.\nServe immediately.",
    protein: 26,
    carbs: 22,
    fat: 14,
    calories: 330,
    prepTime: 10,
    image: "https://images.pexels.com/photos/12961894/pexels-photo-12961894.jpeg"
  },
// here 

  {
    id: 151,
    name: "Greek Yogurt Protein Bowl",
    ingredients: [
      { item: "Greek yogurt", amount: "200g" },
      { item: "Banana, sliced", amount: "1 medium" },
      { item: "Peanut butter", amount: "1 tbsp" },
      { item: "Honey", amount: "1 tsp" },
      { item: "Granola", amount: "2 tbsp" }
    ],
    instructions: "Place Greek yogurt in a bowl.\nTop with sliced banana.\nAdd a dollop of peanut butter.\nDrizzle honey over the top.\nSprinkle with granola.\nMix together and enjoy.\nPerfect high-protein breakfast.",
    protein: 25,
    carbs: 48,
    fat: 12,
    calories: 395,
    prepTime: 5,
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg"
  },
  {
    id: 152,
    name: "Scrambled Eggs with Vegetables",
    ingredients: [
      { item: "Eggs", amount: "3 eggs" },
      { item: "Bell pepper, diced", amount: "1/2 cup" },
      { item: "Onion, diced", amount: "1/4 cup" },
      { item: "Tomato, diced", amount: "1/2 cup" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Heat olive oil in a pan.\nSauté onion and bell pepper until soft.\nAdd diced tomato and cook for 1 minute.\nBeat eggs and pour into pan.\nScramble until cooked through.\nSeason with salt and pepper.\nServe hot with whole wheat bread.",
    protein: 20,
    carbs: 8,
    fat: 18,
    calories: 270,
    prepTime: 10,
    image: "https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg"
  },
  {
    id: 153,
    name: "Oatmeal with Berries",
    ingredients: [
      { item: "Oats", amount: "1/2 cup" },
      { item: "Water or milk", amount: "1 cup" },
      { item: "Frozen berries", amount: "1/2 cup" },
      { item: "Honey", amount: "1 tbsp" },
      { item: "Cinnamon", amount: "1/2 tsp" },
      { item: "Almonds, sliced", amount: "1 tbsp" }
    ],
    instructions: "Bring water or milk to a boil.\nAdd oats and reduce heat.\nCook for 5 minutes, stirring occasionally.\nAdd frozen berries and cinnamon.\nCook for 2 more minutes.\nTransfer to bowl and drizzle with honey.\nTop with sliced almonds.",
    protein: 10,
    carbs: 52,
    fat: 8,
    calories: 310,
    prepTime: 10,
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
  },
  {
    id: 154,
    name: "Cottage Cheese Pancakes",
    ingredients: [
      { item: "Cottage cheese", amount: "150g" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Flour", amount: "3 tbsp" },
      { item: "Vanilla extract", amount: "1/2 tsp" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Honey or maple syrup", amount: "1 tbsp" }
    ],
    instructions: "Mix cottage cheese, eggs, flour, and vanilla in a bowl.\nHeat olive oil in a pan over medium heat.\nPour small circles of batter into pan.\nCook for 2-3 minutes per side until golden.\nFlip carefully and cook other side.\nServe with honey or maple syrup.\nEnjoy these protein-packed pancakes.",
    protein: 28,
    carbs: 30,
    fat: 16,
    calories: 380,
    prepTime: 15,
    image: "https://images.pexels.com/photos/17906653/pexels-photo-17906653.jpeg"
  },
  {
    id: 155,
    name: "Tuna Omelet",
    ingredients: [
      { item: "Eggs", amount: "3 eggs" },
      { item: "Canned tuna in water, drained", amount: "80g" },
      { item: "Onion, diced", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Salt and pepper", amount: "to taste" },
      { item: "Fresh parsley, chopped", amount: "1 tbsp" }
    ],
    instructions: "Beat eggs in a bowl with salt and pepper.\nHeat olive oil in a pan.\nSauté onion until translucent.\nAdd drained tuna and mix.\nPour eggs over tuna mixture.\nCook until edges set, then fold omelet.\nSprinkle with fresh parsley and serve.",
    protein: 35,
    carbs: 3,
    fat: 20,
    calories: 330,
    prepTime: 10,
    image: "https://images.pexels.com/photos/23884202/pexels-photo-23884202.jpeg"
  },
  {
    id: 156,
    name: "Whole Wheat Toast with Avocado and Egg",
    ingredients: [
      { item: "Whole wheat bread", amount: "2 slices" },
      { item: "Avocado", amount: "1/2 avocado" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Salt and pepper", amount: "to taste" },
      { item: "Red pepper flakes", amount: "pinch" }
    ],
    instructions: "Toast bread until golden.\nMash avocado and spread on toast.\nHeat olive oil in a pan.\nFry or poach eggs to your preference.\nPlace eggs on top of avocado toast.\nSeason with salt, pepper, and red pepper flakes.\nServe immediately.",
    protein: 18,
    carbs: 32,
    fat: 22,
    calories: 390,
    prepTime: 10,
    image: "https://images.pexels.com/photos/7936963/pexels-photo-7936963.jpeg"
  },
  {
    id: 157,
    name: "Protein Smoothie Bowl",
    ingredients: [
      { item: "Banana, frozen", amount: "1 large" },
      { item: "Milk", amount: "1/2 cup" },
      { item: "Protein powder", amount: "1 scoop" },
      { item: "Peanut butter", amount: "1 tbsp" },
      { item: "Granola", amount: "2 tbsp" },
      { item: "Fresh berries", amount: "1/4 cup" }
    ],
    instructions: "Blend frozen banana, milk, protein powder, and peanut butter until smooth.\nPour into a bowl.\nTop with granola and fresh berries.\nAdd extra toppings if desired.\nEat with a spoon.\nPerfect post-workout breakfast.",
    protein: 32,
    carbs: 45,
    fat: 12,
    calories: 420,
    prepTime: 5,
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
  },
  {
    id: 159,
    name: "Peanut Butter Banana Sandwich",
    ingredients: [
      { item: "Whole wheat bread", amount: "2 slices" },
      { item: "Peanut butter", amount: "2 tbsp" },
      { item: "Banana, sliced", amount: "1 medium" },
      { item: "Honey", amount: "1 tsp" },
      { item: "Cinnamon", amount: "pinch" }
    ],
    instructions: "Toast bread lightly if desired.\nSpread peanut butter on both slices.\nLayer banana slices on one slice.\nDrizzle with honey.\nSprinkle with cinnamon.\nTop with second slice.\nCut in half and enjoy.",
    protein: 12,
    carbs: 48,
    fat: 18,
    calories: 400,
    prepTime: 5,
    image: "https://images.pexels.com/photos/20605008/pexels-photo-20605008.jpeg"
  },

  {
    id: 160,
    name: "Cheese and Vegetable Omelet",
    ingredients: [
      { item: "Eggs", amount: "3 eggs" },
      { item: "Feta or cottage cheese", amount: "50g" },
      { item: "Spinach, fresh", amount: "1 cup" },
      { item: "Mushrooms, sliced", amount: "1/2 cup" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Beat eggs with salt and pepper.\nHeat olive oil in a pan.\nSauté mushrooms until golden.\nAdd spinach and cook until wilted.\nPour eggs over vegetables.\nAdd crumbled cheese on one half.\nFold omelet when eggs are almost set.\nServe hot with whole grain toast.",
    protein: 26,
    carbs: 6,
    fat: 22,
    calories: 320,
    prepTime: 10,
    image: "https://images.pexels.com/photos/12310569/pexels-photo-12310569.jpeg"
  },
  // braekfast end 

  // lunch start 



  {
    id: 161,
    name: "Tahini Chicken Wrap",
    ingredients: [
      { item: "Whole wheat tortilla", amount: "1 large" },
      { item: "Chicken breast, cooked and diced", amount: "150g" },
      { item: "Tahini", amount: "2 tbsp" },
      { item: "Cucumber, diced", amount: "1/2 cup" },
      { item: "Lettuce", amount: "1 cup" },
      { item: "Lemon juice", amount: "1 tsp" }
    ],
    instructions: "Mix tahini with lemon juice and a little water.\nPlace tortilla on plate.\nSpread tahini mixture on tortilla.\nAdd diced chicken, cucumber, and lettuce.\nRoll tightly and cut in half.\nServe immediately.\nHigh protein meal ready in minutes.",
    protein: 42,
    carbs: 28,
    fat: 8,
    calories: 350,
    prepTime: 10,
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg"
  },
  {
    id: 162,
    name: "Tuna Salad Power Bowl",
    ingredients: [
      { item: "Canned tuna in water", amount: "1 can (150g)" },
      { item: "Mixed greens", amount: "2 cups" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Cucumber, sliced", amount: "1/2 cup" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Lemon juice", amount: "2 tbsp" }
    ],
    instructions: "Drain tuna and place in bowl.\nAdd mixed greens, tomatoes, and cucumber.\nDrizzle with olive oil and lemon juice.\nToss everything together.\nSeason with salt and pepper.\nEat immediately.\nPerfect high-protein, low-carb lunch.",
    protein: 35,
    carbs: 8,
    fat: 16,
    calories: 310,
    prepTime: 8,
    image: "https://images.pexels.com/photos/19572489/pexels-photo-19572489.jpeg"
  },
  {
    id: 163,
    name: "Egg White Veggie Omelette",
    ingredients: [
      { item: "Egg whites", amount: "4 eggs" },
      { item: "Bell peppers, diced", amount: "1/2 cup" },
      { item: "Onion, diced", amount: "1/4 cup" },
      { item: "Mushrooms, sliced", amount: "1/2 cup" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Heat olive oil in non-stick pan.\nSauté peppers, onions, and mushrooms until soft.\nAdd spinach and cook until wilted.\nPour egg whites over vegetables.\nCook until edges set, then fold.\nServe hot.\nLow-calorie, high-protein meal.",
    protein: 20,
    carbs: 10,
    fat: 6,
    calories: 180,
    prepTime: 12,
    image: "https://images.pexels.com/photos/10756661/pexels-photo-10756661.jpeg"
  },
  {
    id: 164,
    name: "Cottage Cheese Power Plate",
    ingredients: [
      { item: "Cottage cheese (5%)", amount: "200g" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Cucumber, sliced", amount: "1 cup" },
      { item: "Whole grain crackers", amount: "6 crackers" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Za'atar spice", amount: "1 tsp" }
    ],
    instructions: "Place cottage cheese in center of plate.\nArrange tomatoes and cucumber around cheese.\nDrizzle olive oil over cottage cheese.\nSprinkle za'atar on top.\nServe with crackers on the side.\nEat and enjoy.\nQuick protein-packed lunch.",
    protein: 28,
    carbs: 22,
    fat: 12,
    calories: 310,
    prepTime: 5,
    image: "https://images.pexels.com/photos/4198114/pexels-photo-4198114.jpeg"
  },
  {
    id: 166,
    name: "Quinoa Veggie Bowl",
    ingredients: [
      { item: "Quinoa, cooked", amount: "1 cup" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Cucumber, diced", amount: "1 cup" },
      { item: "Chickpeas, canned", amount: "1/2 cup" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Place cooked quinoa in bowl.\nAdd tomatoes, cucumber, and chickpeas.\nDrizzle with olive oil and lemon juice.\nMix well and season with salt.\nServe at room temperature.\nEnjoy this filling meal.\nGreat for muscle building.",
    protein: 16,
    carbs: 52,
    fat: 12,
    calories: 380,
    prepTime: 10,
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
  },
  {
    id: 167,
    name: "Scrambled Eggs with Avocado Toast",
    ingredients: [
      { item: "Whole grain bread", amount: "2 slices" },
      { item: "Eggs", amount: "3 eggs" },
      { item: "Avocado, mashed", amount: "1/2 avocado" },
      { item: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Toast bread until golden.\nScramble eggs in pan with olive oil.\nSpread mashed avocado on toast.\nTop with scrambled eggs.\nAdd cherry tomatoes on the side.\nSeason with salt and pepper.\nBalanced meal with healthy fats.",
    protein: 24,
    carbs: 30,
    fat: 22,
    calories: 420,
    prepTime: 10,
    image: "https://images.pexels.com/photos/26329279/pexels-photo-26329279.jpeg"
  },
  {
    id: 168,
    name: "Protein Shakshuka",
    ingredients: [
      { item: "Eggs", amount: "3 eggs" },
      { item: "Tomato sauce", amount: "1 cup" },
      { item: "Bell peppers, diced", amount: "1/2 cup" },
      { item: "Onion, diced", amount: "1/4 cup" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Heat olive oil in pan.\nSauté onion, garlic, and peppers.\nAdd tomato sauce and simmer 5 minutes.\nMake 3 wells in sauce.\nCrack eggs into wells.\nCover and cook until eggs set.\nTraditional Israeli protein meal.",
    protein: 21,
    carbs: 18,
    fat: 20,
    calories: 330,
    prepTime: 15,
    image: "https://images.pexels.com/photos/35672948/pexels-photo-35672948.jpeg"
  },
  {
    id: 169,
    name: "Chicken and Rice Bowl",
    ingredients: [
      { item: "Chicken breast, cooked and diced", amount: "150g" },
      { item: "White rice, cooked", amount: "1 cup" },
      { item: "Frozen mixed vegetables", amount: "1 cup" },
      { item: "Soy sauce", amount: "1 tbsp" },
      { item: "Garlic powder", amount: "1/2 tsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Heat olive oil in pan.\nAdd frozen vegetables and cook 5 minutes.\nAdd cooked chicken and rice.\nSeason with soy sauce and garlic powder.\nStir-fry for 3 minutes.\nServe hot in bowl.\nClassic bodybuilder meal.",
    protein: 38,
    carbs: 48,
    fat: 8,
    calories: 410,
    prepTime: 12,
    image: "https://images.pexels.com/photos/8477525/pexels-photo-8477525.jpeg"
  },
  {
    id: 170,
    name: "Salad with Hard-Boiled Eggs",
    ingredients: [
      { item: "Hard-boiled eggs", amount: "3 eggs" },
      { item: "Cucumber, finely diced", amount: "2 cups" },
      { item: "Tomatoes, finely diced", amount: "1 cup" },
      { item: "Onion, finely diced", amount: "1/4 cup" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Dice cucumber, tomatoes, and onion finely.\nMix vegetables in bowl.\nAdd lemon juice and olive oil.\nSeason with salt and pepper.\nSlice hard-boiled eggs.\nPlace eggs on top of salad.\nFresh Israeli classic with protein.",
    protein: 20,
    carbs: 14,
    fat: 18,
    calories: 290,
    prepTime: 10,
    image: "https://images.pexels.com/photos/30472978/pexels-photo-30472978.jpeg"
  },
  {
    id: 171,
    name: "Tuna Pasta with Vegetables",
    ingredients: [
      { item: "Whole wheat pasta", amount: "80g" },
      { item: "Canned tuna in water", amount: "1 can (150g)" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Fresh basil", amount: "5 leaves" }
    ],
    instructions: "Cook pasta according to package directions.\nHeat olive oil and sauté garlic.\nAdd drained tuna and tomatoes.\nCook for 3 minutes.\nToss with cooked pasta.\nGarnish with fresh basil.\nProtein-rich pasta dish ready.",
    protein: 40,
    carbs: 62,
    fat: 12,
    calories: 510,
    prepTime: 15,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800"
  },
  {
    id: 172,
    name: "Chicken Breast with Sweet Potato",
    ingredients: [
      { item: "Chicken breast", amount: "150g" },
      { item: "Sweet potato, cubed", amount: "1 medium" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Garlic powder", amount: "1/2 tsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Preheat oven to 200°C.\nCube sweet potato and toss with half the oil.\nSeason chicken with paprika and garlic powder.\nPlace chicken and sweet potato on baking sheet.\nDrizzle remaining oil over chicken.\nBake for 25 minutes.\nClassic fitness meal combo.",
    protein: 36,
    carbs: 32,
    fat: 14,
    calories: 400,
    prepTime: 30,
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg"
  },
  {
    id: 173,
    name: "Egg Fried Rice",
    ingredients: [
      { item: "Cooked rice", amount: "1 cup" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Frozen mixed vegetables", amount: "1 cup" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Green onions, sliced", amount: "2 stalks" },
      { item: "Sesame oil", amount: "1 tsp" }
    ],
    instructions: "Heat sesame oil in wok or large pan.\nScramble eggs and set aside.\nAdd vegetables and stir-fry 3 minutes.\nAdd rice and break up clumps.\nReturn eggs to pan with soy sauce.\nStir-fry 2 minutes and add green onions.\nQuick Asian-inspired protein meal.",
    protein: 16,
    carbs: 54,
    fat: 12,
    calories: 390,
    prepTime: 12,
    image: "https://images.pexels.com/photos/15681166/pexels-photo-15681166.jpeg"
  },
  {
    id: 174,
    name: "Lentil Soup",
    ingredients: [
      { item: "Red lentils", amount: "1/2 cup" },
      { item: "Carrots, diced", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/2 cup" },
      { item: "Vegetable broth", amount: "2 cups" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Heat olive oil and sauté onion until soft.\nAdd carrots and cook 3 minutes.\nAdd lentils, broth, and cumin.\nBring to boil then simmer 20 minutes.\nBlend half the soup if desired.\nServe hot with bread.\nHigh-protein vegetarian option.",
    protein: 18,
    carbs: 48,
    fat: 8,
    calories: 330,
    prepTime: 30,
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg"
  },
  {
    id: 175,
    name: "Turkey Meatballs with Tomato Sauce",
    ingredients: [
      { item: "Ground turkey", amount: "200g" },
      { item: "Breadcrumbs", amount: "3 tbsp" },
      { item: "Egg", amount: "1 egg" },
      { item: "Tomato sauce", amount: "1 cup" },
      { item: "Garlic powder", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Mix turkey, breadcrumbs, egg, and garlic powder.\nForm into 8 small meatballs.\nHeat olive oil in pan.\nBrown meatballs on all sides.\nAdd tomato sauce and simmer 15 minutes.\nServe with rice or vegetables.\nLean protein powerhouse.",
    protein: 46,
    carbs: 18,
    fat: 16,
    calories: 410,
    prepTime: 25,
    image: "https://images.pexels.com/photos/8879226/pexels-photo-8879226.jpeg"
  },
  {
    id: 176,
    name: "Salmon with Roasted Vegetables",
    ingredients: [
      { item: "Salmon fillet", amount: "150g" },
      { item: "Broccoli florets", amount: "1 cup" },
      { item: "Bell peppers, sliced", amount: "1 cup" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Dill", amount: "1 tsp" }
    ],
    instructions: "Preheat oven to 200°C.\nToss vegetables with half the olive oil.\nPlace salmon and vegetables on baking sheet.\nBrush salmon with remaining oil and lemon.\nSprinkle dill on salmon.\nBake for 18 minutes.\nOmega-3 rich fitness meal.",
    protein: 34,
    carbs: 12,
    fat: 20,
    calories: 360,
    prepTime: 25,
    image: "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg"
  },
  {
    id: 177,
    name: "Chickpea and Spinach Curry",
    ingredients: [
      { item: "Chickpeas, canned", amount: "1 can (400g)" },
      { item: "Spinach, fresh or frozen", amount: "2 cups" },
      { item: "Onion, diced", amount: "1/2 cup" },
      { item: "Curry powder", amount: "1 tbsp" },
      { item: "Coconut milk", amount: "1/2 cup" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Heat oil and sauté onion until golden.\nAdd curry powder and cook 1 minute.\nAdd drained chickpeas and coconut milk.\nSimmer 10 minutes.\nAdd spinach and cook until wilted.\nServe with rice or bread.\nVegetarian protein-packed curry.",
    protein: 16,
    carbs: 44,
    fat: 18,
    calories: 400,
    prepTime: 20,
    image: "https://images.pexels.com/photos/10464100/pexels-photo-10464100.jpeg"
  },
  {
    id: 178,
    name: "Whole Wheat Penne with Chicken",
    ingredients: [
      { item: "Whole wheat penne pasta", amount: "80g" },
      { item: "Chicken breast, diced", amount: "150g" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Cook penne according to package directions.\nHeat oil and cook chicken until golden.\nAdd garlic and tomatoes, cook 3 minutes.\nAdd spinach and cook until wilted.\nToss with cooked pasta.\nSeason with salt and pepper.\nBalanced high-protein pasta dish.",
    protein: 44,
    carbs: 64,
    fat: 14,
    calories: 550,
    prepTime: 18,
    image: "https://images.pexels.com/photos/5419338/pexels-photo-5419338.jpeg"
  },
  {
    id: 179,
    name: "Baked Tilapia with Lemon",
    ingredients: [
      { item: "Tilapia fillet", amount: "150g" },
      { item: "Lemon, sliced", amount: "1/2 lemon" },
      { item: "Green beans", amount: "1 cup" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Garlic powder", amount: "1/2 tsp" },
      { item: "Paprika", amount: "1/2 tsp" }
    ],
    instructions: "Preheat oven to 190°C.\nPlace tilapia on baking sheet.\nTop with lemon slices and seasonings.\nArrange green beans around fish.\nDrizzle everything with olive oil.\nBake for 15 minutes.\nLight and protein-rich meal.",
    protein: 32,
    carbs: 8,
    fat: 16,
    calories: 300,
    prepTime: 20,
    image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg"
  },
  {
    id: 180,
    name: "Bean and Vegetable Burrito Bowl",
    ingredients: [
      { item: "Cooked rice", amount: "1 cup" },
      { item: "Black beans, canned", amount: "1/2 cup" },
      { item: "Corn kernels", amount: "1/2 cup" },
      { item: "Tomatoes, diced", amount: "1/2 cup" },
      { item: "Lettuce, shredded", amount: "1 cup" },
      { item: "Lime juice", amount: "1 tbsp" }
    ],
    instructions: "Place rice at bottom of bowl.\nHeat black beans and corn together.\nArrange beans, corn, tomatoes, and lettuce on rice.\nDrizzle with lime juice.\nSeason with salt and pepper.\nMix before eating.\nFilling vegetarian power bowl.",
    protein: 14,
    carbs: 68,
    fat: 4,
    calories: 370,
    prepTime: 10,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg"
  },
  {
    id: 181,
    name: "Spicy Chicken Stir-Fry",
    ingredients: [
      { item: "Chicken breast, sliced", amount: "150g" },
      { item: "Bell peppers, sliced", amount: "1 cup" },
      { item: "Broccoli florets", amount: "1 cup" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Chili flakes", amount: "1/2 tsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Heat oil in wok or large pan.\nAdd chicken and cook until golden.\nAdd bell peppers and broccoli.\nStir-fry for 5 minutes.\nAdd soy sauce and chili flakes.\nToss everything together.\nServe over rice or alone.",
    protein: 38,
    carbs: 12,
    fat: 16,
    calories: 340,
    prepTime: 15,
    image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg"
  },
  {
    id: 182,
    name: "Mushroom and Egg Scramble",
    ingredients: [
      { item: "Eggs", amount: "3 eggs" },
      { item: "Mushrooms, sliced", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/4 cup" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Feta cheese", amount: "30g" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Heat oil in pan.\nSauté onion and mushrooms until golden.\nAdd spinach and cook until wilted.\nPour beaten eggs over vegetables.\nScramble everything together.\nTop with crumbled feta.\nProtein-packed breakfast for lunch.",
    protein: 26,
    carbs: 8,
    fat: 22,
    calories: 330,
    prepTime: 10,
    image: "https://images.pexels.com/photos/25906336/pexels-photo-25906336.jpeg"
  },
  {
    id: 183,
    name: "Beef and Rice Bowl",
    ingredients: [
      { item: "Ground beef (5% fat)", amount: "150g" },
      { item: "White rice, cooked", amount: "1 cup" },
      { item: "Frozen mixed vegetables", amount: "1 cup" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Garlic powder", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Heat oil and brown ground beef.\nDrain excess fat if needed.\nAdd vegetables and cook 5 minutes.\nAdd cooked rice and soy sauce.\nSeason with garlic powder.\nStir-fry for 3 minutes.\nClassic muscle-building meal.",
    protein: 36,
    carbs: 48,
    fat: 12,
    calories: 450,
    prepTime: 15,
    image: "https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg"
  },
  {
    id: 184,
    name: "Protein Pancakes",
    ingredients: [
      { item: "Oats", amount: "1/2 cup" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Banana, mashed", amount: "1 small" },
      { item: "Protein powder", amount: "1 scoop" },
      { item: "Cinnamon", amount: "1/2 tsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Blend oats, eggs, banana, protein powder, and cinnamon.\nHeat oil in non-stick pan.\nPour batter to make 3-4 pancakes.\nCook 2 minutes per side.\nFlip when bubbles appear.\nServe with honey or fruit.\nSweet protein-packed lunch option.",
    protein: 32,
    carbs: 42,
    fat: 14,
    calories: 420,
    prepTime: 12,
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
  },
  {
    id: 185,
    name: "Tuna and White Bean Salad",
    ingredients: [
      { item: "Canned tuna in water", amount: "1 can (150g)" },
      { item: "White beans, canned", amount: "1/2 cup" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Red onion, sliced", amount: "1/4 cup" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Drain tuna and beans.\nCombine in bowl with tomatoes and onion.\nDrizzle with olive oil and lemon juice.\nToss gently to combine.\nSeason with salt and pepper.\nServe immediately or chilled.\nDouble protein power salad.",
    protein: 42,
    carbs: 24,
    fat: 16,
    calories: 410,
    prepTime: 8,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  },
  {
    id: 186,
    name: "Baked Cod with Herbs",
    ingredients: [
      { item: "Cod fillet", amount: "150g" },
      { item: "Zucchini, sliced", amount: "1 cup" },
      { item: "Tomatoes, sliced", amount: "1/2 cup" },
      { item: "Fresh parsley", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Preheat oven to 190°C.\nPlace cod on baking sheet.\nArrange zucchini and tomatoes around fish.\nDrizzle with olive oil and lemon juice.\nSprinkle parsley over everything.\nBake for 18 minutes.\nLight and healthy white fish meal.",
    protein: 30,
    carbs: 8,
    fat: 16,
    calories: 290,
    prepTime: 25,
    image: "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg"
  },
  {
    id: 187,
    name: "Spaghetti with Tomato Sauce",
    ingredients: [
      { item: "Whole wheat spaghetti", amount: "80g" },
      { item: "Tomato sauce", amount: "1 cup" },
      { item: "Garlic, minced", amount: "3 cloves" },
      { item: "Fresh basil", amount: "5 leaves" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Red pepper flakes", amount: "1/4 tsp" }
    ],
    instructions: "Cook spaghetti according to package.\nHeat oil and sauté garlic until fragrant.\nAdd tomato sauce and pepper flakes.\nSimmer for 5 minutes.\nToss with cooked spaghetti.\nGarnish with fresh basil.\nClassic Italian pasta dish.",
    protein: 14,
    carbs: 68,
    fat: 12,
    calories: 440,
    prepTime: 15,
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
  },
  {
    id: 188,
    name: "Chicken Caesar Salad",
    ingredients: [
      { item: "Chicken breast, cooked and sliced", amount: "150g" },
      { item: "Romaine lettuce", amount: "2 cups" },
      { item: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { item: "Whole grain croutons", amount: "1/4 cup" },
      { item: "Parve Caesar dressing (dairy-free)", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "1 tsp" }
    ],
    instructions: "Chop romaine lettuce into bite-sized pieces.\nPlace in large bowl.\nAdd sliced chicken and croutons.\nDrizzle with Caesar dressing and lemon.\nAdd cherry tomatoes.\nToss everything together.\nClassic high-protein salad.",
    protein: 44,
    carbs: 12,
    fat: 18,
    calories: 390,
    prepTime: 10,
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg"
  },
  {
    id: 189,
    name: "Sweet Potato and Black Bean Tacos",
    ingredients: [
      { item: "Sweet potato, cubed", amount: "1 medium" },
      { item: "Black beans, canned", amount: "1/2 cup" },
      { item: "Corn tortillas", amount: "3 tortillas" },
      { item: "Lettuce, shredded", amount: "1 cup" },
      { item: "Salsa", amount: "3 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Toss sweet potato with oil and roast at 200°C for 20 minutes.\nHeat black beans in pan.\nWarm tortillas in dry pan.\nFill tortillas with sweet potato and beans.\nTop with lettuce and salsa.\nFold and serve immediately.\nVegetarian taco option.",
    protein: 14,
    carbs: 62,
    fat: 12,
    calories: 400,
    prepTime: 25,
    image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg"
  },
  {
    id: 190,
    name: "Ground Turkey Lettuce Wraps",
    ingredients: [
      { item: "Ground turkey", amount: "150g" },
      { item: "Lettuce leaves", amount: "4 large leaves" },
      { item: "Bell peppers, diced", amount: "1/2 cup" },
      { item: "Onion, diced", amount: "1/4 cup" },
      { item: "Soy sauce", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Heat oil and cook turkey until browned.\nAdd onion and peppers, cook 5 minutes.\nAdd soy sauce and mix well.\nWash and dry lettuce leaves.\nSpoon turkey mixture into lettuce cups.\nFold and eat like a taco.\nLow-carb high-protein option.",
    protein: 34,
    carbs: 8,
    fat: 12,
    calories: 280,
    prepTime: 12,
    image: "https://images.pexels.com/photos/29535640/pexels-photo-29535640.jpeg"
  },

  {
    id: 191,
    name: "Grilled Chicken Shawarma Bowl",
    ingredients: [
      { item: "Chicken breast", amount: "200g" },
      { item: "Shawarma spice mix", amount: "2 tsp" },
      { item: "Quinoa, cooked", amount: "1 cup" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Cucumber, diced", amount: "1 cup" },
      { item: "Red onion, sliced", amount: "1/4 cup" },
      { item: "Tahini sauce", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Season chicken breast with shawarma spices and olive oil.\nGrill chicken for 6-7 minutes per side until cooked through.\nSlice chicken into strips.\nArrange quinoa in a bowl as base.\nTop with grilled chicken strips.\nAdd cherry tomatoes, cucumber, and red onion.\nDrizzle with tahini sauce and lemon juice.\nServe immediately for a protein-packed meal.",
    protein: 45,
    carbs: 42,
    fat: 16,
    calories: 485,
    prepTime: 25,
    image: "https://images.pexels.com/photos/32845316/pexels-photo-32845316.jpeg"
  },
  {
    id: 192,
    name: "Mediterranean Tuna Salad Wrap",
    ingredients: [
      { item: "Whole wheat tortilla", amount: "1 large" },
      { item: "Tuna in water, drained", amount: "150g" },
      { item: "Greek yogurt", amount: "2 tbsp" },
      { item: "Romaine lettuce, chopped", amount: "1 cup" },
      { item: "Cucumber, diced", amount: "1/2 cup" },
      { item: "Red bell pepper, diced", amount: "1/2 cup" },
      { item: "Kalamata olives, sliced", amount: "6 olives" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Black pepper", amount: "1/4 tsp" }
    ],
    instructions: "Mix tuna with Greek yogurt, lemon juice, and black pepper.\nWarm tortilla slightly for flexibility.\nSpread tuna mixture in center of tortilla.\nLayer lettuce, cucumber, bell pepper, and olives.\nFold sides and roll tightly.\nCut in half diagonally.\nPerfect high-protein, portable lunch.",
    protein: 38,
    carbs: 35,
    fat: 8,
    calories: 365,
    prepTime: 10,
    image: "https://images.pexels.com/photos/8983407/pexels-photo-8983407.jpeg"
  },

  // here
  {
    id: 193,
    name: "Grilled Salmon with Sweet Potato",
    ingredients: [
      { item: "Salmon fillet", amount: "180g" },
      { item: "Sweet potato, cubed", amount: "200g" },
      { item: "Broccoli florets", amount: "1.5 cups" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Garlic powder", amount: "1 tsp" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Lemon wedges", amount: "2 wedges" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Preheat oven to 400°F (200°C).\nToss sweet potato cubes with half the olive oil and paprika.\nRoast for 20 minutes until tender.\nSeason salmon with garlic powder, salt, and pepper.\nGrill or pan-sear salmon 4-5 minutes per side.\nSteam broccoli for 5 minutes.\nPlate salmon with sweet potato and broccoli.\nServe with lemon wedges for omega-3 rich meal.",
    protein: 36,
    carbs: 38,
    fat: 18,
    calories: 450,
    prepTime: 30,
    image: "https://images.pexels.com/photos/31010018/pexels-photo-31010018.jpeg"
  },
  {
    id: 194,
    name: "Turkish Egg and Vegetable Shakshuka",
    ingredients: [
      { item: "Eggs", amount: "3 eggs" },
      { item: "Tomatoes, crushed", amount: "1.5 cups" },
      { item: "Red bell pepper, diced", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/2 cup" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Fresh parsley", amount: "2 tbsp" },
      { item: "Whole wheat pita", amount: "1 pita" }
    ],
    instructions: "Sauté onion and bell pepper until softened.\nAdd garlic, cumin, and paprika, cook 1 minute.\nPour in crushed tomatoes, simmer 10 minutes.\nCreate three wells in sauce.\nCrack eggs into wells.\nCover and cook until eggs set, about 5-7 minutes.\nGarnish with fresh parsley.\nServe with whole wheat pita for dipping.",
    protein: 24,
    carbs: 42,
    fat: 12,
    calories: 380,
    prepTime: 25,
    image: "https://images.pexels.com/photos/29843063/pexels-photo-29843063.jpeg"
  },
  {
    id: 195,
    name: "Chicken and Chickpea Power Bowl",
    ingredients: [
      { item: "Chicken breast, grilled", amount: "180g" },
      { item: "Chickpeas, cooked", amount: "1 cup" },
      { item: "Brown rice, cooked", amount: "3/4 cup" },
      { item: "Spinach, fresh", amount: "2 cups" },
      { item: "Cherry tomatoes", amount: "1 cup" },
      { item: "Avocado, sliced", amount: "1/2 avocado" },
      { item: "Tahini", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Za'atar", amount: "1 tsp" }
    ],
    instructions: "Cook brown rice according to package.\nGrill seasoned chicken breast until cooked through.\nSlice chicken into strips.\nArrange rice as bowl base.\nTop with spinach, chickpeas, and tomatoes.\nAdd sliced chicken and avocado.\nMix tahini with lemon juice and drizzle over bowl.\nSprinkle with za'atar for Middle Eastern flavor.",
    protein: 48,
    carbs: 52,
    fat: 20,
    calories: 580,
    prepTime: 30,
    image: "https://images.pexels.com/photos/19526778/pexels-photo-19526778.jpeg"
  },
  {
    id: 196,
    name: "Couscous with Grilled Vegetables",
    ingredients: [
      { item: "couscous", amount: "1 cup" },
      { item: "Chicken breast, grilled", amount: "150g" },
      { item: "Zucchini, sliced", amount: "1 cup" },
      { item: "Eggplant, cubed", amount: "1 cup" },
      { item: "Red bell pepper", amount: "1 pepper" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Fresh basil", amount: "1/4 cup" },
      { item: "Lemon zest", amount: "1 tsp" }
    ],
    instructions: "Cook Israeli couscous according to package.\nGrill zucchini, eggplant, and bell pepper until charred.\nSeason and grill chicken breast.\nSlice grilled vegetables and chicken.\nToss couscous with olive oil and garlic.\nAdd grilled vegetables and chicken.\nMix in fresh basil and lemon zest.\nServe warm for a satisfying Mediterranean meal.",
    protein: 38,
    carbs: 58,
    fat: 14,
    calories: 510,
    prepTime: 35,
    image: "https://images.pexels.com/photos/14720901/pexels-photo-14720901.jpeg"
  },
  {
    id: 197,
    name: "Turkey Schnitzel with Salad",
    ingredients: [
      { item: "Turkey breast cutlet", amount: "200g" },
      { item: "Whole wheat breadcrumbs", amount: "1/2 cup" },
      { item: "Egg white", amount: "1 egg white" },
      { item: "Cucumber, diced", amount: "1 cup" },
      { item: "Tomatoes, diced", amount: "1 cup" },
      { item: "Red onion, diced", amount: "1/4 cup" },
      { item: "Parsley, chopped", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Olive oil spray", amount: "as needed" }
    ],
    instructions: "Pound turkey cutlet to even thickness.\nDip in egg white, then coat with breadcrumbs.\nSpray pan with olive oil and pan-fry until golden, 4 minutes per side.\nMix cucumber, tomatoes, onion, and parsley.\nDress salad with lemon juice and pinch of salt.\nServe crispy schnitzel with fresh Israeli salad.\nLean protein with refreshing vegetables.",
    protein: 44,
    carbs: 28,
    fat: 10,
    calories: 385,
    prepTime: 20,
    image: "https://images.pexels.com/photos/12035744/pexels-photo-12035744.jpeg"
  },
  {
    id: 198,
    name: "Lentil and Vegetable Soup",
    ingredients: [
      { item: "Red lentils", amount: "1 cup" },
      { item: "Carrots, diced", amount: "1 cup" },
      { item: "Celery, diced", amount: "1/2 cup" },
      { item: "Onion, diced", amount: "1/2 cup" },
      { item: "Garlic, minced", amount: "3 cloves" },
      { item: "Vegetable broth", amount: "3 cups" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Turmeric", amount: "1/2 tsp" },
      { item: "Whole wheat roll", amount: "1 roll" }
    ],
    instructions: "Sauté onion, carrots, and celery until softened.\nAdd garlic, cumin, and turmeric, cook 1 minute.\nAdd lentils and vegetable broth.\nBring to boil, then simmer 25-30 minutes until lentils tender.\nBlend partially for creamy texture if desired.\nSeason with salt and pepper.\nServe hot with whole wheat roll.\nHigh-fiber, protein-rich comfort meal.",
    protein: 28,
    carbs: 68,
    fat: 4,
    calories: 425,
    prepTime: 40,
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg"
  },
  {
    id: 199,
    name: "Baked Falafel Bowl with Tahini",
    ingredients: [
      { item: "Falafel balls, baked", amount: "6 balls" },
      { item: "Bulgur wheat, cooked", amount: "1 cup" },
      { item: "Mixed greens", amount: "2 cups" },
      { item: "Cucumber, sliced", amount: "1 cup" },
      { item: "Tomatoes, diced", amount: "1 cup" },
      { item: "Red cabbage, shredded", amount: "1/2 cup" },
      { item: "Tahini sauce", amount: "3 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Sumac", amount: "1/2 tsp" }
    ],
    instructions: "Bake falafel according to package or homemade recipe.\nCook bulgur wheat in boiling water, 12 minutes.\nArrange bulgur and mixed greens in bowl.\nAdd baked falafel, cucumber, tomatoes, and cabbage.\nMix tahini with lemon juice and water to desired consistency.\nDrizzle tahini sauce over bowl.\nSprinkle with sumac.\nPlant-based protein powerhouse.",
    protein: 22,
    carbs: 54,
    fat: 18,
    calories: 460,
    prepTime: 25,
    image: "https://images.pexels.com/photos/34366571/pexels-photo-34366571.jpeg"
  },
  {
    id: 200,
    name: "Herb-Crusted Chicken with Roasted Vegetables",
    ingredients: [
      { item: "Chicken breast", amount: "200g" },
      { item: "Fresh herbs (parsley, thyme)", amount: "2 tbsp" },
      { item: "Cauliflower florets", amount: "1.5 cups" },
      { item: "Bell peppers, mixed colors", amount: "1.5 cups" },
      { item: "Red onion, wedged", amount: "1/2 onion" },
      { item: "Olive oil", amount: "1.5 tbsp" },
      { item: "Garlic powder", amount: "1 tsp" },
      { item: "Lemon wedge", amount: "1 wedge" }
    ],
    instructions: "Preheat oven to 425°F (220°C).\nCoat chicken with minced herbs, garlic powder, and olive oil.\nArrange vegetables on baking sheet, drizzle with olive oil.\nPlace seasoned chicken among vegetables.\nRoast for 25-30 minutes until chicken reaches 165°F.\nVegetables should be tender and slightly caramelized.\nSqueeze fresh lemon over chicken.\nComplete, balanced fitness meal.",
    protein: 42,
    carbs: 18,
    fat: 12,
    calories: 360,
    prepTime: 35,
    image: "https://images.pexels.com/photos/31233881/pexels-photo-31233881.jpeg"
  },

  {
    id: 201,
    name: "Grilled Chicken Breast with Quinoa Tabbouleh",
    ingredients: [
      { item: "Chicken breast", amount: "200g" },
      { item: "Quinoa, cooked", amount: "1 cup" },
      { item: "Parsley, chopped", amount: "1 cup" },
      { item: "Tomatoes, diced", amount: "1 cup" },
      { item: "Cucumber, diced", amount: "1/2 cup" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Mint, chopped", amount: "2 tbsp" },
      { item: "Garlic powder", amount: "1 tsp" }
    ],
    instructions: "Season chicken with garlic powder, salt, and pepper.\nGrill chicken for 6-7 minutes per side until cooked through.\nMix cooked quinoa with parsley, mint, tomatoes, and cucumber.\nDress tabbouleh with lemon juice and olive oil.\nSlice grilled chicken and place on top of quinoa tabbouleh.\nServe immediately.\nHigh-protein meal with fresh Mediterranean flavors.",
    protein: 46,
    carbs: 40,
    fat: 12,
    calories: 460,
    prepTime: 25,
    image: "https://images.pexels.com/photos/8250430/pexels-photo-8250430.jpeg"
  },
  {
    id: 202,
    name: "Spiced Turkey Meatballs with Zucchini Noodles",
    ingredients: [
      { item: "Ground turkey", amount: "200g" },
      { item: "Zucchini, spiralized", amount: "2 cups" },
      { item: "Egg white", amount: "1 egg white" },
      { item: "Onion powder", amount: "1 tsp" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Tomato sauce", amount: "1 cup" },
      { item: "Fresh basil", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Mix ground turkey with egg white, onion powder, cumin, and half the garlic.\nForm into 8-10 meatballs.\nBake at 375°F for 20 minutes until cooked through.\nSauté remaining garlic in olive oil, add tomato sauce, simmer 5 minutes.\nQuickly sauté zucchini noodles for 2-3 minutes.\nPlace zucchini noodles on plate, top with meatballs.\nPour tomato sauce over meatballs.\nGarnish with fresh basil for low-carb, high-protein meal.",
    protein: 44,
    carbs: 16,
    fat: 14,
    calories: 360,
    prepTime: 30,
    image: "https://images.pexels.com/photos/15957257/pexels-photo-15957257.jpeg"
  },
  {
    id: 203,
    name: "Sabich-Inspired Protein Bowl",
    ingredients: [
      { item: "Hard-boiled eggs", amount: "3 eggs" },
      { item: "Eggplant, sliced", amount: "1 cup" },
      { item: "Israeli couscous, cooked", amount: "3/4 cup" },
      { item: "Cucumber, diced", amount: "1 cup" },
      { item: "Tomatoes, diced", amount: "1 cup" },
      { item: "Tahini", amount: "2 tbsp" },
      { item: "Amba sauce", amount: "1 tbsp" },
      { item: "Parsley, chopped", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Brush eggplant slices with olive oil and grill until tender.\nCook Israeli couscous according to package.\nHalve hard-boiled eggs.\nArrange couscous in bowl as base.\nAdd grilled eggplant, cucumber, and tomatoes.\nPlace halved eggs on top.\nDrizzle with tahini and amba sauce.\nGarnish with parsley for Israeli street food inspired lunch.",
    protein: 26,
    carbs: 48,
    fat: 20,
    calories: 470,
    prepTime: 25,
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
  },
  {
    id: 204,
    name: "Moroccan Spiced Chicken with Chickpeas",
    ingredients: [
      { item: "Chicken thighs, boneless", amount: "180g" },
      { item: "Chickpeas, cooked", amount: "1 cup" },
      { item: "Carrots, sliced", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/2 cup" },
      { item: "Ras el hanout", amount: "2 tsp" },
      { item: "Tomatoes, crushed", amount: "1 cup" },
      { item: "Vegetable broth", amount: "1/2 cup" },
      { item: "Dried apricots, chopped", amount: "4 apricots" },
      { item: "Fresh cilantro", amount: "2 tbsp" }
    ],
    instructions: "Season chicken with ras el hanout, salt, and pepper.\nBrown chicken in pan, then set aside.\nSauté onion and carrots until softened.\nAdd tomatoes, broth, chickpeas, and apricots.\nReturn chicken to pan, cover and simmer 20 minutes.\nChicken should be cooked through and tender.\nGarnish with fresh cilantro.\nServe this North African inspired protein dish.",
    protein: 38,
    carbs: 45,
    fat: 12,
    calories: 450,
    prepTime: 35,
    image: "https://images.pexels.com/photos/10338448/pexels-photo-10338448.jpeg"
  },
  {
    id: 205,
    name: "Tuna Nicoise Salad Bowl",
    ingredients: [
      { item: "Tuna steak, seared", amount: "180g" },
      { item: "Green beans, steamed", amount: "1.5 cups" },
      { item: "Baby potatoes, halved", amount: "1 cup" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Mixed greens", amount: "2 cups" },
      { item: "Hard-boiled egg, halved", amount: "1 egg" },
      { item: "Kalamata olives", amount: "8 olives" },
      { item: "Lemon-olive oil dressing", amount: "2 tbsp" },
      { item: "Dijon mustard", amount: "1 tsp" }
    ],
    instructions: "Boil baby potatoes until tender, about 12 minutes.\nSteam green beans for 5 minutes.\nSear tuna steak 2 minutes per side for medium-rare.\nArrange mixed greens in large bowl.\nAdd green beans, potatoes, tomatoes, and olives.\nSlice tuna and place on top with halved egg.\nWhisk lemon-olive oil dressing with Dijon mustard.\nDrizzle over salad for French-inspired fitness meal.",
    protein: 42,
    carbs: 32,
    fat: 16,
    calories: 445,
    prepTime: 25,
    image: "https://images.pexels.com/photos/8983406/pexels-photo-8983406.jpeg"
  },
  {
    id: 206,
    name: "Mediterranean Stuffed Bell Peppers",
    ingredients: [
      { item: "Bell peppers, halved", amount: "2 peppers" },
      { item: "Ground turkey", amount: "150g" },
      { item: "Brown rice, cooked", amount: "1/2 cup" },
      { item: "Tomatoes, diced", amount: "1/2 cup" },
      { item: "Onion, diced", amount: "1/4 cup" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Oregano", amount: "1 tsp" },
      { item: "Pine nuts, toasted", amount: "1 tbsp" },
      { item: "Fresh parsley", amount: "2 tbsp" }
    ],
    instructions: "Preheat oven to 375°F (190°C).\nBrown ground turkey with onion and garlic.\nMix in cooked rice, tomatoes, oregano, and pine nuts.\nSeason with salt and pepper.\nFill bell pepper halves with turkey mixture.\nPlace in baking dish with 1/4 cup water.\nCover with foil and bake 30 minutes.\nGarnish with fresh parsley for complete meal in a pepper.",
    protein: 36,
    carbs: 38,
    fat: 10,
    calories: 395,
    prepTime: 45,
    image: "https://images.pexels.com/photos/15820587/pexels-photo-15820587.jpeg"
  },
  {
    id: 207,
    name: "Grilled Sea Bass with Roasted Root Vegetables",
    ingredients: [
      { item: "Sea bass fillet", amount: "200g" },
      { item: "Sweet potato, cubed", amount: "1 cup" },
      { item: "Beets, cubed", amount: "1 cup" },
      { item: "Carrots, sliced", amount: "1 cup" },
      { item: "Olive oil", amount: "1.5 tbsp" },
      { item: "Fresh thyme", amount: "1 tsp" },
      { item: "Garlic powder", amount: "1 tsp" },
      { item: "Lemon wedges", amount: "2 wedges" }
    ],
    instructions: "Preheat oven to 400°F (200°C).\nToss sweet potato, beets, and carrots with olive oil and thyme.\nRoast vegetables for 25-30 minutes until tender.\nSeason sea bass with garlic powder, salt, and pepper.\nGrill or pan-sear fish 4-5 minutes per side.\nPlate roasted root vegetables.\nTop with grilled sea bass.\nServe with lemon wedges for omega-3 rich meal.",
    protein: 38,
    carbs: 42,
    fat: 14,
    calories: 445,
    prepTime: 40,
    image: "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg"
  },
  {
    id: 208,
    name: "Chicken Schnitzel Salad Platter",
    ingredients: [
      { item: "Chicken breast cutlet", amount: "180g" },
      { item: "Whole wheat panko", amount: "1/2 cup" },
      { item: "Egg white", amount: "1 egg white" },
      { item: "Mixed greens", amount: "3 cups" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Cucumber, sliced", amount: "1 cup" },
      { item: "Red cabbage, shredded", amount: "1/2 cup" },
      { item: "Lemon-tahini dressing", amount: "2 tbsp" },
      { item: "Sumac", amount: "1/2 tsp" }
    ],
    instructions: "Pound chicken to even thickness.\nDip in egg white, coat with panko breadcrumbs.\nSpray pan with oil, cook schnitzel 4-5 minutes per side until golden.\nArrange mixed greens on large platter.\nAdd tomatoes, cucumber, and red cabbage.\nSlice cooked schnitzel into strips.\nPlace schnitzel strips over salad.\nDrizzle with lemon-tahini dressing and sprinkle sumac.",
    protein: 44,
    carbs: 32,
    fat: 12,
    calories: 420,
    prepTime: 20,
    image: "https://images.pexels.com/photos/27497772/pexels-photo-27497772.jpeg"
  },
  {
    id: 209,
    name: "White Fish with Lemon-Herb Couscous",
    ingredients: [
      { item: "White fish fillet (cod/halibut)", amount: "200g" },
      { item: "Pearl couscous", amount: "3/4 cup" },
      { item: "Asparagus spears", amount: "10 spears" },
      { item: "Cherry tomatoes", amount: "1 cup" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Fresh dill", amount: "2 tbsp" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "White wine", amount: "2 tbsp" }
    ],
    instructions: "Cook pearl couscous according to package.\nSeason fish with salt, pepper, and garlic.\nSauté fish in olive oil, 4 minutes per side.\nAdd white wine and lemon juice to pan, simmer 2 minutes.\nSteam asparagus for 5 minutes.\nToss couscous with cherry tomatoes and fresh dill.\nPlate couscous with asparagus.\nTop with fish and pan sauce for elegant, light meal.",
    protein: 40,
    carbs: 44,
    fat: 8,
    calories: 410,
    prepTime: 25,
    image: "https://images.pexels.com/photos/1854037/pexels-photo-1854037.jpeg"
  },
  {
    id: 210,
    name: "Asian-Inspired Chicken Lettuce Wraps",
    ingredients: [
      { item: "Ground chicken", amount: "200g" },
      { item: "Romaine lettuce leaves", amount: "6 leaves" },
      { item: "Water chestnuts, diced", amount: "1/2 cup" },
      { item: "Carrots, julienned", amount: "1/2 cup" },
      { item: "Scallions, sliced", amount: "2 scallions" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Ginger, grated", amount: "1 tsp" },
      { item: "Coconut aminos", amount: "2 tbsp" },
      { item: "Sesame seeds", amount: "1 tsp" }
    ],
    instructions: "Brown ground chicken in pan, breaking into small pieces.\nAdd garlic and ginger, cook 1 minute.\nStir in water chestnuts, carrots, and coconut aminos.\nCook 5 minutes until vegetables tender.\nAdd sliced scallions, mix well.\nWash and dry lettuce leaves.\nSpoon chicken mixture into lettuce cups.\nSprinkle with sesame seeds for low-carb, protein-packed wraps.",
    protein: 42,
    carbs: 12,
    fat: 10,
    calories: 310,
    prepTime: 20,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg"
  },

  // lunch end

  // dinner start

  {
    id: 211,
    name: "Tuna and Chickpea Salad Bowl",
    ingredients: [
      { item: "Canned tuna in water", amount: "1 can (150g)" },
      { item: "Chickpeas, canned", amount: "1 cup" },
      { item: "Cucumber, diced", amount: "1 medium" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Red onion, diced", amount: "1/4 cup" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Drain and rinse chickpeas.\nDrain tuna and flake with fork.\nCombine tuna and chickpeas in bowl.\nAdd diced cucumber, tomatoes, and onion.\nDrizzle with olive oil and lemon juice.\nMix well and season with salt and pepper.\nServe chilled or at room temperature.",
    protein: 38,
    carbs: 32,
    fat: 12,
    calories: 380,
    prepTime: 10,
    image: "https://images.pexels.com/photos/19572489/pexels-photo-19572489.jpeg"
  },
  {
    id: 212,
    name: "Ground Turkey Rice Bowl",
    ingredients: [
      { item: "Ground turkey", amount: "150g" },
      { item: "White rice, cooked", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/2 cup" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Cook rice according to package.\nHeat oil in pan over medium heat.\nSauté onion and garlic until soft.\nAdd ground turkey and break apart.\nSeason with paprika, salt, and pepper.\nCook until turkey is browned through.\nServe turkey over rice.",
    protein: 35,
    carbs: 45,
    fat: 14,
    calories: 450,
    prepTime: 20,
    image: "https://images.pexels.com/photos/8423376/pexels-photo-8423376.png"
  },
  {
    id: 213,
    name: "Scrambled Eggs with Vegetables",
    ingredients: [
      { item: "Eggs", amount: "3 eggs" },
      { item: "Bell pepper, diced", amount: "1/2 cup" },
      { item: "Mushrooms, sliced", amount: "1/2 cup" },
      { item: "Onion, diced", amount: "1/4 cup" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Black pepper", amount: "to taste" }
    ],
    instructions: "Heat oil in non-stick pan.\nSauté onion, pepper, and mushrooms until soft.\nBeat eggs in bowl with salt and pepper.\nPour eggs over vegetables.\nScramble gently until cooked through.\nServe immediately while hot.\nOptional: serve with toast.",
    protein: 21,
    carbs: 8,
    fat: 18,
    calories: 280,
    prepTime: 12,
    image: "https://images.pexels.com/photos/32106689/pexels-photo-32106689.jpeg"
  },
  {
    id: 214,
    name: "Baked Chicken Breast with Herbs",
    ingredients: [
      { item: "Chicken breast", amount: "200g" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Garlic powder", amount: "1 tsp" },
      { item: "Dried oregano", amount: "1 tsp" },
      { item: "Paprika", amount: "1/2 tsp" },
      { item: "Lemon juice", amount: "1 tbsp" }
    ],
    instructions: "Preheat oven to 200°C (400°F).\nRub chicken with olive oil.\nSeason with garlic powder, oregano, paprika, salt.\nPlace in baking dish.\nDrizzle with lemon juice.\nBake for 25-30 minutes until cooked through.\nLet rest 5 minutes before serving.",
    protein: 42,
    carbs: 2,
    fat: 12,
    calories: 290,
    prepTime: 35,
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg"
  },
  {
    id: 215,
    name: "Cottage Cheese and Cucumber Plate",
    ingredients: [
      { item: "Cottage cheese", amount: "200g" },
      { item: "Cucumber, sliced", amount: "1 medium" },
      { item: "Cherry tomatoes", amount: "1 cup" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Black pepper", amount: "to taste" },
      { item: "Whole wheat crackers", amount: "4-5 crackers" }
    ],
    instructions: "Place cottage cheese in bowl.\nSlice cucumber and arrange around cheese.\nAdd cherry tomatoes.\nDrizzle with olive oil.\nSeason with black pepper.\nServe with whole wheat crackers.\nSimple, protein-packed meal.",
    protein: 28,
    carbs: 18,
    fat: 8,
    calories: 260,
    prepTime: 5,
    image: "https://images.pexels.com/photos/4891597/pexels-photo-4891597.jpeg"
  },
  {
    id: 216,
    name: "Lentil and Vegetable Stew",
    ingredients: [
      { item: "Red lentils", amount: "1/2 cup" },
      { item: "Carrots, diced", amount: "1 cup" },
      { item: "Celery, diced", amount: "1/2 cup" },
      { item: "Onion, diced", amount: "1/2 cup" },
      { item: "Vegetable broth", amount: "2 cups" },
      { item: "Cumin", amount: "1 tsp" }
    ],
    instructions: "Rinse lentils thoroughly.\nSauté onion, carrots, and celery in pot.\nAdd lentils and vegetable broth.\nAdd cumin, salt, and pepper.\nBring to boil, then simmer.\nCook 20 minutes until lentils are soft.\nServe hot as hearty stew.",
    protein: 16,
    carbs: 42,
    fat: 2,
    calories: 250,
    prepTime: 30,
    image: "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg"
  },
  {
    id: 217,
    name: "Tuna Omelet",
    ingredients: [
      { item: "Eggs", amount: "3 eggs" },
      { item: "Canned tuna in water", amount: "1/2 can (75g)" },
      { item: "Onion, diced", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Black pepper", amount: "to taste" },
      { item: "Fresh parsley", amount: "1 tbsp" }
    ],
    instructions: "Drain tuna and flake.\nBeat eggs with salt and pepper.\nHeat oil in non-stick pan.\nPour in eggs and let set slightly.\nAdd tuna and onion to one half.\nFold omelet over filling.\nCook until golden and fully set.",
    protein: 32,
    carbs: 3,
    fat: 20,
    calories: 320,
    prepTime: 10,
    image: "https://images.pexels.com/photos/1277939/pexels-photo-1277939.jpeg"
  },
  {
    id: 218,
    name: "Quinoa Salad with Vegetables",
    ingredients: [
      { item: "Quinoa", amount: "1/2 cup dry" },
      { item: "Cucumber, diced", amount: "1 cup" },
      { item: "Tomatoes, diced", amount: "1 cup" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Parsley, chopped", amount: "2 tbsp" }
    ],
    instructions: "Cook quinoa according to package instructions.\nLet quinoa cool to room temperature.\nDice cucumber and tomatoes.\nCombine quinoa with vegetables.\nAdd lemon juice and olive oil.\nMix in chopped parsley.\nServe chilled or at room temperature.",
    protein: 10,
    carbs: 38,
    fat: 12,
    calories: 290,
    prepTime: 25,
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
  },
  {
    id: 219,
    name: "Greek Yogurt with Granola and Fruit",
    ingredients: [
      { item: "Greek yogurt, plain", amount: "200g" },
      { item: "Granola", amount: "1/3 cup" },
      { item: "Banana, sliced", amount: "1 medium" },
      { item: "Honey", amount: "1 tbsp" },
      { item: "Cinnamon", amount: "1/4 tsp" },
      { item: "Almonds, chopped", amount: "2 tbsp" }
    ],
    instructions: "Place Greek yogurt in bowl.\nTop with granola.\nAdd sliced banana.\nDrizzle with honey.\nSprinkle with cinnamon and almonds.\nMix before eating or enjoy layered.\nPerfect protein-rich meal.",
    protein: 22,
    carbs: 52,
    fat: 12,
    calories: 400,
    prepTime: 5,
    image: "https://images.pexels.com/photos/30265685/pexels-photo-30265685.jpeg"
  },
  {
    id: 220,
    name: "White Fish with Lemon and Herbs",
    ingredients: [
      { item: "White fish fillet (tilapia/cod)", amount: "200g" },
      { item: "Lemon, sliced", amount: "1/2 lemon" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Dried thyme", amount: "1/2 tsp" },
      { item: "Fresh parsley", amount: "1 tbsp" }
    ],
    instructions: "Preheat oven to 190°C (375°F).\nPlace fish in baking dish.\nDrizzle with olive oil.\nTop with garlic, thyme, and lemon slices.\nSeason with salt and pepper.\nBake for 15-20 minutes until fish flakes.\nGarnish with fresh parsley.",
    protein: 38,
    carbs: 2,
    fat: 10,
    calories: 260,
    prepTime: 25,
    image: "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg"
  }, 

  {
    id: 221,
    name: "Grilled Chicken Breast with Roasted Vegetables",
    ingredients: [
      { item: "Chicken breast", amount: "150g" },
      { item: "Zucchini, sliced", amount: "1 medium" },
      { item: "Bell pepper, sliced", amount: "1 medium" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Season chicken breast with salt, pepper, and garlic.\nHeat olive oil in a pan over medium-high heat.\nGrill chicken for 6-7 minutes per side until cooked through.\nToss zucchini and bell pepper in remaining oil.\nRoast vegetables in pan until tender.\nServe chicken over roasted vegetables.\nEnjoy this protein-packed meal.",
    protein: 42,
    carbs: 12,
    fat: 14,
    calories: 340,
    prepTime: 25,
    image: "https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg"
  },
  {
    id: 222,
    name: "Tuna and White Bean Salad",
    ingredients: [
      { item: "Canned tuna in water", amount: "1 can (140g)" },
      { item: "White beans, canned", amount: "100g" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Red onion, diced", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Drain tuna and place in a bowl.\nRinse and drain white beans.\nAdd beans, tomatoes, and red onion to tuna.\nDrizzle with olive oil and lemon juice.\nSeason with salt and pepper.\nToss gently to combine.\nServe immediately or chilled.",
    protein: 38,
    carbs: 22,
    fat: 12,
    calories: 348,
    prepTime: 10,
    image: "https://images.pexels.com/photos/6544221/pexels-photo-6544221.jpeg"
  },
  {
    id: 223,
    name: "Vegetable Egg White Omelette",
    ingredients: [
      { item: "Egg whites", amount: "5 large" },
      { item: "Spinach, fresh", amount: "1 cup" },
      { item: "Mushrooms, sliced", amount: "1/2 cup" },
      { item: "Tomato, diced", amount: "1 small" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Heat olive oil in a non-stick pan.\nSauté mushrooms until golden.\nAdd spinach and cook until wilted.\nPour egg whites over vegetables.\nCook on low heat until set.\nAdd diced tomatoes on top.\nFold omelette and serve hot.",
    protein: 26,
    carbs: 8,
    fat: 5,
    calories: 185,
    prepTime: 12,
    image: "https://images.pexels.com/photos/6294362/pexels-photo-6294362.jpeg"
  },
  {
    id: 224,
    name: "Baked Salmon with Lemon and Dill",
    ingredients: [
      { item: "Salmon fillet", amount: "150g" },
      { item: "Lemon, sliced", amount: "1/2 lemon" },
      { item: "Fresh dill", amount: "2 tbsp" },
      { item: "Garlic, minced", amount: "1 clove" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Preheat oven to 200°C (400°F).\nPlace salmon on baking sheet lined with foil.\nDrizzle with olive oil and season.\nTop with garlic, dill, and lemon slices.\nBake for 12-15 minutes until flaky.\nLet rest for 2 minutes.\nServe with extra lemon.",
    protein: 34,
    carbs: 2,
    fat: 22,
    calories: 350,
    prepTime: 20,
    image: "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg"
  },
  {
    id: 225,
    name: "Shakshuka (Single Serving)",
    ingredients: [
      { item: "Eggs", amount: "2 large" },
      { item: "Canned crushed tomatoes", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/4 medium" },
      { item: "Bell pepper, diced", amount: "1/2 medium" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Heat olive oil in a small skillet.\nSauté onion and bell pepper until soft.\nAdd crushed tomatoes and paprika.\nSimmer for 5 minutes.\nMake 2 wells and crack eggs into them.\nCover and cook until eggs are set.\nServe with bread on the side.",
    protein: 16,
    carbs: 18,
    fat: 18,
    calories: 298,
    prepTime: 20,
    image: "https://images.pexels.com/photos/30892286/pexels-photo-30892286.jpeg"
  },
  {
    id: 226,
    name: "Greek Salad with Feta Cheese",
    ingredients: [
      { item: "Cucumber, chopped", amount: "1 medium" },
      { item: "Tomatoes, chopped", amount: "2 medium" },
      { item: "Feta cheese, cubed", amount: "80g" },
      { item: "Red onion, sliced", amount: "1/4 medium" },
      { item: "Olives", amount: "8 pieces" },
      { item: "Olive oil", amount: "2 tbsp" }
    ],
    instructions: "Chop cucumber and tomatoes into chunks.\nSlice red onion into thin rings.\nCombine vegetables in a bowl.\nAdd olives and feta cheese cubes.\nDrizzle with olive oil.\nSeason with oregano and salt.\nToss gently and serve fresh.",
    protein: 14,
    carbs: 16,
    fat: 28,
    calories: 368,
    prepTime: 10,
    image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg"
  },
  {
    id: 227,
    name: "Cottage Cheese Protein Bowl",
    ingredients: [
      { item: "Cottage cheese (5%)", amount: "250g" },
      { item: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { item: "Cucumber, diced", amount: "1/2 medium" },
      { item: "Everything bagel seasoning", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Fresh herbs (optional)", amount: "1 tbsp" }
    ],
    instructions: "Place cottage cheese in a bowl.\nArrange tomatoes and cucumber on top.\nDrizzle with olive oil.\nSprinkle everything bagel seasoning.\nAdd fresh herbs if desired.\nMix before eating or enjoy layered.\nPerfect high-protein light dinner.",
    protein: 32,
    carbs: 12,
    fat: 14,
    calories: 302,
    prepTime: 5,
    image: "https://images.pexels.com/photos/10165775/pexels-photo-10165775.jpeg"
  },
  {
    id: 228,
    name: "Red Lentil Soup",
    ingredients: [
      { item: "Red lentils", amount: "80g dry" },
      { item: "Onion, diced", amount: "1 small" },
      { item: "Carrot, diced", amount: "1 medium" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Vegetable broth", amount: "2 cups" }
    ],
    instructions: "Sauté onion and carrot in a pot.\nAdd garlic and cumin, cook 1 minute.\nRinse lentils and add to pot.\nPour in vegetable broth.\nBring to boil, then simmer 20 minutes.\nBlend partially for creamy texture.\nServe with lemon wedge.",
    protein: 18,
    carbs: 42,
    fat: 2,
    calories: 258,
    prepTime: 30,
    image: "https://images.pexels.com/photos/9928340/pexels-photo-9928340.jpeg"
  },
  {
    id: 229,
    name: "Turkey Breast Stir-Fry",
    ingredients: [
      { item: "Turkey breast, sliced", amount: "150g" },
      { item: "Broccoli florets", amount: "1 cup" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Ginger, grated", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Slice turkey into thin strips.\nHeat oil in wok or large pan.\nStir-fry turkey until golden.\nAdd garlic and ginger, cook 30 seconds.\nAdd broccoli and stir-fry 3 minutes.\nPour soy sauce over mixture.\nServe immediately while hot.",
    protein: 40,
    carbs: 10,
    fat: 12,
    calories: 308,
    prepTime: 18,
    image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg"
  },
  {
    id: 230,
    name: "Quinoa Bowl with Chickpeas",
    ingredients: [
      { item: "Quinoa, cooked", amount: "1 cup" },
      { item: "Chickpeas, canned", amount: "100g" },
      { item: "Cucumber, diced", amount: "1/2 medium" },
      { item: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { item: "Tahini", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" }
    ],
    instructions: "Cook quinoa according to package.\nRinse and drain chickpeas.\nCombine quinoa and chickpeas in bowl.\nAdd cucumber and tomatoes.\nMix tahini with lemon juice.\nDrizzle tahini dressing over bowl.\nSeason with salt and serve.",
    protein: 18,
    carbs: 52,
    fat: 14,
    calories: 406,
    prepTime: 15,
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"
  }, 

  {
    id: 231,
    name: "Herb-Crusted Tilapia",
    ingredients: [
      { item: "Tilapia fillet", amount: "150g" },
      { item: "Panko breadcrumbs", amount: "2 tbsp" },
      { item: "Fresh parsley, chopped", amount: "2 tbsp" },
      { item: "Lemon zest", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Preheat oven to 200°C (400°F).\nMix panko, parsley, and lemon zest.\nBrush tilapia with olive oil.\nPress herb mixture onto fish.\nPlace on lined baking sheet.\nBake for 12-15 minutes until golden.\nServe with lemon wedges.",
    protein: 34,
    carbs: 8,
    fat: 10,
    calories: 258,
    prepTime: 20,
    image: "https://images.pexels.com/photos/3763093/pexels-photo-3763093.jpeg"
  },
  {
    id: 232,
    name: "Edamame and Avocado Bowl",
    ingredients: [
      { item: "Edamame, shelled", amount: "1 cup" },
      { item: "Avocado, sliced", amount: "1/2 medium" },
      { item: "Brown rice, cooked", amount: "1/2 cup" },
      { item: "Sesame seeds", amount: "1 tsp" },
      { item: "Soy sauce", amount: "1 tbsp" },
      { item: "Rice vinegar", amount: "1 tsp" }
    ],
    instructions: "Cook edamame according to package.\nPrepare brown rice if not pre-cooked.\nSlice avocado into strips.\nArrange rice in bowl as base.\nTop with edamame and avocado.\nDrizzle with soy sauce and vinegar.\nSprinkle sesame seeds on top.",
    protein: 22,
    carbs: 38,
    fat: 16,
    calories: 382,
    prepTime: 15,
    image: "https://images.pexels.com/photos/31871328/pexels-photo-31871328.jpeg"
  },
  {
    id: 233,
    name: "Spiced Chicken Kebabs",
    ingredients: [
      { item: "Chicken breast, cubed", amount: "150g" },
      { item: "Bell peppers, chunked", amount: "1 medium" },
      { item: "Red onion, chunked", amount: "1/4 medium" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Cumin", amount: "1/2 tsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Cut chicken into 1-inch cubes.\nMix olive oil with paprika and cumin.\nToss chicken in spice mixture.\nThread chicken and vegetables on skewers.\nGrill or broil for 10-12 minutes.\nTurn halfway through cooking.\nServe hot with fresh herbs.",
    protein: 38,
    carbs: 10,
    fat: 12,
    calories: 300,
    prepTime: 22,
    image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg"
  },
  {
    id: 234,
    name: "Smoked Salmon Cucumber Bites",
    ingredients: [
      { item: "Smoked salmon", amount: "100g" },
      { item: "Cucumber", amount: "1 large" },
      { item: "Cream cheese (dairy)", amount: "60g" },
      { item: "Fresh dill", amount: "1 tbsp" },
      { item: "Capers", amount: "1 tbsp" },
      { item: "Lemon juice", amount: "1 tsp" }
    ],
    instructions: "Slice cucumber into thick rounds.\nMix cream cheese with dill and lemon.\nSpread mixture on cucumber slices.\nTop each with smoked salmon.\nGarnish with capers.\nArrange on serving plate.\nServe chilled as light dinner.",
    protein: 24,
    carbs: 6,
    fat: 18,
    calories: 282,
    prepTime: 10,
    image: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg"
  },
  {
    id: 235,
    name: "Black Bean Stuffed Sweet Potato",
    ingredients: [
      { item: "Sweet potato", amount: "1 large" },
      { item: "Black beans, canned", amount: "100g" },
      { item: "Corn kernels", amount: "1/4 cup" },
      { item: "Salsa", amount: "3 tbsp" },
      { item: "Avocado, diced", amount: "1/4 medium" },
      { item: "Lime juice", amount: "1 tsp" }
    ],
    instructions: "Pierce sweet potato and microwave 8 minutes.\nHeat black beans with corn.\nCut sweet potato lengthwise.\nFluff the inside with a fork.\nTop with bean and corn mixture.\nAdd salsa and diced avocado.\nSqueeze lime juice over top.",
    protein: 14,
    carbs: 58,
    fat: 8,
    calories: 358,
    prepTime: 15,
    image: "https://images.pexels.com/photos/9219074/pexels-photo-9219074.jpeg"
  },
  {
    id: 236,
    name: "Seared Ahi Tuna Steak",
    ingredients: [
      { item: "Ahi tuna steak", amount: "150g" },
      { item: "Sesame seeds", amount: "2 tbsp" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Wasabi paste", amount: "1 tsp" },
      { item: "Ginger, grated", amount: "1 tsp" },
      { item: "Sesame oil", amount: "1 tbsp" }
    ],
    instructions: "Press sesame seeds onto tuna steak.\nHeat sesame oil in pan over high heat.\nSear tuna 1-2 minutes per side.\nKeep center pink for best texture.\nMix soy sauce with wasabi and ginger.\nSlice tuna against the grain.\nServe with dipping sauce.",
    protein: 42,
    carbs: 4,
    fat: 18,
    calories: 346,
    prepTime: 12,
    image: "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg"
  },
  {
    id: 237,
    name: "Mediterranean Chickpea Salad",
    ingredients: [
      { item: "Chickpeas, canned", amount: "200g" },
      { item: "Cucumber, diced", amount: "1/2 medium" },
      { item: "Sun-dried tomatoes", amount: "4 pieces" },
      { item: "Kalamata olives", amount: "8 pieces" },
      { item: "Red wine vinegar", amount: "1 tbsp" },
      { item: "Olive oil", amount: "2 tbsp" }
    ],
    instructions: "Rinse and drain chickpeas.\nDice cucumber and sun-dried tomatoes.\nHalve the olives.\nCombine all vegetables in bowl.\nWhisk vinegar and olive oil.\nPour dressing over salad.\nToss well and serve at room temperature.",
    protein: 16,
    carbs: 36,
    fat: 20,
    calories: 388,
    prepTime: 10,
    image: "https://images.pexels.com/photos/23384616/pexels-photo-23384616.jpeg"
  },
  {
    id: 238,
    name: "Grilled Portobello Mushroom Steaks",
    ingredients: [
      { item: "Portobello mushrooms", amount: "2 large" },
      { item: "Balsamic vinegar", amount: "2 tbsp" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Fresh thyme", amount: "1 tsp" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Remove stems from mushrooms.\nMix oil, vinegar, garlic, and thyme.\nBrush marinade on mushrooms.\nLet sit for 10 minutes.\nGrill 4-5 minutes per side.\nBaste with remaining marinade.\nServe as plant-based main dish.",
    protein: 8,
    carbs: 14,
    fat: 16,
    calories: 228,
    prepTime: 20,
    image: "https://images.pexels.com/photos/16845478/pexels-photo-16845478.jpeg"
  },
  {
    id: 239,
    name: "Egg and Vegetable Fried Rice",
    ingredients: [
      { item: "Eggs", amount: "3 large" },
      { item: "Brown rice, cooked", amount: "1 cup" },
      { item: "Frozen peas and carrots", amount: "1/2 cup" },
      { item: "Green onions, sliced", amount: "2 stalks" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Sesame oil", amount: "1 tbsp" }
    ],
    instructions: "Heat sesame oil in wok or large pan.\nScramble eggs and set aside.\nAdd cold rice to hot pan.\nStir-fry until rice is slightly crispy.\nAdd peas, carrots, and green onions.\nReturn eggs to pan.\nDrizzle with soy sauce and toss.",
    protein: 22,
    carbs: 42,
    fat: 16,
    calories: 396,
    prepTime: 15,
    image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg"
  },
  {
    id: 240,
    name: "Lemon Herb Cod",
    ingredients: [
      { item: "Cod fillet", amount: "150g" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Fresh parsley", amount: "2 tbsp" },
      { item: "Garlic, minced", amount: "1 clove" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Cherry tomatoes", amount: "1/2 cup" }
    ],
    instructions: "Preheat oven to 190°C (375°F).\nPlace cod in baking dish.\nMix lemon juice, garlic, and oil.\nPour mixture over fish.\nScatter cherry tomatoes around.\nBake for 15-18 minutes.\nGarnish with fresh parsley.",
    protein: 32,
    carbs: 8,
    fat: 12,
    calories: 268,
    prepTime: 22,
    image: "https://images.pexels.com/photos/5713767/pexels-photo-5713767.jpeg"
  },
  {
    id: 241,
    name: "Tofu Vegetable Curry",
    ingredients: [
      { item: "Firm tofu, cubed", amount: "200g" },
      { item: "Coconut milk, light", amount: "1/2 cup" },
      { item: "Curry powder", amount: "1 tbsp" },
      { item: "Mixed vegetables", amount: "1 cup" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Press tofu and cut into cubes.\nSauté garlic in olive oil.\nAdd curry powder and stir.\nAdd tofu and brown lightly.\nPour in coconut milk.\nAdd mixed vegetables.\nSimmer 10 minutes until vegetables are tender.",
    protein: 24,
    carbs: 16,
    fat: 22,
    calories: 354,
    prepTime: 25,
    image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg"
  },
  {
    id: 242,
    name: "Sardine and Tomato Toast",
    ingredients: [
      { item: "Canned sardines in olive oil", amount: "1 can (120g)" },
      { item: "Whole grain bread", amount: "2 slices" },
      { item: "Tomato, sliced", amount: "1 medium" },
      { item: "Red onion, thinly sliced", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "1 tsp" },
      { item: "Fresh parsley", amount: "1 tbsp" }
    ],
    instructions: "Toast bread until golden.\nDrain sardines, reserving some oil.\nLayer tomato slices on toast.\nTop with sardines.\nAdd red onion slices.\nDrizzle with lemon juice.\nGarnish with parsley.",
    protein: 28,
    carbs: 26,
    fat: 16,
    calories: 356,
    prepTime: 8,
    image: "https://images.pexels.com/photos/6705350/pexels-photo-6705350.jpeg"
  },
  {
    id: 243,
    name: "Zucchini Noodles with Marinara",
    ingredients: [
      { item: "Zucchini", amount: "2 medium" },
      { item: "Marinara sauce", amount: "1 cup" },
      { item: "White beans, canned", amount: "100g" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Italian seasoning", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Spiralize zucchini into noodles.\nHeat olive oil in large pan.\nSauté garlic until fragrant.\nAdd marinara sauce and beans.\nStir in Italian seasoning.\nAdd zucchini noodles.\nToss for 2-3 minutes until warm.",
    protein: 14,
    carbs: 28,
    fat: 12,
    calories: 276,
    prepTime: 15,
    image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg"
  },
  {
    id: 244,
    name: "Harissa Roasted Cauliflower",
    ingredients: [
      { item: "Cauliflower florets", amount: "3 cups" },
      { item: "Harissa paste", amount: "2 tbsp" },
      { item: "Chickpeas, canned", amount: "100g" },
      { item: "Tahini", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Preheat oven to 220°C (425°F).\nToss cauliflower with harissa and oil.\nSpread on baking sheet with chickpeas.\nRoast for 25 minutes until charred.\nMix tahini with lemon juice.\nDrizzle tahini sauce over roasted vegetables.\nServe warm or at room temperature.",
    protein: 16,
    carbs: 32,
    fat: 18,
    calories: 346,
    prepTime: 30,
    image: "https://images.pexels.com/photos/32726769/pexels-photo-32726769.jpeg"
  },
  {
    id: 245,
    name: "Greek Yogurt Protein Bowl",
    ingredients: [
      { item: "Greek yogurt (0% fat)", amount: "250g" },
      { item: "Walnuts, chopped", amount: "2 tbsp" },
      { item: "Honey", amount: "1 tbsp" },
      { item: "Chia seeds", amount: "1 tbsp" },
      { item: "Berries, mixed", amount: "1/2 cup" },
      { item: "Cinnamon", amount: "1/2 tsp" }
    ],
    instructions: "Place Greek yogurt in bowl.\nTop with mixed berries.\nSprinkle chopped walnuts.\nAdd chia seeds.\nDrizzle honey over top.\nDust with cinnamon.\nServe immediately for best texture.",
    protein: 28,
    carbs: 32,
    fat: 12,
    calories: 348,
    prepTime: 5,
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg"
  },
  {
    id: 247,
    name: "Moroccan Spiced Salmon",
    ingredients: [
      { item: "Salmon fillet", amount: "150g" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Coriander", amount: "1/2 tsp" },
      { item: "Cinnamon", amount: "1/4 tsp" },
      { item: "Honey", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Mix cumin, coriander, and cinnamon.\nRub spice mix on salmon.\nHeat olive oil in oven-safe pan.\nSear salmon 2 minutes skin-side up.\nFlip and drizzle with honey.\nFinish in 200°C oven for 8 minutes.\nRest 2 minutes before serving.",
    protein: 34,
    carbs: 6,
    fat: 22,
    calories: 358,
    prepTime: 18,
    image: "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg"
  },
  {
    id: 248,
    name: "White Bean and Kale Soup",
    ingredients: [
      { item: "White beans, canned", amount: "200g" },
      { item: "Kale, chopped", amount: "2 cups" },
      { item: "Vegetable broth", amount: "2 cups" },
      { item: "Garlic, minced", amount: "3 cloves" },
      { item: "Onion, diced", amount: "1 small" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Sauté onion and garlic in olive oil.\nAdd vegetable broth and beans.\nBring to a simmer.\nAdd chopped kale.\nCook until kale is wilted.\nSeason with salt and pepper.\nServe with crusty bread.",
    protein: 18,
    carbs: 38,
    fat: 10,
    calories: 314,
    prepTime: 20,
    image: "https://images.pexels.com/photos/19870150/pexels-photo-19870150.jpeg"
  },
  {
    id: 249,
    name: "Garlic Butter Trout",
    ingredients: [
      { item: "Trout fillet", amount: "150g" },
      { item: "Butter (dairy)", amount: "2 tbsp" },
      { item: "Garlic, minced", amount: "3 cloves" },
      { item: "Fresh parsley", amount: "2 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Season trout with salt and pepper.\nMelt butter in pan over medium heat.\nAdd garlic and cook until fragrant.\nPlace trout skin-side down.\nCook 4 minutes per side.\nBaste with garlic butter.\nFinish with lemon and parsley.",
    protein: 34,
    carbs: 2,
    fat: 24,
    calories: 364,
    prepTime: 15,
    image: "https://images.pexels.com/photos/3763093/pexels-photo-3763093.jpeg"
  },
  {
    id: 250,
    name: "Falafel Bowl with Hummus",
    ingredients: [
      { item: "Falafel (store-bought)", amount: "4 pieces" },
      { item: "Hummus", amount: "4 tbsp" },
      { item: "Israeli salad", amount: "1 cup" },
      { item: "Pickled turnips", amount: "2 tbsp" },
      { item: "Tahini", amount: "2 tbsp" },
      { item: "Pita bread", amount: "1 small" }
    ],
    instructions: "Heat falafel according to package.\nSpread hummus on bottom of bowl.\nArrange falafel on top.\nAdd Israeli salad on the side.\nPlace pickled turnips as garnish.\nDrizzle tahini over everything.\nServe with warm pita bread.",
    protein: 18,
    carbs: 48,
    fat: 22,
    calories: 458,
    prepTime: 12,
    image: "https://images.pexels.com/photos/6275189/pexels-photo-6275189.jpeg"
  }, 

  // dinner end 

  // more breakfast recipes (kosher: meat / dairy / parve) start
  {
    id: 251,
    name: "Labneh & Za'atar Toast with Eggs",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Whole wheat bread", amount: "2 slices" },
      { item: "Labneh", amount: "3 tbsp" },
      { item: "Za'atar", amount: "1 tsp" },
      { item: "Eggs, hard-boiled", amount: "2 eggs" },
      { item: "Cucumber, sliced", amount: "1/2 cucumber" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Boil eggs for 9 minutes, cool and peel.\nToast the bread.\nSpread labneh generously on each slice.\nDrizzle with olive oil and sprinkle za'atar.\nTop with sliced egg and cucumber.\nSeason with a pinch of salt and serve.",
    protein: 24,
    carbs: 30,
    fat: 16,
    calories: 360,
    prepTime: 10,
    image: "https://images.pexels.com/photos/7936963/pexels-photo-7936963.jpeg"
  },
  {
    id: 252,
    name: "Green Shakshuka with Feta",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Eggs", amount: "3 eggs" },
      { item: "Spinach", amount: "2 cups" },
      { item: "Zucchini, diced", amount: "1/2 zucchini" },
      { item: "Green onion, sliced", amount: "2 stalks" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Feta cheese", amount: "30g" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Heat olive oil in a small pan.\nSauté green onion, garlic and zucchini for 4 minutes.\nAdd spinach and cook until wilted.\nMake 3 wells and crack an egg into each.\nCover and cook 5-6 minutes until whites are set.\nCrumble feta on top and serve from the pan.",
    protein: 26,
    carbs: 9,
    fat: 22,
    calories: 338,
    prepTime: 20,
    image: "https://images.pexels.com/photos/29843063/pexels-photo-29843063.jpeg"
  },
  {
    id: 253,
    name: "Cottage Cheese Omelette",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Eggs", amount: "3 eggs" },
      { item: "Cottage cheese 5%", amount: "100g" },
      { item: "Green onion, sliced", amount: "1 stalk" },
      { item: "Tomato, diced", amount: "1 small" },
      { item: "Olive oil spray", amount: "1 spray" }
    ],
    instructions: "Whisk eggs with salt and pepper.\nSpray a non-stick pan and heat over medium.\nPour in the eggs and cook until almost set.\nSpread cottage cheese and green onion over one half.\nFold and cook 1 more minute.\nServe with diced tomato on the side.",
    protein: 32,
    carbs: 6,
    fat: 18,
    calories: 314,
    prepTime: 10,
    image: "https://images.pexels.com/photos/14302155/pexels-photo-14302155.jpeg"
  },
  {
    id: 254,
    name: "Israeli Breakfast Plate",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Eggs", amount: "2 eggs" },
      { item: "White cheese 5%", amount: "100g" },
      { item: "Cucumber, diced", amount: "1 cucumber" },
      { item: "Tomato, diced", amount: "1 tomato" },
      { item: "Whole wheat bread", amount: "1 slice" },
      { item: "Olives", amount: "5 olives" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Fry or boil the eggs to your liking.\nDice cucumber and tomato finely for an Israeli salad.\nDress the salad with olive oil, lemon and salt.\nSpoon white cheese into a small bowl.\nArrange eggs, salad, cheese, olives and bread on a plate.\nServe immediately.",
    protein: 30,
    carbs: 24,
    fat: 18,
    calories: 378,
    prepTime: 12,
    image: "https://images.pexels.com/photos/30472978/pexels-photo-30472978.jpeg"
  },
  {
    id: 255,
    name: "Protein Oatmeal with Banana & Peanut Butter",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Rolled oats", amount: "50g" },
      { item: "Milk", amount: "1 cup" },
      { item: "Protein powder (whey)", amount: "1 scoop" },
      { item: "Banana, sliced", amount: "1/2 banana" },
      { item: "Peanut butter", amount: "1 tbsp" },
      { item: "Cinnamon", amount: "1/2 tsp" }
    ],
    instructions: "Cook oats in milk over medium heat for 4-5 minutes, stirring.\nRemove from heat and let cool for 1 minute.\nStir in protein powder until smooth.\nTop with banana slices.\nAdd peanut butter and cinnamon.\nServe warm.",
    protein: 38,
    carbs: 62,
    fat: 14,
    calories: 526,
    prepTime: 8,
    image: "https://images.pexels.com/photos/10165864/pexels-photo-10165864.jpeg"
  },
  {
    id: 256,
    name: "Veggie Egg Muffins",
    mealType: "breakfast",
    kosher: "parve",
    ingredients: [
      { item: "Eggs", amount: "4 eggs" },
      { item: "Bell pepper, diced", amount: "1/2 pepper" },
      { item: "Spinach, chopped", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/4 onion" },
      { item: "Salt and pepper", amount: "to taste" },
      { item: "Olive oil spray", amount: "1 spray" }
    ],
    instructions: "Preheat oven to 180°C and spray a muffin tin.\nWhisk eggs with salt and pepper.\nDivide pepper, spinach and onion between 4-6 cups.\nPour egg mixture over the vegetables.\nBake for 18-20 minutes until set.\nCool slightly and enjoy (keeps 3 days in the fridge).",
    protein: 26,
    carbs: 8,
    fat: 18,
    calories: 298,
    prepTime: 25,
    image: "https://images.pexels.com/photos/4103221/pexels-photo-4103221.jpeg"
  },
  {
    id: 257,
    name: "Tuna Melt Toast",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Canned tuna in water", amount: "1 can (160g)" },
      { item: "Whole wheat bread", amount: "2 slices" },
      { item: "Yellow cheese (light)", amount: "30g" },
      { item: "Tomato, sliced", amount: "1 tomato" },
      { item: "Mustard", amount: "1 tsp" }
    ],
    instructions: "Drain tuna and mix with mustard and black pepper.\nSpread tuna over the bread slices.\nTop with tomato slices and cheese.\nBake or toast at 200°C for 5-6 minutes.\nCheese should be melted and bubbly.\nServe hot.",
    protein: 40,
    carbs: 28,
    fat: 14,
    calories: 398,
    prepTime: 10,
    image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg"
  },
  {
    id: 258,
    name: "Silan & Tahini Yogurt Bowl",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Greek yogurt", amount: "200g" },
      { item: "Tahini", amount: "1 tbsp" },
      { item: "Silan (date syrup)", amount: "1 tbsp" },
      { item: "Walnuts, chopped", amount: "15g" },
      { item: "Banana, sliced", amount: "1/2 banana" }
    ],
    instructions: "Spoon yogurt into a bowl.\nDrizzle tahini over the yogurt.\nAdd a swirl of silan.\nTop with banana slices.\nSprinkle chopped walnuts.\nServe immediately.",
    protein: 24,
    carbs: 30,
    fat: 18,
    calories: 378,
    prepTime: 5,
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg"
  },
  {
    id: 259,
    name: "Chocolate Protein Overnight Oats",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Rolled oats", amount: "50g" },
      { item: "Milk", amount: "150ml" },
      { item: "Cocoa powder", amount: "1 tbsp" },
      { item: "Protein powder (chocolate whey)", amount: "1 scoop" },
      { item: "Chia seeds", amount: "1 tbsp" }
    ],
    instructions: "Add oats, cocoa, protein powder and chia to a jar.\nPour in the milk.\nStir well until no lumps remain.\nCover and refrigerate overnight (at least 6 hours).\nStir again in the morning.\nEat cold or warm for 1 minute.",
    protein: 36,
    carbs: 50,
    fat: 10,
    calories: 434,
    prepTime: 5,
    image: "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg"
  },
  {
    id: 260,
    name: "3-Ingredient Banana Oat Pancakes",
    mealType: "breakfast",
    kosher: "parve",
    ingredients: [
      { item: "Banana, ripe", amount: "1 banana" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Rolled oats", amount: "40g" },
      { item: "Cinnamon", amount: "1/2 tsp" },
      { item: "Oil for cooking", amount: "1 tsp" }
    ],
    instructions: "Blend banana, eggs, oats and cinnamon until smooth.\nLet the batter rest for 3 minutes.\nHeat a lightly oiled non-stick pan.\nPour small pancakes and cook 2 minutes.\nFlip and cook 1 more minute.\nServe with fruit or a drizzle of honey.",
    protein: 18,
    carbs: 48,
    fat: 11,
    calories: 363,
    prepTime: 15,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800"
  },
  {
    id: 261,
    name: "Egg White & Spinach Pita",
    mealType: "breakfast",
    kosher: "parve",
    ingredients: [
      { item: "Egg whites", amount: "5 whites" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Whole wheat pita", amount: "1 pita" },
      { item: "Tomato, diced", amount: "1 small" },
      { item: "Hummus", amount: "1 tbsp" },
      { item: "Olive oil spray", amount: "1 spray" }
    ],
    instructions: "Spray a pan and wilt the spinach.\nAdd egg whites and scramble until set.\nSeason with salt and pepper.\nWarm the pita and spread hummus inside.\nFill with the egg whites and tomato.\nServe warm.",
    protein: 28,
    carbs: 38,
    fat: 6,
    calories: 318,
    prepTime: 10,
    image: "https://images.pexels.com/photos/14537693/pexels-photo-14537693.jpeg"
  },
  {
    id: 262,
    name: "Cottage Cheese Toast with Egg & Tomato",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Whole wheat bread", amount: "2 slices" },
      { item: "Cottage cheese 5%", amount: "100g" },
      { item: "Tomato, sliced", amount: "1 tomato" },
      { item: "Egg, hard-boiled", amount: "1 egg" },
      { item: "Black pepper", amount: "to taste" }
    ],
    instructions: "Boil the egg for 9 minutes and slice.\nToast the bread.\nSpread cottage cheese on each slice.\nLayer tomato slices on top.\nAdd sliced egg.\nFinish with black pepper and a pinch of salt.",
    protein: 28,
    carbs: 30,
    fat: 9,
    calories: 313,
    prepTime: 10,
    image: "https://images.pexels.com/photos/3636958/pexels-photo-3636958.jpeg"
  },
  {
    id: 263,
    name: "Smoked Salmon & Cream Cheese Bagel",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Whole wheat bagel", amount: "1 bagel" },
      { item: "Light cream cheese", amount: "2 tbsp" },
      { item: "Smoked salmon", amount: "60g" },
      { item: "Red onion, thinly sliced", amount: "2 rings" },
      { item: "Cucumber, sliced", amount: "1/4 cucumber" },
      { item: "Capers", amount: "1 tsp" }
    ],
    instructions: "Slice and toast the bagel.\nSpread cream cheese on both halves.\nLayer smoked salmon on top.\nAdd cucumber and red onion.\nSprinkle capers.\nClose the bagel and serve.",
    protein: 26,
    carbs: 50,
    fat: 12,
    calories: 412,
    prepTime: 7,
    image: "https://images.pexels.com/photos/6412960/pexels-photo-6412960.jpeg"
  },
  {
    id: 264,
    name: "Mushroom & Cheese Omelette",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Eggs", amount: "3 eggs" },
      { item: "Mushrooms, sliced", amount: "1 cup" },
      { item: "Yellow cheese (light), grated", amount: "30g" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Sauté mushrooms in olive oil for 4 minutes.\nWhisk eggs with salt and pepper.\nPour eggs over the mushrooms.\nCook until edges set.\nSprinkle cheese, fold the omelette.\nCook 1 more minute and serve.",
    protein: 30,
    carbs: 5,
    fat: 22,
    calories: 338,
    prepTime: 10,
    image: "https://images.pexels.com/photos/14302155/pexels-photo-14302155.jpeg"
  },
  {
    id: 265,
    name: "Berry Protein Smoothie",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Frozen berries", amount: "1 cup" },
      { item: "Milk", amount: "1 cup" },
      { item: "Greek yogurt", amount: "100g" },
      { item: "Banana", amount: "1/2 banana" },
      { item: "Rolled oats", amount: "2 tbsp" }
    ],
    instructions: "Add all ingredients to a blender.\nBlend on high for 45 seconds.\nAdd a splash of water if too thick.\nTaste and add honey if desired.\nPour into a tall glass.\nDrink immediately.",
    protein: 26,
    carbs: 52,
    fat: 6,
    calories: 366,
    prepTime: 5,
    image: "https://images.pexels.com/photos/31472329/pexels-photo-31472329.jpeg"
  },
  {
    id: 266,
    name: "Savory Oatmeal with Fried Egg",
    mealType: "breakfast",
    kosher: "parve",
    ingredients: [
      { item: "Rolled oats", amount: "50g" },
      { item: "Water", amount: "1 cup" },
      { item: "Egg", amount: "1 egg" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Soy sauce", amount: "1 tsp" },
      { item: "Sesame seeds", amount: "1 tsp" }
    ],
    instructions: "Cook oats in water with a pinch of salt for 5 minutes.\nStir in spinach until wilted.\nFry the egg in a lightly oiled pan.\nSeason oats with soy sauce.\nTop with the fried egg.\nSprinkle sesame seeds and serve.",
    protein: 16,
    carbs: 32,
    fat: 12,
    calories: 300,
    prepTime: 10,
    image: "https://images.pexels.com/photos/10165864/pexels-photo-10165864.jpeg"
  },
  {
    id: 267,
    name: "Sabich Breakfast Pita",
    mealType: "breakfast",
    kosher: "parve",
    ingredients: [
      { item: "Eggplant, sliced", amount: "1/2 eggplant" },
      { item: "Eggs, hard-boiled", amount: "2 eggs" },
      { item: "Whole wheat pita", amount: "1 pita" },
      { item: "Tahini", amount: "1 tbsp" },
      { item: "Amba sauce", amount: "1 tsp" },
      { item: "Fresh parsley", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Brush eggplant slices with oil and roast at 220°C for 18 minutes.\nBoil eggs for 9 minutes and slice.\nWarm the pita.\nFill with eggplant and egg slices.\nDrizzle tahini and amba.\nTop with parsley and serve.",
    protein: 20,
    carbs: 40,
    fat: 20,
    calories: 420,
    prepTime: 25,
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
  },
  {
    id: 268,
    name: "Avocado & Egg Breakfast Wrap",
    mealType: "breakfast",
    kosher: "parve",
    ingredients: [
      { item: "Whole wheat tortilla", amount: "1 large" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Avocado", amount: "1/2 avocado" },
      { item: "Tomato, diced", amount: "1 small" },
      { item: "Hot sauce", amount: "1 tsp" }
    ],
    instructions: "Scramble the eggs with salt and pepper.\nWarm the tortilla in a dry pan.\nMash avocado and spread on the tortilla.\nAdd scrambled eggs and tomato.\nAdd hot sauce to taste.\nRoll up tightly and serve.",
    protein: 20,
    carbs: 32,
    fat: 22,
    calories: 406,
    prepTime: 10,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800"
  },
  {
    id: 269,
    name: "Chickpea Shakshuka",
    mealType: "breakfast",
    kosher: "parve",
    ingredients: [
      { item: "Eggs", amount: "2 eggs" },
      { item: "Chickpeas, canned", amount: "1/2 cup" },
      { item: "Crushed tomatoes", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/2 onion" },
      { item: "Bell pepper, diced", amount: "1/2 pepper" },
      { item: "Cumin", amount: "1/2 tsp" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Sauté onion and pepper in olive oil for 5 minutes.\nAdd cumin and paprika and stir for 30 seconds.\nAdd crushed tomatoes and chickpeas, simmer 8 minutes.\nMake 2 wells and crack in the eggs.\nCover and cook 5-6 minutes.\nServe with bread.",
    protein: 24,
    carbs: 30,
    fat: 14,
    calories: 342,
    prepTime: 20,
    image: "https://images.pexels.com/photos/2067470/pexels-photo-2067470.jpeg"
  },
  {
    id: 270,
    name: "Apple Cinnamon Yogurt Bowl",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Greek yogurt", amount: "200g" },
      { item: "Apple, diced", amount: "1 apple" },
      { item: "Granola", amount: "30g" },
      { item: "Cinnamon", amount: "1/2 tsp" },
      { item: "Honey", amount: "1 tsp" }
    ],
    instructions: "Dice the apple.\nSpoon yogurt into a bowl.\nTop with apple pieces.\nSprinkle cinnamon over the apple.\nAdd granola.\nDrizzle honey and serve.",
    protein: 22,
    carbs: 45,
    fat: 7,
    calories: 331,
    prepTime: 5,
    image: "https://images.pexels.com/photos/32268820/pexels-photo-32268820.jpeg"
  },
  {
    id: 271,
    name: "Israeli Cheese Toast",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Whole wheat bread", amount: "2 slices" },
      { item: "Yellow cheese (light)", amount: "40g" },
      { item: "Tomato, sliced", amount: "1 tomato" },
      { item: "Olives, sliced", amount: "5 olives" },
      { item: "Za'atar", amount: "1/2 tsp" }
    ],
    instructions: "Layer cheese, tomato and olives on one slice of bread.\nSprinkle za'atar.\nClose the sandwich.\nToast in a sandwich press or pan until golden.\nCheese should be fully melted.\nCut in half and serve.",
    protein: 22,
    carbs: 30,
    fat: 16,
    calories: 352,
    prepTime: 10,
    image: "https://images.pexels.com/photos/4409303/pexels-photo-4409303.jpeg"
  },
  {
    id: 272,
    name: "Hard-Boiled Eggs & Hummus Plate",
    mealType: "breakfast",
    kosher: "parve",
    ingredients: [
      { item: "Eggs, hard-boiled", amount: "3 eggs" },
      { item: "Hummus", amount: "4 tbsp" },
      { item: "Cucumber, sliced", amount: "1 cucumber" },
      { item: "Tomato, sliced", amount: "1 tomato" },
      { item: "Whole wheat pita", amount: "1/2 pita" },
      { item: "Paprika", amount: "pinch" }
    ],
    instructions: "Boil eggs for 9 minutes, cool and peel.\nSpread hummus on a plate.\nHalve the eggs and place on the hummus.\nSprinkle paprika and salt.\nAdd cucumber and tomato on the side.\nServe with warm pita.",
    protein: 26,
    carbs: 28,
    fat: 22,
    calories: 414,
    prepTime: 12,
    image: "https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg"
  },
  {
    id: 273,
    name: "Peanut Butter Banana Oat Smoothie",
    mealType: "breakfast",
    kosher: "parve",
    ingredients: [
      { item: "Banana", amount: "1 banana" },
      { item: "Peanut butter", amount: "1 tbsp" },
      { item: "Rolled oats", amount: "30g" },
      { item: "Soy milk", amount: "1 cup" },
      { item: "Cinnamon", amount: "1/2 tsp" },
      { item: "Ice cubes", amount: "4 cubes" }
    ],
    instructions: "Add all ingredients to a blender.\nBlend for 45-60 seconds until smooth.\nAdd more soy milk for a thinner texture.\nTaste and adjust sweetness.\nPour into a glass.\nServe cold.",
    protein: 20,
    carbs: 55,
    fat: 16,
    calories: 444,
    prepTime: 5,
    image: "https://images.pexels.com/photos/33835510/pexels-photo-33835510.jpeg"
  },
  {
    id: 274,
    name: "Turkish Eggs with Garlic Yogurt",
    mealType: "breakfast",
    kosher: "dairy",
    ingredients: [
      { item: "Eggs", amount: "2 eggs" },
      { item: "Greek yogurt", amount: "150g" },
      { item: "Garlic, grated", amount: "1 clove" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Fresh dill", amount: "1 tbsp" },
      { item: "Whole wheat bread", amount: "1 slice" }
    ],
    instructions: "Mix yogurt with grated garlic and salt; spread in a shallow bowl.\nPoach the eggs in simmering water for 3-4 minutes.\nWarm olive oil with paprika for 30 seconds.\nPlace eggs on the yogurt.\nDrizzle paprika oil and sprinkle dill.\nServe with toasted bread.",
    protein: 28,
    carbs: 20,
    fat: 18,
    calories: 354,
    prepTime: 12,
    image: "https://images.pexels.com/photos/29843063/pexels-photo-29843063.jpeg"
  },
  {
    id: 275,
    name: "Tofu Scramble with Vegetables",
    mealType: "breakfast",
    kosher: "parve",
    ingredients: [
      { item: "Firm tofu", amount: "200g" },
      { item: "Turmeric", amount: "1/2 tsp" },
      { item: "Bell pepper, diced", amount: "1/2 pepper" },
      { item: "Onion, diced", amount: "1/4 onion" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Whole wheat bread", amount: "1 slice" }
    ],
    instructions: "Sauté onion and pepper in olive oil for 4 minutes.\nCrumble tofu into the pan.\nAdd turmeric, salt and pepper.\nCook 5 minutes, stirring.\nFold in spinach until wilted.\nServe with toast.",
    protein: 28,
    carbs: 22,
    fat: 16,
    calories: 344,
    prepTime: 12,
    image: "https://images.pexels.com/photos/25906336/pexels-photo-25906336.jpeg"
  },
  // more breakfast recipes end

  // more lunch recipes (kosher: meat / dairy / parve) start
  {
    id: 276,
    name: "Chicken Shawarma Pita",
    mealType: "lunch",
    kosher: "meat",
    ingredients: [
      { item: "Chicken thighs, sliced", amount: "150g" },
      { item: "Shawarma spice mix", amount: "1 tbsp" },
      { item: "Pita bread", amount: "1 pita" },
      { item: "Tahini", amount: "2 tbsp" },
      { item: "Cucumber, diced", amount: "1/2 cucumber" },
      { item: "Tomato, diced", amount: "1 tomato" },
      { item: "Pickles", amount: "2 pickles" },
      { item: "Onion, sliced", amount: "1/4 onion" }
    ],
    instructions: "Toss chicken with shawarma spice, salt and a little oil.\nCook in a hot pan with the onion for 8-10 minutes until charred.\nDice cucumber and tomato for a quick salad.\nWarm the pita.\nFill with chicken, salad and pickles.\nDrizzle tahini and serve.",
    protein: 40,
    carbs: 45,
    fat: 22,
    calories: 538,
    prepTime: 25,
    image: "https://images.pexels.com/photos/32845316/pexels-photo-32845316.jpeg"
  },
  {
    id: 277,
    name: "Mujadara with Israeli Salad",
    mealType: "lunch",
    kosher: "parve",
    ingredients: [
      { item: "Brown lentils", amount: "1/3 cup dry" },
      { item: "Rice", amount: "1/4 cup dry" },
      { item: "Onion, sliced", amount: "1 onion" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Cucumber, diced", amount: "1/2 cucumber" },
      { item: "Tomato, diced", amount: "1 tomato" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Cook lentils in water for 15 minutes.\nAdd rice, cumin and salt; cook 18 more minutes until tender.\nMeanwhile caramelize onion in olive oil for 15 minutes.\nDice cucumber and tomato for the salad.\nTop mujadara with the onions.\nServe with the salad on the side.",
    protein: 20,
    carbs: 70,
    fat: 12,
    calories: 468,
    prepTime: 40,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800"
  },
  {
    id: 278,
    name: "One-Pan Turmeric Chicken & Rice",
    mealType: "lunch",
    kosher: "meat",
    ingredients: [
      { item: "Chicken breast, cubed", amount: "150g" },
      { item: "Rice", amount: "1/3 cup dry" },
      { item: "Onion, diced", amount: "1/2 onion" },
      { item: "Carrot, diced", amount: "1 carrot" },
      { item: "Peas", amount: "1/4 cup" },
      { item: "Turmeric", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Brown chicken in olive oil for 5 minutes, remove.\nSauté onion and carrot for 4 minutes.\nAdd rice and turmeric, stir 1 minute.\nAdd 2/3 cup water and salt, return chicken.\nCover and cook on low 18 minutes.\nStir in peas, rest 5 minutes and serve.",
    protein: 42,
    carbs: 55,
    fat: 10,
    calories: 478,
    prepTime: 35,
    image: "https://images.pexels.com/photos/8477525/pexels-photo-8477525.jpeg"
  },
  {
    id: 279,
    name: "Arayes (Beef-Stuffed Pita)",
    mealType: "lunch",
    kosher: "meat",
    ingredients: [
      { item: "Ground beef", amount: "150g" },
      { item: "Pita bread", amount: "1 pita" },
      { item: "Onion, grated", amount: "1/4 onion" },
      { item: "Fresh parsley, chopped", amount: "2 tbsp" },
      { item: "Baharat spice", amount: "1 tsp" },
      { item: "Tahini", amount: "1 tbsp" }
    ],
    instructions: "Mix beef with onion, parsley, baharat and salt.\nCut the pita in half and open the pockets.\nSpread the meat thinly inside each half.\nBrush outside with a little oil.\nGrill or pan-fry 5 minutes per side until crispy and cooked.\nServe with tahini for dipping.",
    protein: 36,
    carbs: 38,
    fat: 26,
    calories: 530,
    prepTime: 25,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800"
  },
  {
    id: 280,
    name: "Tuna Patties with Green Salad",
    mealType: "lunch",
    kosher: "parve",
    ingredients: [
      { item: "Canned tuna in water", amount: "2 cans" },
      { item: "Egg", amount: "1 egg" },
      { item: "Breadcrumbs", amount: "3 tbsp" },
      { item: "Onion, grated", amount: "1/4 onion" },
      { item: "Fresh parsley", amount: "2 tbsp" },
      { item: "Lettuce", amount: "2 cups" },
      { item: "Cucumber, sliced", amount: "1/2 cucumber" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Drain tuna well.\nMix tuna, egg, breadcrumbs, onion and parsley.\nForm 4 small patties.\nPan-fry in olive oil 3 minutes per side.\nToss lettuce and cucumber with lemon and salt.\nServe patties over the salad.",
    protein: 50,
    carbs: 18,
    fat: 12,
    calories: 380,
    prepTime: 20,
    image: "https://images.pexels.com/photos/19572489/pexels-photo-19572489.jpeg"
  },
  {
    id: 281,
    name: "Lentil & Feta Salad",
    mealType: "lunch",
    kosher: "dairy",
    ingredients: [
      { item: "Lentils, cooked", amount: "1 cup" },
      { item: "Feta cheese", amount: "40g" },
      { item: "Cucumber, diced", amount: "1/2 cucumber" },
      { item: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { item: "Red onion, diced", amount: "1/4 onion" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Rinse and drain the cooked lentils.\nDice the vegetables.\nCombine lentils and vegetables in a bowl.\nDress with lemon, olive oil, salt and pepper.\nCrumble feta on top.\nServe chilled or at room temperature.",
    protein: 26,
    carbs: 42,
    fat: 16,
    calories: 416,
    prepTime: 10,
    image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg"
  },
  {
    id: 282,
    name: "Chicken Caesar Wrap (Parve Dressing)",
    mealType: "lunch",
    kosher: "meat",
    ingredients: [
      { item: "Whole wheat tortilla", amount: "1 large" },
      { item: "Chicken breast, cooked and sliced", amount: "120g" },
      { item: "Romaine lettuce", amount: "1 cup" },
      { item: "Light mayonnaise", amount: "1 tbsp" },
      { item: "Dijon mustard", amount: "1 tsp" },
      { item: "Lemon juice", amount: "1 tsp" },
      { item: "Cherry tomatoes, halved", amount: "4 tomatoes" }
    ],
    instructions: "Mix mayonnaise, mustard, lemon and black pepper for the dressing.\nToss lettuce with the dressing.\nLay the tortilla flat.\nAdd lettuce, chicken and tomatoes.\nRoll tightly and cut in half.\nServe immediately.",
    protein: 38,
    carbs: 32,
    fat: 14,
    calories: 406,
    prepTime: 10,
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg"
  },
  {
    id: 283,
    name: "Beef & Broccoli Rice Bowl",
    mealType: "lunch",
    kosher: "meat",
    ingredients: [
      { item: "Beef sirloin, thin strips", amount: "150g" },
      { item: "Broccoli florets", amount: "1 cup" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Ginger, grated", amount: "1 tsp" },
      { item: "Cooked rice", amount: "3/4 cup" },
      { item: "Sesame oil", amount: "1 tsp" }
    ],
    instructions: "Heat sesame oil in a wok over high heat.\nSear beef strips 2 minutes, remove.\nStir-fry broccoli with garlic and ginger 3 minutes.\nReturn beef and add soy sauce.\nToss for 1 minute.\nServe over rice.",
    protein: 38,
    carbs: 50,
    fat: 14,
    calories: 478,
    prepTime: 20,
    image: "https://images.pexels.com/photos/26341190/pexels-photo-26341190.jpeg"
  },
  {
    id: 284,
    name: "Stuffed Sweet Potato with Cottage Cheese",
    mealType: "lunch",
    kosher: "dairy",
    ingredients: [
      { item: "Sweet potato", amount: "1 large" },
      { item: "Cottage cheese 5%", amount: "150g" },
      { item: "Green onion, sliced", amount: "1 stalk" },
      { item: "Cherry tomatoes, quartered", amount: "4 tomatoes" },
      { item: "Black pepper", amount: "to taste" }
    ],
    instructions: "Bake sweet potato at 200°C for 40 minutes (or microwave 8 minutes).\nSlice open lengthwise.\nFluff the inside with a fork.\nFill with cottage cheese.\nTop with tomatoes and green onion.\nSeason with black pepper and serve.",
    protein: 22,
    carbs: 45,
    fat: 6,
    calories: 322,
    prepTime: 45,
    image: "https://images.pexels.com/photos/9219074/pexels-photo-9219074.jpeg"
  },
  {
    id: 285,
    name: "Chicken Noodle Stir-Fry",
    mealType: "lunch",
    kosher: "meat",
    ingredients: [
      { item: "Chicken breast, sliced", amount: "150g" },
      { item: "Whole wheat noodles", amount: "70g dry" },
      { item: "Cabbage, shredded", amount: "1 cup" },
      { item: "Carrot, julienned", amount: "1 carrot" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Sesame oil", amount: "1 tsp" },
      { item: "Garlic, minced", amount: "1 clove" }
    ],
    instructions: "Cook noodles according to package and drain.\nStir-fry chicken in sesame oil for 5 minutes.\nAdd garlic, cabbage and carrot, cook 3 minutes.\nAdd noodles and soy sauce.\nToss everything for 2 minutes.\nServe hot.",
    protein: 40,
    carbs: 58,
    fat: 12,
    calories: 500,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800"
  },
  {
    id: 286,
    name: "Salmon Poke Bowl",
    mealType: "lunch",
    kosher: "parve",
    ingredients: [
      { item: "Salmon fillet, cooked and flaked", amount: "120g" },
      { item: "Cooked rice", amount: "3/4 cup" },
      { item: "Cucumber, diced", amount: "1/2 cucumber" },
      { item: "Avocado, sliced", amount: "1/4 avocado" },
      { item: "Edamame", amount: "1/4 cup" },
      { item: "Soy sauce", amount: "1 tbsp" },
      { item: "Sesame seeds", amount: "1 tsp" }
    ],
    instructions: "Season salmon with salt and bake at 200°C for 12 minutes, then flake.\nPlace rice in a bowl.\nArrange salmon, cucumber, avocado and edamame on top.\nDrizzle soy sauce.\nSprinkle sesame seeds.\nServe immediately.",
    protein: 34,
    carbs: 52,
    fat: 20,
    calories: 524,
    prepTime: 20,
    image: "https://images.pexels.com/photos/31871328/pexels-photo-31871328.jpeg"
  },
  {
    id: 287,
    name: "Hummus Ful Bowl with Egg",
    mealType: "lunch",
    kosher: "parve",
    ingredients: [
      { item: "Hummus", amount: "1/2 cup" },
      { item: "Fava beans (ful), canned", amount: "1/2 cup" },
      { item: "Egg, hard-boiled", amount: "1 egg" },
      { item: "Tahini", amount: "1 tbsp" },
      { item: "Onion, chopped", amount: "1/4 onion" },
      { item: "Lemon juice", amount: "1 tsp" },
      { item: "Pita bread", amount: "1/2 pita" }
    ],
    instructions: "Warm the fava beans with lemon, cumin and salt.\nSpread hummus in a shallow bowl.\nSpoon ful into the center.\nAdd halved egg.\nDrizzle tahini and top with chopped onion.\nServe with warm pita.",
    protein: 26,
    carbs: 50,
    fat: 22,
    calories: 502,
    prepTime: 10,
    image: "https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg"
  },
  {
    id: 288,
    name: "Tuna Pasta with Olives & Tomatoes",
    mealType: "lunch",
    kosher: "parve",
    ingredients: [
      { item: "Whole wheat pasta", amount: "80g" },
      { item: "Canned tuna in water", amount: "1 can" },
      { item: "Cherry tomatoes, halved", amount: "1 cup" },
      { item: "Olives, sliced", amount: "6 olives" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Fresh parsley", amount: "1 tbsp" }
    ],
    instructions: "Cook pasta according to package.\nSauté garlic in olive oil for 1 minute.\nAdd tomatoes and cook 3 minutes.\nAdd tuna and olives, warm through.\nToss with drained pasta.\nTop with parsley and serve.",
    protein: 38,
    carbs: 62,
    fat: 14,
    calories: 526,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800"
  },
  {
    id: 289,
    name: "Grilled Halloumi Quinoa Salad",
    mealType: "lunch",
    kosher: "dairy",
    ingredients: [
      { item: "Halloumi cheese, sliced", amount: "80g" },
      { item: "Cooked quinoa", amount: "1/2 cup" },
      { item: "Mixed greens", amount: "2 cups" },
      { item: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { item: "Cucumber, diced", amount: "1/2 cucumber" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Grill halloumi in a dry pan 2 minutes per side.\nCombine greens, quinoa, tomatoes and cucumber.\nDress with lemon, olive oil and salt.\nTop with warm halloumi.\nAdd black pepper.\nServe immediately.",
    protein: 26,
    carbs: 28,
    fat: 26,
    calories: 450,
    prepTime: 15,
    image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg"
  },
  {
    id: 290,
    name: "Chicken & Vegetable Soup",
    mealType: "lunch",
    kosher: "meat",
    ingredients: [
      { item: "Chicken thighs, boneless", amount: "150g" },
      { item: "Carrot, sliced", amount: "1 carrot" },
      { item: "Celery, sliced", amount: "1 stalk" },
      { item: "Zucchini, diced", amount: "1/2 zucchini" },
      { item: "Potato, diced", amount: "1 small" },
      { item: "Onion, diced", amount: "1/2 onion" },
      { item: "Fresh dill", amount: "1 tbsp" }
    ],
    instructions: "Place chicken and onion in a pot with 3 cups water.\nBring to a boil and skim the foam.\nAdd carrot, celery and potato; simmer 25 minutes.\nAdd zucchini for the last 8 minutes.\nShred the chicken and return to the pot.\nSeason, add dill and serve.",
    protein: 34,
    carbs: 25,
    fat: 10,
    calories: 326,
    prepTime: 40,
    image: "https://images.pexels.com/photos/32655229/pexels-photo-32655229.jpeg"
  },
  {
    id: 291,
    name: "Egg Salad Pita",
    mealType: "lunch",
    kosher: "parve",
    ingredients: [
      { item: "Eggs, hard-boiled", amount: "3 eggs" },
      { item: "Light mayonnaise", amount: "1 tbsp" },
      { item: "Mustard", amount: "1 tsp" },
      { item: "Green onion, sliced", amount: "1 stalk" },
      { item: "Pita bread", amount: "1 pita" },
      { item: "Lettuce", amount: "1/2 cup" },
      { item: "Tomato, sliced", amount: "1 tomato" }
    ],
    instructions: "Peel and chop the eggs.\nMix with mayonnaise, mustard, green onion, salt and pepper.\nWarm the pita and open it.\nLine with lettuce and tomato.\nFill with egg salad.\nServe immediately.",
    protein: 24,
    carbs: 36,
    fat: 20,
    calories: 420,
    prepTime: 15,
    image: "https://images.pexels.com/photos/31150259/pexels-photo-31150259.jpeg"
  },
  {
    id: 292,
    name: "Two-Bean Veggie Chili",
    mealType: "lunch",
    kosher: "parve",
    ingredients: [
      { item: "Kidney beans, canned", amount: "1/2 cup" },
      { item: "Black beans, canned", amount: "1/2 cup" },
      { item: "Crushed tomatoes", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/2 onion" },
      { item: "Bell pepper, diced", amount: "1/2 pepper" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Chili powder", amount: "1/2 tsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Sauté onion and pepper in olive oil 5 minutes.\nAdd cumin and chili powder, stir 30 seconds.\nAdd crushed tomatoes and both beans.\nSimmer 20 minutes, stirring occasionally.\nSeason with salt and pepper.\nServe with rice or bread.",
    protein: 22,
    carbs: 62,
    fat: 6,
    calories: 390,
    prepTime: 30,
    image: "https://images.pexels.com/photos/9928340/pexels-photo-9928340.jpeg"
  },
  {
    id: 293,
    name: "Chicken Fajita Bowl",
    mealType: "lunch",
    kosher: "meat",
    ingredients: [
      { item: "Chicken breast, sliced", amount: "150g" },
      { item: "Bell pepper, sliced", amount: "1 pepper" },
      { item: "Onion, sliced", amount: "1/2 onion" },
      { item: "Cooked rice", amount: "1/2 cup" },
      { item: "Black beans, canned", amount: "1/3 cup" },
      { item: "Salsa", amount: "2 tbsp" },
      { item: "Avocado", amount: "1/4 avocado" }
    ],
    instructions: "Season chicken with paprika, cumin and salt.\nSear chicken in a hot pan for 6 minutes.\nAdd peppers and onion, cook 4 minutes.\nWarm rice and beans.\nAssemble bowl with rice, beans, chicken and vegetables.\nTop with salsa and avocado.",
    protein: 44,
    carbs: 55,
    fat: 14,
    calories: 522,
    prepTime: 25,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg"
  },
  {
    id: 294,
    name: "Baked Potato with Tuna & Corn",
    mealType: "lunch",
    kosher: "parve",
    ingredients: [
      { item: "Potato", amount: "1 large" },
      { item: "Canned tuna in water", amount: "1 can" },
      { item: "Corn kernels", amount: "1/4 cup" },
      { item: "Light mayonnaise", amount: "1 tbsp" },
      { item: "Green onion, sliced", amount: "1 stalk" }
    ],
    instructions: "Microwave potato 8-10 minutes until soft (or bake 50 minutes).\nMix tuna, corn, mayonnaise and green onion.\nSeason with salt and pepper.\nCut the potato open.\nFill with the tuna mixture.\nServe warm.",
    protein: 34,
    carbs: 55,
    fat: 8,
    calories: 428,
    prepTime: 15,
    image: "https://images.pexels.com/photos/9219074/pexels-photo-9219074.jpeg"
  },
  {
    id: 295,
    name: "Beef Kofta with Tabbouleh",
    mealType: "lunch",
    kosher: "meat",
    ingredients: [
      { item: "Lean ground beef", amount: "150g" },
      { item: "Onion, grated", amount: "1/4 onion" },
      { item: "Fresh parsley, chopped", amount: "1/2 cup" },
      { item: "Cumin", amount: "1 tsp" },
      { item: "Bulgur", amount: "1/3 cup dry" },
      { item: "Tomato, diced", amount: "1 tomato" },
      { item: "Cucumber, diced", amount: "1/2 cucumber" },
      { item: "Lemon juice", amount: "1 tbsp" }
    ],
    instructions: "Soak bulgur in boiling water for 15 minutes, drain.\nMix beef, onion, half the parsley, cumin and salt; shape 4 kofta.\nGrill or pan-fry kofta 4 minutes per side.\nMix bulgur with tomato, cucumber, remaining parsley and lemon.\nSeason the tabbouleh with salt and olive oil.\nServe kofta over tabbouleh.",
    protein: 38,
    carbs: 40,
    fat: 22,
    calories: 510,
    prepTime: 30,
    image: "https://images.pexels.com/photos/6419696/pexels-photo-6419696.jpeg"
  },
  {
    id: 296,
    name: "Couscous Salad with Chickpeas & Feta",
    mealType: "lunch",
    kosher: "dairy",
    ingredients: [
      { item: "Couscous", amount: "1/3 cup dry" },
      { item: "Chickpeas, canned", amount: "1/2 cup" },
      { item: "Cucumber, diced", amount: "1/2 cucumber" },
      { item: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { item: "Feta cheese", amount: "30g" },
      { item: "Fresh mint", amount: "1 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" }
    ],
    instructions: "Pour boiling water over couscous, cover 5 minutes, fluff.\nRinse chickpeas.\nMix couscous with chickpeas, cucumber and tomatoes.\nDress with lemon, olive oil and salt.\nTop with crumbled feta and mint.\nServe.",
    protein: 22,
    carbs: 62,
    fat: 14,
    calories: 462,
    prepTime: 15,
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800"
  },
  {
    id: 297,
    name: "Turkey & Hummus Sandwich",
    mealType: "lunch",
    kosher: "meat",
    ingredients: [
      { item: "Whole wheat bread", amount: "2 slices" },
      { item: "Sliced turkey breast", amount: "100g" },
      { item: "Hummus", amount: "2 tbsp" },
      { item: "Lettuce", amount: "2 leaves" },
      { item: "Tomato, sliced", amount: "1 tomato" },
      { item: "Pickles, sliced", amount: "1 pickle" }
    ],
    instructions: "Spread hummus on both bread slices.\nLayer lettuce and tomato.\nAdd turkey slices.\nTop with pickles.\nClose and cut in half.\nServe or pack for later.",
    protein: 32,
    carbs: 34,
    fat: 10,
    calories: 354,
    prepTime: 5,
    image: "https://images.pexels.com/photos/4955260/pexels-photo-4955260.jpeg"
  },
  {
    id: 298,
    name: "Tofu Rice Bowl with Peanut Sauce",
    mealType: "lunch",
    kosher: "parve",
    ingredients: [
      { item: "Firm tofu, cubed", amount: "150g" },
      { item: "Cooked rice", amount: "3/4 cup" },
      { item: "Broccoli florets", amount: "1 cup" },
      { item: "Carrot, grated", amount: "1 carrot" },
      { item: "Peanut butter", amount: "1 tbsp" },
      { item: "Soy sauce", amount: "1 tbsp" },
      { item: "Lime juice", amount: "1 tsp" }
    ],
    instructions: "Pan-fry tofu until golden on all sides, 8 minutes.\nSteam broccoli for 4 minutes.\nWhisk peanut butter, soy sauce, lime and 2 tbsp warm water.\nPlace rice in a bowl.\nTop with tofu, broccoli and carrot.\nDrizzle peanut sauce and serve.",
    protein: 30,
    carbs: 55,
    fat: 20,
    calories: 520,
    prepTime: 25,
    image: "https://images.pexels.com/photos/30506297/pexels-photo-30506297.jpeg"
  },
  {
    id: 299,
    name: "Chicken Meatballs in Tomato Sauce with Rice",
    mealType: "lunch",
    kosher: "meat",
    ingredients: [
      { item: "Ground chicken", amount: "150g" },
      { item: "Breadcrumbs", amount: "2 tbsp" },
      { item: "Egg", amount: "1 egg" },
      { item: "Tomato sauce", amount: "1 cup" },
      { item: "Garlic, minced", amount: "1 clove" },
      { item: "Cooked rice", amount: "3/4 cup" },
      { item: "Fresh parsley", amount: "1 tbsp" }
    ],
    instructions: "Mix chicken, breadcrumbs, egg, parsley and salt.\nForm 6 small meatballs.\nBring tomato sauce and garlic to a simmer.\nAdd meatballs, cover and cook 15 minutes.\nWarm the rice.\nServe meatballs and sauce over rice.",
    protein: 36,
    carbs: 55,
    fat: 12,
    calories: 472,
    prepTime: 30,
    image: "https://images.pexels.com/photos/8879226/pexels-photo-8879226.jpeg"
  },
  {
    id: 300,
    name: "Cauliflower Egg Fried 'Rice'",
    mealType: "lunch",
    kosher: "parve",
    ingredients: [
      { item: "Cauliflower, riced", amount: "2 cups" },
      { item: "Eggs", amount: "2 eggs" },
      { item: "Frozen peas and carrots", amount: "1/2 cup" },
      { item: "Soy sauce", amount: "1 tbsp" },
      { item: "Green onion, sliced", amount: "1 stalk" },
      { item: "Sesame oil", amount: "1 tsp" }
    ],
    instructions: "Grate cauliflower or pulse in a food processor.\nHeat sesame oil in a wok.\nStir-fry peas and carrots 2 minutes.\nAdd cauliflower and cook 5 minutes.\nPush aside, scramble the eggs, then mix in.\nAdd soy sauce and green onion, serve.",
    protein: 20,
    carbs: 18,
    fat: 14,
    calories: 278,
    prepTime: 15,
    image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg"
  },
  // more lunch recipes end

  // more dinner recipes (kosher: meat / dairy / parve) start
  {
    id: 301,
    name: "Baked Salmon with Tahini & Potatoes",
    mealType: "dinner",
    kosher: "parve",
    ingredients: [
      { item: "Salmon fillet", amount: "150g" },
      { item: "Baby potatoes, halved", amount: "200g" },
      { item: "Tahini", amount: "1.5 tbsp" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Fresh parsley", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Toss potatoes with olive oil and salt; roast at 210°C for 15 minutes.\nAdd salmon to the tray, season with salt and pepper.\nRoast 12-14 more minutes.\nWhisk tahini with lemon and water until creamy.\nDrizzle tahini over salmon.\nTop with parsley and serve.",
    protein: 38,
    carbs: 35,
    fat: 28,
    calories: 544,
    prepTime: 35,
    image: "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg"
  },
  {
    id: 302,
    name: "Silan & Sesame Chicken Thighs",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Chicken thighs, boneless", amount: "180g" },
      { item: "Silan (date syrup)", amount: "1 tbsp" },
      { item: "Soy sauce", amount: "1 tbsp" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Sesame seeds", amount: "1 tsp" },
      { item: "Cooked rice", amount: "1/2 cup" }
    ],
    instructions: "Mix silan, soy sauce and garlic.\nCoat chicken in the sauce and marinate 10 minutes.\nRoast at 200°C for 22-25 minutes, basting once.\nSprinkle sesame seeds.\nWarm the rice.\nServe chicken over rice.",
    protein: 40,
    carbs: 30,
    fat: 18,
    calories: 442,
    prepTime: 35,
    image: "https://images.pexels.com/photos/13065193/pexels-photo-13065193.jpeg"
  },
  {
    id: 303,
    name: "Chraime (Spicy Moroccan Fish)",
    mealType: "dinner",
    kosher: "parve",
    ingredients: [
      { item: "White fish fillet", amount: "180g" },
      { item: "Tomato paste", amount: "1 tbsp" },
      { item: "Red bell pepper, sliced", amount: "1/2 pepper" },
      { item: "Garlic, sliced", amount: "4 cloves" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Cumin", amount: "1/2 tsp" },
      { item: "Fresh cilantro", amount: "2 tbsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Sauté garlic and pepper in olive oil 3 minutes.\nAdd tomato paste, paprika, cumin and 1/2 cup water.\nSimmer the sauce 5 minutes.\nAdd fish and spoon sauce over it.\nCover and cook 10-12 minutes.\nTop with cilantro and serve with bread.",
    protein: 38,
    carbs: 10,
    fat: 14,
    calories: 318,
    prepTime: 30,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800"
  },
  {
    id: 304,
    name: "Grilled Beef Kebabs with Vegetables",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Beef sirloin, cubed", amount: "160g" },
      { item: "Bell pepper, chunks", amount: "1 pepper" },
      { item: "Onion, chunks", amount: "1/2 onion" },
      { item: "Zucchini, sliced", amount: "1/2 zucchini" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Garlic powder", amount: "1/2 tsp" },
      { item: "Paprika", amount: "1 tsp" }
    ],
    instructions: "Toss beef with oil, garlic powder, paprika and salt.\nThread beef and vegetables onto skewers.\nPreheat grill pan over high heat.\nGrill 8-10 minutes, turning occasionally.\nRest 3 minutes.\nServe with tahini or salad.",
    protein: 40,
    carbs: 15,
    fat: 22,
    calories: 418,
    prepTime: 30,
    image: "https://images.pexels.com/photos/9510363/pexels-photo-9510363.jpeg"
  },
  {
    id: 305,
    name: "Turkey Steak with Sweet Potato Mash",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Turkey breast cutlet", amount: "180g" },
      { item: "Sweet potato", amount: "200g" },
      { item: "Green beans", amount: "1 cup" },
      { item: "Garlic, minced", amount: "1 clove" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Boil sweet potato chunks 15 minutes, mash with salt.\nSeason turkey with garlic, salt and pepper.\nSear turkey in olive oil 4 minutes per side.\nSteam green beans 5 minutes.\nRest turkey 2 minutes and slice.\nServe with mash and green beans.",
    protein: 46,
    carbs: 40,
    fat: 10,
    calories: 434,
    prepTime: 30,
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg"
  },
  {
    id: 306,
    name: "Vegetable & Feta Frittata",
    mealType: "dinner",
    kosher: "dairy",
    ingredients: [
      { item: "Eggs", amount: "4 eggs" },
      { item: "Zucchini, grated", amount: "1/2 zucchini" },
      { item: "Onion, diced", amount: "1/4 onion" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Feta cheese", amount: "30g" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Preheat oven to 190°C.\nSauté onion, zucchini and spinach in an oven-safe pan.\nWhisk eggs with salt and pepper and pour over.\nCrumble feta on top.\nCook 3 minutes on the stove, then bake 10-12 minutes.\nSlice and serve with salad.",
    protein: 32,
    carbs: 10,
    fat: 24,
    calories: 384,
    prepTime: 25,
    image: "https://images.pexels.com/photos/12310569/pexels-photo-12310569.jpeg"
  },
  {
    id: 307,
    name: "Chicken & Cashew Stir-Fry",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Chicken breast, cubed", amount: "150g" },
      { item: "Cashews", amount: "20g" },
      { item: "Bell pepper, sliced", amount: "1 pepper" },
      { item: "Broccoli florets", amount: "1 cup" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Cooked rice", amount: "3/4 cup" }
    ],
    instructions: "Toast cashews in a dry wok, set aside.\nStir-fry chicken 5 minutes.\nAdd garlic, pepper and broccoli; cook 3 minutes.\nAdd soy sauce and a splash of water.\nToss in cashews.\nServe over rice.",
    protein: 42,
    carbs: 50,
    fat: 18,
    calories: 530,
    prepTime: 20,
    image: "https://images.pexels.com/photos/34599519/pexels-photo-34599519.png"
  },
  {
    id: 308,
    name: "Eggplant Shakshuka",
    mealType: "dinner",
    kosher: "parve",
    ingredients: [
      { item: "Eggs", amount: "2 eggs" },
      { item: "Eggplant, diced", amount: "1/2 eggplant" },
      { item: "Tomatoes, diced", amount: "2 tomatoes" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Bell pepper, diced", amount: "1/2 pepper" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tbsp" }
    ],
    instructions: "Fry eggplant in olive oil until golden, 8 minutes.\nAdd pepper and garlic, cook 3 minutes.\nAdd tomatoes and paprika, simmer 10 minutes.\nMake wells and crack in the eggs.\nCover and cook 5-6 minutes.\nServe with bread.",
    protein: 18,
    carbs: 20,
    fat: 16,
    calories: 296,
    prepTime: 30,
    image: "https://images.pexels.com/photos/30892286/pexels-photo-30892286.jpeg"
  },
  {
    id: 309,
    name: "Tilapia & Vegetables in Foil",
    mealType: "dinner",
    kosher: "parve",
    ingredients: [
      { item: "Tilapia fillet", amount: "180g" },
      { item: "Zucchini, sliced", amount: "1/2 zucchini" },
      { item: "Cherry tomatoes", amount: "6 tomatoes" },
      { item: "Onion, sliced", amount: "1/4 onion" },
      { item: "Lemon, sliced", amount: "1/2 lemon" },
      { item: "Garlic, minced", amount: "1 clove" },
      { item: "Fresh dill", amount: "1 tbsp" }
    ],
    instructions: "Preheat oven to 200°C.\nLay vegetables on a large sheet of foil.\nPlace fish on top, season with salt, pepper and garlic.\nTop with lemon slices and dill.\nSeal the foil and bake 18-20 minutes.\nOpen carefully and serve.",
    protein: 40,
    carbs: 12,
    fat: 10,
    calories: 298,
    prepTime: 30,
    image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg"
  },
  {
    id: 310,
    name: "Spaghetti with Turkey Bolognese",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Ground turkey", amount: "150g" },
      { item: "Whole wheat spaghetti", amount: "80g" },
      { item: "Crushed tomatoes", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/2 onion" },
      { item: "Carrot, grated", amount: "1 carrot" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Fresh basil", amount: "4 leaves" }
    ],
    instructions: "Cook spaghetti according to package.\nSauté onion, carrot and garlic 5 minutes.\nAdd turkey and brown, breaking it up.\nAdd crushed tomatoes, salt and pepper; simmer 15 minutes.\nToss with drained spaghetti.\nTop with basil and serve.",
    protein: 44,
    carbs: 66,
    fat: 12,
    calories: 548,
    prepTime: 30,
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800"
  },
  {
    id: 311,
    name: "Spinach-Stuffed Chicken Breast",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Chicken breast", amount: "180g" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Sun-dried tomatoes, chopped", amount: "4 pieces" },
      { item: "Garlic, minced", amount: "1 clove" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Paprika", amount: "1/2 tsp" }
    ],
    instructions: "Sauté spinach and garlic until wilted; mix with sun-dried tomatoes.\nCut a pocket into the chicken breast.\nStuff with the spinach mixture and close with a toothpick.\nRub with olive oil, paprika and salt.\nBake at 200°C for 22-25 minutes.\nRest 5 minutes, slice and serve.",
    protein: 50,
    carbs: 8,
    fat: 14,
    calories: 358,
    prepTime: 35,
    image: "https://images.pexels.com/photos/145804/pexels-photo-145804.jpeg"
  },
  {
    id: 312,
    name: "Sweet Potato & Chickpea Curry",
    mealType: "dinner",
    kosher: "parve",
    ingredients: [
      { item: "Chickpeas, canned", amount: "1/2 cup" },
      { item: "Sweet potato, cubed", amount: "1 medium" },
      { item: "Light coconut milk", amount: "1/3 cup" },
      { item: "Curry powder", amount: "1 tsp" },
      { item: "Spinach", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/2 onion" },
      { item: "Cooked rice", amount: "1/2 cup" }
    ],
    instructions: "Sauté onion until soft.\nAdd curry powder and stir 30 seconds.\nAdd sweet potato, chickpeas, coconut milk and 1/2 cup water.\nSimmer 20 minutes until potato is tender.\nStir in spinach until wilted.\nServe over rice.",
    protein: 18,
    carbs: 75,
    fat: 16,
    calories: 516,
    prepTime: 35,
    image: "https://images.pexels.com/photos/10464100/pexels-photo-10464100.jpeg"
  },
  {
    id: 313,
    name: "Fish Patties in Tomato Sauce",
    mealType: "dinner",
    kosher: "parve",
    ingredients: [
      { item: "White fish fillet, minced", amount: "180g" },
      { item: "Egg", amount: "1 egg" },
      { item: "Breadcrumbs", amount: "2 tbsp" },
      { item: "Onion, grated", amount: "1/4 onion" },
      { item: "Fresh parsley", amount: "2 tbsp" },
      { item: "Tomato sauce", amount: "1 cup" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Garlic, minced", amount: "2 cloves" }
    ],
    instructions: "Mix fish, egg, breadcrumbs, onion, parsley and salt.\nShape into 5 small patties.\nSimmer tomato sauce with garlic and paprika.\nGently add the patties to the sauce.\nCover and cook 20 minutes.\nServe with rice or bread.",
    protein: 40,
    carbs: 22,
    fat: 12,
    calories: 356,
    prepTime: 35,
    image: "https://images.pexels.com/photos/8879226/pexels-photo-8879226.jpeg"
  },
  {
    id: 314,
    name: "Lean Beef Goulash with Potatoes",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Beef chuck, cubed", amount: "150g" },
      { item: "Potato, cubed", amount: "1 medium" },
      { item: "Onion, diced", amount: "1 onion" },
      { item: "Carrot, sliced", amount: "1 carrot" },
      { item: "Paprika", amount: "2 tsp" },
      { item: "Tomato paste", amount: "1 tbsp" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Brown beef in olive oil, remove.\nSauté onion until golden.\nAdd paprika and tomato paste, stir 1 minute.\nReturn beef, add 2 cups water and simmer covered 60 minutes.\nAdd potato and carrot, cook 25 minutes more.\nSeason and serve.",
    protein: 38,
    carbs: 35,
    fat: 16,
    calories: 436,
    prepTime: 90,
    image: "https://images.pexels.com/photos/8477816/pexels-photo-8477816.jpeg"
  },
  {
    id: 315,
    name: "Lemon Garlic Chicken with Green Beans & Rice",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Chicken breast", amount: "160g" },
      { item: "Green beans", amount: "1 cup" },
      { item: "Cooked rice", amount: "3/4 cup" },
      { item: "Lemon", amount: "1/2 lemon" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Season chicken with salt, pepper and garlic.\nSear in olive oil 6 minutes per side.\nSqueeze lemon over the chicken and let it bubble.\nSteam green beans 5 minutes.\nWarm the rice.\nSlice chicken and serve with beans and rice.",
    protein: 45,
    carbs: 45,
    fat: 12,
    calories: 468,
    prepTime: 30,
    image: "https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg"
  },
  {
    id: 316,
    name: "Crustless Cottage Cheese & Zucchini Pashtida",
    mealType: "dinner",
    kosher: "dairy",
    ingredients: [
      { item: "Eggs", amount: "2 eggs" },
      { item: "Cottage cheese 5%", amount: "150g" },
      { item: "Zucchini, grated", amount: "1 zucchini" },
      { item: "Yellow cheese (light), grated", amount: "20g" },
      { item: "Onion, diced", amount: "1/4 onion" },
      { item: "Salt and pepper", amount: "to taste" }
    ],
    instructions: "Preheat oven to 180°C.\nSqueeze excess water out of the grated zucchini.\nMix eggs, cottage cheese, zucchini, onion, salt and pepper.\nPour into a small baking dish.\nTop with yellow cheese.\nBake 30-35 minutes until golden and set.",
    protein: 36,
    carbs: 10,
    fat: 16,
    calories: 328,
    prepTime: 40,
    image: "https://images.pexels.com/photos/6294362/pexels-photo-6294362.jpeg"
  },
  {
    id: 317,
    name: "Oven-Baked Turkey Schnitzel with Israeli Salad",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Turkey breast cutlet", amount: "150g" },
      { item: "Egg", amount: "1 egg" },
      { item: "Breadcrumbs", amount: "1/3 cup" },
      { item: "Cucumber, diced", amount: "1 cucumber" },
      { item: "Tomato, diced", amount: "1 tomato" },
      { item: "Onion, diced", amount: "1/4 onion" },
      { item: "Lemon juice", amount: "1 tbsp" }
    ],
    instructions: "Preheat oven to 210°C.\nDip turkey in beaten egg, then coat in breadcrumbs.\nPlace on a lined tray and spray with oil.\nBake 18-20 minutes, flipping halfway.\nDice vegetables and dress with lemon, olive oil and salt.\nServe schnitzel with the salad.",
    protein: 42,
    carbs: 30,
    fat: 14,
    calories: 414,
    prepTime: 30,
    image: "https://images.pexels.com/photos/12035744/pexels-photo-12035744.jpeg"
  },
  {
    id: 318,
    name: "Chicken Drumsticks & Potato Tray Bake",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Chicken drumsticks", amount: "2 drumsticks (250g)" },
      { item: "Potatoes, cubed", amount: "200g" },
      { item: "Onion, quartered", amount: "1/2 onion" },
      { item: "Fresh rosemary", amount: "1 sprig" },
      { item: "Paprika", amount: "1 tsp" },
      { item: "Garlic, whole cloves", amount: "3 cloves" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Preheat oven to 200°C.\nToss potatoes, onion and garlic with oil and salt on a tray.\nRub drumsticks with paprika, salt and pepper.\nNestle chicken on the vegetables with rosemary.\nRoast 45 minutes until golden and cooked through.\nServe hot.",
    protein: 42,
    carbs: 38,
    fat: 22,
    calories: 518,
    prepTime: 55,
    image: "https://images.pexels.com/photos/31233881/pexels-photo-31233881.jpeg"
  },
  {
    id: 319,
    name: "Mushroom Barley & White Bean Soup",
    mealType: "dinner",
    kosher: "parve",
    ingredients: [
      { item: "Pearl barley", amount: "1/3 cup" },
      { item: "Mushrooms, sliced", amount: "1 cup" },
      { item: "White beans, canned", amount: "1/2 cup" },
      { item: "Onion, diced", amount: "1/2 onion" },
      { item: "Carrot, diced", amount: "1 carrot" },
      { item: "Celery, diced", amount: "1 stalk" },
      { item: "Vegetable broth", amount: "3 cups" }
    ],
    instructions: "Sauté onion, carrot and celery 5 minutes.\nAdd mushrooms and cook 5 minutes.\nAdd barley and broth.\nSimmer covered 35 minutes.\nAdd white beans and cook 5 more minutes.\nSeason with salt, pepper and serve.",
    protein: 20,
    carbs: 62,
    fat: 6,
    calories: 382,
    prepTime: 50,
    image: "https://images.pexels.com/photos/19870150/pexels-photo-19870150.jpeg"
  },
  {
    id: 320,
    name: "Salmon Patties with Yogurt-Dill Sauce",
    mealType: "dinner",
    kosher: "dairy",
    ingredients: [
      { item: "Salmon fillet, minced", amount: "150g" },
      { item: "Egg", amount: "1 egg" },
      { item: "Rolled oats", amount: "3 tbsp" },
      { item: "Green onion, sliced", amount: "1 stalk" },
      { item: "Greek yogurt", amount: "100g" },
      { item: "Fresh dill", amount: "1 tbsp" },
      { item: "Lemon juice", amount: "1 tsp" }
    ],
    instructions: "Mix salmon, egg, oats, green onion and salt.\nShape into 3 patties.\nPan-fry in a little oil 3-4 minutes per side.\nMix yogurt with dill, lemon and salt.\nServe patties with the sauce.\nAdd a green salad on the side.",
    protein: 44,
    carbs: 18,
    fat: 20,
    calories: 428,
    prepTime: 25,
    image: "https://images.pexels.com/photos/31010018/pexels-photo-31010018.jpeg"
  },
  {
    id: 321,
    name: "Eggplant & Chickpea Tagine",
    mealType: "dinner",
    kosher: "parve",
    ingredients: [
      { item: "Eggplant, cubed", amount: "1/2 eggplant" },
      { item: "Chickpeas, canned", amount: "1/2 cup" },
      { item: "Crushed tomatoes", amount: "1 cup" },
      { item: "Onion, diced", amount: "1/2 onion" },
      { item: "Ras el hanout", amount: "1 tsp" },
      { item: "Dried apricots, chopped", amount: "3 apricots" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Sauté onion and eggplant in olive oil 8 minutes.\nAdd ras el hanout, stir 30 seconds.\nAdd tomatoes, chickpeas, apricots and 1/2 cup water.\nSimmer covered 25 minutes.\nSeason with salt and pepper.\nServe with couscous or bread.",
    protein: 16,
    carbs: 50,
    fat: 12,
    calories: 372,
    prepTime: 40,
    image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg"
  },
  {
    id: 322,
    name: "Chicken Kofta with Zucchini & Rice",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Ground chicken", amount: "150g" },
      { item: "Onion, grated", amount: "1/4 onion" },
      { item: "Fresh parsley", amount: "2 tbsp" },
      { item: "Cumin", amount: "1/2 tsp" },
      { item: "Zucchini, sliced", amount: "1 zucchini" },
      { item: "Cooked rice", amount: "1/2 cup" },
      { item: "Olive oil", amount: "1 tsp" }
    ],
    instructions: "Mix chicken, onion, parsley, cumin and salt.\nShape into small koftas.\nPan-fry koftas in olive oil 10 minutes, turning.\nGrill zucchini slices in the same pan.\nWarm the rice.\nServe koftas with zucchini and rice.",
    protein: 40,
    carbs: 40,
    fat: 14,
    calories: 446,
    prepTime: 30,
    image: "https://images.pexels.com/photos/15957257/pexels-photo-15957257.jpeg"
  },
  {
    id: 323,
    name: "Steak with Chimichurri & Roasted Potatoes",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Sirloin steak", amount: "180g" },
      { item: "Potatoes, cubed", amount: "200g" },
      { item: "Fresh parsley, chopped", amount: "1/4 cup" },
      { item: "Garlic, minced", amount: "1 clove" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Red wine vinegar", amount: "1 tsp" },
      { item: "Chili flakes", amount: "pinch" }
    ],
    instructions: "Roast potatoes with a little oil and salt at 210°C for 30 minutes.\nMix parsley, garlic, olive oil, vinegar, chili and salt for chimichurri.\nSeason steak with salt and pepper.\nSear in a very hot pan 3-4 minutes per side.\nRest 5 minutes, then slice.\nServe with potatoes and chimichurri.",
    protein: 46,
    carbs: 35,
    fat: 24,
    calories: 540,
    prepTime: 40,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800"
  },
  {
    id: 324,
    name: "Creamy Mushroom Pasta",
    mealType: "dinner",
    kosher: "dairy",
    ingredients: [
      { item: "Whole wheat pasta", amount: "80g" },
      { item: "Mushrooms, sliced", amount: "1.5 cups" },
      { item: "Garlic, minced", amount: "2 cloves" },
      { item: "Light cooking cream", amount: "1/4 cup" },
      { item: "Parmesan cheese, grated", amount: "15g" },
      { item: "Fresh parsley", amount: "1 tbsp" }
    ],
    instructions: "Cook pasta according to package.\nSauté mushrooms until golden, 6 minutes.\nAdd garlic and cook 1 minute.\nPour in cream and simmer 2 minutes.\nToss with pasta and parmesan.\nTop with parsley and serve.",
    protein: 22,
    carbs: 65,
    fat: 16,
    calories: 492,
    prepTime: 20,
    image: "https://images.unsplash.com/photo-1476124369491-f61c20c8a4a6?w=800"
  },
  {
    id: 325,
    name: "Chicken Salad with Tahini & Roasted Chickpeas",
    mealType: "dinner",
    kosher: "meat",
    ingredients: [
      { item: "Chicken breast", amount: "150g" },
      { item: "Chickpeas, canned", amount: "1/2 cup" },
      { item: "Mixed greens", amount: "2 cups" },
      { item: "Cucumber, diced", amount: "1/2 cucumber" },
      { item: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { item: "Tahini", amount: "1.5 tbsp" },
      { item: "Paprika", amount: "1 tsp" }
    ],
    instructions: "Toss chickpeas with paprika, salt and a little oil; roast at 210°C for 20 minutes.\nGrill chicken 6 minutes per side and slice.\nCombine greens, cucumber and tomatoes.\nThin tahini with lemon and water.\nTop salad with chicken and crispy chickpeas.\nDrizzle tahini and serve.",
    protein: 46,
    carbs: 30,
    fat: 22,
    calories: 502,
    prepTime: 30,
    image: "https://images.pexels.com/photos/19526778/pexels-photo-19526778.jpeg"
  },
  // more dinner recipes end


]



export default recipes;