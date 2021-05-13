

window.onload = function() {
    let button = document.querySelector('.toggler');
    let menu = document.querySelector('.menu');
    button.addEventListener('click', () => menu.classList.toggle('active'));
};
