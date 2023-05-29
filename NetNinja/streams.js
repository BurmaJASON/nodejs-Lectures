const fs = require('fs');


// Read stream
const readStream = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf-8'});

readStream.on('data',(chunk)=> {
    console.log('------NEW CHUNK------');
    console.log(chunk);
})