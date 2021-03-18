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

function createArray(size) {
    return [...new Array(size)].map((v,k) => k);
}

const arr = createArray(100);

function fromBeginningToEnd() {
    const evenArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            evenArray.push(i);
        }
    }

    return evenArray;
}
const evenArray = fromBeginningToEnd();

function fromEndToBeginning() {
    const oddArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 == 1) {
            oddArray.push(i);
        }
    }

    return oddArray;
}
const oddArray = fromEndToBeginning();

/////////////////////////////////////////

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findIndex(array, elementToFind) {
    const findArrayElement = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementToFind) {
            findArrayElement.push(i);
        }
    }
        if (array <= findArrayElement) {
            return findArrayElement;
        } else {
            return -1;
        }
}
const findArrayElement = findIndex(array, 52);
