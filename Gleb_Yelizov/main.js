//------------------------------------Homework after lesson_05---------------------------------------------

//----------conditions--------------

function createArray(size) {
    const arr = [];

    for (let i = 0; i < size; i++) {
        arr[i] = i + 1;
    };

    return arr;
};

const arr = createArray(20);

//----------solution-----------------

function reverseArray(array) {
    let temp = array.length;
    
    for (let i = 1, j = 1; j <= temp - 1; i += 2, j++) {
        array.unshift(array[i]);
    };
    
    array.length = temp;
};

//----------result-----------------

document.write(`Initial array: ${arr}`);

reverseArray(arr);

document.write(`<br/>Reversed array: ${arr}`);
























