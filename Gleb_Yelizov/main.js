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
// }

//-------------------------------------------------------Homework Lesson_09-------------------------------------

//-----------------------calculator------------------

let calculator = {};

function read() {
    this.firstValue = +prompt("Введите первое число", '');
    this.secondValue = +prompt("Введите второе число", '');
}

function sum() {
   return this.firstValue + this.secondValue;
}

function mul() {
    return this.firstValue * this.secondValue;
}

calculator.read = read;
calculator.sum = sum;
calculator.mul = mul;

console.log(calculator);

calculator.read();

alert( calculator.sum() );
alert( calculator.mul() );

//------------------------------------------Timer #1-----------------------------------

let timerId;
function boom(timer) {
    if (timer === 0) {
         return setTimeout ( () => {
        console.log('BOOOOOOOOOOOOOOOOOOOOOOOOM!!!!');
    }, 1000);       
    }
    timerId = setTimeout ( () => {
        console.log(`Boom in ${timer} sec`);
        return boom(--timer);        
    }, 1000)
};

boom(20);

// To defuse the bomb write 'clearTimeout(timerId);'

//------------------------------------------Timer #2---------------------------------

let timerId;
function boom(time) {
    timerId = setTimeout(function bomb() {
        if (time === 1) {
            return console.log('BOOOOM!!!');
        }
        --time;
        console.log(`Boom in ${time} sec`);
        timerId = setTimeout(bomb, 1000);
    }, 1000);
};

boom(20);

// To defuse the bomb write 'clearTimeout(timerId);'

//---------------------------------------------Timer #3---------------------------------

let x = 1;

function boom(timer) {
    if (timer === 0) {
        return console.log('BOOOOOOOM');
    } else if (x === 0) {
       console.log('Bomb has been defused!');
       return clearTimeout(timerId);            
    }
    timerId = setTimeout (() => {
        console.log(`Boom in ${timer} sec`);
        return boom(--timer);        
    }, 1000)
}

boom(20);

// To defuse the bomb write 'x = 0;'






















