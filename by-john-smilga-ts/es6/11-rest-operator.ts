const fruit: string[] = ["apple", "orange", "lemon", "banana", "pear"];
const [first, second, ...fruits]: string[] = fruit;
// console.log(first, fruits);

const person: { name: string; lastName: string; job: string } = {
  name: "john",
  lastName: "smith",
  job: "developer",
};
const { job, ...rest }: { job: string; [key: string]: string } = person;
// const {  ...rest,job } = person;
// console.log(job, rest);

const testScores: number[] = [78, 90, 56, 43, 99, 65];

const getAverage = (name: string, ...scores: number[]): void => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};

getAverage(person.name, 78, 90, 56, 43);
getAverage(person.name, ...testScores);
