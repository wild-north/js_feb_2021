const toggler = document.querySelector(".toggler");
const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown");

function openMenu() {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")){
        window.addEventListener("click", menuClassList);
    }
};

function removeMenu(event) {  
   if (event.target.closest("button")) {
     openMenu();
    } else if (!event.target.closest("button")) {
  }
};

function menuClassList(event) {
    if (!event.target.closest("button")){
        menu.classList.remove("active");
        window.removeEventListener("click", menuClassList);
    }
};

dropdown.addEventListener("click",removeMenu);

/// home work part 2

// const field = document.querySelector("#field");
// const ball = document.querySelector("#ball");

//   function touchMyBall(event) {
//   let fieldCoords = event.target.getBoundingClientRect();

//   let ballCoords = {
//     top:
//       event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
//     left:
//       event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2,
//   };

//   if (ballCoords.top < 0) ballCoords.top = 0;
//   if (ballCoords.left < 0) ballCoords.left = 0;
//   if (ballCoords.left + ball.clientWidth > field.clientWidth) {
//     ballCoords.left = field.clientWidth - ball.clientWidth;
//   }
//   if (ballCoords.top + ball.clientHeight > field.clientHeight) {
//     ballCoords.top = field.clientHeight - ball.clientHeight;
//   }
//   ball.style.left = ballCoords.left + "px";
//   ball.style.top = ballCoords.top + "px";
// };

// field.addEventListener("click",touchMyBall); 


