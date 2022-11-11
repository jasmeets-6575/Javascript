function Account(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
    // this.deposit = function (amount) {
    //     this.balance += amount;
    //     console.log(`hello ${this.name}, your balance is ${this.balance}`);
    // };
}

const john = new Account("john", 200);
const bob = new Account("bob", 0);

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`hello ${this.name}, your balance is ${this.balance}`);
};

console.log(john.bank);
console.log(bob);

john.deposit(300);