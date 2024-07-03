// -- Birkaç cümleden oluşan bir metin yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.
let myStory = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis dolor at justo convallis, at volutpat tortor posuere. Sed eu libero nec tortor venenatis facilisis non nec nunc. Nullam sit amet lorem purus. Maecenas auctor sem id enim feugiat, vitae dignissim nisi posuere. Duis eu ultricies nunc. Proin nec quam eget ipsum ultrices efficitur nec id metus. Nam non tincidunt sapien. Duis nec lacus ac est lacinia ultricies sit amet nec nisi. Nam consectetur, mi non faucibus pellentesque, est odio vehicula risus, id venenatis lacus risus in quam. Nullam sed justo vitae elit tempor lobortis. Nam commodo, turpis ac tristique pharetra, urna lectus dictum ipsum, a fringilla augue arcu sit amet velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. In pellentesque eu lectus eget bibendum. In hac habitasse platea dictumst.";

// 1- Yazdığınız hikayenin uzunluğunu yazdırın.
console.log("Hikaye uzunluğu:", myStory.length);

// 2- Hikayenin toplam index sayısı kaçtır.
console.log("Toplam index sayısı:", myStory.length - 1);

// 3- string içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.
let kelime1 = "Lorem";
let ilkIndex = myStory.indexOf(kelime1);
let sonIndex = myStory.lastIndexOf(kelime1);

if (ilkIndex !== -1 && sonIndex !== -1) {
    console.log(`"${kelime1}" kelimesinin ilk index'i: ${ilkIndex}`);
    console.log(`"${kelime1}" kelimesinin son index'i: ${sonIndex}`);
} else {
    console.log(`"${kelime1}" kelimesi metinde bulunamadı.`);
}

// 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)
console.log("İlk 15 karakter (1. yöntem):", myStory.substring(0, 15));
console.log("İlk 15 karakter (2. yöntem):", myStory.slice(0, 15));

// 5- 15. karakterden sonrasını yazdırın. 15 dahil. ( 2 farklı yöntem kullanarak)
console.log("15. karakterden sonrası (1. yöntem):", myStory.substring(14));
console.log("15. karakterden sonrası (2. yöntem):", myStory.slice(14));

// 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)
console.log("Son 5 karakter (1. yöntem):", myStory.substring(myStory.length - 5));
console.log("Son 5 karakter (2. yöntem):", myStory.slice(-5));

// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.
console.log("11. karakterden sonrası:", myStory.substring(10, 20));

// 8- Son 5 karakter haric hikayenizi yazdırın.
console.log("Son 5 karakter hariç:", myStory.substring(0, myStory.length - 5));

// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
let kelime = "Lorem";
if (myStory.includes(kelime)) {
    console.log(`içeriyor.`);
} else {
    console.log(`içermiyor.`);
}

// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
let modifiedStory = myStory.replaceAll("i", "ı");
console.log("Tüm 'i' karakterleri 'ı' ile değiştirilmiş hikaye:", modifiedStory);

// 11- Hikayenizdeki ilk "a" karakterini "e" ye çevirin.
let modifiedStory2 = myStory.replace('a', 'e');
console.log("İlk 'a' karakteri 'e' ile değiştirilmiş hikaye:", modifiedStory2);

// 12- Bütün metni büyük harfe çevirin.
console.log("Metin büyük harfe çevrildi:", myStory.toUpperCase());

// 13- Bütün metni küçük harfe çevirin.
console.log("Metin küçük harfe çevrildi:", myStory.toLowerCase());

// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
let userName = prompt("Lütfen adınızı giriniz:");
//   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
console.log("Hoşgeldin, " + userName);
//   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"  
console.log(`Hoşgeldin, ${userName}`);

// 15- Kullanıcıdan gelen stringin başında ve sonunda boşluk olsun.
let userInput = prompt("Lütfen bir metin giriniz:");
let trimmedInput = userInput.trim();
console.log("Başında ve sonunda boşluklar kaldırılmış hali:", trimmedInput);
//   a- Başındaki boşlukları kaldırın.
let trimmedStart = userInput.trimStart();
console.log("Başındaki boşluklar kaldırılmış hali:", trimmedStart);
//   b- Sonundaki boşlukları kaldırın.
let trimmedEnd = userInput.trimEnd();
console.log("Sonundaki boşluklar kaldırılmış hali:", trimmedEnd);
//   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.
let noSpaces = userInput.replace(/\s/g, "");
console.log("Boşluksuz hali:", noSpaces);
// 16- 14. sorudaki Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.
let formattedName = userName.toUpperCase();
console.log(`BENİM Adım: ${formattedName}`);
// 17- Ekrana, daha öncesinde bir değişkene atadığınız bir değeri yazdıran pop-up oluşturun.
alert(userName);

