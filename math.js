const add = (a,b) => {
    return a + b;
};//you can just use exports.add


const subtract = (a,b) => {
    return a -b;
}//you can just use exports.subtract

module.exports = {
    add ,
    subtract
};