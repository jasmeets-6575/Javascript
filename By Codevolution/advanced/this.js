// implicit binding

const person = {
    name: "vishwas",
    sayMyName: function () {
        console.log(`my name is ${this.name}`);
    }
};
// person.sayMyName();

//explicit binding

function sayMyName() {
    console.log(`My name is ${this.name}`);
}
// sayMyName.call(person);


// new binding

function Person(name) {
    // this = { }
    this.name = name
}
const p1 = new Person("john")
const p2 = new Person("batman")