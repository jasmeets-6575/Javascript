/*
Property Lookup
If child does not have ask parent
Everything in JS is an Object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  // this.bank = 'Bank Of America';
}

const john = new Account("john", 200);
const bob = new Account("bob", 0);

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
// console.log(john.bank);
console.log(bob);
console.log({});
console.log([]);
