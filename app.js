const fs = require("node:fs");

console.log("First");
const fileContent = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContent);

console.log("SEcond");
fs.readFile("./file.txt" , "utf8", (error,data) => {
    if (error) console.log(error);
    else console.log(data);
})

console.log("third");


fs.writeFileSync("./greet.txt", "Hello World!")
fs.writeFile("./greet.txt", " hello Saw ye htet", {flag : "a"}, (err) => {
    if(err) {
        console.log(err);
    }else {
        console.log('File written');
    }
})

