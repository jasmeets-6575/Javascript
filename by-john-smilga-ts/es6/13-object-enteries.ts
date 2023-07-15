const person = {
  name: "john",
  age: 25,
  status: "student",
};

const result = Object.entries(person);
console.log(result);

const newResult = result.map((item) => {
  const [first, second] = item;
  console.log(first, second);
  return first;
});
console.log(newResult);

for (const item of result) {
  const [first, second] = item;
  console.log(first, second);
}
