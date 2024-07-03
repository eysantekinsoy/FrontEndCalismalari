//Numbers
let sayi = 5.49;
console.log(sayi,typeof sayi);
let floor = Math.floor(sayi);
console.log(floor);
let ceil = Math.ceil(sayi);
console.log(ceil);
let round = Math.round(sayi);
console.log(round);

let width = "67.231px";
console.log(width, typeof width);
console.log(width**2);
console.log(parseInt(width));
console.log(parseInt(width)**2);
console.log(parseFloat(width));
console.log(parseFloat(width)**2);

console.log(Math.PI);
console.log(Math.abs(-1));
console.log(Math.abs(1));
console.log(Math.pow(2,3));
console.log(2**3);
console.log(Math.sqrt(144));
console.log(Math.min(123,34534,122,1,546,-3,423));
console.log(Math.max(123,34534,122,1,546,-3,423));
console.clear();

let price = 11.23456789; // toFixed de sayı round edilir.
console.log(price);
console.log(price.toFixed(4));
console.log(price.toFixed(3));
console.log(price.toFixed(2));
console.log(price.toFixed(1));
console.log(price.toFixed());
console.log(Math.trunc(price));
console.log(price.toPrecision(4));
console.log(price.toPrecision(3));
console.log(price.toPrecision(2));
console.log(price.toPrecision(1));

console.log(Math.random());
console.log(Math.random()*10);//0.00-9.99 arası
console.log(Math.random()*100);//0.00-99.99 arası
console.log(Math.floor(Math.random()*100));//0-99 arası
console.log(Math.ceil(Math.random()*100));//1-100 arası
console.log(Math.round(Math.random()*100));//0-100 arası