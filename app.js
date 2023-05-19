// Experiment 2.1
process.nextTick(()=> console.log('this is process.nextTick 1'));
process.nextTick(()=> {
    console.log('this is process.nextTick 2');
    process.nextTick(() => {
        console.log('this is the inner next tick inside next tick');
    })
});
process.nextTick(()=> console.log('this is process.nextTick 3'));




Promise.resolve().then(() => console.log("this is Promise.resolve() 1"));

Promise.resolve().then(() => {
    console.log("this is Promise.resolve() 2");
    process.nextTick(()=> {
        console.log("this is the inner next tick inside Promise then block");
    })
})
Promise.resolve().then(() => console.log("this is Promise.resolve() 3"));




// Experiment 2

// Promise.resolve().then(() => console.log("this is Promise.resolve() 1"));

// process.nextTick(()=> console.log('this is process.nextTick 1'))

// console.log("Sync");



// Experiment 1

// console.log('consolelog 1');

// process.nextTick(()=> console.log("this is process.nextTick 1"))

// console.log('consolelog 2');


