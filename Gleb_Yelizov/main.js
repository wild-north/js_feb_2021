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

//------------------------First task----------------------------
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

//--------------initial electric schemes-------------

const scheme1 = {
    name: 'gate',
    type: 'xor',
    children: [
    {
        name: 'gate',
        type: 'and',
        children: [
        {
            name: 'switch',
            state: true
        },
        {
            name: 'switch',
            state: false
        }
        ]
    }, {
        name: 'gate',
        type: 'not',
        children: [{
            name: 'switch',
            state: true
        }]
    }]
};

const scheme2 = {
    name: 'gate',
    type: 'and',
    children: [
    {
        name: 'gate',
        type: 'or',
        children: [
        {
            name: 'switch',
            state: true
        },
        {
            name: 'gate',
            type: 'xor',
            children: [
            {
                name: 'switch',
                state: false
            },
            {
                name: 'gate',
                type: 'not',
                children: [
                {
                    name: 'switch',
                    state: true
                }
                ]
            }
            ]
        }
        ]
    }, {
        name: 'gate',
        type: 'not',
        children: [
        {
            name: 'switch',
            state: true
        }
        ]
    }
    ]
};

const scheme3 = {
    name: 'gate',
    type: 'xor',

    children: [
    {
        name: 'gate',
        type: 'not',
        children: [
        {
            name: 'switch',
            state: false
        }
        ]
    }, {
        name: 'gate',
        type: 'or',
        children: [
        {
            name: 'gate',
            type: 'or',
            children: [
            {
                name: 'switch',
                state: false
            },
            {
                name: 'gate',
                type: 'and',
                children: [{
                    name: 'switch',
                    state: false
                },{
                    name: 'switch',
                    state: true
                }]
            }
            ]
        },
        {
            name: 'switch',
            state: false
        }
        ]
    }
    ]
};

//------------------printing results---------------------

console.log( 'result for scheme 1 - ' + newElectric(scheme1) );
console.log( 'result for scheme 2 - ' + newElectric(scheme2) );
console.log( 'result for scheme 3 - ' + newElectric(scheme3) );

//--------------functions to obtain results----------------

function newElectric(obj) {
    if (obj.name === 'switch') {
        return obj.state;
    }
    let resultArray = obj.children.map(function(item) {
        return newElectric(item);
    });

    return getLogic(obj.type, resultArray);
}

function getLogic(type, array) {
    switch(type) {
        case 'and': 
            return array[0] && array[1];
        case 'or': 
            return array[0] || array[1];
        case 'xor': 
            return !!(array[0] ^ array[1]);
        case 'not': 
            return !array[0];
    }
}

