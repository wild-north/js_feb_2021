function createArray(size) {
    return [...new Array(size)].map((v,k) => k);
}

const arr = createArray(100);
 
function returnEven() {
    let total = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            continue;   
         } 
        total.push (arr[i]);

    }
    return total
}




function returnOdd() {
    let total = [];
    for (i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 !== 0) {
            continue;
        }
        total.push (arr[i]);

    }
    return total
}


function findIndex(array,elementToFind) {
    let lookIndex = [];
    for (i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === elementToFind) {
            lookIndex.push(i);
        } else (arr[i] !== elementToFind) {
            return -1
        }
    }

}
  
    


