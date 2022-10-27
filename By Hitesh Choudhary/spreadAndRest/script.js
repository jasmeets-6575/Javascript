// var returnedValue = Math.max(2,4,6,9,3,8,7,1)
// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj, {a:1,b:3,c:5} , {x:2,y:6,z:8});
// console.log(myObj);

function sumOne(a,b){
    return a+b;
}

var myA= [5,4];
// console.log(sumOne(...myA)); // spread Operator

function sumTwo(...args){
    console.log(args);
    let sum = 0;
    for (const arg of args) {
        sum += arg;              //  sum = sum + arg
    }
    return sum;
}
console.log(sumTwo(3,5,4,43,4));


function sumTwo(a,b,...args){
    console.log(args);
    let multi = a*b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;              //  sum = sum + arg
    }
    return [sum,multi];
}
// console.log(sumTwo(2,5,8,6,4));
console.log(sumTwo(2,5,8,6,4));
