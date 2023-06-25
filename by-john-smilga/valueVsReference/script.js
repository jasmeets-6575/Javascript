let person = {name: "bob"};
let person2 = {...person};
person2.name = "susy";
console.log(`The name of the 1st person is ${person.name}`);
console.log(`The name of the 2st person is ${person2.name}`);