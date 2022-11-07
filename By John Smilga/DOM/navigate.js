// select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node
//  children , firstChild , lastChild

const result = document.querySelector("#result");
const allChildren = result.childNodes;
// console.log(allChildren);

const children = result.children;
// console.log(children);

// console.log(result.firstChild);
// console.log(result.lastChild);



// #### Parent Element ####

// const heading = document.querySelector("h2")
// console.log(heading.parentElement.parentElement);
// const parent = heading.parentElement;
// parent.style.color= "red" ;



// previous sibling , nextSibling , return whitespace
// const first = document.querySelector(".first");
// const second = first.nextSibling.nextSibling.style.color ="red" ;
// console.log(second);

// const last = document.querySelector(".last");
// const third = last.previousSibling.previousSibling ;
// console.log(third);
// console.log(last.nextSibling.nextSibling);

//  easier way

const first = document.querySelector(".first");
first.nextElementSibling.style.color = "red";

const last = document.querySelector(".last");
last.previousElementSibling.style.color = "blue";