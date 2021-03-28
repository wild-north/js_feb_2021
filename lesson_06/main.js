// написать фукнцию, принимающую на вход массив 
// и ничего не возвращающую. 
// при вызове, функция должна изменять массив таким образом, 
// чтобы элементы в нем выстраивались в зеркальном порядке (другими словами, 
// функция должна работать аналогично методу reverse)

// function createArray(size) {
//     const arr = [];
//
//     for (let i = 0; i < size; i++) {
//         arr[i] = i + 1;
//     }
//
//     return arr;
// }
//
// function reverseArray(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//         const left = arr[i];
//         const right = arr[arr.length - 1 - i];
//
//         arr[i] = right;
//         arr[arr.length - 1 - i] = left;
//     }
// }
//
// const arr = createArray(10);
//
// reverseArray(arr);
//
// console.log(arr);
// ////////////////////////////////////////////////////
// // const arr1 = [1,2,3];
// // const arr2 = [4,5,6];
// // const arr3 = [7,8,9];
//
// // const array = [[1,2,3], [4,5,6], [7,8,9]];
//
// // console.log(array[0][0])
//
// // const array = arr.map(function(id) {
// //     return {
// //         id,
// //         passed: true
// //     }
// // });
//
// // if (array.every(value => value.passed)) {
// //     alert()
// // }
//
// // array.some(function(value, index) {
// //     return !value.passed;
// // });
// let c = 0;
//
// function createMatrix(size) {
//     const resultArray = [];
//
//     for (let i = 0; i < size; i++) {
//         resultArray[i] = [];
//         for (let j = 0; j < size; j++) {
//             // resultArray[i].push(`${i}:${j}`);
//             resultArray[i][j] = c++;
//         }
//     }
//
//     return resultArray;
// }
//
// const myArray = createMatrix(10);
// // const myArray2 = createMatrix(100);
//
// console.table(myArray);
//
// /*
// Написать функцию, принимающую на вход двумерный массив
// и возвращающую одномерный массив, состоящи из эл-тов
// двумерного массива. Направлаение - из конца в начало.
// */
//
// // const array = [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9]
// // ];
//
// function reverseMatrix(matrix) {
//     const result = [];
//
//     for (let i = matrix.length - 1; i >= 0; i--) {
//         // matrix[i]
//         for (let j = matrix[i].length - 1; j >= 0; j--) {
//             result.push(matrix[i][j]);
//         }
//     }
//
//     return result;
// }
//
// console.log('reverseMatrix', reverseMatrix(myArray));

//Home work lesson 06

function createMatrix(size) {
    let arr = [];

    for (let i = 0; i < size; i++) {
        arr.push([]);
        for (let j = 0; j < size; j++) {
            arr[i].push(+`${i}${j}`);
        }
    }

    return arr;
}

let newMatrix = createMatrix(10);

console.table(newMatrix);

clockWise(newMatrix);


function clockWise(newMatrix) {
    upBoreder();
    rightBoreder();
    downBoreder();
    leftBoreder ();

    function upBoreder() {
        for (let i = 0; i <= newMatrix.length - 1; i++) {
            console.log(newMatrix[0][i]);
        }
    }

    function rightBoreder() {
        for (let j = 1; j < newMatrix[j].length - 1; j++) {
            console.log(newMatrix[j][newMatrix.length - 1]);
        }
    }

    function downBoreder() {
        for (let i = newMatrix.length - 1; i >= 0; i--) {
            console.log(newMatrix[newMatrix.length - 1][i]);
        }
    }

    function leftBoreder() {
        for (let j = newMatrix.length - 2; j > 0; j--) {
            console.log(newMatrix[j][0]);
        }
    }
}

