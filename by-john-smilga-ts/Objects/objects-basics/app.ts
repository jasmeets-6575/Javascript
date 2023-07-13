// Objects Basics

/*
Objects are collections of key (property) value pairs
Property values can be strings, numbers, booleans, arrays and functions however if the property value is a function it's called a method
*/

// object literal syntax,{}
// dot notation
type Person = {
  name: string;
  age: number;
  married: boolean;
  siblings: string[];
  greet: (name: any) => void;
  sayHello(name: any): void;
  city?: string;
};
const person: Person = {
  name: "john",
  age: 25,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
};

console.log(person.name);

const personName = person.name;
console.log(personName);
person.age = 60;
person.city = "chicago";
// delete property
// delete person.siblings;
// const siblings = delete person.siblings;
// console.log(siblings);

console.log(person);
