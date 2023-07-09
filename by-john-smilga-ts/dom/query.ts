// querySelector ("any css") - selects single or only first in multiple
// querySelectorAll ("any css") - selects all

const res = document.querySelector("#result") as HTMLElement;
res.style.backgroundColor = "blue";

const item = document.querySelector(".special") as HTMLElement;
// console.log(item)

const lastItem = document.querySelector("li:last-child") as HTMLElement;
// console.log(lastItem);

const list = document.querySelectorAll(".special");
list.forEach(function (item) {
  console.log(item);
  (item as HTMLElement).style.color = "yellow";
});
