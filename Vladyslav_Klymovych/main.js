document.addEventListener('DOMContentLoaded', render);

const text = {
    header: 'This is the file for your home tasks',
    list: [
        'Please, write your JavaScript code in <strong>main.js</strong>',
        'Please, write your CSS code in <strong>styles.css</strong>',
        'Please, write your HTML right here in <strong>index.html</strong>'
    ]
};

function render() {
    const main = document.createElement('main');
    const h2 = document.createElement('h2');
    h2.textContent = text.header;

    const ul = text.list.reduce((ul, text) => {
        const li = document.createElement('li');

        li.innerHTML = text;
        ul.append(li);

        return ul;
    }, document.createElement('ul'));

    main.append(h2);
    main.append(ul);
    document.body.append(main);
}

///function reverseArray(array) {
///    let arrLen = array.length;
///    for (let i = arrLen, j =-1; j++,i--;) {
///        array.unshift( array[arrLen-1-i+(j)] );
///    }    
///    array.length = arrLen;
///  } 


    let c = 0;

    function createMatrix(size) {
        const resultArray = [];
        for (let i = 0; i < size; i++) {
            resultArray[i] = [];
            for (let j = 0; j < size; j++) {
                resultArray[i][j] = c++;
            }
        }
        return resultArray;
    }

    const myArray = createMatrix(10);


    function arrayPerimeter(array) {
        let resultArray = [];
        let sizeLen = array.length;
        for (let i = 0; i < 1; i++){
            for (let j = 0; j < sizeLen; j++) {
                resultArray.push (array[i][i + j]);
                
            }
            for (let j = 1; j < sizeLen; j++) {
                resultArray.push (array[i + j][sizeLen - 1 - i]);

            }
            for (let j = sizeLen - 2; j > -1; j--) {
                resultArray.push(array[sizeLen - 1 - i][i + j]);

            }
            for (let j = sizeLen - 2; j > 0; j --) {
                resultArray.push(array[i + j][i]);
            }

        }
        return resultArray;
    }