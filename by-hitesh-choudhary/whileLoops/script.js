// const names = ["youtube","facebook","instagram","netflix","Amazon"]

// for (const n of names){
//     console.log(n)
// }

const names = {
    yt:"youtube",
    fb:"facebook",
    ig:"instagram",
    az:"Amazon"}

for (const n in names){
    console.log(`Shortcut is : ${n} and values is ${names[n]}`);
}