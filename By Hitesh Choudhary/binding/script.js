const john = {
    firstName : "John",
    role : "Admin",
    courseCount : 3,
    getInfo : function () {
        console.log (`
        First name is ${this.firstName}
        Role is ${this.role}
        and He is studying ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName : "Rock",
    role : "Sub-Admin",
    courseCount : 4,
}

//  john.getInfo.bind(dj)(); 
// same this we can write as 
var djInfo = john.getInfo.bind(dj);
djInfo();