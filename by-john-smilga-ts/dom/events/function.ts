// select element
// addEventListener()
// what event, what to do

const fBtn = document.querySelector(".btn") as HTMLElement;
const fHeading = document.querySelector("h2") as HTMLElement;

function changeColors() {
  let hasClass = fHeading.classList.contains("red");
  if (hasClass) {
    fHeading.classList.remove("red");
  } else {
    fHeading.classList.add("red");
  }
}

fBtn.addEventListener("click", changeColors);
