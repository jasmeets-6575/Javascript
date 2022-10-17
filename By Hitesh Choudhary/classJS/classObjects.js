// import User from "./script";

const User = require("./script")

const john = new User("John","John123@gg.com");
console.log(john.getInfo());

john.enrollCourse("React BootCamp");
john.enrollCourse("Angular BootCamp");
 
console.log(john.getCourseList());

let courses = john.getCourseList();

courses.forEach((c) => console.log(c));

console.log(courses.length);