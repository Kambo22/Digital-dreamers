// gallery, image slider

let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
let changeSlide = 0;
let startTouch = null;

window.addEventListener('touchstart', function(event) {
    startTouch = event.touches[0].clientX;
});

window.addEventListener('touchend', function(event) {
    let endTouch = event.changedTouches[0].clientX;
    let diff = startTouch - endTouch;

    if (diff > 70) { // swipe left
        nextSlide();
    } else if (diff < -70) { // swipe right
        prevSlide();
    }
});

function nextSlide() {
    slides.forEach(function (slide, index) {
        if (slide.classList.contains("show") === true) {
            changeSlide = index + 1;
            slide.classList.remove("show");
        }
    });

    if (changeSlide < slides.length) {
        slides[changeSlide].classList.add("show");
    } else {
        changeSlide = 0;
        slides[changeSlide].classList.add("show");
    }
}

function prevSlide() {
    slides.forEach(function (slide, index) {
        if (slide.classList.contains("show") === true) {
            changeSlide = index - 1;
            slide.classList.remove("show");
        }
    });

    if (changeSlide < slides.length && changeSlide > -1) {
        slides[changeSlide].classList.add("show");
    } else {
        changeSlide = slides.length - 1;
        slides[changeSlide].classList.add("show");
    }
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);






//HEADER SCROLL ANIMATION

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

