const eoHeading = document.querySelector("h1") as HTMLHeadingElement;
const eoBtn = document.querySelector(".btn") as HTMLButtonElement;
const link = document.getElementById("link") as HTMLElement;

eoHeading.addEventListener("click", (event) => {
  console.log(event.currentTarget);
  console.log(this);
});

eoBtn.addEventListener("click", function (event: { currentTarget }) {
  if (event.currentTarget) {
    event.currentTarget.classList.add("blue");
  }
});

function someFunc(e) {
  e.preventDefault();
}

link.addEventListener("click", someFunc);
