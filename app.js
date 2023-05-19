const https = require("node:https")
// const crypto = require("node:crypto");


// process.env.UV_THREADPOOL_SIZE = 1;
const MAX_CALLS = 12;

const start = Date.now();
for(let i =0; i < MAX_CALLS; i++) {
    https
        .request("https://www.google.com", (res) => {
            res.on("data", () => {});
            res.on("end", () => {
                console.log(`Request: ${i + 1}`, Date.now() - start);
            })
        })
        .end();


    // crypto.pbkdf2("password", "salt", 100000, 512, "sha512" , () => {
    //     console.log(`Hash: ${i+1}`,Date.now() - start);
    // })
}


console.log("hello async");


// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt" , 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt" , 100000, 512, "sha512");


// console.log("Hash: ", Date.now() - start);

// console.log("Hello sync");