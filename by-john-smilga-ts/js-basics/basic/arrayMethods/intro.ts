// Array Properties and Methods
let Name: string[] = ["john", "bobo", "barry", "olga", "ben"];

//length
console.log(Name.length);
console.log(Name[Name.length - 1]);

// concat
const lastNames = ["pepper", "onion", "banana"];
const allNames = Name.concat(lastNames);
console.log(allNames);
// reverse
console.log(allNames.reverse());

//unshift
allNames.unshift("susy");
allNames.unshift("anna");
console.log(allNames);
//shift
allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);
//push
allNames.push("susy");
console.log(allNames);
//pop
allNames.pop();
// allNames.pop();
console.log(allNames);
// splice - mutates original array
const specificNames = allNames.splice(0, 3);
console.log(specificNames);
console.log(allNames);
