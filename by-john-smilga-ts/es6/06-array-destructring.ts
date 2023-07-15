const fruits: string[] = ["orange", "banana", "lemon"];
const friends: string[] = ["john", "peter", "bob", "anna", "kelly"];

const [orange, banana, lemon] = fruits;
console.log(orange, banana, lemon);

const [john, , enemy, bob, susan] = friends;
console.log(john, enemy, bob, susan);
