// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
// myArray isimli bir dizi tanımlama
let myArray = [
    {
        ad: "Eyşan",
        soyad: "Tekinsoy",
        yaş: 28,
        sevdigiMeyveler: ["karpuz", "kavun"],
        sevdigiYemekler: ["mantı", "kebap"]
    },
    {
        ad: "Ayşe",
        soyad: "Kaya",
        yaş: 25,
        sevdigiMeyveler: ["üzüm", "erik"],
        sevdigiYemekler:["çorba", "pilav"]
    },
    {
        ad: "Mehmet",
        soyad: "Demir",
        yaş: 30,
        sevdigiMeyveler: ["portakal", "çilek"],
        sevdigiYemekler:["köfte", "makarna"]
    },
    {
        ad: "Fatma",
        soyad: "Öztürk",
        yaş: 33,
        sevdigiMeyveler: ["muz", "ananas"],
        sevdigiYemekler: ["balık", "salata"]
    },
    {
        ad: "Mustafa",
        soyad: "Çelik",
        yaş: 27,
        sevdigiMeyveler: ["nar", "elma"],
        sevdigiYemekler: ["pide", "meze"]
    },
    {
        ad: "Zeynep",
        soyad: "Arslan",
        yaş: 31,
        sevdigiMeyveler: ["mandalina", "kivi"],
        sevdigiYemekler: ["lahmacun", "çiğ köfte"]
    },
    {
        ad: "Selin",
        soyad: "Bulut",
        yaş: 29,
        sevdigiMeyveler: ["kiraz", "vişne"],
        sevdigiYemekler: ["döner", "sarma"]
    },
    {
        ad: "Onur",
        soyad: "Yıldırım",
        yaş: 32,
        sevdigiMeyveler: ["üzüm", "kayısı"],
        sevdigiYemekler: ["mantar sote", "iskele"]
    },
    {
        ad: "Gizem",
        soyad: "Toprak",
        yaş: 26,
        sevdigiMeyveler: ["çilek", "karpuz"],
        sevdigiYemekler: ["mercimek çorbası", "börek"]
    },
    {
        ad: "Emre",
        soyad: "Aksoy",
        yaş: 28,
        sevdigiMeyveler: ["mango", "çilek"],
        sevdigiYemekler: ["makarna", "tavuk"]
    }
];

console.log(myArray);

// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
myArray[0].ad = "Eyso";
console.log(myArray);

// 3- dizinin uzunluğunu konsola yazdırın.
console.log("Dizinin uzunluğu:", myArray.length);

// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
myArray.push({
    ad: "Pamuk",
    soyad: "",
    yaş: 1,
    sevdiğiMeyveler: ["çilek"],
    sevdiğiYemekler: ["yaş mama"]
});

let yeniUzunluk = 0;
for (let i in myArray) {
    yeniUzunluk++;
}

console.log("Yeni uzunluk:", yeniUzunluk);

// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
// Dizinin başına bir hayvan eklemek
myArray.unshift({
    ad: "Karabaş",
    soyad: "",
    yaş: 3,
    sevdiğiMeyveler: ["kemik"],
    sevdiğiYemekler: ["et"]
});

let yeniUzunluk1 = 0;
for (let i in myArray) {
    yeniUzunluk1++;
}

console.log("Yeni uzunluk:", yeniUzunluk1);

// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
let silinenEleman = myArray.pop();
console.log("Silinen eleman:", silinenEleman);

// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
let silinenEleman1 = myArray.shift();
console.log("Silinen eleman:", silinenEleman1);

// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)
let newArray = [];
newArray.push(silinenEleman);
newArray.push(silinenEleman1);

console.log("Yeni dizi:", newArray);


// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.
//Concat
let birlesikArray1 = myArray.concat(newArray);
console.log("Birleştirilmiş dizi:", birlesikArray1);
//spread 
let birlesikArray2 = [...myArray, ...newArray];
console.log("Birleştirilmiş dizi:", birlesikArray2);

// 10- myArray içerisinde eleman olarak "Veli" var mı ?
let veliVarMi = myArray.some(item => item.ad === "Veli");
if (veliVarMi) {
    console.log("Veli adında bir eleman bulunuyor.");
} else {
    console.log("Veli adında bir eleman bulunmuyor.");
}

// 11- myArray içersinide 4.elemandan itibaren patates var mı?
let patatesVarMi = myArray.slice(3).some(item => {
    return item.sevdigiYemekler.includes("patates");
});
if (patatesVarMi) {
    console.log("bulunuyor.");
} else {
    console.log("bulunmuyor.");
}

// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
let ilkKisininMeyveleri = myArray[0].sevdigiMeyveler;
let ilkMeyveninIndexi = ilkKisininMeyveleri.indexOf(ilkKisininMeyveleri[0]);

console.log("İlk kişinin sevdiği meyveler listesi:", ilkKisininMeyveleri);
console.log("İlk meyvenin indexi:", ilkMeyveninIndexi);

// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.
let ilkUcEleman = newArray.slice(0, 3);
console.log("İlk üç eleman:", ilkUcEleman);

// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.
let indexToReplace = 1;
ilkUcEleman.splice(indexToReplace, 1);
ilkUcEleman.splice(indexToReplace, 0, {
    ad: "Karabaş",
    soyad: "",
    yaş: 3,
    sevdiğiMeyveler: ["kemik"],
    sevdiğiYemekler: ["et"]
}, {
    ad: "Pamuk",
    soyad: "",
    yaş: 1,
    sevdiğiMeyveler: ["çilek"],
    sevdiğiYemekler: ["yaş mama"]
});

console.log("Güncellenmiş ilk üç eleman:", ilkUcEleman);

// 15- son diziniz 4 elemanlı olmuş olmalı. Bu dizi üzerinde 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin ÖRN: [1, 2, 3, 4] => [1, 'x', 4, 'y']
// 14. sorudan elde edilen güncellenmiş ilk üç eleman dizisi

ilkUcEleman = [
    {
        ad: "Pamuk",
        soyad: "",
        yaş: 1,
        sevdiğiMeyveler: ["çilek"],
        sevdiğiYemekler: ["yaş mama"]
    },
    {
        ad: "Karabaş",
        soyad: "",
        yaş: 3,
        sevdiğiMeyveler: ["kemik"],
        sevdiğiYemekler: ["et"]
    },
    {
        ad: "Eyso",
        soyad: "",
        yaş: 28,
        sevdiğiMeyveler: ["mango", "çilek"],
        sevdiğiYemekler: ["makarna", "tavuk"]
    }
];

console.log("Başlangıç dizisi:", ilkUcEleman);

ilkUcEleman.splice(1, 1); 

ilkUcEleman[1] = {
    ad: "Lale",
    soyad: "Yılmaz",
    yaş: 35,
    sevdiğiMeyveler: ["elma", "portakal"],
    sevdiğiYemekler: ["karnıyarık", "pilav"]
};

ilkUcEleman.push({
    ad: "Gülay",
    soyad: "Kara",
    yaş: 27,
    sevdiğiMeyveler: ["üzüm"],
    sevdiğiYemekler: ["mantar"]
});

console.log("Son diziniz:", ilkUcEleman);

// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.
let birlesikString = ilkUcEleman.map(eleman => {
    return `${eleman.ad}+${eleman.soyad}+${eleman.yaş}+${eleman.sevdiğiMeyveler.join('+')}+${eleman.sevdiğiYemekler.join('+')}`;
}).join('+');

console.log("Birleştirilmiş string:", birlesikString);
