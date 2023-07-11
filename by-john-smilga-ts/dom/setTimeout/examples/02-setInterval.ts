/* 
setInterval - runs function repeatedly, at specific intervals

- pass function reference 
- duration in ms (1000 ms = 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearInterval to cancel
*/

function showScore2(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

const firstID2 = setInterval(showScore2, 2000, "bobo", 45);
const secondID2 = setInterval(showScore2, 1000, "susan", 88);

// clearInterval(firstID);
