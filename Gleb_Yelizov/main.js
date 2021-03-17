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
//-------------------------------------------------------------------lesson_04 Homework------------------------------------------------

//----------------get Paired array-----------------

function getPaired(arr) {
    let paired = [];
    for (let i = 0; i <= arr.length; i++) {
        if ((arr[i] % 2 == 0) && !(arr[i] == 0)) {
        paired.push(arr[i]);
        };
    };
    return paired;
};

//----------------get unPaired array-----------------

function getUnPaired(arr) {
    let unPaired = [];
    for (let j = (arr.length - 1); j >= 0; j--) {
        if (arr[j] !== 0) {
            if (arr[j] % 2 !== 0) {
                unPaired.push(arr[j]);
            }
        else continue;
        };
    };
    return unPaired;
};

//----------------get indexes of found numbers-----------------

function findIndex(array, elementToFind) {
    let feetNumbers = [];
    for (let i = 0; i < array.length; i++) {
            if (array[i] == elementToFind) {
                feetNumbers.push(i);
            };
                if (i == (array.length -1)) {
                    if (feetNumbers.length > 0) {
                        break
                    }
                    else {
                        feetNumbers.push(-1);
                    };
                };
    };
    return feetNumbers;
};

//-------------------conditions--------------------------------
function createArray(size) {
    return [...new Array(size)].map((v,k) => k);
} 

const arr = createArray(100);
let array = [1, 2, 3, 8, 4, 5, 6, 7, 8, 9, 10];
let elementToFind = 8;

document.write(`Original_array:${arr} <br \/>`);
document.write(`Array with paired numbers:${getPaired(arr)} <br \/>`);
document.write(`Array with unpaired numbers:${getUnPaired(arr)} <br \/>`);
document.write(`Indexes of found elements: ${findIndex(array, elementToFind)} <br \/>`);







