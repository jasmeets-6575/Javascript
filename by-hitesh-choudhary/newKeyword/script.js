// New keyword in JavaScript is used to create an instance of an object that has a constructor function

var user = function (firstName, courseCount) {
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getcourseCount= function() {
        console.log(`Course Count is : ${this.courseCount}`);
    };
};

user.prototype.getFirstName = function () {
    console.log(`Yoou first name is : ${this.firstName}`);
};


var john = new user ("john", 2);
john.getcourseCount();
john.getFirstName();
// console.log(john); 

var sham = new user ("sham",4);
sham.getcourseCount();
sham.getFirstName();
// console.log(sham);