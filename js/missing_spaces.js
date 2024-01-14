let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
let changeSlide = 0;
// console.log(changeSlide);
nextBtn.addEventListener("click", function () {
  slides.forEach(function (slide, index) {
    if (slide.classList.contains("show") === true) {
      changeSlide = index + 1;
      slide.classList.remove("show");
    }
  });
  //   console.log(changeSlide);
  if (changeSlide < slides.length) {
    slides[changeSlide].classList.add("show");
  } else {
    changeSlide = 0;
    slides[changeSlide].classList.add("show");
  }
});
// console.log(changeSlide);
prevBtn.addEventListener("click", function () {
  slides.forEach(function (slide, index) {
    if (slide.classList.contains("show") === true) {
      changeSlide = index - 1;
      slide.classList.remove("show");
    }
  });
  // console.log(changeSlide);

  if (changeSlide < slides.length && changeSlide > -1) {
    slides[changeSlide].classList.add("show");
  } else {
    // console.log(slides.length);

    changeSlide = slides.length - 1;
    slides[changeSlide].classList.add("show");
  }
});

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

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");

  // Check if the menu is open and adjust the left position accordingly
  if (navbar.classList.contains("open")) {
    navbar.style.left = "0";
  } else {
    navbar.style.left = "100%";
  }
};
const header = document.querySelector(".header");

function toggleHeaderBackground() {
  if (window.scrollY > 5) {
    // Adjust the threshold as needed
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

window.addEventListener("scroll", toggleHeaderBackground);

const sr = ScrollReveal({
  distance: "30px",
  duration: 2500,
  reset: true,
});

sr.reveal(".home-text", { delay: 100, origin: "left" });
sr.reveal(".share p", { delay: 100, origin: "bottom" });
sr.reveal(".social", { delay: 100, origin: "bottom" });
sr.reveal(".home-img", { delay: 100, origin: "right" });
sr.reveal(".about-img", { delay: 100, origin: "left" });
sr.reveal(".about-text", { delay: 100, origin: "right" });
sr.reveal(".image-container", { delay: 100, origin: "top" });
sr.reveal(".container2", { delay: 100, origin: "top" });
