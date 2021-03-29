function createArray(size){
    const newArr = [];
    for (let i = 0; i < size; i++){
        newArr[i] = i + 1;
    }
    return newArr;
}

function reverseArray(array){
    for (let i = 0; i < array.length / 2; i++){
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}