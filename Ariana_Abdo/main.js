//ЗАДАЧА №1 УРОК №5

let array = [12, 4, 39, 5, 68, -32, 7];
function reverseMethod(array){
    for(let i=0; i < array.length - 1; i++) {
        for(let j = 0; j < array.length - 1 - i; j++){
        let k = array[j];
        array[j] = array[j+1];
        array[j+1] = k;
        }
    }
}
reverseMethod(array);
console.log(array);