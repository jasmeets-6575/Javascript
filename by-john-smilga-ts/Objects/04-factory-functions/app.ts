interface Person {
  firstName: string;
  lastName: string;
  fullName: () => void;
}

const john: Person = {
  firstName: "john",
  lastName: "anderson",
  fullName: function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love JS`
    );
  },
};

const bob: Person = {
  firstName: "peter",
  lastName: "sanders",
  fullName: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

function createPerson(firstName: string, lastName: string): Person {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}

const John: Person = createPerson("john", "anderson");
John.fullName();
const Bob: Person = createPerson("susy", "apple");
Bob.fullName();
const susy: Person = createPerson("bob", "jordan");
susy.fullName();
