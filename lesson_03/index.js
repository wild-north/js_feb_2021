// const a = 10;

// if (a > 10) {
//     console.log('больше');
// } else if(a < 10) {
//     console.log('меньше');
// } else {
//     console.log('равно');
// }
// /////////////////////////////////////
// // let message = '';

// // const isAdmin = confirm('вы - админ?');

// // // if (isAdmin) {
// // //     message = 'welcome, admin!';
// // // } else {
// // //     message = 'welcome!';
// // // }

// const message = isAdmin ? 'welcome, admin!' : 'welcome!';

// // document.write(message);

// const a = 10;

// if (true) {
//     const a = 20;

//     {
//         console.log('вызываем из локальной О.В.', a);
//     }

//DRY
//do not repeat yourself
//KISS
// keep it simple, stupid
//YAGNI
// you aren't gonna need it

// }

// let counter = 0;

// function showMessage() {
//     // counter = counter + 1;
//     // либо
//     // counter++
//     // counter += 10;

//     document.write(`функция вызвана ${counter++} раз<br/>`);
// }

const user = {
    name: 'Vasily',
    surname: 'Pupkin',
    getFullName: function() {
        return this.name + ' ' + this.surname;
    }
};

function sum(a,b) {
    const innerResult = a + b;

    console.log(innerResult);

    return innerResult;
}

const res = sum(2,3);
const res2 = sum(10,20);
const res3 = sum();

console.log(res, res2, res3);

