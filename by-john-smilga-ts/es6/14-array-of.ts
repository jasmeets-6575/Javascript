const example: (string | number | boolean)[] = ["one", 2, true];
// console.log(example);
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);

const friends: Array<string | number | boolean> = Array.of<
  string | number | boolean
>("john", 2, true);
console.log(friends);
