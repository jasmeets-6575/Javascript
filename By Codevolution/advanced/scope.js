// nesting function scope

let a = 10 ;
function outer () {
    let b = 20 ;
    function inner() {
        let c = 30 ; 
        console.log(b,a,c);
    }
    inner() ;
}
outer() ;
// console.log(outer.b);
