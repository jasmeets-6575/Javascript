// reduce
// iterates , callback function
// reduces to a single value - number , array, object
const people = [
  { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
  { name: "Peter", age: 22, position: "designer", id: 2, salary: 300 },
  { name: "Susy", age: 25, position: "Boss", id: 3, salary: 400 },
  { name: "Anna", age: 27, position: "manager", id: 4, salary: 500 },
];

const Total = people.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money : ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 0);
console.log(Total);
