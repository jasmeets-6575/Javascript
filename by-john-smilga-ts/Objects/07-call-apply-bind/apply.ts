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
    `Hello, I'm ${this.name} and I'm ${this.age} years old and i live in ${city}, ${country}`
  );
}

greet.call(john, "LA", "USA");
greet.call(susan, "LA", "USA");
greet.call({ name: "peter", age: 30 }, "LA", "USA");
// apply accepts Array ans calls accept list as arguments
greet.apply(john, ["LA", "USA"]);
greet.apply(susan, ["LA", "USA"]);
greet.apply({ name: "peter", age: 30 }, ["LA", "USA"]);
