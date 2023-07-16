const heading1 = document.querySelector(".one") as HTMLElement;
const heading2 = document.querySelector(".two") as HTMLElement;
const heading3 = document.querySelector(".three") as HTMLElement;

const btn = document.querySelector(".btn") as HTMLButtonElement;
const container = document.querySelector(".img-container") as HTMLElement;
const url = "https://source.unsplash.com/random";
btn.addEventListener("click", () => {
  loadImage(url)
    .then((taco: HTMLImageElement) => container.appendChild(taco))
    .catch((err: Error) => console.log(err));
});

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error(`Failed to load image from the source: ${url}`));
    });
    img.src = url;
  });
}
