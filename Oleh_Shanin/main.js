const toggler = document.querySelector('.toggler');
const menu = document.querySelector('.menu');

/* menu.style.cssText = `
    display: none;
    display: inline;
`; */

function openMenu() {
  if (menu.style.display === "none") {
    return (menu.style.display = "inline");
  } else if (menu.style.display === "inline") {
    return (menu.style.display = "none");
  }
};

//toggler.addEventListener("click", openMenu);

///// хочу реализовать эту идею, но правильно 

toggler.addEventListener("click", openMenuS);

function openMenuS(){
    menu.classList.toggle('active');
    
};