let c = 0;

function createMatrix(size) {
    const resultArray = [];

    for (let i = 0; i < size; i++) {
        resultArray[i] = [];
        for (let j = 0; j < size; j++) {
            // resultArray[i].push(`${i}:${j}`);
            resultArray[i][j] = c++;
        }
    }

    return resultArray;
}

const myArray = createMatrix(10);
// const myArray2 = createMatrix(100);

console.table(myArray);


function getReversepPrimeter(matrix) {
    const topArray = matrix[0].slice().reverse();
    const bottomArray = matrix[matrix.length - 1].slice();
    const leftArray = [];
    const rightArray = [];

    for (let i = 1; i < matrix.length - 1; i++) {
        leftArray.push(matrix[i] [0]);
        rightArray.push(matrix[i] [matrix[i].length - 1]);
    }

    rightArray.reverse();

    return bottomArray.concat(rightArray, topArray, leftArray);
}