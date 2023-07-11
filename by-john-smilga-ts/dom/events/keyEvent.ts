const nameInput = document.getElementById("name") as HTMLInputElement;

// nameInput.addEventListener('keypress', function() {
//   console.log('you pressed a key');
// });
// nameInput.addEventListener('keydown', function() {
//   console.log('you pressed a key');
// });
nameInput.addEventListener("keyup", function () {
  console.log(nameInput.value);
});
