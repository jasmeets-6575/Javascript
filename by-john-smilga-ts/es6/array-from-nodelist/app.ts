const p: NodeListOf<HTMLParagraphElement> = document.querySelectorAll("p");
const result: HTMLElement | null = document.getElementById("result");
const second: HTMLElement | null = document.getElementById("second");

let newText: string = Array.from(p)
  .map((item: HTMLParagraphElement) => `<span>${item.textContent}</span>`)
  .join(" ");

if (result) {
  result.innerHTML = newText;
}

const text: string = Array.from(
  document.querySelectorAll("p"),
  (item: Element) => {
    return `<span>${item.textContent}</span>`;
  }
).join(" ");

if (second) {
  second.innerHTML = text;
}
