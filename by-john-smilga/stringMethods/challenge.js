// function fullName(firstName,lastName) {
//     const fullName = `${firstName} ${lastName}`
//     return fullName.toUpperCase();
// }
// console.log(fullName("Jordan","peter"));

function fullName({firstName,lastName}) {
    const fullName = `${firstName} ${lastName}`
    return fullName.toUpperCase();
}

console.log(fullName({lastName:"smith" , firstName:"jordan"}));