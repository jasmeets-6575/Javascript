const john: string = "John";
const peter: string = "Peter";

function sayHi(person: string = "Susan"): void {
  console.log(`Hi ${person}`);
}

const sayHello = (person: string = "BOB"): void =>
  console.log(`Hello ${person}`);

sayHi();
sayHello(peter);
