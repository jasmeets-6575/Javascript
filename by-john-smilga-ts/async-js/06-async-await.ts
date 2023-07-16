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
    return "hello";
  } catch (error) {
    console.log(error);
    return "error";
  }
}
