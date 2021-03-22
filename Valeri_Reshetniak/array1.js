//создаем массив 
function createArray(size){
    const newArr = [];
    for (let i = 0; i < size; i++){
        newArr[i] = i + 1;
    }
    return newArr;
}

const arr = createArray(100);

//функция для вывода только чётных чисел
function evenNum(array){
    const arrayEven = [];
    for(let x of array){
        if(x%2===0){
            arrayEven.push(x);
        }
    }
    return arrayEven;
}

//функция для вывода только НЕчётных чисел с конца 
function oddReverse(array){
    const arrayOdd = [];
    for(let i = array.length; i >= 0; i--){
        if (i%2!==0){
            arrayOdd.push(i);
        }
    }
    return arrayOdd;
}
