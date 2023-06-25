// params - when declare/define
// placeholders , local vars
// arguments - when invoke / call/ run
// use vars/values , multiple params , undefined 

// function hello() {
//     // logic
//     console.log("Hello there Bob");
// }
// function hello() {
//     // logic
//     console.log("Hello there Anna");    
// }
// function hello() {
//     // logic
//     console.log("Hello there Suzy");
// }

// // greet bob
// hello();

// // greet anna
// hello();// greet suzy
// hello();

function greet(name) {
    console.log("Hello there " + name );
}
// greet Bob;
greet("Bob")
// greet Anna;
greet("Anna")
// greet Suzy;
greet("Suzy")