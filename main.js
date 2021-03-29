//------------------------------------Homework after lesson_06---------------------------------------------

//---------------------create 2d array---------------------
function createMatrix(size) {
    let arr = [];
    
    for (let i = 0; i < size; i++) {        
        arr.push([]);        
        for (let j = 0; j < size; j++) {        
            arr[i].push(+`${i}${j}`);    
        };
    };
    
    return arr;
};

let initialMatrix = createMatrix(6); /*works the same as array 10x10, but much easier to check results*/

console.table(initialMatrix);

let twoDmatrix = initialMatrix.slice();

//----------------transform 2d array to 1d--------------------

function transformToOneD(matrix) {
    let tempMatrix = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            tempMatrix.push(matrix[i][j]);
        };
    };

    return tempMatrix;
};

let oneDmatrix = transformToOneD(twoDmatrix)
console.log(oneDmatrix);

//------------------array clockwise----------------------------

function toClockwise(matrix) {
    let tempMatrix = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (i === 0 || j === matrix[i].length - 1) {
                tempMatrix.push(matrix[i][j]);
            };            
        };
    };
    for (let i = matrix.length - 1; i > 0; i--) {
        for (j = matrix[i].length - 2; j >= 0; j--) {
            if (i === matrix.length - 1 || j === 0) {
                tempMatrix.push(matrix[i][j]);
            };            
        };
    };

    return tempMatrix;
};

let clockwise = toClockwise(twoDmatrix)
console.log(clockwise);

//------------------array anti-clockwise----------------------------

function toAntiClockwise(matrix) {
    let tempMatrix = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (j === 0 || i === matrix.length - 1) {
                tempMatrix.push(matrix[i][j]);
            };            
        };
    };
    for (let i = matrix.length - 2; i >= 0; i--) {
        for (j = matrix[i].length - 1; j > 0; j--) {
            if (j === matrix[i].length - 1 || i === 0) {
                tempMatrix.push(matrix[i][j]);
            };            
        };
    };

    return tempMatrix;
};

let antiClockwise = toAntiClockwise(twoDmatrix)
console.log(antiClockwise);

//------------------array clockwise triangle----------------------------

function toCWTriangle(matrix) {
    let tempMatrix = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (i === 0 || j === matrix[i].length - 1) {
                tempMatrix.push(matrix[i][j]);
            };            
        };
    };
    tempMatrix.pop();

    for (let i = matrix.length - 1; i >= 0; i--) {
        for (j = matrix[i].length - 1; j >= 0; j--) {
            if (i === j) {
                tempMatrix.push(matrix[i][j]);
            };            
        };
    };
    tempMatrix.pop();

    return tempMatrix;
};

let cwTriangle = toCWTriangle(twoDmatrix)
console.log(cwTriangle);

//------------------array anti-clockwise triangle----------------------------

function toACWTriangle(matrix) {
    let tempMatrix = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (j === 0 || i === matrix.length - 1) {
                tempMatrix.push(matrix[i][j]);
            };            
        };
    };
    tempMatrix.pop();

    for (let i = matrix.length - 1; i >= 0; i--) {
        for (j = matrix[i].length - 1; j >= 0; j--) {
            if (i === j) {
                tempMatrix.push(matrix[i][j]);
            };            
        };
    };
    tempMatrix.pop();

    return tempMatrix;
};

let aCwTriangle = toACWTriangle(twoDmatrix)
console.log(aCwTriangle);

//------------------array worm style----------------------------

function toWormArray(matrix) {
    let tempMatrix = [];

    for (let z = 0; z < matrix.length / 2; z++) {
        
        for (let i = 0 + z; i <= matrix.length - 1 - z; i++) {
            for (j = 0 + z; j <= matrix[i].length - 1 - z; j++) {
                if (i === 0 + z || j === matrix[i].length - 1 - z) {
                    tempMatrix.push(matrix[i][j]);
                };        
            };
        };
        tempMatrix.pop();

        for (let i = matrix.length - 1 - z; i >= 0 + z; i--) {
            for (j = matrix[i].length - 1 - z; j >= 0 + z; j--) {
                if (i === matrix.length - 1 - z || j === 0 + z) {
                    tempMatrix.push(matrix[i][j]);
                };
            };
        };
        tempMatrix.pop();
    };

    if (matrix.length % 2 !== 0) {      /* I have made this block to predict arrays with not odd numbers of edges like 5x5 or 11x11 */
        let temp = (matrix.length - 1) / 2 ;
        
        tempMatrix.push(matrix[temp][temp]);
    };
        
    return tempMatrix;
};

let wormArray = toWormArray(twoDmatrix)
console.log(wormArray);

//------------------array worm style Solution #2----------------------------

function toWormArray2(matrix) {
    let tempMatrix = [];

    
        let topArray = matrix[0].slice();
        let bottomArray = matrix[matrix.length - 1].slice();
        let rightArray = [];
        let leftArray = [];

        for (let i = 1; i < matrix.length - 1; i++) {
            rightArray.push(matrix[i][matrix[i].length - 1]);
            leftArray.push(matrix[i][0]);
        };
        
       return tempMatrix.concat(topArray, rightArray, bottomArray.reverse(), leftArray.reverse())    
};

let wormArray2 = toWormArray2(twoDmatrix)
console.log(wormArray2);






