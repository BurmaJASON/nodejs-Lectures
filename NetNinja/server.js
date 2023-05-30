const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer((req,res)=> {
    // set header content type
    res.setHeader('Content-Type','text/html')

    // send an html file
    fs.readFile('./views/index.html',(err,data)=> {
        if(err) {
            console.log(err);
            res.end();
        } 
        // res.write(data);
        // res.end(); //Or you can just write
        res.end(data);

    })
});


server.listen(3000,'localhost',() => {
    console.log('listening for request on port 3000');
})