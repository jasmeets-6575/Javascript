const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const { target } = e;
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = 'green';
    console.log("current", e.currentTarget);
    console.log("target", e.target);
    if (target instanceof HTMLElement) {
      target.style.color = "green";
    }
    e.target;
  });
});
