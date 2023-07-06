const calculateTotal = function random(subTotal: number, tax: number) {
  return subTotal + tax;
};

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(50, 5);
const order3 = calculateTotal(25, 5);

console.log(order1, order2, order3);
