

//Left Menu (Solution based on CSS)-----------------------------------------------------------------------------

let menuButtonLeft = document.querySelector('.toggler');
let menuLeft = document.querySelector('.menu');

// menuButtonLeft.addEventListener("click", showMenu);

// function showMenu() {
//     menuLeft.classList.toggle('active');
// }

//----Variation with arrow function------

menuButtonLeft.addEventListener("click", () => menuLeft.classList.toggle('active'));



//Right Menu (Solutions based on JS)----------------------------------------------------------------------------------

let menuButtonRight = document.querySelector('.toggle');
let menuRight = document.querySelector('._menu');

//----First solution--------------------------------------------------

// menuButtonRight.addEventListener("click", () => {
//     menuRight.getAttribute('style') === "display: block"
//     ? menuRight.setAttribute('style', "display: none")
//     : menuRight.setAttribute('style', "display: block")
// });

//----Variation with function declaration------

menuButtonRight.addEventListener("click", menuShow);

function menuShow() {
    let temp = menuRight.getAttribute('style');

    (temp === "display: block")
        ? menuRight.setAttribute('style', "display: none")
        : menuRight.setAttribute('style', "display: block")    
}

//----Second solution---------------------------------------------------

// menuButtonRight.onclick = menuShow;

// function menuShow() {
//     if (menuRight.style.display === 'block') {
//         menuRight.style.display = 'none';
//     } else {
//         menuRight.style.display = 'block';
//     }
// }

//-----Additional practice------------------------------------------------------------------------

let reloadButton = document.querySelector('#reload_button');
let liElements = document.querySelectorAll('ul > li');

reloadButton.addEventListener('click', doReload, false);

for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener('click', doReload);
}

function doReload() {
    location.reload();
}

















