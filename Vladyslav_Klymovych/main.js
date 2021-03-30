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

///////////////////////////////////////////////////
//const army = [];

//let counter = 0;

//for (let counter = 0 ; counter < 10; counter++) {

//    function solder() {
//        console.log(counter);
//    }
    
//    army.push(solder);
//}

//army[0]();
//army[5]();

/////////////////////////////////////////////////////////////

const army = [];

let counter = 0;

while(counter < 10) {
    
    let solder = ((i) => (function() {console.log(i)}))(counter);
    army.push(solder);
    counter++;
}

army[0]();
army[5]();