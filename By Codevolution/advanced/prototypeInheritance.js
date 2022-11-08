function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

Person.prototype.getFullName = function  () {
    return this.firstName + ' ' + this.lastName
}

function superHero(fName, lName) {
    person1.call(this, fName, lName)
    this.isSuperHero = true ;
};

superHero.prototype.fightCrime = function (){
    console.log("fighting crime");
}
superHero.prototype = Object.create(Person.prototype)

const batman = new superHero("Bruce","Wayne")
superHero.prototype.constructor = superHero
console.log(batman.getFullName());
