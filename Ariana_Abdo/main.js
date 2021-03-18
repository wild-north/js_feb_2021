ЗАДАЧА №1
function createArray(size) {
    return [...new Array(size)].map((v,k) => k);
}

const arr = createArray(100);
for (let i = 1; i < arr.length; i++){
    
    if ((arr[i] % 2) == 0 ){
        console.log(arr[i]);
    }
}

ЗАДАЧА №2
function createArray(size) {
    return [...new Array(size)].map((v,k) => k);
}

const arr = createArray(100);
for (let i = 99; i < arr.length; i--){
    
    if ((arr[i] % 2) === 1 ){
        console.log(arr[i]);
    }
}

ЗАДАЧА №3
function findIndex (array, elementToFind) {

    for (i = 0; i < array.length; i++) {

        if(array[i] == elementToFind) {
        return i;
        break;
        }
    }
    return -1
}
let array = [ 12, 30, 39, 40, 50, 56];

let result = findIndex(array, 40);
console.log (result)
