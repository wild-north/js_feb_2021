//------------------------------------Homework after lesson_07---------------------------------------------

//---------------------First solution---------------------

let army = [];
let counter = 0;

while(counter < 10) {
    let temp = counter++;
  
    function solder() {
        console.log(temp);
    };
    
    army.push(solder);
};
  
army[0]();
army[5]();

//---------------------Second solution---------------------

let army2 = [];

for (let counter = 0; counter < 10; counter++) {
    function solder() {
        console.log(counter);
    };

    army2.push(solder); 
};
    
army2[7]();
army2[9]();

//---------------------Just to try add empty function---------------------

let army3 = [];

(function x() {
    for (let counter = 0; counter < 10; counter++) {
        function solder() {
            console.log(counter);
        };

        army3.push(solder); 
    };
})();

army3[8]();
army3[4]();