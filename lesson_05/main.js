// Solutions for the home task lesson 04

function createArray(size) {
    const arr = [];

    for (let i = 0; i < size; i++) {
        arr[i] = i + 1;
    }

    return arr;
}

const arr = createArray(10);

function getEvenItems(array) {
    const resultsArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && i !== 0) {
            resultsArray.push(arr[i]);
        }
    }

    return resultsArray;
}

function getOddItems(array) {
    const resultsArray = [];

    for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[arr.length - 1 - i];

        if (currentItem % 2 !== 0 && i !== 0) {
            resultsArray.push(arr[i]);
        }
    }

    return resultsArray;
}

function findIndex(arr, elementToFind) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elementToFind) {
            return i;
        }
    }

    return -1;
}
/////////////////////////////////////////////
// forEach
arr.forEach(function(item, i) {
    document.write(`<dl>item: ${item}</dl><dt>index: ${i}</dt><hr/>`);
});

/////////////////////////////////////////////
// map
const mappedArray = arr.map(function(item, i) {
    return {
        id: i,
        value: item
    }
});



console.log('mappedArray', mappedArray);
/////////////////////////////////////////////////
// reduce
const sum = arr.reduce(function(acc, item) {
    acc += item;

    return acc; // never forget to return the accumulator!
}, 0);

console.log('sum', sum);

const object = arr.reduce(function(acc, item, index) {
    acc[`element${index}`] = item;

    return acc;
}, {});

console.log('object', object);

///////////////////////////////////////////////////////

// split,join
const string = 'Bacon ipsum dolor amet capicola tenderloin shankle beef pastrami ham chicken. Landjaeger beef ribs cow, brisket shoulder jerky salami shankle t-bone. Hamburger venison bacon kevin, kielbasa sausage pork belly meatball landjaeger salami pancetta andouille filet mignon.'

const arrayFromString = string.split(' '); // we use a space as a separator here

const colorsArray = ['каждый', 'охотник', 'желает', 'знать', 'где', 'сидит', 'фазан'];

const stringFromArray = colorsArray.join('.'); // use a dot as a separator here (try to use nothing ans see what would applied then)
