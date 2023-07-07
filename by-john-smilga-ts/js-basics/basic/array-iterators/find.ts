// find
// returns single instance - (in this case) object
// returns first match , if no match undefined
// great for getting unique value

const peoples = [
  { name: "bob", age: 20, position: "developer", id: 1 },
  { name: "Peter", age: 22, position: "designer", id: 2 },
  { name: "Susy", age: 25, position: "Boss", id: 3 },
  { name: "Anna", age: 27, position: "manager", id: 4 },
];
// const names = ["bob", "peter", "susy"];
// console.log(names.find(function (name) {
//     return name === "bob";
// }));

const per = peoples.find(function (person) {
  return person.id === 3;
});
// console.log(per.name);

const personT = peoples.filter(function (person) {
  return person.id === 3;
});
console.log(personT[0].name);
// 0 ???????
