/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- Title (a string), 
- Servings (a number), and 
- Ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

**/

let recipes = {
    foodName: "Fried Rice",
    ingredients: ["cinnamon", "cumin", "Rice", "tomatoes", "oil"],
    serves: 2,
    addSeasoning: true
};
console.log(recipes.foodName);
console.log(recipes["ingredients"]);
console.log(recipes.serves);
console.log(recipes.addSeasoning);