const person: { name: string; age: number; status: string } = {
  name: "john",
  age: 25,
  status: "student",
};

const result: [string, any][] = Object.entries(person);
console.log(result);

const newResult: string[] = result.map((item: [string, any]) => {
  const [first, second] = item;
  console.log(first, second);
  return first;
});
console.log(newResult);

for (const item of result) {
  const [first, second] = item;
  console.log(first, second);
}
