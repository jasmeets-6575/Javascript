const items: HTMLElement[] = Array.from(document.querySelectorAll(".number"));

const updateCount = (el: HTMLElement) => {
  const value: number = parseInt(el.dataset.value as string);
  const increment: number = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue: number = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 1);
  // console.log(increaseCount);
};

items.forEach((item: HTMLElement) => {
  updateCount(item);
});
