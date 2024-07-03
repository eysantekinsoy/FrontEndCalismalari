// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak. Çıktıyı görmek için değişkenleri kullanabilir veya fonksiyonları console.log içerisinde çağırabilirsiniz.
// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)
const carpim = (sayi1, sayi2) => sayi1 * sayi2;
let sonuc = carpim(5, 3);
console.log(sonuc); 

// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.
const kelimeSayisi = (cumle) => {
    const kelimeler = cumle.split(' ');
    return kelimeler.length;
};
let cumle = "Bugün hava çok güzel ve güneşli.";
let sayi = kelimeSayisi(cumle);
console.log(sayi); 

// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)
function faktoriyel(sayi1) {
    if (sayi1 === 0 || sayi1 === 1) {
        return 1;
    } else {
        let sonuc = 1;
        for (let i = 2; i <= sayi1; i++) {
            sonuc *= i;
        }
        return sonuc;
    }
}
let sayi1 = 5;
let faktoriyelSonucu = faktoriyel(sayi1);
console.log(faktoriyelSonucu); 

// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)
const asalMi = function(sayi2) {
    if (sayi2 <= 1) {
        return false;
    }
    if (sayi2 === 2) {
        return true;
    }
    if (sayi2 % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(sayi2); i += 2) {
        if (sayi2 % i === 0) {
            return false;
        }
    }
    return true;
};
let sayi2 = 17;
if (asalMi(sayi2)) {
    console.log(sayi2 + " bir asal sayıdır.");
} else {
    console.log(sayi2 + " bir asal sayı değildir.");
}

// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
function enBuyukSayiBul(dizi) {
    if (dizi.length === 0) {
        return undefined;
    }
    
    let enBuyuk = dizi[0];
    for (let i = 1; i < dizi.length; i++) {
        if (dizi[i] > enBuyuk) {
            enBuyuk = dizi[i];
        }
    }
    return enBuyuk;
}
let sayilar = [17, 23, 30, 42, 4];
let enBuyukSayi = enBuyukSayiBul(sayilar);
console.log("Dizideki en büyük sayı: " + enBuyukSayi);

// // 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.
// function diziToplaminiHesapla(dizi) {
//     let toplam = 0;
//     for (let i = 0; i < dizi.length; i++) {
//         if (typeof dizi[i] === 'number') { 
//             toplam += dizi[i]; 
//         }
//     }
//     return toplam;
// }

// let sayilar1 = [1, 2, 3, 4, 5];
// console.log("Dizi içindeki sayıların toplamı:", diziToplaminiHesapla(sayilar1)); 

// // 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.
// const diziToplaminiHesapla = (dizi) => {
//     let toplam = 0;
//     dizi.forEach((eleman) => {
//         if (typeof eleman === 'number') {
//             toplam += eleman;
//         }
//     });
//     return toplam;
// };

// let sayilar2 = [1, 2, 3, 4, 5];
// console.log("Dizi içindeki sayıların toplamı:", diziToplaminiHesapla(sayilar2)); 


// const enBuyukSayiBul = (dizi) => {
//     if (dizi.length === 0) {
//         return undefined;
//     }
    
//     let enBuyuk = dizi[0];
//     dizi.forEach((sayi3) => {
//         if (sayi3 > enBuyuk) {
//             enBuyuk = sayi3;
//         }
//     });
//     return enBuyuk;
// };
// let sayilar3 = [12, 5, 24, 8, 19];
// let enBuyukSayi1 = enBuyukSayiBul(sayilar);
// console.log("Dizideki en büyük sayı: " + enBuyukSayi1);

// Buradan itibaren yalnızca arrow function kullanıyoruz.
// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.
const tersCevir = (str) => {
    return str.split('').reverse().join('');
};
let kelime = "Eysan";
let tersKelime = tersCevir(kelime);
console.log(tersKelime); 

// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın.
const karistir = (dizi) => {
    let karisikDizi = [...dizi];
    for (let i = karisikDizi.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [karisikDizi[i], karisikDizi[j]] = [karisikDizi[j], karisikDizi[i]];
    }
    
    return karisikDizi;
};

let sayilar4 = [1, 2, 3, 4, 5];
let karisikSayilar = karistir(sayilar4);
console.log(karisikSayilar);

// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)
const pozitifBolenleriBul = (sayi) => {
    let bolenler = [];

    for (let i = 1; i <= sayi; i++) {
        if (sayi % i === 0) {
            bolenler.push(i);
        }
    }
    return bolenler;
};

let sayi4 = 16;
let bolenler = pozitifBolenleriBul(sayi4);
console.log("Pozitif bölenler:", bolenler);

// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.
const karakterSayisi = (str, karakter) => {
    let sayac = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === karakter) {
            sayac++;
        }
    }
    return sayac;
};
let metin = "Merhaba dünya!";
let arananKarakter = 'a';
let sayi5 = karakterSayisi(metin, arananKarakter);
console.log(`karakter metin içinde ${sayi5} kez geçiyor.`); 

// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.
const toplamHesapla = (dizi) => {
    let toplam = 0;
    dizi.forEach((eleman) => {
        if (typeof eleman === 'number') {
            toplam += eleman;
        }
    });
    return toplam;
}

let sayilar6 = [1, 2, 3, 4, 5];
let sonuc1 = toplamHesapla(sayilar6);
console.log("Toplam:", sonuc1); 


