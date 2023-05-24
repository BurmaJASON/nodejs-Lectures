const fs = require("node:fs")

// const node =  fs.readFileSync('./note.txt')
// console.log(node.toString());

console.log('start program');

fs.readFile('./note.txt',(err,data)     => {
    if(err) throw err;
    console.log(data.toString());
})

console.log('end program');


