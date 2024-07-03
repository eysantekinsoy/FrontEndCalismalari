// 1- Bir sayı oluşturun ve bu sayının pozitif, negatif veya sıfır olduğunu kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.
let sayi = 8; 
if (sayi > 0) {
    console.log(sayi + " pozitif bir sayıdır.");
} else if (sayi < 0) {
    console.log(sayi + " negatif bir sayıdır.");
} else {
    console.log(sayi + " sıfırdır.");
}

// 2- İki farklı sayı oluşturun ve bu sayıların büyüklük ilişkisini kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.
let sayi1 = 25;
let sayi2 = 10;

if (sayi1 > sayi2) {
    console.log(sayi1 + " sayısı " + sayi2 + " sayısından büyüktür.");
} else if (sayi1 < sayi2) {
    console.log(sayi1 + " sayısı " + sayi2 + " sayısından küçüktür.");
} else {
    console.log(sayi1 + " sayısı " + sayi2 + " sayısına eşittir.");
}

// 3- Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.
let kelime = "kazak";
let tersKelime = kelime.split('').reverse().join('');
console.log(kelime.split(''))

if (kelime === tersKelime) {
    console.log(kelime + " kelimesi bir palindromdur.");
} else {
    console.log(kelime + " kelimesi bir palindrom değildir.");
}

// 4- VKI Hesabı
//Kullanıcıdan boy,kilo,yaş,cinsiyet
//VKI = kilo/(boy/100)**2
//18,5 düşükse zayıf
//18,5 ile 24,9 arası normal
//25 ile 29,9 arası kilolu
//30 ile 34,9 arası obez
//35 üstü ise aşırı obez
//Konsol Çıktısı = VKI değeriniz = ??? ve bu değerlere göre kilolusunuz/zayıfsınız.
//50yaşın üstü ve erkekse bolbol yürüyüs yapmalısınız!
//60yaş üstü ve kadınsa sebze tüketimini arttırmalısınız!

let boy = parseFloat(prompt("Lütfen boyunuzu giriniz:"));
let kilo = parseFloat(prompt("Lütfen kilonuzu giriniz:"));
let yas = parseInt(prompt("Lütfen yaşınızı giriniz:"));
let cinsiyet = prompt("Lütfen cinsiyetinizi giriniz (Erkek için 'E', Kadın için 'K'):").toUpperCase();

let vki = kilo / ((boy / 100) ** 2);

let durum;
if (vki < 18.5) {
    durum = "zayıf";
} else if (vki >= 18.5 && vki <= 24.9) {
    durum = "normal";
} else if (vki >= 25 && vki <= 29.9) {
    durum = "kilolu";
} else if (vki >= 30 && vki <= 34.9) {
    durum = "obez";
} else {
    durum = "aşırı obez";
}

console.log(durum);

if (yas >= 50 && cinsiyet === 'E') {
    console.log("bol bol yürüyüş yapmalısınız!");
} else if (yas >= 60 && cinsiyet === 'K') {
    console.log("sebze tüketimini arttırmalısınız!");
}


// 5- Hesap Makinesi
// Kullanıcıdan iki sayı ve bir işlem türü (+, -, *, /) girmesini isteyin. Girilen işlem türüne göre iki sayı üzerinde matematiksel işlem gerçekleştirin ve sonucu gösterin. Eğer kullanıcı geçersiz bir işlem türü girerse, hata mesajı verin.
let sayi3 = parseFloat(prompt("Lütfen ilk sayıyı giriniz:"));
let sayi4 = parseFloat(prompt("Lütfen ikinci sayıyı giriniz:"));
let islem = prompt("Lütfen yapmak istediğiniz işlemi seçin (+, -, *, /):");

let sonuc;
switch (islem) {
    case '+':
        sonuc = sayi3 + sayi4;
        break;
    case '-':
        sonuc = sayi3 - sayi4;
        break;
    case '*':
        sonuc = sayi3 * sayi4;
        break;
    case '/':
        sonuc = sayi3 / sayi4;
        break;
    default:
        console.log("Geçersiz işlem girdiniz!");
        break;
}

if (typeof sonuc !== 'undefined') {
    console.log("Sonuç: " + sayi1 + " " + islem + " " + sayi2 + " = " + sonuc.toFixed(2));
}
