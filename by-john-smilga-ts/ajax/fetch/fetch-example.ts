const url: string = "./api/people.json";

const btn: HTMLButtonElement = document.querySelector(
  ".btn"
) as HTMLButtonElement;

btn.addEventListener("click", () => {
  fetch(url)
    .then((resp: Response) => resp.json())
    .then((data: any[]) => {
      displayItems(data);
    })
    .catch((err: Error) => console.log(err));
});

const displayItems = (items: any[]) => {
  const displayData: string = items
    .map((item) => {
      return `<p>${item.name}</p>`;
    })
    .join("");
  const element: HTMLDivElement = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
