

window.onload = function() {
    let button = document.querySelector('.toggler');
    let menu = document.querySelector('.menu');
    button.addEventListener('click', function(event){
        event.stopPropagation();
        menu.classList.toggle('active');
    });
    window.addEventListener('click', () => hidenMenu());
    function hidenMenu() {
        menu.classList.remove('active');
    }
};
