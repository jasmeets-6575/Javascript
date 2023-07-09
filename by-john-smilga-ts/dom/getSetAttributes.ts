const first1 = document.querySelector(".first") as HTMLElement;
const idValue = first1.getAttribute("id");
// console.log(idValue);

const link = document.getElementById("link") as HTMLAnchorElement;
const showLink = link.getAttribute("href");
console.log(showLink);

const last = link.nextElementSibling as HTMLElement;
last.setAttribute("class", "first");
last.textContent = "I also have a class of first";
console.log(last);

const links = document.querySelectorAll(".first");
console.log(links);
