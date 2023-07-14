interface Account {
  showBalance: () => void;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
}

function newAccount(name: string, initialBalance: number): Account {
  let balance = initialBalance;

  function showBalance(): void {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }

  function deposit(amount: number): void {
    balance += amount;
    showBalance();
  }

  function withdraw(amount: number): void {
    if (amount > balance) {
      console.log(`Hey, ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }

  return { showBalance, deposit, withdraw };
}

const john: Account = newAccount("john", 1000);
const bob: Account = newAccount("bob", 1000);

john.showBalance();
john.deposit(400);
john.deposit(1000);
john.withdraw(400);
john.balance = 10000; // TypeScript will show an error here
john.withdraw(2001);
bob.showBalance();
bob.deposit(400);
