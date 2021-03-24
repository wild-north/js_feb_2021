function createArray(size) {
    return [...new Array(size)].map((v,k) => k);
}

const arr = createArray(100);
 
function returnEven() {
    let total = [];
    for (let i = 0; i < arr.length+1; i++) {
        if (arr[i] % 2 === 0 && i !== 0) {
            total.push(arr[i]);
        }
    }

    return total;
};



function returnOdd() {
    let total = [];
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] % 2 === 0 && i !== 0) {
            total.push(arr[i]);
        }
    }

    return total;
};


function findIndex(arr, elementToFind) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elementToFind) {
            return i;
        }
    }

    return -1;
};
  



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



const w = 10;
const h = 10;

function removalFromTheMattress(w, h){
    const result = [];
    let startCol = 0;
    let endCol = w - 1;
    let startRow = 0;
    let endRow = h - 1;
        for (let i = startCol; i <= endCol; i++) {
            result.push[i];
        }
        for (let j = startRow; j <= endRow; j++) {
            result.push[j];
        }
        for (let k = endCol; k >= startCol; k--) {
            result.push[k];
        }
        for (let o = endrow; o >= startRow; o--) {
            result.push[o]
        }


    return result;
};
