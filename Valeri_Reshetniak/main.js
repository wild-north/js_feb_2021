//Varian 1
  let buttonToClick = document.getElementById("toggler");
  let menu = document.getElementById("menu");

  buttonToClick.addEventListener("click", function() {menu.classList.toggle("active")});

//Variant 2
let buttonToClick2 = document.getElementById("toggler");
let isOpen = false;

function menuOpen() {
  if (!isOpen) {
    menu.style.display = "table";
    isOpen = true;
  } else {
    menu.style.display = "none";
    isOpen = false;
  }
}

buttonToClick2.addEventListener("click", menuOpen);