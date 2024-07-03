// Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)
let ay = prompt("Lütfen bir ay ismi giriniz:");

switch (ay) {
    case "Ocak":
    case "Mart":
    case "Mayıs":
    case "Temmuz":
    case "Ağustos":
    case "Ekim":
    case "Aralık":
        console.log(ay + " ayı 31 gün içerir.");
        break;
    case "Nisan":
    case "Haziran":
    case "Eylül":
    case "Kasım":
        console.log(ay + " ayı 30 gün içerir.");
        break;
    case "Şubat":
        console.log(ay + " ayı 28 veya 29 gün içerir.");
        break;
    default:
        console.log("Geçersiz ay ismi girdiniz.");
        break;
}

// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. Marka ismini ve renk bilgisini gereken zamanlarda kullanıcıdan prompt olarak isteyin. Kullanıcı, ilgili marka ve renk bilgisini girdikten sonra konsolda Stokta Var veya Yok şeklinde bir mesaj yayınlayın. Stok durumunu elde edebilmek için yaratacağınız bir stokDurumu değişkenini stokta "Var" veya "Yok" olarak caselerin içerisinde güncelleyin. 
// Kullanıcıdan marka ve renk bilgisini alalım
let marka = prompt("Lütfen aracın markasını giriniz (BMW, Mercedes, Audi):").toLowerCase();
let renk = prompt("Lütfen aracın rengini giriniz (Kırmızı, Pembe, Beyaz):").toLowerCase();

let stokDurumu;
switch (marka) {
    case "bmw":
        switch (renk) {
            case "kırmızı":
                stokDurumu = "Yok";
                break;
            case "pembe":
                stokDurumu = "Var";
                break;
            case "beyaz":
                stokDurumu = "Var";
                break;
            default:
                console.log("Geçersiz renk girdiniz.");
                break;
        }
        break;
    case "mercedes":
        switch (renk) {
            case "kırmızı":
                stokDurumu = "Var";
                break;
            case "pembe":
                stokDurumu = "Yok";
                break;
            case "beyaz":
                stokDurumu = "Var";
                break;
            default:
                console.log("Geçersiz renk girdiniz.");
                break;
        }
        break;
    case "audi":
        switch (renk) {
            case "kırmızı":
                stokDurumu = "Var";
                break;
            case "pembe":
                stokDurumu = "Var";
                break;
            case "beyaz":
                stokDurumu = "Yok";
                break;
            default:
                console.log("Geçersiz renk girdiniz.");
                break;
        }
        break;
    default:
        console.log("Geçersiz marka girdiniz.");
        break;
}

if (typeof stokDurumu !== 'undefined') {
    console.log("Stokta " + stokDurumu);
}
