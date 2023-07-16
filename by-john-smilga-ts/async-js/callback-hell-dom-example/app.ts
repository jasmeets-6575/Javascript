// callbacks, promises, async/await
const heading1 = document.querySelector(".one") as HTMLElement;
const heading2 = document.querySelector(".two") as HTMLElement;
const heading3 = document.querySelector(".three") as HTMLElement;

const btn = document.querySelector(".btn") as HTMLButtonElement;

btn.addEventListener("click", () => {
  setTimeout(() => {
    heading1.style.color = "red";
    setTimeout(() => {
      heading2.style.color = "green";
      setTimeout(() => {
        heading3.style.color = "blue";
      }, 1000);
    }, 2000);
  }, 1000);

  //
});
