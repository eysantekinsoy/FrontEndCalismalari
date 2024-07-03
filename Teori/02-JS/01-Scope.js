//Scope - Kapsam

//Global Scope
var sayi1 = 10;
let sayi2 = 20;
const sayi3 = 30;
let employee = "Eysan Tekinsoy";

//Functional Scope
function scope(){
    //fonksiyonda tanımlanan değişkenler fonksiyona özgüdür.
    var sayi1 = 100;
    let sayi2 = 200;
    const sayi3 = 300;
    let course = "BilgeAdam Akademi";
    console.log(`---Functional Scope----
sayi1 = ${sayi1}
sayi2 = ${sayi2}
sayi3 = ${sayi3}
${employee}
${course}`);
}

scope();


//Block Scope
if(true){
    var sayi1 = 9; //!! Globale etki etti !!
    let sayi2 = 99;
    const sayi3 = 999;
    console.log(`---Block Scope----
sayi1 = ${sayi1}
sayi2 = ${sayi2}
sayi3 = ${sayi3}
${employee}`);
}

console.log(`---Global Scope----
sayi1 = ${sayi1}
sayi2 = ${sayi2}
sayi3 = ${sayi3}
${employee}
`);