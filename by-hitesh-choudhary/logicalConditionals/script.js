// User is only allowed to make a purchase when he is :
// logged in
// email verified
// cardInfo - valid
// If any one is missing, stop purchase 

var isLoggedIn =true;
var isEmailVerified=true;
var cardInfo=false;

// if(isLoggedIn){
// console.log("Logged IN successful");
// if(isEmailVerified){
// console.log("Email is verified");
//         if(cardInfo){
// console.log("You can make a Purchase");
// }
// }
// }

if (isLoggedIn && isEmailVerified && cardInfo ){
    console.log("You are ALLOwed to do a purchase");
}else{
    console.log("You CANT make it Now");
}