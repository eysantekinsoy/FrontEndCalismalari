//1.Yöntem
// document.querySelector("button").onclick = function(){
//     console.log("Clicked!");
// }

// let buton = document.querySelector("button");
// buton.onclick = ()=>{
//     console.log("Tıklandı.");
// }

//2.Yöntem
// buton.addEventListener("click",run);

// function run(){
//     console.log("Butona Tıklandı!");
// }

//Mouse Eventleri
const nav = document.querySelector("nav");
// nav.addEventListener("click",run);
// nav.addEventListener("dblclick",run);
// nav.addEventListener("mousedown",run);
// nav.addEventListener("mouseup",run);
// nav.addEventListener("mouseover",run);
// nav.addEventListener("mouseout",run);
// nav.addEventListener("mouseenter",run);
// nav.addEventListener("mouseleave",run);

//Klavye Eventleri
// document.addEventListener("keypress",run);
// document.addEventListener("keyup",run);
// document.addEventListener("keydown",run);



// function run(e){
//     console.log(e.type);
//     console.log(e.key);
// }

const input = document.querySelector("input");
const body = document.querySelector("body");

// input.addEventListener("keydown",change);

// function change(){
//     let color = input.value
//     console.log(color);
//     body.style.backgroundColor = color
// }

//İnput eventleri
input.addEventListener("focus",run);
input.addEventListener("blur",run);
input.addEventListener("change",run);
input.addEventListener("copy",run);
input.addEventListener("cut",run);
input.addEventListener("paste",run);

//diger Eventler
window.addEventListener("load",run)
window.addEventListener("resize",run)
window.addEventListener("scroll",scrollWindow)

function run(e){
    console.log(e.type);
}
function scrollWindow(){
    let position = window.scrollY
    console.log("Scroll Position:",position);
}