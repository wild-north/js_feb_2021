class Horse {
    constructor(name, mileage = 0){
        this.name = name;
        this.mileage = mileage;

        }

    runAway(value) { 
        this.mileage += value;
        Horse.prototype.totalMileage += this.mileage
        }

    }

const helper = {
    totalMileage: 0
};

Object.assign(Horse.prototype, helper);

const h1 = new Horse("idk");
const h2 = new Horse("idko");

h1.runAway(4);
h2.runAway(5)

/////// не обращай внимания это мои неудачные попытки 
//const tmp = Horse;

//Horse.prototype = helper;
//Horse.prototype.constructor = tmp;

 //Horse.prototype.runAway = function(value) { 
 //       this.mileage += value;
 //       return this.totalMileage += value;
 //       }
