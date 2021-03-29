function createArray(size) {
    const arr = [];

    for (let i = 0; i < size; i++) {
        arr[i] = i + 1;
    }

    return arr;
}

let c = 0;

function createMatrix(size) {
    const resultArray = [];

    for (let i = 0; i < size; i++) {
        resultArray[i] = [];
        for (let j = 0; j < size; j++) {
            // resultArray[i].push(`${i}:${j}`);
            resultArray[i][j] = c++;
        }
    }

    return resultArray;
}

const myArray = createMatrix(10);

// console.table(myArray);

function getParimeter(matrix) {
    const topArray = matrix[0].slice();
    const bottomArray = matrix[matrix.length - 1].slice().reverse();
    const leftArray = [];
    const rightArray = [];
    
    for (let i = 1; i < matrix.length - 1; i++) {
        rightArray.push(matrix[i][matrix[i].length - 1]);
        leftArray.push(matrix[i][0]);
    }

    leftArray.reverse();

    return topArray.concat(rightArray, bottomArray, leftArray);
}

const sayHi = (name, ...params) => {   
    console.log('привет, ' + name);
    
    params.forEach(v => console.log(v));
};

const sayHi2 = (...params) => {   
    // console.log(params);
    params.forEach((v,i) => console.log(`параметр ${i}`, v));
};

// sayHi2(1,2,3,4,5,6,7,8);

function testArguments() {
    console.log(arguments);
}
// testArguments(1,2,3,4,5,6,7,8,9);

// function test(a) {
//     console.log(a === myFunction);
// }

// function myFunction() {
//     console.log('привет');
// }

// const result = myFunction();

// test(result);
// либо
// test(myFunction());

// const a = 10;

// function test(fn) {
//     const a = 100;

//     fn();
// }

// function foo() {
//     console.log(a);
// }

// test(foo);
//////////////////////////////////
const returnedValue = (function () {
    const a = 10;

    function getA() {
        console.log(a);
    }

    return getA;
})();

const returnedValue = (function () {
    const a = 10;

    function getA() {
        console.log(a);
    }

    return getA;
})();

console.log(returnedValue);

returnedValue();

////////////////////////
function mainFunction() {
    const a = 10;

    function getA() {
        console.log(a);
    }

    return getA;
}

const returnedValue = mainFunction();

console.log(returnedValue);

returnedValue();
//////////////////////////////////

function makeCounter() {
    let count = 0;
  
    function inner() {
      return count++;
    };
  
    return inner;
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  counter();
  counter(); // ?
  counter2(); // ?

  ///////////////////////////////////
  sum(1)

function sum(a) {
    return a;
}
///////////////
function sum(a) {
    return function(b) {
        return a + b;
    }
}

sum(1)(2);
///////////////
// const result = sum(a);

// result(2);
/////////////////////////////
function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

sum(1)(2)(3);

const sum2 = (a) => (b) => (c) => a + b + c;

function sum2(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }   
    }
}
////////////////////////////////////////////////

const army = [];

let counter = 0;

while(counter < 10) {
    function inner() {
        const index = counter;
        counter++;

        function solder() {
            console.log(index);
        }
        
        army.push(solder);
    }
    inner();
}

/////////////////////////////////////
while(counter < 10) {
    function inner(index) {
        counter++;

        function solder() {
            console.log(index);
        }
        
        army.push(solder);
    }
    inner(counter);
}


army[0]();
army[5]();
//////////////////////////////////////////////////
//////////////////////////////////////////////////












// ДЗ - сделать так, чтобы вызовы функций возвращали "правильный" counter.

// const a = 10;

// (function(a) {
//     console.log(a);
// })(100);