// // Closure

// function newAccount(name, initialBalance) {
//     let balance = initialBalance;
//     function showBalance() {
//         console.log(`hey ${name} , your balance is ${balance}`);
//     }
//     return showBalance;
// }
// newAccount("susan", 500)();

// const john = newAccount("john", 300);
// const bob = newAccount("Bob", 800);

// john();
// bob();


function newAccount(name, initialBalance) {
    let balance = initialBalance;
    function showBalance() {
        console.log(`Hey ${name}, your balance is ${balance}`);
    }
    function deposit(amount) {
        balance += amount;
        showBalance();
    }
    function withdraw(amount) {
        if (amount > balance) {
            console.log(`Hey, ${name}, sorry not enough funds`);
            return;
        }
        balance -= amount;
        showBalance();
    }
    return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = newAccount('john', 1000);
const bob = newAccount('bob', 1000);

john.showBalance();
john.deposit(400);
john.deposit(1000);
john.withdraw(400);
john.balance = 10000;
john.withdraw(2001);
bob.showBalance();
bob.deposit(400);
