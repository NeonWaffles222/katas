const chooseRecipe = function (bakeryA, bakeryB, recipes) {

  const ingredientCheck = function (bakery, recipes) {

    recipes.forEach(function (recipe) {

      for (let x = 0; x < bakery.length; x++) {

        for (let y = 0; y < recipe.ingredients.length; y++) {

          if (bakery[x] === recipe.ingredients[y]) {
            //Conditional should let the function work if more ingredients and bakerys are added (not tested)
            if (recipe.available >= 1) {
              return recipe.available++;
            } else {
              return recipe.available = 1;
            }
          }
        }
      }
    });
    return recipes;
  }
  ingredientCheck(bakeryA, recipes);
  ingredientCheck(bakeryB, recipes);
  for (let recipe of recipes) {
    if (recipe.available === recipe.ingredients.length) {
      return recipe.name;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));