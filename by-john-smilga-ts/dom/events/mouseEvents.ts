const meHeading = document.querySelector("h1") as HTMLElement;
const meBtn = document.querySelector(".btn") as HTMLElement;

meBtn.addEventListener("click", function () {
  console.log("you clicked me");
});
meBtn.addEventListener("mousedown", function () {
  console.log("down");
});
meBtn.addEventListener("mouseup", function () {
  console.log("up");
});

meHeading.addEventListener("mouseenter", function () {
  heading.classList.add("blue");
});
meHeading.addEventListener("mouseleave", function () {
  heading.classList.remove("blue");
});
