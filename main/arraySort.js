//sort == ordenar
//The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
console.log(fruits.reverse());

//Numeric sort
const points = [40, 100, 5, 1, 25, 10];
console.log(
  points.sort(function (a, b) {
    return a - b;
  })
);
