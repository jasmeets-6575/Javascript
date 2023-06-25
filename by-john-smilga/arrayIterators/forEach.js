// forEach
// does not return new array

const people = [
    {name: "bob", age: 20, position: "developer"},
    {name: "Peter", age: 22, position: "designer"},
    {name: "Susy", age: 25, position: "Boss"}
];

people.forEach(function (item){
    console.log(item.position.toUpperCase());
});