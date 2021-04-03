// let user = {
//     name: "Джон",
//     age: 30,
//     sayHello: function() {
//         return 'Hi there, my name is ' + this.name;
//     }
// };
// const john = user;
// user = null;

// const anotherUser = {
//     name: 'Василий',
//     surname: 'Петрович',
//     getFullName() {
//         debugger;
//         return this.name + ' ' + this.surname
//     }
// };

// // anotherUser.getFullName();

// // const myFn = anotherUser.getFullName;

// let user1 = {
//     name: "Джон",
//     age: 30,
//     sayHello: function() {
//         return 'Hi there, my name is ' + this.name;
//     },
//     anotherUser: {
//         name: 'Василий',
//         surname: 'Петрович',
//         getFullName() {
//             return this.name + ' ' + this.surname
//         }
//     }
// };
// user1.anotherUser.getFullName();

const user1 = {
    name: 'Джон',
    surname: 'Леннон'
    // fn: getFullName
};
const user2 = {
    name: 'Василий',
    surname: 'Петрович'
    // fn: getFullName
};

function getFullName() {
    return this.name + ' ' + this.surname
}

user1.fn = getFullName;

user2.fn = getFullName;

console.log(user1.fn());
console.log(user2.fn());

// const id = setTimeout(function() {
//     console.log('таймаут выполнился');
// }, 10000);

// clearTimeout(id);

function boom() {
    // рекурсивно вызываем setTimeout c задержкой в 1 сек. по достижении N секунд выводим 'boom';
    // если успели сделать clearTimeout,
    // останавливаем счетчик
}