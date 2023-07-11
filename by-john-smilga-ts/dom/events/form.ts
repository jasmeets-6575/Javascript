const form = document.getElementById("form") as HTMLFormElement;
const fName = document.getElementById("name") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;

form.addEventListener("submit", function (e: Event) {
  e.preventDefault();
  console.log("form submitted");
  console.log(fName.value);
  console.log(password.value);
});
