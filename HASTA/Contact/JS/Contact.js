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


//INPUTS VALIDATION

let find = document.forms

let onlyletters = /[a-zA-Z]+$/g
let onlynumbers = /^\d+$/;
let emailreg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let name = find["contact"]["name"];
let email = find["contact"]["email"];
let phone = find["contact"]["phone"];
let subject = find["contact"]["subject"];
let message = find["contact"]["message"]


function Validation(){

    if(name.value == "" || email.value == "" || phone.value == ""
    || subject.value == "" || message.value == ""){
        alert("Fill out form, please!")
        return false
    }
    if(!name.value.match(onlyletters)){
        alert("Name must contain only letters")
        return false
    }
    if (!phone.value.match(onlynumbers)){
        alert("Phone number must contain only numbers")
        return false
    }
    if(!email.value.match(emailreg)){
        alert("Please import valid email adress")
        return false
    }
    return true
}
