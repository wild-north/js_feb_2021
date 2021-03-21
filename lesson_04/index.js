//Задание 1 lesson_04
// чётные по возрастанию 1 вариант:

function createArray(size) {
    return [...new Array(size)].map((v,k) => k);
    }

const arr = createArray(100);

    for (var i = 0; i < 100; i += 2) {
                 console. log(arr[i]);
    }
//Нечётные по убыванию 1 вариант: 

function createArray(size) {
    return [...new Array(size)].map((v,k) => k);
    }

const arr = createArray(100);

        for (var i = arr.length - 1; i >= 0; i -= 2) {
        console. log(arr[i]);
        }


//чётные по возрастанию 2 вариант:

function createArray(size) {
    return [...new Array(size)].map((v,k) => k);
    }

const arr = createArray(100);

logForward(arr);

        function logForward(arr) {
                for (var i = 2; i < 100; i += 2) {
                console. log(arr[i]);
                }
        }

 //Нечётные по убыванию 2 вариант:

function createArray(size) {
    return [...new Array(size)].map((v,k) => k);
    }

const arr = createArray(100);

logBackward(arr)

function logBackward(arr) {
        for (var i = arr.length - 1; i >= 0; i -= 2) {
            console. log(arr[i]);
        }
}
//еще один вариант:

const arr = [...Array(100).keys()];
logForward(arr);
logBackward(arr);

function logForward(arr) {
        for (var i = 0; i < arr.length; i += 2) {
         console. log(arr[i]);
        }
}

function logBackward(arr) {
        for (var i = arr.length - 1; i >= 0 ; i -= 2) {
            console. log(arr[i]);
        }
}

//Задание 2 lesson_04

function findElement(arr, element) {
  let index = -1;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      index = i;
      break;
    }
  }
  
  return index;
}