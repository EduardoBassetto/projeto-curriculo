
const navList = document.querySelector(".nav-list");
const navBar = document.querySelector(".mobile-menu");
navBar.addEventListener("click", navBarFunction)

function navBarFunction () {
    navList.classList.toggle("active");
  }