let count = 0;

const value = document.querySelector("#value") as HTMLElement;
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn: Element) {
  btn.addEventListener("click", function (e) {
    const styles = (e.currentTarget as Element).classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("decrease")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count.toString();
  });
});
