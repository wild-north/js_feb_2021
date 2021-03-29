const army = [];

let counter = 0;

for (let counter = 0; counter < 10; counter++) {

    function solder() {
        console.log(counter);
    }
    
    army.push(solder);
}

army[0]();
army[1]();
army[2]();
army[3]();
army[4]();
army[5]();
army[6]();
army[7]();
army[8]();
army[9]();
