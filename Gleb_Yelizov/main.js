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

//-------------------------------------------------------Homework Lesson_12-------------------------------------

class H {
    constructor (name = 'Anonimous', initMilage = 0) {
        this.name = name;
        this.milage = initMilage;
    }
    run(miles) {
        this.milage += miles;
    }
    get status() {
        return `${this.name} with ${this.milage} miles milage`;
    }
    set hasWon(time) {
        this.name = 'Brave horse' + this.name;        
        console.log(`${this.status} has won the race with with ${time} minutes result`);
    }
}

let h = new H('Truthy', 100);
console.log(h);

h.run(200);

console.log(h);

console.log(h.status);

h.hasWon = 2;

//-------------------------------------------------------Homework Lesson_13-------------------------------------

//------------------------------------First task---------------------------------

let globalMileage = {
    totalMileage: 0,
    run(miles) {
        this.mileage += miles;
        this.__proto__.totalMileage += miles;
    }
};

function MakeHorse(name = 'Anonimous', initMileage = 0) {
    this.name = name;
    this.mileage = initMileage;        
}

MakeHorse.prototype = globalMileage;

let horse1 = new MakeHorse('Truthy');
let horse2 = new MakeHorse('Falsy');
console.log(horse1);
console.log(horse2);
console.log(globalMileage);

horse1.run(200);
horse2.run(300);

console.log(horse1);
console.log(horse2);
console.log(globalMileage);

//------------------------------------Second task---------------------------------

let global = {
    totalMileage: 0,
    
    rest(myFunction, restToRun) {
        console.log(`${this.name} is resting`);        
        setTimeout( () => {
            console.log(`${this.name} is running now`);
            return myFunction.run(restToRun);
        }, 5000);},

    run(miles) {
        if (miles === 0) {
            return console.log(`${this.name} has finished`);
        } else if (this.tiredness === 10) {
            this.tiredness = 0;            
            return this.rest(this, miles);
        }        
        this.mileage += 1;
        this.__proto__.totalMileage += 1;
        this.tiredness += 1;        
        this.run(--miles);
    }        
};

function MakeHorse(name = 'Anonimous', initMileage = 0, initTiredness = 0) {
    this.name = name;
    this.mileage = initMileage;
    this.tiredness = initTiredness;
}

MakeHorse.prototype = global;

let horse1 = new MakeHorse('Truthy');
let horse2 = new MakeHorse('Falsy');

// To ckeck how it works:

function consLog() {
    console.log(horse1);
    console.log(horse2);
    console.log(global);
}
consLog();
console.log(`First race has began!!!!!!!!!!!!!!!!!!!!!!`);
horse1.run(3);
horse2.run(3);

tr0 = setTimeout( () => console.log(`Second race has began!!!!!!!!!!!!!!!!!!!!!!`), 4900);
tr1 = setTimeout( () => horse1.run(10), 5000);
tr2 = setTimeout( () => horse2.run(10), 5000);
tr3 = setTimeout( () => consLog(), 15000);

