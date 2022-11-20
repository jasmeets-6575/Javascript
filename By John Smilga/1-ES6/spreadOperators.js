// Spread Operator ...

// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

// const udemy = 'udemy';
// const letters = [...udemy];
// console.log(letters);

// const boys = ['john', 'peter', 'bob'];
// const girls = ['susan', 'anna'];
// const bestFriend = 'arnold';

// const friends = [...boys, bestFriend, ...girls];
// console.log(friends);

// // const newFriends = [...friends];
// // reference
// const newFriends = friends;
// newFriends[0] = 'karina';
// console.log(newFriends);
// console.log(friends);


//in OBJECTS

const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'chicago', name: 'peter' };
// console.log(person);
// console.log(newPerson);


// FUNCTIONS ARGUMENTS

const numbers = [23, 45, 66, 88, 2345];

// console.log(Math.max(...numbers));

const john = ['john', 'sanders'];

const sayHello = (name, lastName) => {
//   console.log(`Hello ${name} ${lastName}`);
};

// sayHello(...john);


// DOM ELEMENTS

const headings = document.querySelectorAll('h1');
const result = document.getElementById('result');
const text = [...headings]
  .map(item => `<span>${item.textContent}</span>`)
  .join('');
console.log(text);

result.innerHTML = text;
