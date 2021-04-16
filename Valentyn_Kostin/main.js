// document.addEventListener('DOMContentLoaded', render);

// const text = {
//     header: 'This is the file for your home tasks',
//     list: [
//         'Please, write your JavaScript code in <strong>main.js</strong>',
//         'Please, write your CSS code in <strong>styles.css</strong>',
//         'Please, write your HTML right here in <strong>index.html</strong>'
//     ]
// };

// function render() {
//     const main = document.createElement('main');
//     const h2 = document.createElement('h2');
//     h2.textContent = text.header;

//     const ul = text.list.reduce((ul, text) => {
//         const li = document.createElement('li');

//         li.innerHTML = text;
//         ul.append(li);

//         return ul;
//     }, document.createElement('ul'));

//     main.append(h2);
//     main.append(ul);
//     document.body.append(main);

//черновик
// function boom (){
//     arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
//     setTimer(); 
//     setTimeout();
// setTimer(function(){
//       for (let i = 0; i < arr.length; i++) {
//          console.log(arr[i]);
// }, 1000);

// }
// setTimeout(function() {
//     console.log('BOOM');
// }, 60000);
// }

// clearTimeout(id);


//timer

function timer() {

    var seconds = 20;

    var seconds_timer_id = setInterval(function() {
        if (seconds > 0) {
            seconds --;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            $(".seconds").text(seconds);
        } else {
            clearInterval(seconds_timer_id);    
        }
    }, 1000);

}


//черновик

function boom (){
    counter=10;

    setTimeout (function(){
        counter--;
        if ( counter <= 0 ){
            console.log('BOOM');
        }
            else {
                boom();
            }
        },1000)
    }

    //Рабочая версия

    let counter = 45;

function boom() {
    setTimeout(function() {
        counter--;
        if (counter <= 0) {
            console.log('BOOM!!!');
        } else {
                boom();
        }
    }, 1000);
}

boom();

//Доп задание

function startBomb () {
    let counter = prompt('Через какое время активировать функцию BOOM?', );

    alert(`Через ${counter} сработает BOOM!`);

boom()

    function boom() {
        setTimeout(function() {
            counter--;
            if (counter <= 0) {
                //console.log
                alert('BOOM!!!');
            } else {
                  boom();
         }
        }, 1000);
    }
}

startBomb ()

