//Loops are handy, if you want to run the same code over and over again, each time with a different value.

const cars = ["BMW", "Volvo", "Ford"];
let text = "";
for (let i = 0; i < cars.length; i++) {
  text += `${cars[i]}\n`;
}
console.log(text);

// Loop For in
//The JavaScript for in statement loops through the properties of an Object:
// percorre os atributos do objeto
const person = { fname: "John", lname: "Doe", age: "25" };
let text2 = "";
for (let x in person) {
  text2 += person[x];
}
console.log(person);

// const numbers = [45, 4, 9, 16, 25];
// let text3 = "";
// for (let x in numbers) {
// text3 += `${numbers[x]}\n`;
// }
//
// console.log(text3);
//
const numbers = [45, 4, 9, 16, 25];
let text3 = "";
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  text3 += `${value}\n`;
}

console.log(text3);

// For of

// for(variable of iterable){
//code block to be executed
//}
