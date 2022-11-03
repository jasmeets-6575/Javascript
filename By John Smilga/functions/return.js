// 1 inch = 2.54cm

const wallHeight = 80;

function calc(value) {
    // // console.log("The value is cm is : " + value*2.54 +" cm");
    // const newValue = value*2.54;
    // return newValue;
    return value*2.54; 
}

const width = calc(100);
const height = calc(wallHeight);

const dimensions = [width,height];
console.log(dimensions);