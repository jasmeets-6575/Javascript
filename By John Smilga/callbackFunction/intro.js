 function morning(name) {
    // console.log("good morning bobo");
    return `Good Morning ${name.toUpperCase()}`;
}
 function afternoon(name) {
    return `Good Afernoon ${name.repeat(3)}`;
}

function greet(name,cb){
    const myName = "John" ;
    console.log(`${cb(name)}, my name is ${myName}`);;
}
greet("bobo", morning) ;
greet("peter", afternoon) ;