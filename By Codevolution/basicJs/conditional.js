// Conditional Statements
// If Else  else if  Switch

const num = 5 ;

if (num > 0) {
    console.log("number is positive");
}else if(num < 0) {
    console.log("number is negative");    
} else {
    console.log("number is Zero");
}

//  switch

const color = "red" ;

switch (color) {
    case "red" :
        console.log("color is red");
        break ;
    case "blue" :
        console.log("color is blue");
        break ;
    case "green" :
        console.log("color is green");
        break ;
    default :
        console.log("Not a valid color");    
}