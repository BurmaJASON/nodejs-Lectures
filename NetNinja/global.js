// Global object
// console.log(global);

// global.setTimeout(() => {
//     console.log('setTimeout');
// },3000)


setTimeout(() => {
    console.log('setTimeout');
    clearInterval(int);
},3000);

const int = setInterval(() => {
    console.log('in the interval');
},1000)


console.log(__dirname);
console.log(__filename);