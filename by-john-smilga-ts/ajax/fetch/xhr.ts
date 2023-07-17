const btn: HTMLButtonElement = document.querySelector(
  ".btn"
) as HTMLButtonElement;
const url: string = "./api/people.json";

btn.addEventListener("click", () => {
  getData(url);
});

function getData(url: string) {
  const xhr: XMLHttpRequest = new XMLHttpRequest();
  console.log(xhr);

  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const data: any[] = JSON.parse(xhr.responseText);
      const displayData: string = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join("");
      const element: HTMLDivElement = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  xhr.send();
}
