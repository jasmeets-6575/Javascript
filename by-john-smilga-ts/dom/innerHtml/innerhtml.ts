const list = document.getElementById("first") as HTMLUListElement;
const div = document.getElementById("second") as HTMLDivElement;
const item = document.querySelector(".item") as HTMLElement;

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const randomVar = "random value";

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">${randomVar}</li>
      <li>list item</li> <li>list item</li>`;
document.body.appendChild(ul);
