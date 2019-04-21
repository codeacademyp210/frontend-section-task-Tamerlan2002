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


//Patterns

let onlyletters = /[a-zA-Z]+$/g
let onlynumbers = /^\d+$/;
let emailreg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//INPUTS
let name = document.forms["myForm"]["firstname"]
let surname = document.forms["myForm"]["surname"]
let nickname = document.forms["myForm"]["nickname"]
let password = document.forms["myForm"]["password"]
let repass = document.forms["myForm"]["repass"]
let day = document.forms["myForm"]["day"]
let year = document.forms["myForm"]["year"]
let email = document.forms["myForm"]["email"]
let pnumber = document.forms["myForm"]["pnumber"]
let captcha = document.forms["myForm"]["captcha"]
let check = document.forms["myForm"]["check"]

function validateForm() {

    if (name.value == "" || surname.value == "" ||
        nickname.value == "" || password.value == "" || repass.value == "" ||
        day.value == "" || year.value == "" || email.value == "" ||
        pnumber.value == "" || captcha.value == "") {
        alert("Fill out all the form")
        return false
    }
    if (!name.value.match(onlyletters)) {
        alert("Only letters are accepted for name")
        return false
    }
    if (!surname.value.match(onlyletters)) {
        alert("Only letters are accepted for surname")
        return false
    }
    if (!password.value == repass.value) {
        alert("Both passwords have to be same")
        return false
    }
    if (!day.value.match(onlynumbers) || !year.value.match(onlynumbers)) {
        alert("Import only numbers for day and year")
        return false
    }
    if (!pnumber.value.match(onlynumbers)) {
        alert("Import only numbers for phone number")
        return false
    }
    if (!email.value.match(emailreg)) {
        alert("Type your email correctly")
        return false
    }


    return false
}

let eye = document.querySelector(".eye")
let eye2 = document.querySelector(".eye2")


let inp2 = eye2.previousElementSibling.previousElementSibling
let inp = eye.previousElementSibling.previousElementSibling


eye.addEventListener("click", function () {
    if (inp.type === "password") {
        inp.type = "text";
    } else {
        inp.type = "password";
    }

})
eye2.addEventListener("click", function () {
    if (inp2.type === "password") {
        inp2.type = "text";
    } else {
        inp2.type = "password";
    }
})


