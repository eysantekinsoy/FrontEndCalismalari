// 1-) negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.
let sayi = -5;
let mutlakSayi = Math.abs(sayi);
console.log(mutlakSayi);

// 2-) ondalıklı bir sayıyı yukarıya yuvarlayın.
let sayi1 = 3.14;
let ondalikliSayi = Math.ceil(sayi1);
console.log(ondalikliSayi);

// 3-) ondalıklı bir sayıyı aşağıya yuvarlayın.
let sayi2 = 3.14;
let ondalikliSayi2 = Math.floor(sayi2);
console.log(ondalikliSayi2);

// 4-)  en büyük sayıyı bulun.
let sayilar = [10, 30, -7, 0, 90, -35];
let enBuyuk = Math.max(...sayilar);
console.log(enBuyuk); 

// 5-) en küçük sayıyı bulun.
let sayilar2 = [3, 25, -8, 1, 55, -35];
let enKucuk = Math.min(...sayilar2);
console.log(enKucuk); 

// 6-) ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.
let sayi3 = 3.14159;
let yuvarlanmisSayi = sayi3.toFixed(3);
console.log(yuvarlanmisSayi);

// 7-) bir sayının karekökünü bulun.
let sayi4 = 16;
let kareKok = Math.sqrt(sayi4);
console.log(kareKok); 

// 8-) bir sayının üstel fonksiyonunu bulun. (x üzeri y)
let x = 2;
let y = 3;
let ustAlma= Math.pow(x, y);
console.log(ustAlma);

// 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
let sayi5= 123.456789;
let formatlananSayi = sayi5.toFixed(6);
console.log(formatlananSayi);

// 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.
let sayi6 = 123.456789;
let tamSayi = Math.trunc(sayi6);
console.log(tamSayi);

// 11-) Rastgele bir sayı üretin. (0 ile 100 arasında)
let rasgeleSayi = Math.floor(Math.random() * 101);
console.log(rasgeleSayi);
