// className
// classList

const first = document.getElementById("first");
const second = document.getElementById("second")!;
const third = document.getElementById("third")!;

// const classValue = first.className;
// console.log(classValue);

// second.className = "colors" ;
second.className = "colors text";

// third.classList.add("colors");
// third.classList.add("text");
third.classList.add("colors", "text");
third.classList.remove("text");

let result = third.classList.contains("colors");
if (result) {
  console.log("Yes There is class");
} else {
  console.log("no there is no class");
}

const classValue = third.classList;
console.log(classValue);
