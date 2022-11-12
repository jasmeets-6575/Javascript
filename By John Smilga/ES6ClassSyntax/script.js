class Account {
    constructor(name, initialBalanace) {
        this.name = name;
        this.balance = initialBalanace;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Hello ${this.name}, your balance is ${this.balance}`);
    }
}

const john = new Account("john", 0);
console.log(john);
console.log(john.name);
john.deposit(500); 