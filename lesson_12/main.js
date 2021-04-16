class Calculator {
    constructor() {
        this.a = 10;
    }

    read() {
        const a = Number(prompt('enter value A', 0));
        const b = +prompt('enter value B', 0);
    }

    sum() {
        return this.a + this.b;
    }

    mul() {
        return this.a * this.b;
    }

    divide() {
        return this.a / this.b;
    }

    delete() {
        return this.a - this.b;
    }

}

const calc = new Calculator();

calc.read();

const multiplication = calc.mul();
// console.log(multiplication);
const summ = calc.sum();
// console.log(summ);

//////////////////////////////////////////

const ladder = {
    step: 0,
    up() {
      this.step++;
  
      return this;
    },
    down() {
      this.step--;
  
      return this;
    }
  };
  
  ladder.up().up().down().down();
//////////////////////////////////////

const car = {
    wheels: 4,
    doors: 5,
    roof: true,
    wheel: 'left',
    engine: '2.0L4'
};

const sedan = {
    doors: 4,
    __proto__: car
};

const lada = {
    color: 'baklajan',
    __proto__: sedan
};
/////////////////////////////////