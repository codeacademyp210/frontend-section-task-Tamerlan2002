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



let buttons = document.querySelectorAll(".tab-button");
let tabs = document.querySelectorAll(".tab-content");



for (let i = 0; i < buttons.length; i++) {
    if(buttons[i].style.backgroundColor == "#fd602c"){
        this.style.color = "white"
    }
    buttons[i].addEventListener("click", function () {
        // console.log(this.getAttribute("data-tab-target"));
        let elementId = this.getAttribute("data-tab-target");
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].style.display = "none";
        }
        document.querySelector("#" + elementId).style.display = "block";
    });
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // console.log(this.getAttribute("data-tab-target"));
        let elementId = this.getAttribute("data-tab-target");
        console.log(document.querySelector("#" + elementId).classList.contains("d-none"));
        if(document.querySelector("#" + elementId).classList.contains("d-none")){
            document.querySelector("#" + elementId).classList.remove("d-none")
        } else {
            document.querySelector("#" + elementId).classList.add("d-none");
        }


        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("d-none");
        }
    });
}
