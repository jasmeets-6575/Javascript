interface Person {
  firstName: string;
  lastName: string;
  sayName(): void;
}

const bob: Person = {
  firstName: "bob",
  lastName: "smith",
  sayName: function () {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 1000);
  },
};

const anna: Person = {
  firstName: "anna",
  lastName: "sanders",
  sayName: function (this: Person) {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName();
anna.sayName();
