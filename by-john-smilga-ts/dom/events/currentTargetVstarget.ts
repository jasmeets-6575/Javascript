const btns = document.querySelectorAll<HTMLElement>(".btn");

btns.forEach((btn: HTMLElement) => {
  btn.addEventListener("click", function (e: MouseEvent) {
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = 'green';
    console.log("current", e.currentTarget);
    console.log("target", e.target);
    (e.target as HTMLElement).style.color = "green";
  });
});
