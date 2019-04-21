"use strict"

//STICKY NAVBAR

window.onscroll = function () { myFunction() };

let fixedNav = document.querySelector(".navigation");
var sticky = fixedNav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        fixedNav.classList.add("fixedNav")
    } else {
        fixedNav.classList.remove("fixedNav");
    }
}



//SLIDER 





let sldkeeper = document.querySelector(".sliderkeeper");
let slider = document.querySelector(".slider")
let left = document.querySelector('#left')
let right = document.querySelector('#right');


left.addEventListener("click", function () {
    slider.style.transform += "translateX(-25%)"
}) 

right.addEventListener("click", function () {
    slider.style.transform += "translateX(25%)"
}) 

