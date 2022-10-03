// Create an application with following roles :
// admin - gets full access 
// subadmin - gets access to create / delete messages 
// testprep - gets access to create / delete tests 
// user - gets access to consume data

var users = "testprep";

switch(users) {
    case "admin": 
        console.log("You get full access");
        break;       
    case "subadmin":
        console.log("You gets access to create / delete messages ");
        break;
    case "testprep":
        console.log("You gets access to create / delete tests "); 
        break;
    case "user":
        console.log("Gets the access to READ the data ");
        break;
    default :   
        console.log("You are a Trial User");
        break;        
}