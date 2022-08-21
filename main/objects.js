//In real life, a car is an object.
//A car has properties like weight and color, and methods like start and stop:
//It is a common practice to declare objects with the const keyword.

//The name:values pairs in JavaScript objects are called properties:
const person = {
  firstName: "Gustavo",
  lastName: "Patrocinio",
  age: 19,
  eyeColor: "brown",
};

//Accessing Object Properties:
// ObjectName.proprietyName;
// ObjectName["propriety name"];

//Example:
console.log(person.lastName);
console.log(person["age"]);

// Objects can also have methods.
// Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.
const person2 = {
  firstName: "Gustavo",
  lastName: "Patrocinio",
  age: 19,
  eyeColor: "brown",
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};
//console.log(person2.fullname());

//Methods like call(), apply(), and bind() can refer this to any object.
//You access an object method with the following syntax:
//objectName.methodName()
name1 = person2.fullname();
console.log(name1);
