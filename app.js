const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();


readableStream.on("close", () => {
    console.log("this is form readableStream close event callback");
})

setImmediate(() => console.log("this is setIntermediate 1"));
setTimeout(() => console.log("this is setTimeout 1"),0)
Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
process.nextTick(() => console.log("this is process.nextTick"))



// Summary note for event loop

// 1.We use process.nextTick() method to queue into the nexttick queue
// 2.We resolve or reject a Promise to queue into the Promise queue
// 3.We use setTimeout or setInterval to queue into th e timer queue
// 4.Execute an async method to queue into the I/O queue
// 5. User setImmediate funtion to queue into the check queue 
// 6. Attach close event listeners to queue into the close queue