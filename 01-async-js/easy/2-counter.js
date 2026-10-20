// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

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