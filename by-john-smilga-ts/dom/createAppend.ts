// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore("element", "location");

const resu = document.querySelector("#result")!;
const firs = document.querySelector(".red") as HTMLElement;

// create empty element

const bodyDiv = document.createElement("div");
// create text node
const text = document.createTextNode("a simple body div");
bodyDiv.appendChild(text);

// document.body.appendChild(bodyDiv);
document.body.insertBefore(bodyDiv, resu);

const heading = document.createElement("h2");
const headingText = document.createTextNode("dynamic heading");
heading.appendChild(headingText);
heading.classList.add("blue");

// result.appendChild(heading);
resu.insertBefore(heading, firs);

console.log(resu.children);
