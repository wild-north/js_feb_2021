class Horse {
    constructor(name, milege = 11){
        this.name = name;
        this.milege = milege;
    }
    
    runAway(a) {
        return this.milege += a;
    }

}

let b = new Horse("Pegas");

b.runAway(13);



///// совесем немного креатива 


class Horse {
    constructor(name, milege = 11){
        this.name = name;
        this.milege = milege;
    }
    
    runAway(endOfLearningJavaScript) {
        if (endOfLearningJavaScript + this.milege >= 24) {
            alert("СЕРГЕЙ СВОБОДЕН");

        } else (endOfLearningJavaScript + this.milege < 24); {
            return endOfLearningJavaScript += this.milege;

        }

    }

}

let b = new Horse("Sergey");

b.runAway(13);
b.runAway(10);