{
  let lenght = 16; //Number
  let lastName = "Johnson"; //String
  let x = { firstName: "John", lastName: "Doe" }; //Object
}
{
  //Without data types, a computer cannot safely solve this:
  let x = 16 + "Volvo";
  let y = "16" + "Volvo";

  //When adding a number and a string, JavaScript will treat the number as a string.

  let z = "Volvo" + 16 + 4; // string + number = string + string

  console.log(x, y, z); // x and y are same.
}

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

{
  let a;
  a = 5;
  a = "Jhon";
  console.log(a);
}
//Extra large or extra small numbers can be written with scientific (exponential) notation:
{
  let y = 123e5; // e = elevado
  let x = 123e-5;
  console.log(x, y);
}
{
  //  Booleans can only have two values: true or false.
  let x = 5;
  let y = 10;
  let z = 5;
  console.log(x == y);
  console.log(x == z);
  console.log(z == y);
}

{
  //  JavaScript arrays are written with square brackets.
  //  Array indexes are zero-based, which means the first item is [0], second is [1], and so on.
  const cars = ["Saab", "Volvo", "BMW"];
}
{
  //  JavaScript objects are written with curly braces {}.
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };
  console.log(person.firstName);
}
{
  //  The typeof operator returns the type of a variable or an expression:
  typeof "";
  typeof "John";
  console.log(typeof 15);
}
