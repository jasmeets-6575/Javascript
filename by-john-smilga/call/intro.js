// call - runs instantly, arguments - list of items
// apply - runs instantly , arguments - array of items
// bind - assign , use later , arguments - list of items 

const john = {
    name: 'john',
    age: 24,
    greet: function () {
      console.log(this);
      console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
    },
  };
  const susan = {
    name: 'susan',
    age: 21,
  };
  
  // john.greet();
  
  function greet() {
    console.log(this);
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
  }
  // this will fail
  
  // susan.greet();
  // greet();
  // const secondGreet = john.greet;
  // secondGreet();
  
  greet.call(john);
  greet.call(susan);
  greet.call({ name: 'peter', age: 30 });
  