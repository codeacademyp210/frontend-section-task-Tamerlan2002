"use strict";

//SLIDER FOR TEMPLATE

const sContainer = document.querySelector(".slider-container");
const sItems = Array.from(sContainer.children);
const prevButton = document.querySelector(".slider-button-left");
const nextButton = document.querySelector(".slider-button-right");
let itemSize = sItems[0].getBoundingClientRect();
const setSliderPosition = (item, index) => {
    item.style.left = index * itemSize.width + "px";
};

sItems.forEach(setSliderPosition);

let slideProcess = setInterval(sliderNextIt, 4000)

// Click prev button, slider move to the left
prevButton.addEventListener("click", function (e) {
    let activeItem = sContainer.querySelector(".active-slide");
    if (activeItem.previousElementSibling) {
        let prevItem = activeItem.previousElementSibling;
        prevItem.classList.add("active-slide");
        activeItem.classList.remove("active-slide");
        sContainer.style.transform = "translateX(-" + prevItem.style.left + ")";

    }
});
// Click next button, slider move to the right
nextButton.addEventListener("click", sliderNextIt );

function sliderNextIt() {
    
    let activeItem = sContainer.querySelector(".active-slide");
    console.log(activeItem);;
    if (activeItem.nextElementSibling) {
        let nextItem = activeItem.nextElementSibling;
        nextItem.classList.add("active-slide");
        activeItem.classList.remove("active-slide");
        sContainer.style.transform = "translateX(-" + nextItem.style.left + ")";
    }
}



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

console.log(sticky);
console.log(fixedNav);



//PLAYER FOR YOUTUBE
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '500',
        width: '100%',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.stopVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}