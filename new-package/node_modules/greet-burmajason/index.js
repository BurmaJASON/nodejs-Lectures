// const localModule = require("./path to localModule")
// const fs = require("fs");


const upperCase = require("upper-case").upperCase;

function greet(name) {
    console.log(upperCase(`hello ${name}, welcom to Burrma`));
}
greet("burmajason")
module.exports = greet;