const eoHeading = document.querySelector("h1") as HTMLElement;
const eoBtn = document.querySelector(".btn") as HTMLElement | null;
const link = document.getElementById("link") as HTMLAnchorElement;

eoHeading.addEventListener("click", (event: MouseEvent) => {
  console.log(event.currentTarget);
  console.log(this);
});

if (eoBtn) {
  eoBtn.addEventListener("click", function (event: MouseEvent) {
    const currentTarget = event.currentTarget as HTMLElement;
    currentTarget?.classList.add("blue");
    console.log(event.type);
  });
}

function someFunc(e: Event) {
  e.preventDefault();
}

link.addEventListener("click", someFunc);
