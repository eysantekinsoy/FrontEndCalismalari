//for(baslangıç;bitiş;artış){
//  yapılacak işlemler
//}

for(let i=0; i<10; i++){
    console.log(i);
    console.log("eSb");
}

console.clear();

for(let i = 0;i<100;i++){
    // if(i%10===0){
    //     console.log(i);
    // }
    i%15===0&&console.log(i);
}

console.clear();

for(let i = 30; i>0; i--){
    if(i%7==0){
        console.log(i);
    }else{
        console.log("XXX");
    }
}
console.clear();

for(let i = 20; i>0; i--){
    if(i==15){
        break;
    }
        console.log(i);
}
console.log("bitti");
console.clear();

for(let i = 20; i>0; i--){
    if(i==15){
        continue;
    }
        console.log(i);
}
console.log("bitti");
console.clear();

//while(koşul){
// yapılan işlemler
//}

let i = 0;
while(i<10){
    console.log(i);
    i++;
}
console.clear();

// while(true){
//     let input = prompt(`
//     İşlemler
//     1-Kişi Arama
//     2-Mesaj Gönderme
//     3-Çıkış
//     `)
//     if(input === "1"){
//         console.clear();
//         console.log("Kişi aranıyor....");
//     }
//     else if(input === "2"){
//         console.clear();
//         console.log("Mesaj Gönderiliyor...");
//     }
//     else if(input === "3"){
//         console.clear();
//         console.log("Güle Güle");
//         break;
//     }
//     else{
//         console.log("Hatalı giriş Tekrar Deneyiniz!!!");
//     }
// }

//do-while

// let j = 99999;
// do{
//     console.log(j);
//     j++
// }while(j<10)


//for...in loops -> sayılamayan yapılarda(obje)
// const employee = {
//     firstName : "Erdem Sabri",
//     lastName : "Beşik",
//     birthDate : 1992,
//     isInstructor : true,
//     laguages : ["python","c","js"],
//     education : {
//         highscool : "SDU",
//         master :"IKCU"
//     },
//     getAge: function(){
//         return 2024-this.birthDate
//     },
//     ".luckyNumber" : 36,
//     lastName: "Beşiroğlu"
// }
// console.log(employee);
// for(let i in employee){
//     // console.log(i);
//     console.log(`
//     key-> ${i} value-> ${employee[i]}
//     `);
// }

//for...of loops -> sayılabilen yapılarda (strings,arrays)
let fruits = ["Karpuz","Kayısı","Elma","Armut","Kiraz"];
let deneme = "BilgeAdam Akademi ANK-16 Frontend Eğitimi";

for(let eleman of fruits){
    console.log(eleman);
}
let sayac = 0;
for(letter of deneme){
    // console.log(letter);
    if(letter === "i"){
        sayac++
    }
}
console.log(sayac);