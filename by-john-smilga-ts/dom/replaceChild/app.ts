const idResult = document.querySelector("#result") as HTMLElement;
const redfirst = document.querySelector(".red") as HTMLElement;

const bodyDivs = document.createElement("div");
const texts = document.createTextNode("a simple body div");

bodyDiv.appendChild(texts);
document.body.insertBefore(bodyDivs, idResult);

const headings = document.createElement("h2");
const headingTexts = document.createTextNode("dynamic heading");
heading.appendChild(headingTexts);
heading.classList.add("blue");

idResult.insertBefore(headings, redfirst);

const smallHeading = document.createElement("h6");
const smallText = document.createTextNode(`i'm small heading text`);
smallHeading.classList.add("red");
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDivs);
console.log(idResult.children);
