// Blue Print
// Factory Functions and Constructor Functions
// Factory Functions

// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName: function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love JS`
//     );
//   },
// };
// const bob = {
//   firstName: 'peter',
//   lastName: 'sanders',
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

function createPerson(firstName, lastName) {
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
  
  const john = createPerson('john', 'anderson');
  john.fullName();
  const bob = createPerson('susy', 'apple');
  bob.fullName();
  const susy = createPerson('bob', 'jordan');
  susy.fullName();
  