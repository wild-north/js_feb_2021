
let c = 0;

function createMatrix(size) {
    const resultArray = [];

    for (let i = 0; i < size; i++) {
        resultArray[i] = [];
        for (let j = 0; j < size; j++) {            
            resultArray[i] [j] = c++;
        }
    }

    return resultArray;
}

const myArray = createMatrix(10);

// console.table(myArray);

function getPerimeter(matrix) {
    const topArray = matrix[0].slice();
    const bottomArray = matrix[matrix.length - 1].slice().reverse();
    const leftArray = [];
    const rightArray = [];

    for (let i = 1; i < matrix.length - 1; i++) {
        rightArray.push(matrix[i][matrix[i].length - 1]);
        leftArray.push(matrix[i][0]);
    }

    leftArray.reverse();

    return topArray.concat(rightArray, bottomArray, leftArray);
}

console.log(getPerimeter(myArray));

/////////////////////////////////////////////////////////////

let a = 0;

function createArray(matrix) {
    const array = [];

        for (let i = 0; i < matrix; i++) {
            array [i] = [];
            for (let j = 0; j < matrix; j++) {
                array [i] [j] = a++;
            }
        }

    return array;
}

const myArray = createArray(10);

console.table(myArray);

function newPerimeter (size) {
    const topArray = size[0].slice().reverse();
    const bottomArray = size[size.length - 1].slice();
    const leftArray = [];
    const rightArray = [];

    for (i = 1; i < size.length - 1; i++) {
        leftArray.push(size [i] [0]);
        rightArray.push(size [i] [size[i].length - 1])
    }
    
    rightArray.reverse();

    return leftArray.concat(bottomArray, rightArray, topArray);
}

console.log(newPerimeter(myArray));