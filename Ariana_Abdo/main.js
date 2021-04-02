// ЗАДАЧА №1 УРОК №8
function renderTree(obj, parent) {
    const ul = document.createElement('ul');
    for (let key in obj) {
        const li = document.createElement('li');
        li.textContent = key;
        renderTree(obj[key], li);
        console.log(li.textContent)
        ul.append(li);
    }
if (ul.childElementCount > 0){
    parent.append(ul);
}
}
renderTree(book, document.body);


// ЗАДАЧА №2 УРОК №8
let array = [];
let array2 = [];
let array3 = [];
let array4 = [];
let array5 = [];
let counter = 10;
    for (let i = 0; i < counter; i++) {
        let number = +prompt("Ввдите 1 или 0");
        
        array.push(number);
    };
// First circle
if (array[0] && array[1] === true) {
    array2.push(1);
} else {
    array2.push(0);
};

if (array[2] || array[3] === true) {
    array2.push(1);
} else {
    array2.push(0);
};

if (array[4] === 1 && array[5] === 1) {
    array2.push(0);
} else if ((array[4] === 1 && array[5] === 0) || (array[4] === 0 && array[5] === 1)){
    array2.push(1);
} else {
    array2.push(0);
};

if (array[6] === 1 && array[7] === 1) {
    array2.push(0);
} else if ((array[6] === 1 && array[7] === 0) || (array[6] === 0 && array[7] === 1)){
    array2.push(1);
} else {
    array2.push(0);
};

if (array[8] && array[9] === true) {
    array2.push(1);
} else {
    array2.push(0);
};
// Second circle
if (array2[0] && array2[1] === true) {
    array3.push(1);
} else {
    array3.push(0);
};

if (array2[2] || array2[3] === true) {
    array3.push(1);
} else {
    array3.push(0);
};

array3.push(!array2[4]);
// Third circle
if (array3[0] === 1 && array3[1] === 1) {
    array4.push(0);
} else if ((array3[0] === 1 && array3[1] === 0) || (array3[0] === 0 && array3[1] === 1)){
    array4.push(1);
} else {
    array4.push(0);
};
array4.push(!array3[2]);
// Fourth circle
if (array4[0] && array4[1] === true) {
    array5.push(true);
} else {
    array5.push(false);
};
console.log(array5);

