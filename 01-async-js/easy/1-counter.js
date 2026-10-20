// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second 




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



