class User {
    constructor(name , email){
        this.name = name;
        this.email = email;
    }
    courselist = [];
    getInfo() {
        return {name :this.name , email : this.email};
    }
    enrollCourse(name) {
        this.courselist.push(name);
    }
    getCourseList () {
        return this.courselist;
    }
}

module.exports = User ;