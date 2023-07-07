let names: string[] = ["anna", "susy", "bob"];
let lastName = "Jordan";
let newArray: string[] = [];

for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  newArray.push(`${names[i]} ${lastName}`);
}
console.log(names);
console.log(newArray);
