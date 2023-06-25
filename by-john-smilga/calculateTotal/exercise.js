// functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 30, 50];

function calculateTotal(arr) {
    let total = 0 ;
    for (let i=0 ; i < arr.length ; i++) {
        total += arr[i]; 
    }
    if (total > 100) {
        console.log(`Whoa ! You are spending way too much`);
        return total;
    }
    console.log(`You are good.. The total is less than 100`);
    return total;
}
// calculateTotal(gas) ;
const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 3000, 500, 50]);

console.log({
    gas : gasTotal,
    food : foodTotal,
    random : randomTotal,
});