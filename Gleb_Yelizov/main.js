// document.addEventListener('DOMContentLoaded', render);

// const text = {
//     header: 'This is the file for your home tasks',
//     list: [
//         'Please, write your JavaScript code in <strong>main.js</strong>',
//         'Please, write your CSS code in <strong>styles.css</strong>',
//         'Please, write your HTML right here in <strong>index.html</strong>'
//     ]
// };

// function render() {
//     const main = document.createElement('main');
//     const h2 = document.createElement('h2');
//     h2.textContent = text.header;

//     const ul = text.list.reduce((ul, text) => {
//         const li = document.createElement('li');

//         li.innerHTML = text;
//         ul.append(li);

//         return ul;
//     }, document.createElement('ul'));

//     main.append(h2);
//     main.append(ul);
//     document.body.append(main);
// }


//-------------------------------------------------------------Homework lesson_08--------------------------------------------------

//------------------------first task----------------------------
let book = {
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
    
    if (!Object.keys(obj).length) {        
        return;
    };

    let ul = document.createElement('ul');

    for (let key in obj) {
        let li = document.createElement('li');
        li.textContent = key;
        renderTree(obj[key], li);
        ul.append(li);
    }

    parent.append(ul);
}

renderTree(book, document.body);

//--------------------------------------------Second task-----------------------------------------

let wiredSystem = {
    'A': {
        'O': {
            'A': [0, 1],
            'N': [1],
        },
        'X': {
            'X': [0, 1],
            'A': [0, 0],
        }
    }
};

console.log( bulbStatus(wiredSystem) );

function bulbStatus(obj) {    
    if (Array.isArray(Object.values(obj))) {
        for (let key in obj) {            
            if (obj[key] = 'A') {
                return getAnd(obj[0], obj[1]);
            } else if (obj[key] = 'O') {
                return getOr(obj[0], obj[1]);
            } else if (obj[key] = 'N') {
                return getNot(obj[0]);
            } else if (obj[key] = 'X') {
                return getXor(obj[0], obj[1]);
            }
        }
    }
}
    
    for (let key in obj) {
        let temp = 0;
        
        if (!Array.isArray(Object.values(obj))) {
            if (obj[key] = 'A') {
                temp = getAnd(Object.values(obj.key[0]), Object.values(obj.key[1]));
            } else if (obj[key] = 'O') {
                temp = getOr(Object.values(obj.key[0]), Object.values(obj.key[1]));
            } else if (obj[key] = 'N') {
                temp = getNot(Object.values(obj.key[0]));
            } else if (obj[key] = 'X') {
                temp = getXor(Object.values(obj.key[0]), Object.values(obj.key[1]));
            }
        }
        return temp;   
    }
}


function getAnd(obj1, obj2) {
    return (bulbStatus(obj1) && bulbStatus(obj2));
}

function getOr(obj1, obj2) {
    return (bulbStatus(obj1) || bulbStatus(obj2));
}

function getNot(obj1) {
    return (+!bulbStatus(obj1));
}

function getXor(obj1, obj2) {
    return (bulbStatus(obj1) ^ bulbStatus(obj2));
}