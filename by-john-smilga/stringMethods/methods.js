// String Properties and methods

let text = ' John Cenaaaaaaas';
let result = text.length ;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(2));
console.log(text.indexOf("o"));
console.log(text.charAt(text.length-1));

console.log(text.trim()); // Used for trim extra spaces in front and end in string
console.log(text.startsWith("John"));
console.log(text.trim().toLowerCase().startsWith("john"));

console.log(text.includes("ohn"));
console.log(text.slice(0,3));
console.log(text.slice(-4));