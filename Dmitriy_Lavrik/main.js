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
        if (i % 2 === 0) {
            evenArray.push(i);
        }
    }

    return evenArray;
}
const evenArray = fromBeginningToEnd();

function fromEndToBeginning() {
    const oddArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 === 1) {
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

////////////////////////////////////////////

// function arrayReverse() {
//     const  fffff = [];

//     for (let i = arr.length -1; i >= 0; i--) {
//         fffff.push(arr[i]);
//     }

//     return fffff;
// }
// const  fffff = arrayReverse();

///////////////////////////////////////////////

let c= 0;

function createMatrix(size) {
    const resultArray = [];

    for (let i = 0; i < size; i++) {
        resultArray[i] = [];
        for (let j = 0; j < size; j++) {
            resultArray[i][j] = c++;
        }
    }

    return resultArray;
}
const myArray = createMatrix(10);


function reverseMatrix(matrix) {
    const result = [];

    for (let i = matrix.length -1; i >= 0; i--) {
        for (let j = matrix[i].length -1; j >= 0; j--) {
            result.push(matrix[i][j]);
        }     
    }

    return result;
}
const result = ('reverseMatrix', reverseMatrix(myArray));

// [
// [0,1,2,3,4,5,6,7,8,9],
// [10,11,12,13,14,15,16,17,18,19],
// [20,21,22,23,24,25,26,27,28,29],
// [30,31,32,33,34,35,36,37,38,39],
// [40,41,42,43,44,45,46,47,48,49],
// [50,51,52,53,54,55,56,57,58,59],
// [60,61,62,63,64,65,66,67,68,69],
// [70,71,72,73,74,75,76,77,78,79],
// [80,81,82,83,84,85,86,87,88,89],
// [90,91,92,93,94,95,96,97,98,99]
// ]

function arrayByEdge(matrix) {
    const resultByEdge = [];

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            if (i === 0 || j === matrix[i].length - 1) {
                resultByEdge.push(matrix[i][j]);
            }      
        }
    }

    for (let i = matrix.length - 1; i > 0; i--) {
        for (let j = matrix[i].length - 2; j >= 0; j--) {
            if (i === matrix.length - 1 || j === 0) {
                resultByEdge.push(matrix[i][j]);
            }            
        }
    }

    return resultByEdge;
}

const resultByEdge = arrayByEdge(myArray);





