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

var icon = document.getElementById("icon");

// Load the theme from the local storage
if(localStorage.getItem("theme") == "dark"){
  document.body.classList.add("dark-theme");
  icon.src = "/photos/sun.png";
}

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "/photos/sun.png";
    // Save the theme in the local storage
    localStorage.setItem("theme", "dark");
  }else{
    icon.src = "/photos/moon2.png";
    // Save the theme in the local storage
    localStorage.setItem("theme", "light");
  }
}