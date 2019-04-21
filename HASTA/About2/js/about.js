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



//accordion    
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


let content = document.querySelector(".sliding.actived");
let left = document.querySelector(".slider .left");
let right = document.querySelector(".slider .right");
let nextEl = content.nextElementSibling;

right.style.color = "grey"


right.addEventListener("click", function () {
    let nextEl = content.nextElementSibling;
    console.log(nextEl)
    content.classList.remove("actived")
    nextEl.classList.add("actived");
    this.style.color = "black";
    left.style.color = "grey"

})
left.addEventListener("click", function () {
    nextEl.classList.remove("actived")
    content.classList.add("actived");
    this.style.color = "black";
    right.style.color = "grey"
})

