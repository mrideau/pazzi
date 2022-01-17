const topbtn = document.getElementById("topbtn");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}));

window.onscroll = scrollFunction;

function scrollFunction() {
    topbtn.style.display = distScroll() > 40 ? "block" : "none";
}

scrollFunction(); // Initialization

function distScroll() {
    return document.body.scrollTop > document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
}

function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let slideshows = document.querySelectorAll('.slideshow')

slideshows.forEach(slideshow => {
    initSlideshow(slideshow)
});

function initSlideshow(slideshow) {
    let slides = document.getElementsByClassName("item");
    let index = 0, time = 5000;
    let nextSlideBtns = document.querySelectorAll('.nextslide-btn');

    nextSlideBtns.forEach(n => n.addEventListener('click', () => {
        updateSlideshow();
    }));

    function updateSlideshow() {
        slides[index].classList.remove('active');
        index ++;
        if (index >= slides.length)
            index = 0;

        slides[index].classList.add('active');
    }
    
    slides[index].classList.add('active');
    setInterval( () => {
        updateSlideshow();
    }, time);
}