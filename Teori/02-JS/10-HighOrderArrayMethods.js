//forEach()
//dizi içerisinde gezinmemizi sağlar.
//orj diziyi değiştirmez.
//void bir metotdur. bir değer dönmez.

let persons = ["çiğdem","joe","emily","george","david","ashley","barney"];
let numbers = [5, 70, 36, 23, 18, 100, 22];

console.log(persons);

persons.forEach(eleman=>console.log(eleman+" aday"));
numbers.forEach(sayi=>console.log(sayi**2));
console.log(numbers.forEach(sayi=>sayi**2)); //undefined

persons.forEach((deger,index,arr)=>console.log(index,deger,arr));

// persons.forEach((deger,index)=>{
//     persons[index] = "eSb";
// });
// console.log(persons); HATA!! force layarak foreach ile orj dizi değiştirilebilir. Ancak yanlış bir yaklaşımdır.
console.clear();

//map()
//orj diziyi değiştirmez
//yeni bir dizi döner.
//orj dizide yapılan değişiklikleri yeni diziy ekleyerek döndürür.

// console.log(persons.map(kisi=>console.log(kisi)))
// console.log(persons.map(kisi=>kisi))
let mappedPersons = persons.map(eleman=>eleman.toUpperCase());
console.log(persons);
console.log(mappedPersons);
let mappedPersons_2 = persons.map((eleman,index)=>index+")"+eleman.toUpperCase());
console.log(mappedPersons_2);

let mappedNumbers = numbers.map(e=>e%2);
let mappedNumbers_2 = numbers.map(e=>e**2);
console.log(numbers);
console.log(mappedNumbers);
console.log(mappedNumbers_2);
console.clear();

let personInfos = [
    {
        id:1,
        fullname:"Erdem Sabri Beşik",
        role: "Admin"
    },
    {
        id:2,
        fullname:"Hakan Girgin",
        role: "Student"
    },
    {
        id:1,
        fullname:"Ilgın Deniz Ayaz",
        role: "Student"
    },
]
console.log(personInfos);
console.log(personInfos.length);
console.log(personInfos[0].fullname);
console.log(personInfos[1].fullname);
console.log(personInfos[2].fullname);

let result = personInfos.map(person =>{
    let data = person.fullname.split(" ");
    let sonuc = data[data.length-1];
    return sonuc;
})

console.log(result);
console.clear();

//filter()- orj diziyi değiştirmez yeni bir dizi döner.
let family = ["Erdem Sabri Beşik","Yağmur Beşik","Yamaç Beşik","Orhan Tünel","Nejla Tünel"];
const filteredFamily = family.filter(person => person.includes("Beşik"));
const filteredFamily_2 = family.filter(person => !person.includes("Beşik"));
console.log(family);
console.log(filteredFamily);
console.log(filteredFamily_2);
const filtredNumbers = numbers.filter(num=>num%3===0);
const filtredNumbers_2 = numbers.filter(num=>!num%3===0);
console.log(numbers);
console.log(filtredNumbers);
console.log(filtredNumbers_2);
console.clear();

//some,every
console.log(numbers);
console.log(numbers.some(e=>e%1===0));
console.log(numbers.some(e=>e%2===0));
console.log(numbers.some(e=>e%13===0));
console.log(numbers.every(e=>e%1==0));
console.log(numbers.every(e=>e%2==0));
console.clear();

//reduce()
console.log(numbers);
// const totalNumbers = numbers.reduce((hafiza,guncel)=>{
//     return hafiza+guncel
// },0)
const totalNumbers = numbers.reduce((hafiza,guncel)=>hafiza+guncel,1000)
console.log(totalNumbers);

let products = [
    {urunAdi: "TV",urunFiyati:55000},
    {urunAdi: "Bardak",urunFiyati:300},
    {urunAdi: "Cep Telefonu",urunFiyati:35000},
]

const totalPrice = products.reduce((hafiza,guncel)=>hafiza+guncel.urunFiyati,0);
const maxPrice = products.reduce((hafiza,guncel)=>Math.max(hafiza,guncel.urunFiyati),0);
const maxPrice_2 = products.reduce((hafiza,guncel,curIndex)=>{
    // console.log(curIndex);
    return Math.max(hafiza,guncel.urunFiyati)
},0);
console.log(totalPrice);
console.log(maxPrice);

const stringReduce = products.reduce((hafiza,guncel)=>hafiza+"/"+guncel.urunAdi,"")
console.log(stringReduce);
console.clear();

//sort() siralama yapar, orj diziyi değiştirir.
console.log(numbers);
//numbers.sort();//Comp Func. gereklidir.Numberslarda Hatalı sıralar!
// numbers.sort((a,b)=>a-b)
// numbers.sort((a,b)=>b-a)
// persons.sort()

//toSorted() orj. diziyi değiştirmez! yeni dizi döner! 
sortedpersons = persons.toSorted();
console.log(persons);
console.log(sortedpersons);
// console.log(numbers);
// console.log(persons);
console.clear();

//find()
console.log(numbers);
console.log(numbers.find(sayi=>sayi%2===0));
console.log(numbers.find((sayi,index)=>{
    console.log(index);
    return sayi%3===0
}));

console.log(numbers.findLast(sayi=>sayi%2===0));
console.log(numbers.findLast(sayi=>sayi%3===0));

console.log(numbers.findIndex(sayi=>sayi%2===0));
console.log(numbers.findIndex(sayi=>sayi%3===0));

console.log(numbers.findLastIndex(sayi=>sayi%2===0));
console.log(numbers.findLastIndex(sayi=>sayi%3===0));

console.log(numbers.fill("eSb",2,5));
console.log(numbers.fill("eSb",2));
console.log(numbers.fill("eSb"));