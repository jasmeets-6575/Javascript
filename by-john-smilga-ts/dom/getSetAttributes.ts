// getAttribute();
// setAttribute();

const first1 = document.querySelector(".first")!;
const idValue = first1.getAttribute("id");
// console.log(idValue);

const link = document.getElementById("link")!;
const showLink = link.getAttribute("href");
console.log(showLink);

const last = link.nextElementSibling!;
last.setAttribute("class", "first");
last.textContent = "i also have a class of first";
console.log(last);

const links = document.querySelectorAll(".first");
console.log(links);
