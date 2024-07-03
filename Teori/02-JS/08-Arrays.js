let myArray = [];
console.log(myArray);
let myArraySec = new Array()
console.log(myArraySec);

let students = ["Erdem","Ahmet","Mehmet","Ayşe"];
let numbers = [1,2,3,4,5,6,7,8,9];
let multiArray = ["eSb",1992,true,[1,2,3],{key1:"value1"},null];

console.table(students)
console.table(numbers)
console.table(multiArray)
console.clear();
console.log(students);
console.log(students.length);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[students.length-1]);
console.clear();

let fruits = ["Karpuz","Kayısı","Elma","Armut","Kiraz"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[4]);
fruits[4] = "Vişne";
console.log(fruits);
console.log(fruits[4]);
fruits[5] = "Kiraz";
// fruits[15] = "Kiraz"; geresiz boş slot oluşturur.
console.clear();
console.log(fruits);

//push() eleman/ları sona ekleme yapar.
// fruits.push("Erik");
console.log(fruits.push("Erik","Çilek")); // metot loglanırsa yeni uzunuğu döner. length 'i verir.!!!
console.log(fruits);

//pop() sondan silme yapar.
// fruits.pop()
console.log(fruits.pop()); // metot loglanırsa silinen elemanı döner.
console.log(fruits);

//unshift() başa eleman/ları ekler.
// fruits.unshift("Havuç","Muz");
console.log(fruits.unshift("Havuç","Muz"));// metot loglanırsa yeni uzunuğu döner. length 'i verir.!!!
console.log(fruits);

//shift() baştan eleman siler.
// fruits.shift()
console.log(fruits.shift());// metot loglanırsa silinen elemanı döner.
console.log(fruits);
console.clear()

//slice() bir parça ayırır.orj.diziyi değiştirmez.yeni bir dizi döndürür.
// const slicedArray = fruits.slice();
// const slicedArray = fruits.slice(1);
// const slicedArray = fruits.slice(1,5);
// const slicedArray = fruits.slice(-2);
// const slicedArray = fruits.slice(6);
// const slicedArray = fruits.slice(3,-2);
// const slicedArray = fruits.slice(3,1); // Hatalı Kullanım
// const slicedArray = fruits.slice(-3,1); // Hatalı Kullanım
const slicedArray = fruits.slice(); // Eski Array kopyalama
//Es6 Spread operatörü(...)
let newCoppiedArray = [...fruits];
console.log("SlicedArray",slicedArray);
console.log("Fruits",fruits);
console.log("newCoppiedArray",newCoppiedArray);
console.log(...fruits);
console.log([...fruits]);
console.clear()

//splice() orj.diziyi değiştirir.
console.log(fruits);
// fruits.splice(0)
// fruits.splice(0,1)
//console.log(fruits.splice(0,1)); //metot loglanırsa sildiği elemanı döner.
// console.log(fruits.splice(2,3));
// console.log(fruits.splice(2,1,"a","b","c"));
// console.log(fruits);
console.clear();

//reverse() orjdiziyi değiştirir.
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

//toReversed() orjdiziyi değiştirmez yeni dizi döner.
const newreversedArray = fruits.toReversed();
console.log(fruits);
console.log(newreversedArray);
console.clear();

//concat() eski birleştirme, orj diziyi değiştirmez.

// let concatArray = fruits.concat("Erdem","Sabri","Beşik");
let concatArray = fruits.concat(numbers,students);
console.log(concatArray);

//yeni yöntem spread ile
let concatSpreaded = [...fruits,...numbers,...students,"XXX","YYY"];
console.log(concatSpreaded);

//toString() join()
console.clear();
let deneme = 5
console.log(fruits);
console.log(fruits.toString());
console.log(...fruits);
console.log(deneme.toString());
console.log(fruits.join());
console.log(fruits.join(""));
console.log(fruits.join(" "));
console.log(fruits.join("-"));
console.log(fruits.join("/"));

//includes
console.log(fruits.includes("Vişne"));
console.log(fruits.includes("Viş"));
console.log(fruits.includes("Karpuz"));
console.log(fruits.includes("Karpuz",2));

//indexOf/Last
console.log(fruits.indexOf("Karpuz"));
console.log(fruits.indexOf("Karpu"));
console.log(fruits.indexOf("Karpuz",2));
console.log(fruits.lastIndexOf("Vişne"));
console.log(fruits.lastIndexOf("Vişne",4));


//copyWithin
console.clear()
console.log(fruits);
let test =fruits.copyWithin(-2,3);
console.log(test);


let employee = "1)Erdem Sabri Beşik-1992-E-Yazılımcı-250000TL";
console.log(employee);
console.log(employee.split(")"));
console.log(employee.split(")")[1]);
console.log(employee.split(")")[1].split("-"));