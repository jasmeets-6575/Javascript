var user = {
    firstName:"Mr. John",
    lastName:"Sharma",
    role:"Admin",
    age:23,
    courseList:[],
    buyCourse:function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount:function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses` ;
    },
};

// var courseList=true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("react JS course");
console.log(user.getCourseCount());