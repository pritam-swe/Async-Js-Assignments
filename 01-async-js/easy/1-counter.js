/*
  ## Create a counter in JavaScript

  We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript.
  It should go up as time goes by in intervals of 1 second.

<<<<<<< HEAD



let counter = 0;

const updateCounter = () => { //the callback fn
  counter++;
  console.log(counter);

  if (counter === 5) {
    clearInterval(intervalID);
  }
};

//call the setInterval
const intervalID = setInterval(updateCounter, 1000);




// //can i do it using setTimeout
// let cntr = 0
// const updateCntr = () => {cntr++; console.log(cntr)};

// for (let i=0; i<20; i++) {
//   setTimeout(updateCntr, (i+1)*1000)  //call updateCntr ONCE after 1s
// }
// //kind of a stopwatch



=======
  Function requirements:
  - `createCounter(onTick)`: Starts a counter that increments every 1 second (1000ms) using `setInterval`.
  - Calls `onTick(count)` on every interval tick with the updated count (1, 2, 3, ...).
  - Returns an object with a `stop()` method to clear the interval, and optionally `getCount()`.

  Once you've implemented the logic, test your code by running:
  - `npm run test:easy-1`
*/

function createCounter(onTick) {

}

module.exports = createCounter;
>>>>>>> upstream/master
