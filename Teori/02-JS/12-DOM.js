//DOM = Document Object Model
// console.log(document);

//Selectors
let element;
//id'ye göre seçim - tek öge seçer.
element = document.getElementById("first");
element = document.getElementById("second");
//className'a göre seçim [HTMLCOLLECTION]
element = document.getElementsByClassName("info-2");
element = document.getElementsByClassName("info-2")[0];
element = document.getElementsByClassName("info");
element = document.getElementsByClassName("info")[0];
element = document.getElementsByClassName("info")[1];
//etikete göre seçim [HTMLCOLLECTION]
element = document.getElementsByTagName("li");
element = document.getElementsByTagName("a");
element = document.getElementsByTagName("p");

// let convertArray = Array.from(element);
// console.log(convertArray);


//ES6 Query Seçicileri
//QuerySelector - tek öge getirir ve ilk gördüğünü element değerini alır.
element = document.querySelector("#first");
element = document.querySelector(".info-2");
element = document.querySelector(".info");
element = document.querySelector("li");
element = document.querySelector(".liste li");
//QuerySelectorAll [NODELIST]
element = document.querySelectorAll("#second");
element = document.querySelectorAll("#second")[0];
element = document.querySelectorAll(".info");
element = document.querySelectorAll("li");
element = document.querySelectorAll(".liste li");
element = document.querySelectorAll(".liste li:first-child");
element = document.querySelectorAll(".liste li:last-child")[0];
element = document.querySelectorAll(".liste li:nth-child(2)")[0];
element = document.querySelectorAll(".liste li:nth-child(odd)");
element = document.querySelectorAll(".liste li:nth-child(even)");

// console.log(element);
//css özelliği verme
const header = document.querySelector("#first");
header.style.color = "red";
header.style.backgroundColor = "black";
header.style.padding = "20px";
header.style.fontSize = "25px";

const listItem = document.querySelectorAll(".list-item:nth-child(odd)");
console.log(listItem);
listItem.forEach(item=>{
    item.style.color = "orangered";
})
console.clear();

//element oluşturma
//<li><a href="#">İletişim</a></li>
const target = document.querySelector("nav ul");
const newListItem = document.createElement("li");
const newAnchorTag = document.createElement("a");
newAnchorTag.href = "https://www.google.com";
newAnchorTag.setAttribute("target","_blank");
newAnchorTag.innerText = "İletişim";
newListItem.appendChild(newAnchorTag);
target.appendChild(newListItem);
// console.log(newAnchorTag);
// console.log(newListItem);
const about = document.querySelectorAll("nav ul li")[1];
console.log(about);
// about.after(newListItem)
// about.before(newListItem)


const liste = document.querySelector(".liste");
// liste.innerHTML += "<li>Test</li>";
// liste.innerText += "<li>Test</li>";
liste.textContent +=  "<li>Test</li>";

target.innerHTML += "<li><a href='#'>Deneme</a></li>";

let buton = document.querySelector("button");
buton.className = "esb";
buton.className = "esb bilgeadam";
buton.classList.add("erdem");
buton.classList.add("erdem","sabri","besik");
buton.classList.remove("besik");
buton.classList.remove("esb","sabri");
buton.classList.replace("erdem","eSb");
console.log(buton);

let toogle = document.querySelector("body");

toogle.classList.toggle("dark")
console.log(toogle);
// setInterval(()=>{
//     toogle.classList.toggle("dark");
// },2000)
console.clear();


const mainLink = document.querySelector("a");
console.log(mainLink);
console.log(mainLink.parentElement);
console.log(mainLink.parentElement.parentElement);
console.log(mainLink.parentElement.parentElement.parentElement);
console.log(mainLink.parentElement.parentElement.parentElement.parentElement);
console.log(mainLink.parentElement.parentElement.parentElement.parentElement.previousElementSibling);
console.log(mainLink.parentElement.parentElement.parentElement.parentElement.previousElementSibling.nextElementSibling);


// console.log(mainLink.parentElement.parentElement.parentElement.parentElement.parentElement);
// console.log(mainLink.parentElement.parentElement.parentElement.parentElement.parentElement.children[0]);
// console.log(mainLink.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[2]);
// const targetTitle = mainLink.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[2];
// targetTitle.textContent = "JS Manipüle Edildi."