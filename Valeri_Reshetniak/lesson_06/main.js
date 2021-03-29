function createMatrix(size) {
    const resultArray = [];

    for (let i = 0; i < size; i++) {
        resultArray[i] = [];
        for (let j = 0; j < size; j++) {
            resultArray[i].push(`${i}:${j}`);   
        }
    }

    return resultArray;
}

const arr = createMatrix(10);

function boardersOfMatrix (array){
    const resultMatrix = [];

    resultMatrix.push(...array[0]);

    for( i = 1; i < array.length-1; i++ ){
        for( j = 0; j < array.length; j++){
            while (j === array.length-1){
                resultMatrix.push(array[i][j++]);
            }
        }
    }
    
    resultMatrix.push(...array[array.length-1].reverse());
    
    for( i = array.length - 2; i > 0; i-- ){
        for( j = array.length; j >= 0; j--){
            while (j === 0){
                resultMatrix.push(array[i][j--]);
            }
        }
    }

    return resultMatrix;   
}

console.log(boardersOfMatrix(arr));

function reverseBoadersOfMatrix(array){
    const resultMatrix = [];

    for( i = 0; i < array.length - 2; i++ ){
        for( j = 0; j <= array.length; j++){
            while (j === 0){
                resultMatrix.push(array[i][j++]);
            }
        }
    }

    resultMatrix.push(...array[array.length-1]);

    for( i = array.length-2; i >= 1; i-- ){
        for( j = array.length - 1; j > 0; j--){
            while (j === array.length-1){
                resultMatrix.push(array[i][j--]);
            }
        }
    }

    resultMatrix.push(...array[0].reverse());

    return resultMatrix;
}

console.log(reverseBoadersOfMatrix(arr));



