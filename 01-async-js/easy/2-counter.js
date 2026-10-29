/*
  ## Counter without setInterval

  Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
  (Hint: setTimeout)

<<<<<<< HEAD
// (Hint: setTimeout)

//recursive
let counter = 0;
const updateCounter = () => {
    counter++;
    console.log(counter);
    
    setTimeout(updateCounter, 1000) //recursive
}

setTimeout(updateCounter, 1000) //will call once


//another approach is stopwatch
let cntr = 0;
for (let i=0; i<10; i++) {
    setTimeout(() => {
        cntr++;
        console.log(cntr);
        
    }, (i+1)*1000)
}
=======
  Function requirements:
  - `createTimeoutCounter(onTick)`: Starts a counter that increments every 1 second (1000ms) without using `setInterval` (use `setTimeout`).
  - Calls `onTick(count)` on every tick with the updated count (1, 2, 3, ...).
  - Returns an object with a `stop()` method to cancel future timeouts, and optionally `getCount()`.

  Once you've implemented the logic, test your code by running:
  - `npm run test:easy-2`
*/

function createTimeoutCounter(onTick) {

}

module.exports = createTimeoutCounter;
>>>>>>> upstream/master
