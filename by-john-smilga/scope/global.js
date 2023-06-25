// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be accesss anywhere in the program
// Gotchas : name collisions, modify by mistake

let name = 'bobo';
name = 'peter';

function calculate() {
  // some other code...
  console.log(name); 
  name = 'orange';
  function inner() {
    name = 'inner name value';
    console.log(`this is from inner function ${name}`);
  }
  inner();
}
calculate();

if (true) {
  // some other code...
  console.log(name);
  name = 'pants';
}

console.log(`my name is ${name} and I'm awesome`);
