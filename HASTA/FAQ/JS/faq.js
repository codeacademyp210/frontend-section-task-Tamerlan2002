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

//Collapsible


let coll = document.querySelectorAll(".collapsible");
let i;


for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}