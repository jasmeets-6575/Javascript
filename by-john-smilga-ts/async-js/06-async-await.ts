const heading1 = document.querySelector(".one") as HTMLElement;
const heading2 = document.querySelector(".two") as HTMLElement;
const heading3 = document.querySelector(".three") as HTMLElement;

const btn = document.querySelector(".btn") as HTMLButtonElement;
btn.addEventListener("click", async () => {
  const result = await displayColor();
  console.log(result);
});

async function displayColor(): Promise<string> {
  try {
    const first = await addColor(1000, heading1, "red");
    await addColor(1000, heading2, "green");
    await addColor(1000, heading3, "blue");
    console.log(first);
    return "hello";
  } catch (error) {
    console.log(error);
    return "error";
  }
}

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
