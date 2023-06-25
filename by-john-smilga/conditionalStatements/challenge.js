const person1 = {
    name:"John",
    age:18,
    status:"resident",   
};
const person2 = {
    name:"smith",
    age:23,
    status:"resident",   
};
function stat() {
    if (person1.age >= 18 && person2.status == "resident") {
        console.log("you are eligible for voting");
    } else {
        console.log("you are not eligible for voting");
    }
};
stat();

// if (age>18 && status="resident") {
//     console.log("you are not eligible");
// }