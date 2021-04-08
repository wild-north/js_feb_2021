const n = 60;
let id;

function boom(n){
    id = setTimeout(function(){
        n--;
        console.log(n);
        if (n === 0) {
            return console.log('BOOM');

        } else {
            boom(n);
        }

    },1000);

};  