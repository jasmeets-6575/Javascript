const heading1 = document.querySelector(".one") as HTMLElement;
const heading2 = document.querySelector(".two") as HTMLElement;
const heading3 = document.querySelector(".three") as HTMLElement;

const btn = document.querySelector(".btn") as HTMLButtonElement;

btn.addEventListener("click", () => {});

const promise: Promise<number[]> = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve([1, 2, 4]);
  } else {
    reject(`there was an error, value is false`);
  }
});

promise
  .then((taco: number[]) => {
    console.log(taco);
  })
  .catch((err: string) => {
    console.log(err);
  });
