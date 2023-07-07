//map
// does return a new array
// does not change the size
// uses values from original array whne making new one

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "Peter", age: 22, position: "designer" },
  { name: "Susy", age: 25, position: "Boss" },
  { name: "Anna", age: 27, position: "manager" },
];

const ages = people.map(function (person) {
  return person.age + 20;
});
const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age - 5,
  };
});

const fnames = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

console.log(newPeople);
