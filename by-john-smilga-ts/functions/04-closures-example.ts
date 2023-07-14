// Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBalance;
}

newAccount("susan", 500)();

const john = newAccount("john", 300);
const bob = newAccount("bob", 1000);

john();
bob();
