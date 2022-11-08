class Person{
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    };

    sayMyName() {
    return this.firstName + ' ' + this.lastName
    }
};

const classP1 = new Person('Bruce' , 'Wayne')
console.log(classP1.sayMyName());

class superHero extends Person {
    constructor(fName,lName){
    this.isSuperHero = true
    }
    fightCrime() {
        console.log('Fighting Crime');
    }
}
const batman = new superHero("Bruce","Wayne")
console.log(batman.sayMyName());