  /* In Reg Functions (not arrow) "this"
determined by "HOW"!!! a function is invoked (left of .)

defaults to global - window
arrow functions - pump the breaks
*/

// console.log(this);

function showThis() {
    console.log(this);
  }
  
  const john = {
    name: 'john',
    showThis: showThis,
  };
  const bob = {
    name: 'bob',
    showThis: showThis,
  };
  
  john.showThis();
  bob.showThis();