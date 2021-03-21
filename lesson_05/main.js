// homme work lesson_05
// пе понятно почему не заработало, нужна помощь
let primeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 15]

myRevers(primeArr);

function  myRevers(arr) {
    let newArr=[];

        for (var i = arr.length - 1; i >= 0 ; i--) {
        newArr.push(arr[i]);
        }

    return [... newArr]
}

primeArr=myReverse(primeArr)

console.log(primeArr);

//рабочий вариант

let primeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 15]

myRevers(primeArr);

function  myRevers(arr) {
    let newArr=[];

        for (var i = arr.length - 1; i >= 0 ; i--) {
        newArr.push(arr[i]);
        }

    // arr = newArr;
        for (var j = 0; j < newArr.length; j++) arr[j] = newArr[j];
}

console.log(primeArr);