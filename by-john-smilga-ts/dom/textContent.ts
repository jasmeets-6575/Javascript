// nodeValue
// textContent

const spe = document.getElementById("special") as HTMLDivElement;
const value = spe.firstChild?.nodeValue;
const easyValue = spe.textContent;

console.log(easyValue);
