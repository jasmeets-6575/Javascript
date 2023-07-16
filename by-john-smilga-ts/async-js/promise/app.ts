// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback
const heading1 = document.querySelector(".one") as HTMLElement;
const heading2 = document.querySelector(".two") as HTMLElement;
const heading3 = document.querySelector(".three") as HTMLElement;

const btn = document.querySelector(".btn") as HTMLButtonElement;

btn.addEventListener("click", () => {});

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve([1, 2, 4]);
  } else {
    reject(`there was a error, value is false`);
  }
});
promise
  .then((taco) => {
    console.log(taco);
  })
  .catch((err) => {
    console.log(err);
  });
