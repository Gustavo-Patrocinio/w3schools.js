const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
let fruit = fruits.pop();
fruits.push("Kiwi");
fruits.shift(); // tira o primeiro elemento da array
fruits.unshift("Lemon"); // adiciona no primeiro elemento da array
fruits[0] = "Watermelon"; // troca o valor do elemento 0

//The concat() method does not change the existing arrays. It always returns a new array.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const arr1 = ["Ceciline", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);
const myChildren2 = myChildren1.concat("Gustavo");
console.log(myChildren2);
