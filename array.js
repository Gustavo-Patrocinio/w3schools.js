// const cars = ["Saab", "Volvo", "BMW"];

// You can also create an array, and then provide the elements:
const cars = ["Saab", "Volvo", "BMW", "", "1"];

const cars2 = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

// You access an array element by referring to the index number:
let car = cars[0];
cars[0] = "Opel";

//  Array Elements Can Be Objects
//  You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

//  myArray[0] = Date.now;
//  myArray[1] = myFunction;
//  myArray[2] = myCars;

//Array Properties and Methods

console.log(`${cars.length} \b carros`, cars.sort());
cars.push("HB20");
console.log(`${cars.length} \b carros`, cars.sort());
//You should use objects when you want the element names to be strings (text).
//You should use arrays when you want the element names to be numbers.

//new Array()
//These two different statements both create a new array containing 6 numbers:

const points1 = new Array(4);

const points = [40, 100, 2, 15, 23];
console.log(points, points1);
