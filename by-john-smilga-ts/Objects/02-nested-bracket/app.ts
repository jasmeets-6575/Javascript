// nested objects
// set variable as property value
// dot notation vs bracket notation
type Person = {
  name: string;
  age: number;
  married: boolean;
  siblings: string[];
  greet: (name: any) => void;
  sayHello(name: any): void;
  job: {
    title: string;
    company: {
      name: string;
      address: string;
    };
  };
  "random-value": string;
};
const age = 40;
let random = "random-value";
random = "age";
const person: Person = {
  name: "john",
  age: age,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: "developer",
    company: {
      name: "coding addict",
      address: "123 main street",
    },
  },
  "random-value": "random",
};

console.log(person.job.title);
console.log(person.job.company.address);
console.log(person);
console.log(person["name"]);
console.log(person["random-value"]);

console.log(person[random]);
