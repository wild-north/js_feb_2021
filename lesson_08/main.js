// // function run(i) {
// //     console.log(i);

// //     if (i < 10) {
// //         run(i + 1);
// //     }
// // };

// // run(0);

// function run(i) {
//     // debugger;

//     console.log(i);

//     if (i >= 10) {
//         return;
//     }

//     run(i + 1);

//     console.log('ololo ' + i);
// };

// run(0);

// ////////////////////
// function pow(x, n) {
//     let c = 1;
//     let res = x;

//     while (c < n) {
//         res *= x;
//         c++;
//     }

//     return res;
// }

/////////////////////

const book = {
    'Животные': {
        'Олени': {},
        'Коты': {}
    },
    'Растения': {
        'грибы': {},
        'трава': {},
        'овощи': {
            'кабачки': {}
        }
    }
};

function renderTree(obj, parent) {
    const ul = document.createElement('ul');

    for (let key in obj) {
        const li = document.createElement('li');
        li.textContent = key;
        renderTree(obj[key], li);
        ul.append(li);
    }

    parent.append(ul);
}

renderTree(book, document.body);

// ДЗ - сделать так, чтобы дочерние UL создавались только
// для тех элементов, у которых есть не пустой дочерний объект
// Подсказка: почитайте про Object.keys() и подумайте, 
//            как его можно здесь применить
