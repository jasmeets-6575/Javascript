// JSON Javascript Object Notation
const btn = document.querySelector(".btn") as HTMLButtonElement;
const url = "./api/people.json";
btn.addEventListener("click", () => {
  getData(url);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    console.log(xhr);
  };
  xhr.send();
}
