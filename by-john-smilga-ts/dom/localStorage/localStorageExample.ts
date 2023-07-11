const friends: string[] = ["john", "peter", "bob"];
localStorage.setItem("friends", JSON.stringify(friends));

const storedFriends: string | null = localStorage.getItem("friends");
const values: string[] = storedFriends ? JSON.parse(storedFriends) : [];
console.log(values[2]);

let fruits: string[];

const storedFruits: string | null = localStorage.getItem("fruits");
if (storedFruits) {
  fruits = JSON.parse(storedFruits) as string[];
} else {
  fruits = [];
}
console.log(fruits);
// fruits.push('apple');
fruits.push("orange");
localStorage.setItem("fruits", JSON.stringify(fruits));
