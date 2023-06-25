const car = {
    company:"Honda",
    model:"Amaze" ,
    year:2020 ,
    colors: ["white", "black", "silver"],
    hybrid:false,
    drive:function () {
        console.log("I want test drive");
    },
    stop() {
        console.log("Dont want test drive");
    }
};

console.log(car.company);
console.log(car.colors[0]);
car.drive();
car.stop();
