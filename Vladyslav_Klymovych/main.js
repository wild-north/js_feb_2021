document.addEventListener('DOMContentLoaded', render);

const text = {
    header: 'This is the file for your home tasks',
    list: [
        'Please, write your JavaScript code in <strong>main.js</strong>',
        'Please, write your CSS code in <strong>styles.css</strong>',
        'Please, write your HTML right here in <strong>index.html</strong>'
    ]
};

function render() {
    const main = document.createElement('main');
    const h2 = document.createElement('h2');
    h2.textContent = text.header;

    const ul = text.list.reduce((ul, text) => {
        const li = document.createElement('li');

        li.innerHTML = text;
        ul.append(li);

        return ul;
    }, document.createElement('ul'));

    main.append(h2);
    main.append(ul);
    document.body.append(main);
}


function Calculator() {

    this.read = function() {
        this.i = +prompt('first value', 0);
        this.q = +prompt('second value', 0);
    };
    this.sum = function() {
        return this.i + this.q;
    };
    this.mul = function() {
        return this.i * this.q;
    };
};

let calculator = new Calculator();
calculator.read()
console.log(calculator.sum() );
console.log(calculator.mul() );