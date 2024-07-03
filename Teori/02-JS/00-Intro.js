// console.log("External Js Çalıştı!");
/*
Çok satırlık yorum
*/

//veri Çıkış yapıları
console.log("BilgeAdam-1");
// alert("...");
// console.log("BilgeAdam-2");
console.warn("Uyarı Mesajı");
console.error("Error Mesajı");
console.info("Bilgilendirme Mesajı");
console.table(["bilgeAdam","Akademi","Boost","ANK16"]);
console.table({id:1,fullName:"Eysan Tekinsoy",birth:1992});
console.clear();

//veri giriş
// prompt("Adınız:...");
//html input


//variables
console.log(isim);//undefined
var isim = "Eysan";
console.log(isim);
var isim = "Eren";
console.log(isim);
isim = "Yağmur";
console.log(isim);

// var database = "12345"
// console.log(database);
// //10000satır kod
// var database = "asdqwert"
// console.log(database);

//ES6 var yerine let, const değişken tanımlamaları geldi.

// console.log(surname);
let surname = "Tekinsoy";
console.log(surname);
// let surname = "Tekinsoyyy";
surname = "Tekinsoyyy";
console.log(surname);

// console.log(PASSWORD);
const PASSWORD = "qwerty"
console.log(PASSWORD);
// const PASSWORD = "123";
// PASSWORD = "123"
console.clear();

//YazımMetotları
//camelCasingMethot -> js,swift userName,userJobInfos
//kebab-case -> css mb-3, card-body
//snake_case -> python user_name
//PascalCase -> UserName...

//Data Types
//1)Primitive Data Types
//2)Referance Data Types

//String
let string = "BilgeAdam Akademi";
console.log(string, typeof string);
//!! propmt ve inputlardan herzaman string veri gelir.

// let userName = prompt("Adınızı giriniz:");
// console.log(userName,typeof userName);

let course = "Ank-16 Boost";

console.log("Bu eğitim "+string+" 'de dir ve bu sınıf "+course+" sınıfıdır.");
console.log("Bu eğitim",string,"'de dir ve bu sınıf",course,"sınıfıdır.");
//ES6 Template Literals(backtips ``)
console.log(`Bu eğitim ${string} 'de dir ve bu sınıf ${course} sınıfıdır.`);

//Number
let number = 1992;
number = 19.92
console.log(number, typeof number);
console.log(5+5);
console.log("5"+5);
console.log(5+"5");
console.log("5"+"5");
console.log("5"*"5");
console.log("5"/"5");
console.log("5"-"5");
console.log("5"-"5a");
console.clear();
let first = 10;
let second = 2;

console.log(first+second);
console.log(first-second);
console.log(first*second);
console.log(first**second);
console.log(first%second);

//Boolean (t/f)
console.clear();
let hasCar = true;
let hasMoto = false;

console.log(hasCar, hasMoto);
console.log(typeof hasCar);

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(99));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


//Undefined
let tanimsiz;
console.log(tanimsiz);
console.log(typeof tanimsiz);

//Null 
let bosDeger = null;
console.log(bosDeger);
console.log(typeof null);


//Array
let arrayOne = ["Eysan","bilgeAdam",2024,true];
console.log(arrayOne);
console.table(arrayOne);
console.log(typeof arrayOne);
console.log(Array.isArray(arrayOne));
console.log(Array.isArray(tanimsiz));

//Object
let obj = {
    key1: "value1",
    key2: "value2",
}
console.log(obj);
console.table(obj);
console.log(typeof obj);

//Funtions
function hello (){
    return 5*2;
}
console.log(hello);
console.log(typeof hello);
console.log(hello());