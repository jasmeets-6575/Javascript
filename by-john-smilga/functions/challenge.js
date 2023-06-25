// function calculateTotal(subtotal,tax) {
    // // const total = subtotal+tax;
    // // return total; 
    // return subtotal+tax;
// }
// console.log(calculateTotal(500,50));


const calculateTotal = function (subtotal,tax) {
    return subtotal+tax;
};

const order1 = calculateTotal(100,10);
const order2 = calculateTotal(500,50);
const order3 = calculateTotal(200,20);

console.log(order1, order2, order3);