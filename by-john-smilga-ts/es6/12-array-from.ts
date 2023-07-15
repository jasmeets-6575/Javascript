// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList,Set

const udemy: string = "udemy";
console.log(Array.from(udemy));

function countTotal(...numbers: number[]): void {
  let total: number = Array.from(numbers).reduce(
    (accumulator, currentValue) => (accumulator += currentValue),
    0
  );
  console.log(total);
}

countTotal(67, 89, 54, 100);
