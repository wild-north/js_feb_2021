//условие
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
    
    if (ul.childElementCount > null){
    parent.append(ul);
}
}

renderTree(book, document.body);



// function renderTree(obj, parent) {
//     const ul = document.createElement('ul');

//     for (let key in obj) {
//         const li = document.createElement('li');
//         li.textContent = key;
//         renderTree(obj[key], li);
//         ul.append(li);
//     }
    
//     parent.append(ul);
// }

// renderTree(book, document.body);