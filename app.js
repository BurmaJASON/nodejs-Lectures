// Experiment 8 
const fs = require("fs");
fs.readFile(__filename, () => {
    console.log("this is readFile 1");
})

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
setTimeout(() => console.log("this is setTimeout 1"),0);

console.log("sync");






// Experiment 7

// The Order of exceution can never be guarnateed with delay 0ms
// const fs = require("fs");

// setTimeout(() => console.log("this is setTimeout 1"),0);

// fs.readFile(__filename, () => {
//     console.log("this is read file 1");
//     process.nextTick(() => console.log("this is process.nextTick 1"))
// })









// Experiment 6

// const fs = require("fs");

// fs.readFile(__filename, () => {
//     console.log("This is readFile");
// })

// process.nextTick(() => console.log("this is process.nextTick 1"))
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

// console.log("sync");