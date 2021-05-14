

// ---------------Lesson_16 Homework----------------------------------------------------------------------------
let docBody = document.getElementsByTagName('body')[0];

//Left Menu (Solution based on CSS)---------------------------------------

let menuButtonLeft = document.querySelector('.toggler');
let menuLeft = document.querySelector('.menu');

menuButtonLeft.addEventListener("click", showMenu);

function showMenu(event) {
    event.stopPropagation();
    menuLeft.classList.toggle('active');
    if (menuLeft.classList.contains('active') ) {
        return docBody.addEventListener("click", hideMenu);        
    }
    docBody.removeEventListener("click", hideMenu);
}

function hideMenu() {
    menuLeft.classList.remove('active');
}

//----Variation with arrow function------

// menuButtonLeft.addEventListener("click", () => menuLeft.classList.toggle('active'));



//Right Menu (Solutions based on JS)---------------------------------------

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
//docBody.addEventListener("click", hideMenu);

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

//-----Additional practice----------------------------------------------

let reloadButton = document.querySelector('#reload_button');
let liElements = document.querySelectorAll('ul > li');

reloadButton.addEventListener('click', doReload, false);

for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener('click', doReload);
}

function doReload() {
    location.reload();
}


// ---------------Lesson_17 Homework-----------------------------------------------------------------------------------


let field = document.querySelector('#field');
let ball = document.querySelector('#ball');

field.addEventListener('click', moveBall);

function moveBall(event) {
    let fieldCoords = field.getBoundingClientRect();
    let ballTop = event.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight / 2;
    let ballLeft = event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2;
    
    if (ballTop < 0) {
        ballTop = 0;
    }
    if (ballLeft < 0) {
        ballLeft = 0;
    }
    if (ballTop > field.clientHeight - ball.offsetHeight) {
        ballTop = field.clientHeight - ball.offsetHeight;
    }
    if (ballLeft > field.clientWidth - ball.offsetWidth) {
        ballLeft = field.clientWidth - ball.offsetWidth;
    }

    ball.style.top = ballTop + 'px';
    ball.style.left = ballLeft +'px';    
}












