// if(koşul){
//     yapılacak iş
// }

// if(koşul){
//     yapılacak iş1
// }else{
//     yapılacak iş2
// }

// if(koşul){
//     yapılacak iş1
// }else if(koşul2){
//     yapılacak iş2
// }else if(koşul2){
//     yapılacak iş3
// }else if(koşul2){
//     yapılacak iş4
// }else if(koşul2){
//     yapılacak iş5
// }else if(koşul2){
//     yapılacak iş6
// }
//else{
//     yapılacak iş7
// }


// let sayi = Number(prompt("sayiyi giriniz"));
// if(sayi%2==0){
//     console.log("sayi çift");
//      console.log(sayi+5);
// }else{
//     console.log("sayi tektir.");
// }


// let number = 7;
// if(number<100){
//     if(number>0){
//         if(number%2!=0){
//             console.log("tektir.");
//         }else{
//             console.log("çifttir.");
//         }
//     }else{
//         console.log("sayı 0dan küçük olamaz!");
//     }
// }else{
//     console.log("sayi 100den küçük olmalıdır!");
// }

// let username = "esb";
// let password = 1234;

// let kullaniciAdi = prompt("Kullanıcı Adı:");
// let parola = Number(prompt("parola:"));

// if(kullaniciAdi === username){
//     if(parola === password){
//         console.log("giriş başarılı");
//     }else{
//         console.log("parola hatalı");
//     }
// }else{
//     console.log("Kullanıcı adı hatalı");
// }

// if(kullaniciAdi === username){
//     if(parola === password){
//         console.log("giriş başarılı");
//     }else{
//         console.log("Kullanıcı adı veya parola hatalı");
//     }
// }else{
//     console.log("Kullanıcı adı veya parola hatalı");
// }

// if(kullaniciAdi === username && parola === password){
//     console.log("BAŞARILI");
// }else{
//     console.log("Kullanıcı adı veya parola hatalı");
// }

// let month = 10;
// if(month===1){console.log("Ocak");}
// else if(month===2){console.log("Şubat");}
// else if(month===3){console.log("Mart");}
// else if(month===4){console.log("Nisan");}
// else if(month===5){console.log("Mayıs");}
// else if(month===6){console.log("Haziran");}
// else if(month===7){console.log("Temmuz");}
// else if(month===8){console.log("Ağustos");}
// else if(month===9){console.log("Eylül");}
// else if(month===10){console.log("Ekim");}
// else if(month===11){console.log("Kasım");}
// else if(month===12){console.log("Aralık");}
// else{console.log("hatalı giriş!!");}

// let month = 10;
// switch(month){
//     case 1:console.log("Oca");break;
//     case 2:console.log("Şub");break;
//     case 3:console.log("Mar");break;
//     case 4:console.log("Nis");break;
//     case 5:console.log("May");break;
//     case 6:console.log("Haz");break;
//     case 7:console.log("Tem");break;
//     case 8:console.log("Ağu");break;
//     case 9:console.log("Ey");break;
//     case 10:console.log("Ek");break;
//     case 11:console.log("Kas");break;
//     case 12:console.log("Ara");break;
//     default: console.log("HATA!!");
// }

let sayi = 5;
let age = 20;
// if(sayi%2==0){
//     console.log("sayi çift");
//      console.log(sayi+5);
// }else{
//     console.log("sayi tektir.");
// }

sayi%2 === 0 ? console.log("çift") : console.log("tek");

age < 18 ? console.log("reşit değil") :
age > 18 ? console.log("reşit") :
console.log("yaş 18");

hasAuto = true;
hasAuto && console.log("Kişinin arabası mevcut!");

let x = 5;
let y = 7;

console.log(x);
// x= x+4
// x+=4
// x++
// x--
// x+=y
// x*=y
console.log(x);