// call - runs instantly, arguments - list of items
// apply - runs instantly, arguments - array of items
// bind - assign, use later, arguments - list of items
const john = {
  name: "john",
  age: 24,
};
const susan = {
  name: "susan",
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
  );
}

// assign, call it later
const susanGreat = greet.bind(susan, "toronto", "ca");
susanGreat();
