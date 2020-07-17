/*

Think of 5 different real world "things" that you 
can describe with a JavaScript object

Assign each of them to a separate variable

*/

let CYF = {
  branch: "Birmingham",
  studentsNo: 30,
  trainingFocus: "Coding",
  meeting: "Saturday",
  HasCYFMentors: true,
};

let food = {
  name: "Jollof Rice",
  type: "grain",
  ingredient: ["Rice", "Mixed Vegetable", "Vegetable oil"],
  Water: "2 cups",
  seasonal: 2,
};

let shopping = {
  shop: ["Tesco", "Sainsbury", "Morrison"],
  type: "Supermarket",
  products: ["Rice", "Mixed Vegetable", "Vegetable oil"],
  openingHours: 7,
  closingHours: 10,
};
//   console.log(food.ingredient[1]);
console.log(food["ingredient"][1]);
console.log(shopping["shop"]);
