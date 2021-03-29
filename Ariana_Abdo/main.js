//ЗАДАЧА №1
function createArray(size) {
    return [...new Array(size)].map((v,k) => k);
}
function findOddElements(array) {
    for (let i = 1; i <= arr.length; i++){
    
         if (arr[i] % 2 === 0 ){
         console.log(arr[i]);
        }
    }
}
const arr = createArray(30);
let result = findOddElements (arr);
console.log (result)

//ЗАДАЧА №2
function createArray(size) {
    return [...new Array(size)].map((v,k) => k);
}
function findEvenElements(array) {
    for (let i = arr.length -1; i >= 0; i--){
    
         if (arr[i] % 2 === 1 ){
         console.log(arr[i]);
        }
    }
}
let arr = createArray(30);
let result = findEvenElements (arr);
console.log (result)

//ЗАДАЧА №3
function findIndex (array, elementToFind) {

    for (i = 0; i < array.length; i++) {

        if(array[i] === elementToFind) {
            return i;
        }
    }
    return -1
}
let array = [ 12, 30, 39, 40, 50, 56];

let result = findIndex(array, 40);
console.log (result)
