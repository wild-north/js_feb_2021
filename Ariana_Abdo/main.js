function Calculator (startingValue){
    this.read = () => {
        this.firstNumber = +prompt('Введите 1-e число');
        this.secondNumber = +prompt('Введите 2-e число');
    };
    this.sum = () => {
        return this.firstNumber + this.secondNumber;
    };
    this.mul = () => {
        return this.firstNumber * this.secondNumber;
    };
}

let calculator = new Calculator();
calculator.read();

console.log ('Сумма равна ' + calculator.sum() );
console.log ('Произведение равно ' + calculator.mul() );