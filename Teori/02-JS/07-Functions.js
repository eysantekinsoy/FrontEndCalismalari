//1)Function Decleration
//fonksiyonlar invoke edilmeden çalışmazlar!!
//hoisting özelliği vardır.

yazdir();
function yazdir(){
    console.log("Yazdırma işlemi yapıldı!");
}
yazdir();

function kare(sayi){
    console.log(sayi**2);
}

kare(3);
kare(12);

function kup(sayi){
    return sayi**3;
}

kup(4);
console.log(kup(4));

kare(kup(3));

//2)Function expression
// print(); Hoisting yoktur.
const print = function(){
    console.log("printing...");
}
print();

const welcome = function(isim,soyisim){
    return "merhaba "+isim+" "+soyisim
}

console.log(welcome("Erdem","Beşik"));

console.clear();

const selamlama = function(isim = "Ziyaretçi"){
    console.log(`Hoşgeldiniz, ${isim}`);
}

selamlama("erdem");
selamlama();
console.clear();

// const birth = function(){
//     let input = Number(prompt("Doğum yılı:"));
//     return 2024-input
// }

// // console.log(birth());

// let birthDate = Number(prompt("Yıl:"));

// const birth2 = function(year){
//     return 2024-year;
// }
// console.log(birth2(birthDate));
// console.log(birth2(2003));

// const time = new Date()
// console.log(time);
// console.log("-----");
// console.log(time.getDate());
// console.log(time.getMonth());
// console.log(time.getFullYear());
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getTime());
// console.log(time.getDay());
// console.log(time.toString());
// console.log(time.toString().split(" ")[3]);
// console.log(time.toString().split(" ")[4]);

//ES6 expression function ARROW FUNC(fat arrow =>)
// let hello = function(fullName){return "Hoşgeldiniz "+fullName}
// let hello = (fullName) => {return "Hoşgeldiniz "+ fullName}
// let hello = fullName => {return "Hoşgeldiniz "+ fullName}
// let hello = fullName => "Hoşgeldiniz "+ fullName
// let hello = (name,surname) => "Hoşgeldiniz "+ name + " " + surname
let hello = (name,surname) => {
    console.log("test");
    return "Hoşgeldiniz "+ name + " " + surname
}
console.log(hello("eSb","Devs"));

let pow = x=>x**2;
let powSec = (x,y)=>x**y;
console.log(pow(8));
console.log(powSec(2,3));
console.clear();

//3)IIFE (inmediately invoked function expression)
(
    function(first,second){
        console.log(first,second);
    }
)("bilgeAdam","ANK16")

//Faktöryel Hesabı Recursive ile!!!

//callBack

const hesapla = (a,b,opr) =>{
    if(opr === "topla"){
        return a+b;
    }
    else if(opr === "çıkar"){
        return a-b;
    }
    else if(opr === "carp"){
        return a*b;
    }
    else if(opr === "böl"){
        return a/b;
    }
    else{
        console.log("Hatalı işlem");
    }
}
console.log(hesapla(10,2,"topla"));
console.log(hesapla(10,2,"çıkar"));
console.log(hesapla(10,2,"carp"));
console.log(hesapla(10,2,"böl"));

const topla = (x,y)=> x+y;
const cikar = (x,y)=> x-y;
const carp = (x,y)=> x*y;
const bol = (x,y)=> x/y;

const calculate = (sayi1,sayi2,cb) => cb(sayi1,sayi2)
console.log(calculate(10,2,topla));
console.log(calculate(10,2,cikar));
console.log(calculate(10,2,carp));
console.log(calculate(10,2,bol));