//To string
let x = 123;
console.log(x.toString(), (123).toString(), (100 + 23).toString());

//toExponential
let y = 2;
console.log(y.toExponential(2), y.toExponential(4), y.toExponential(6));

//toFixed = casas decimais
let z = 9.653;
console.log(z.toFixed(0), z.toFixed(2), z.toFixed(4), z.toFixed(6));

//toPrecision = define o tamanho do numero; () = valor escrito literal
let a = 5.321;
console.log(
  a.toPrecision(),
  a.toPrecision(2),
  a.toPrecision(4),
  a.toPrecision(6)
);

//Number()
//on Dates:
console.log(Number(new Date("2002-10-16")));
//The Number() method returns the number of milliseconds since 16.10.2002.
//Number Properties
let max = Number.MAX_VALUE;
let min = Number.MIN_VALUE;
let positive = Number.POSITIVE_INFINITY;
let negative = Number.NEGATIVE_INFINITY;
console.log(max);
console.log(min);
console.log(positive);
console.log(negative);
