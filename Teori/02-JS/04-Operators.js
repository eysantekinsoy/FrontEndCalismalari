//Comparisson Operators
//< > >= <= == === !=  && ||
console.log(3<5);
console.log(3>5);
console.log(3>=5);
console.log(3<=5);
console.log(3==5);
console.log(3!=5);
console.log( true && true);
console.log( true && false);
console.log( false && false);
console.log( false || false);
console.log( false || true);

console.clear();
console.log(3 == "3");
console.log(3 === "3");

let value1 = null;
let value2 = undefined;

console.log(value1 == value2);
console.log(value1 === value2);

let value3 = 0;
let value4 = false;

console.log(value3 == value4);
console.log(value3 === value4);

let value5 = NaN;
let value6 = NaN;
//!!! NaN (not a number) bir number veri tipidir. Benzersiz bir veridir.
console.log(value5, value6);
console.log(value5 == value6);
console.log(value5 === value6);
console.log(isNaN(value5));

let value7 = []; //arrayler referance type data olduğu için!! 
let value8 = [];

console.log(value7 == value8);
console.log(value7 === value8);