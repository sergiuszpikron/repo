'use strict';

let switcher = document.querySelector(".btn");
let body = document.querySelector("body");

switcher.addEventListener("click", ()=>{
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
    if(body.classList.contains("dark-theme")){
        switcher.innerHTML = "Dark";
    }else{
        switcher.innerHTML = "Light";
    }
})