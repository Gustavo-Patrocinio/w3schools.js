//Loops are handy, if you want to run the same code over and over again, each time with a different value.

const cars = ["BMW", "Volvo", "Ford"];
let text = "";
for (let i = 0; i < cars.length; i++) {
  text += `${cars[i]}\n`;
}
console.log(text);
