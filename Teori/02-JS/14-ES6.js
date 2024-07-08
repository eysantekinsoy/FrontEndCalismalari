//1)Template Literals (`${JS}`)
//2)var yerine let,const değişken tanımlama kalıpları
//3)Array Methots : map,filter,reduce
//4)Arrow func ()=>{}
//5)Default Parametre
//6)Spread Operatörü(...)
        //-Rest parameter (sonsuz parametre)-C# params. yapısına benzer.
        //- ... kopyalama 
//7)Destructing (parçalama-yıkım)
let persons = ["Erdem","Yağmur","Yamaç"];
console.log(persons);
console.log(persons[0]);
console.log(persons[1]);
console.log(persons[2]);

// const [first,second,third] = persons;
// console.log(first);
// console.log(second);
// console.log(third);

// const [kisi] = persons;
// console.log(kisi);

// const [,kisi] = persons
// console.log(kisi);
// const [,,x] = persons
// console.log(x);
// const [a,...others] = persons
// console.log(a);
// console.log(...others);

// let value = 100;
// let username = "esb";
// let age = 32;

// let value=100, username="esb", age=32;

// const[value,username,age] = [100,"esb",32];
// console.log(value);
// console.log(username);
// console.log(age);

// const employee = {
//     id: 1,
//     username: "esb92",
//     email : "erdem@erdem.com",
//     role: "Admin"
// }
// console.log(employee);
// console.log(employee.username);
// console.log(employee.email);

// const {username,email} = employee

// console.log(username);
// console.log(email);

//8)Dom querySelector ve querySelectorAll secicileri
//9)Promise ve Fetch Api