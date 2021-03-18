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

function returnEvenValues() {
    let result = [];
    for (let i = 0; i < arr.length + 1; i++) {
        if (arr[i] % 2 === 0) result.push(arr[i]);
    }
    return result;
}
    
function returnOddValues() {
    let i = arr.length;
    let result = [];
    while (i >= 0) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
        i--
    }
    return result;
}

function findIndex() {
    let elementToFind = prompt("Find Index");
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == elementToFind) {
            return i;
        }
    }
    return -1;
}