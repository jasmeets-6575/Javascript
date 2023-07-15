const udemy: string = "udemy";
const letters: string[] = [...udemy];

const boys: string[] = ["john", "peter", "bob"];
const girls: string[] = ["susan", "anna"];
const bestFriend: string = "arnold";

const friends: string[] = [...boys, bestFriend, ...girls];

console.log(friends);

// reference
// const newFriends = [...friends];
const newFriends: string[] = [...friends];
newFriends[0] = " karina";
console.log(newFriends);
console.log(friends);

const person: { name: string; job: string } = {
  name: "john",
  job: "developer",
};
const newPerson: { name: string; job: string; city: string } = {
  ...person,
  city: "chicago",
  name: "peter",
};
console.log(person);
console.log(newPerson);
