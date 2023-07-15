const person: string = "Peter Smith";
const employee: string = "23456-EMP-PETER-SMITH";
const manager: string = "23456-MAN-JOHN-DOE";

// starts with
console.log(person.startsWith("Pet"));
console.log(person.toLowerCase().startsWith("peter"));

// ends with
console.log(employee.endsWith("EMP", 6));
console.log(manager.endsWith("DOE"));
console.log(manager.endsWith("MAN", 9));

// includes
console.log(manager.includes("MAN"));
console.log(manager.toLowerCase().includes("mAN"));

const multiplyPeople = (person: string, amount: number): string =>
  person.repeat(amount);

// repeat
const people: string = multiplyPeople(person, 10);
console.log(people);
