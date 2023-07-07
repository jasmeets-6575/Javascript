// forEach
// does not return new array

const peeps = [
  { name: "bob", age: 20, position: "developer" },
  { name: "Peter", age: 22, position: "designer" },
  { name: "Susy", age: 25, position: "Boss" },
];

peeps.forEach(function (item) {
  console.log(item.position.toUpperCase());
});
