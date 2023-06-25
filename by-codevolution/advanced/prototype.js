function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

const person1 = new Person ("Bruce", "wayne")
const person2 = new Person ("Clark", "kent")

Person.prototype.getFullName = function  () {
    return this.firstName + ' ' + this.lastName
}

console.log(person1.getFullName());
console.log(person2.getFullName());