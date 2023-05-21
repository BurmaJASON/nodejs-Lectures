setTimeout(() => console.log("this is setTimeout 1"),0)
setImmediate(() => console.log("this is setImmediate 1") )




// Experiment 11
// setImmediate(() => console.log('this is setImmediate 1'));
// setImmediate(() => {
//     console.log('this is setImmediate 2');
//     process.nextTick(() => console.log("this is process.nextTick 1"));
//     Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
// })
// setImmediate(() => console.log("this is setImmediate 3"))





















// Experiment 10 
// const fs = require("fs");
// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
//     setImmediate(() => console.log("this is inner setImmediate inside readFile "));
//     process.nextTick(() => console.log("this is process.nextTick inside readFile"));
//     Promise.resolve().then(() => console.log("this is Promise.resolve inside readFile"))

// })

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
// setTimeout(() => console.log("this is setTimeout 1"),0);
// setImmediate(() => console.log("this is setImmediate 1"))


// console.log("sync");






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