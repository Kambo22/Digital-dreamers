// gallery, image slider

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

