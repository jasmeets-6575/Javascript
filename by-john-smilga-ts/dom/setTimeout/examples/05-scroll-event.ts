/* 
Scroll Event - on element or document 
  window.addEventListener('scroll', function () {
  console.log(window.scrollY + 'px');
  console.log(window.scrollX + 'px');
});

document

scrollY - returns the number of pixels the document is currently scrolled along the vertical axis (pageYOffset)
scrollX - returns the number of pixels scrolled along the horizontal axis (pageXOffset)
*/

window.addEventListener("scroll", function () {
  console.log(window.scrollY + "px");
  console.log(window.scrollX + "px");
});

/////////////////////////////////////

/*
innerWidth - The read-only Window property the interior width of the window in pixels

innerHeight - The read-only property of the Window interface returns the interior height of the window in pixels

The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

 */

console.log("height : " + window.innerWidth);
console.log("width : " + window.innerHeight);

const btn = document.querySelector(".btn") as HTMLElement;
const box = document.querySelector(".box") as HTMLElement;

btn.addEventListener("click", function () {
  const values = box.getBoundingClientRect();
  console.log(values);
});

/////////////////////////////////////

/*
The resize event fires when the document view (window) has been resized.


 */

window.addEventListener("resize", function () {
  console.log(window.innerWidth);
});
