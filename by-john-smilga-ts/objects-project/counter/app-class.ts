function getElement(selection: string): Element {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Counter {
  counter: Element;
  value: number;
  resetBtn: HTMLButtonElement;
  increaseBtn: HTMLButtonElement;
  decreaseBtn: HTMLButtonElement;
  valueDOM: HTMLElement;

  constructor(element: Element, value: number) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset") as HTMLButtonElement;
    this.increaseBtn = element.querySelector(".increase") as HTMLButtonElement;
    this.decreaseBtn = element.querySelector(".decrease") as HTMLButtonElement;
    this.valueDOM = element.querySelector(".value") as HTMLElement;
    this.valueDOM.textContent = this.value.toString();

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value.toString();
  }

  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value.toString();
  }

  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value.toString();
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
