let Students = [
  { id: 1, name: "Peter", score: 80, favSubject: "Maths" },
  { id: 2, name: "Jordan", score: 75, favSubject: "Chemistry" },
  { id: 3, name: "Bobo", score: 90, favSubject: "English" },
  { id: 4, name: "Anna", score: 85, favSubject: "Physics" },
  { id: 5, name: "Susy", score: 70, favSubject: "Biology" },
];

const highScores = Students.filter(function (student) {
  return student.score >= 80;
});
console.log(highScores);
