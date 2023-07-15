const unique: Set<any> = new Set();

const random: string = "third";

unique.add("first");
unique.add("second");
unique.add(random);
unique.add("first");
unique.add(4);

// const result = unique.delete('third');
// console.log(result);

const result: boolean = unique.delete("five");
// console.log(result);

const isValue: boolean = unique.has(4);
console.log(isValue);

console.log(unique);
