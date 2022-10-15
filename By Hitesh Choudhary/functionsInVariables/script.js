// Define a function that can answer the role of a user .
// A user can be on following roles:
// admin - gets full access 
// subadmin - gets access to create / delete messages 
// testprep - gets access to create / delete tests 
// user - gets access to consume data
// other - A trial User .

// Input : getUserRole(name,role)

function getUserRole(name,role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            // break;
        case "subadmin":
            return `${name} is sub-admin with access to create / delete messages `
            // break;
        case "testprep":
            return `${name} is test-prep with access to create / delete tests `
            // break;
        case "user":
            return `${name} is User with access to create / delete tests `
            // break;    
        default:
            return `${name} is a trial user ` ;
            // break;
    }
}

console.log(getUserRole("JS","subadmin") );
// or we can write as
var getRole=getUserRole("SN","testprep");
console.log(getRole);