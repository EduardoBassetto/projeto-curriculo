
const navList = document.querySelector(".nav-list");
const navBar = document.querySelector(".mobile-menu");
navBar.addEventListener("click", navBarFunction)

window.onload = gambiarra()

function gambiarra()
{
    navBar.click();
}


function navBarFunction () {
    navList.classList.toggle("active");
  }