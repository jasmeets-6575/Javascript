import { random, people, Person } from "./utils/data";

const container = document.querySelector(".container") as HTMLElement;
const btn = document.querySelector(".btn") as HTMLButtonElement;

const showPeople = (): void => {
  const newPeople: string = people
    .map((person: Person) => {
      const { name, job }: Person = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join("");
  container.innerHTML = newPeople;
};

btn.addEventListener("click", () => {
  showPeople();
});
