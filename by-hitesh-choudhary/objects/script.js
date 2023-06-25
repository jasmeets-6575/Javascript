var user = {
    firstName:"Mr. John",
    lastName:"Sharma",
    role:"Admin",
    age:23,
    male:true,
};
console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.age);
user.age=24;
console.log(user.age);
console.table(user);