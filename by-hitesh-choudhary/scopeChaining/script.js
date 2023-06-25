var name = "JS";

console.log("Line number 3 " + name);

function sayName() {
    // var name = "Mr. Js";
    console.log("Line number 7 " + name);
     
    function sayNameTwo(){
        var name = "Jay S";
        console.log("Line number 12 " + name);
    }
    sayNameTwo();
}
sayName();
 