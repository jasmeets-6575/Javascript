type per = {
  name: string;
  age: number;
  status: string;
};

const person1: per = {
  name: "susan",
  age: 25,
  status: "resident",
};
const person2: per = {
  name: "bobo",
  age: 30,
  status: "tourist",
};

if (person2.age >= 18 && person2.status === "resident") {
  console.log("you can cast a vote");
} else {
  console.log("you are not eligible");
}
