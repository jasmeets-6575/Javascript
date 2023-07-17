const promise = new Promise<number[]>((resolve, reject) => {
  let value: boolean = false;
  if (value) {
    resolve([1, 2, 4]);
  } else {
    reject(`There was an error, value is false`);
  }
});

promise
  .then((taco: number[]) => {
    console.log(taco);
  })
  .catch((err: string) => {
    console.log(err);
  });
