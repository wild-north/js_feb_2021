function Calculator() {

    this.read = function(a, b) {    
        this.number1 = a;
        this.number2 = b;
    }; 

    this.sum = function() {
        return this.number1 + this.number2;
    };

    this.mul = function() {
        return this.number1 * this.number2;
    };

};

const c = new Calculator();
c.read(2, 4);
c.mul();
