// ЗАДАЧА №1 УРОК №6
let c = 0;

    function createMatrix(size) {
        const resultArray = [];
        for (let i = 0; i < size; i++) {
            resultArray[i] = [];
            for (let j = 0; j < size; j++) {
                resultArray[i][j] = c++;
            }
        }
        return resultArray;
    }

    const myArray = createMatrix(10);
console.table(myArray);

function getReverseParimeter(matrix) {
    const topArray = matrix[0].slice().reverse();
    const bottomArray = matrix[matrix.length - 1].slice();
    const leftArray = [];
    const rightArray = [];
    
    for (let i = 1; i < matrix.length - 1; i++) {
        rightArray.push(matrix[i][matrix[i].length - 1]);
        leftArray.push(matrix[i][0]);
    }
    
    rightArray.reverse();
    return leftArray.concat(bottomArray, rightArray, topArray);
}

getReverseParimeter(myArray);



// ЗАДАЧА №1 УРОК №7


const army = [];

for (let counter = 0; counter < 10; counter++) {
    let counter2 = counter;
    army.push(function(){
        console.log(counter2);
    });
}
console.log(army);

army[0]();