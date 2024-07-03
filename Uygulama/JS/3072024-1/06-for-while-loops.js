// -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------
// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün 
let baslangic = parseInt(prompt("Başlangıç sayısını giriniz:"));
let bitis = parseInt(prompt("Bitiş sayısını giriniz:"));
let toplam = 0;

for (let i = baslangic; i <= bitis; i++) {
    toplam += i;
}

console.log(`Sayıların toplamı: ${toplam}`);

// -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.
const ogrenciSayisi = 5;
let toplamNot = 0;
let gecenOgrenciSayisi = 0;

for (let i = 1; i <= ogrenciSayisi; i++) {
    let not = parseInt(prompt(`Not giriniz:`));
    toplamNot += not;

    if (not >= 60) {
        gecenOgrenciSayisi++;
    }
}

let sinifOrtalamasi = toplamNot / ogrenciSayisi;

console.log(`Sınıfın ortalaması: ${sinifOrtalamasi}`);
console.log(`Geçen öğrenci sayısı: ${gecenOgrenciSayisi}`);


// -------------------While - Sayı Tahmin uygulaması-----------------------
// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.
// Random bir sayı seçelim (1 ile 10 arası)
const gercekSayi = Math.floor(Math.random() * 10) + 1;
let tahminHakki = 3;
let kullaniciTahmini;

console.log("1 ile 10 arası bir sayı tahmin ediniz (3 hakkınız bulunmaktadır.)");

while (tahminHakki > 0) {
    kullaniciTahmini = parseInt(prompt("Tahmininizi giriniz:"));

    if (kullaniciTahmini === gercekSayi) {
        console.log("Tebrikler! Tahmininiz doğru");
        break;
    } else {
        tahminHakki--;
        if (kullaniciTahmini > gercekSayi) {
            console.log("Daha küçük bir sayı girin.");
        } else {
            console.log("Daha büyük bir sayı girin.");
        }
        console.log(`Kalan hakkınız: ${tahminHakki}`);
    }
}

if (tahminHakki === 0) {
    console.log(`Tahmin hakkınız bitti. Doğru sayı ${gercekSayi}`);
}

// -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// Kurallar:
// While döngüsü kullanılacak.
// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.
let toplamFiyat = 0;
while (true) {
    let urunAdi = prompt("Sepete eklemek istediğiniz ürünü yazınız veya 'onayla' yazarak alışverişi tamamlayınız:");

    if (urunAdi.toLowerCase() === "onayla") {
        console.log(`Sepetinizdeki toplam tutar: ${toplamFiyat} TL`);
        break;
    } else {
        let urunFiyati = parseFloat(prompt(`ürünün fiyatını giriniz:`));
        if (!isNaN(urunFiyati)) {
            toplamFiyat += urunFiyati;
            console.log(`${urunAdi} sepetinize eklendi.`);
        } else {
            console.log("Geçersiz fiyat girdiniz. Lütfen tekrar deneyin.");
        }
    }
}
