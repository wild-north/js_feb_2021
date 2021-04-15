function startBomb() {
    let counter = 0;

    function boom() {

        setTimeout(function() {
            counter++;
            if (counter < 10) {
                console.log('тик ' + counter);
                boom();
            } else {
                console.log('бум');
            }

        }, 1000);
    }

    boom();
}


    
function boom(counter) {
    setTimeout(function() {
        counter--;
        if (counter > 0) {
            console.log('тик ' + counter);
            boom(counter);
        } else {
            console.log('бум');
        }

    }, 1000);
}
////////////////////////////////
let id;

function boom3(counter) {
    id = setTimeout(function() {
        counter--;
        if (counter > 0) {
            console.log('тик ' + counter);
            boom3(counter);
        } else {
            console.log('бум');
        }

    }, 1000);
}

// boom3(60);
////////////////////////////////////////
const bomb = {
    id: null,
    start: (counter) => {
        const self = this;

        this.id = setTimeout(() => {
            counter--;
            if (counter > 0) {
                console.log('тик ' + counter);
                self.start(counter);
            } else {
                console.log('бум');
            }
        }, 1000);
    },
    stop: () => {
        clearTimeout(this.id);
    }
};
///////////////////////////////////

function hello() {
    console.log(this.fullName);
}

const user = {
    fullName: 'John Smith'
};
const user2 = {
    fullName: 'Василий'
};



// hello.call(user);
// hello.call({
//     fullName: 123123
// });

// hello.apply(user2);

function hello2(message, a, b, c) {
    console.log(`${this.fullName} сказал: ${message}`);
    console.log(a,b,c);
}

// hello('приветики');

// hello2.call(user2, 'приветики', 1, 2, 3);
// hello2.apply(user2, ['приветики', 1, 2, 3]);
////////////////////////
function bind(fn, context) {
    return (...args) => {
        fn.apply(context, args);
    }
}

// const ololo = bind(hello2, user2);

// ololo('приветики', 1, 2,3 ,4,5);

//////////////////////
// const myFunction = hello2.bind(user2);

// myFunction('hello')