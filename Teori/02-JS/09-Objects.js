const obj1 = {};
console.log(obj1);
const obj2 = new Object()
console.log(obj2);

const birthDate = 1923;
const employee = {
    firstName : "Erdem Sabri",
    lastName : "Beşik",
    birthDate : 1992,
    isInstructor : true,
    laguages : ["python","c","js"],
    education : {
        highscool : "SDU",
        master :"IKCU"
    },
    getAge: function(){
        return 2024-this.birthDate
    },
    ".luckyNumber" : 36,
    lastName: "Beşiroğlu"
}
console.log(employee);
// console.table(employee);
//dot notation(.)
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.laguages[0]);
console.log(employee.education.master);
console.log(employee.getAge());
// console.log(employee..luckyNumber);
//bracket notation ["key"]
console.log(employee["isInstructor"]);
console.log(employee["laguages"][2]);
console.log(employee[".luckyNumber"]);
console.log(employee["getAge"]());

//objeye yeni özellik ekleme
employee.gender = "Erkek"
console.log(employee);
employee.birthDate = 2003;
console.log(employee.getAge());

console.log(this);
console.log(window);

//Obje Metotları
console.clear();
console.log(employee);
console.table(Object.entries(employee));
console.log(Object.entries(employee).length);
console.log(Object.keys(employee));
console.log(Object.values(employee));
//Obje kopyalama(eski)
const assignedObj = Object.assign({},employee);
console.log(assignedObj);
//ES6 Spread Opr.(...)
const spreadedObj = {...employee}
console.log(spreadedObj);
console.log(Object.entries(employee));
console.log(...Object.entries(employee));
console.clear();
//CRUD -> Create,Read,Uptade,Delete
//freeze(dondurmak) ekleme,silme düzenleme kapalıdır.
// Object.freeze(employee);
// employee.firstName = "eSb";
// employee.carColor = "Grey";
// delete employee.gender;
// console.log(employee);

//seal(mühürlemek) düzenleme açık, ekleme ve silme kapalıdır.
// Object.seal(employee); 
// employee.firstName = "eSb";
// employee.carColor = "Grey";
// delete employee.gender;
// console.log(employee);


//preventExtensions düzenleme ve silme açık, ekleme kapalıdır.
//daralmaya yönelik obje oluşturur.
Object.preventExtensions(employee)
employee.firstName = "eSb";
employee.carColor = "Grey";
delete employee.gender;
console.log(employee);