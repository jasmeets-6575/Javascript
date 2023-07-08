// sum up all student.score values with reduce
// divide by the length of the students array
// assign to "averageScore" and log

const child = [
  { id: 1, name: "Peter", score: 80, favSubject: "Maths" },
  { id: 2, name: "Jordan", score: 75, favSubject: "Chemistry" },
  { id: 3, name: "Bobo", score: 90, favSubject: "English" },
  { id: 4, name: "Anna", score: 85, favSubject: "Physics" },
  { id: 5, name: "Susy", score: 70, favSubject: "Biology" },
];
const averageScore =
  child.reduce(function (scoreTotal, student) {
    // console.log(`total ${scoreTotal}`);
    // console.log(`marks getting ${student.score}`);
    // scoreTotal += student.score;
    return scoreTotal + student.score;
  }, 0) / child.length;

// console.log(averageScore);

// To add same subjects in Data
const subject = "math";

const marks = {};
marks[subject] = "some value";
console.log(marks);
