class Account {
  name: string;
  balance: number;

  constructor(name: string, initialBalance: number) {
    this.name = name;
    this.balance = initialBalance;
  }

  static bank: string = "CHASE";

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john: Account = new Account("john", 200);
const bob: Account = new Account("bob", 0);

console.log(Account.bank);
console.log(bob);

john.deposit(300);
bob.deposit(1000);
