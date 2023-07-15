const groceries: string[] = ["milk", "bread", "meat"];

let randomItem: string = "lemon";
randomItem = "milk";

const isIncluded: boolean = groceries.includes(randomItem);

// console.log(isIncluded);

if (groceries.includes(randomItem, 1)) {
  console.log(`Yeah! it's on the list`);
}
