// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

const p = [
  { name: "bob", age: 20, position: "developer" },
  { name: "Peter", age: 22, position: "designer" },
  { name: "Susy", age: 25, position: "Boss" },
  { name: "Anna", age: 27, position: "manager" },
];

const youngPeople = p.filter(function (person) {
  return person.age < 25;
});

const developers = p.filter(function (person) {
  return person.position === "developer";
});

console.log(youngPeople);
