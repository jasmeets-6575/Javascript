// function init() {
//     var firstName = "John";
//     console.log("I am Init");

//     function sayFirstName() {
//         console.log(firstName);
//     }
//     sayFirstName();
// }

// init();

function doAddition(x) {
    return function (y) {
        return x + y;
    };
}

// var add5 = doAddition(4);
// console.log(add5(5));

console.log(doAddition(5)(5));

// doAddition()(); also known as CURRYING ;