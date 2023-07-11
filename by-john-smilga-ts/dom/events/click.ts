// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector(".btn") as HTMLElement;
const cHeading = document.querySelector("h2") as HTMLElement;

btn.addEventListener("click", function () {
  cHeading.classList.add("red");
});
