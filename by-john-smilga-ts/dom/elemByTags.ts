const headings = document.getElementsByTagName("h2");
headings[0].style.color = "red";
console.log(headings.length);

const items = document.getElementsByTagName("li");
items[2].style.color = "orange";
const betterItems = [...items];

betterItems.forEach(function (item) {
  console.log(item);
});

console.log(items);
console.log(betterItems);

const listItems = document.getElementsByClassName("special");
listItems[2].style.color = "blue";
