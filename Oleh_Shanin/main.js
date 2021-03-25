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
  