const fs = require("node:fs")

const node =  fs.readFileSync('./note.txt')
console.log(node.toString());