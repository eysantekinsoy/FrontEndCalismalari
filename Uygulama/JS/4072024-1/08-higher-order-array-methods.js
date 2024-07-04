// Kullanılacak diziler
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
// const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
// const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.
const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
dizi.forEach(function(eleman) {
    console.log(eleman);
});

// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.
const dizi1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

dizi1.forEach(function(eleman) {
    if (eleman % 2 === 0) {
        console.log(eleman);
    }
});

// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
const dizi2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const yeniDizi = [];

dizi2.forEach(function(eleman) {
    yeniDizi.push(eleman * 2);
});

console.log(yeniDizi);

// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
const dizi3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let toplam = 0;

dizi3.forEach(function(eleman) {
    toplam += eleman;
});

console.log("Dizi elemanlarının toplamı:", toplam);

// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
const dizi4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const uzunluk = dizi4.length;

dizi4.forEach((eleman, index) => {
    if (index < uzunluk - 1) {
        console.log(eleman);
    } else {
        console.log(`Özel mesaj: ${eleman}`);
    }
});

// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.
const dizi5 = ["elma", "armut", "kiraz", "üzüm"];

const buyukHarfDizi = dizi5.map(function(eleman) {
    return eleman.toUpperCase();
});
console.log(buyukHarfDizi); 

// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
const dizi6 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];
const yeniDizi1 = dizi6.map(function(eleman) {
    const rastgeleSayi = Math.floor(Math.random() * 10) + 1; 
    console.log(rastgeleSayi);
    return eleman + rastgeleSayi;
});

console.log(yeniDizi1);

// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const dizi7 = ["elma", "armut", "kiraz", "üzüm"];
const tersCevrilmisDizi = dizi7.map(function(kelime) {
    return kelime.split('').reverse().join('');
});

console.log(tersCevrilmisDizi);

// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const dizi8 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];

const stringDizi = dizi8.map(function(eleman) {
    return String(eleman); 
});
console.log(stringDizi);

// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.
const dizi9 = ["elma", "armut", "kiraz", "üzüm"];
const tersCevrilmisDizii = dizi9.map(function(kelime) {
    let tersKelime = '';
    for (let i = kelime.length - 1; i >= 0; i--) {
        tersKelime += kelime[i];
    }
    return tersKelime;
});

console.log(tersCevrilmisDizii);

// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
const dizi10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ciftSayilariFiltrele = dizi10.filter(function(sayi) {
    return sayi % 2 === 0; 
});

console.log(ciftSayilariFiltrele);

// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.
const dizi11 = ["elma", "armut", "kiraz", "üzüm"];
const uzunlugaGoreFiltrele = function(dizi11, uzunluk1) {
    return dizi11.filter(function(kelime) {
        return kelime.length === uzunluk1;
    });
};

const uzunluk1 = 5;
const sonucDizisi = uzunlugaGoreFiltrele(dizi1, uzunluk1);

console.log(sonucDizisi);

// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.
const dizi12 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
const toplamHesapla = dizi12.reduce(function(toplam, sayi) {
    return toplam + sayi + 2; 
}, 0); 

console.log(toplamHesapla);

// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek
const dizi13 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
const ilkCiftSayi = dizi13.find(function(sayi) {
    return sayi % 2 === 0; 
});
console.log(ilkCiftSayi);

// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek
const dizi14 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];

// Son çift sayıyı bulan fonksiyonu tanımlıyoruz
const sonCiftSayi = dizi14.reduceRight(function(prev, current) {
    if (current % 2 === 0 && prev === undefined) {
        return current; 
    }
    return prev;
}, undefined); 

console.log(sonCiftSayi);

// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek
const dizi15 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
const negatifVarMi = dizi15.some(function(sayi) {
    return sayi < 0; // Sayı negatifse true döndürür
});

console.log("Dizide en az bir negatif sayı var mı?", negatifVarMi);

// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek
const dizi16 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];

const hepsiPozitifMi = dizi16.every(function(sayi) {
    return sayi > 0;
});
console.log("Dizideki tüm sayılar pozitif mi?", hepsiPozitifMi);

// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek
const dizi17 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

const siraliDizi = dizi17.sort(function(a, b) {
    return a - b; 
});

console.log("Sıralanmış dizi:", siraliDizi);
