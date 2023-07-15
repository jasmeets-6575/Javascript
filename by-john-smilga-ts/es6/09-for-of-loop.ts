const fruits: string[] = ["apple", "orange", "banana", "peach"];
const longName: string = "John Smit Pepper III";
let shortName: string | null = "";

for (const letter of longName) {
  if (letter === " ") {
    continue;
  } else {
    shortName += letter;
  }
}
console.log(shortName);

for (const fruit of fruits) {
  if (fruit === "banana") {
    continue;
  }
  console.log(fruit);
}
