/* In Reg Functions (not arrow) "this"
determined by "HOW"!!! a function is invoked (left of .)

defaults to global - window
arrow functions - pump the breaks
*/

// console.log(this);
type Person = {
  name: string;
  showThis: () => void;
};

function showThis() {
  console.log(this);
}

const john: Person = {
  name: "john",
  showThis: showThis,
};
const bob: Person = {
  name: "bob",
  showThis: showThis,
};

john.showThis();
bob.showThis();

showThis();
const btn1 = document.querySelector(".btn-1") as HTMLElement;
const btn2 = document.querySelector(".btn-2") as HTMLElement;

btn1.addEventListener("click", showThis);
btn2.addEventListener("click", showThis);
btn2.addEventListener("click", function () {
  showThis();
});
