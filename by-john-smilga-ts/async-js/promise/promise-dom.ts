const heading1 = document.querySelector(".one") as HTMLElement;
const heading2 = document.querySelector(".two") as HTMLElement;
const heading3 = document.querySelector(".three") as HTMLElement;

const btn = document.querySelector(".btn") as HTMLButtonElement;
btn.addEventListener("click", () => {
  addColor(1000, heading1, "red")
    .then(() => addColor(2000, heading2, "green"))
    .then(() => addColor(1000, heading3, "blue"))
    .catch((err: Error) => console.log(err));
});

function addColor(
  time: number,
  element: HTMLElement,
  color: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}
