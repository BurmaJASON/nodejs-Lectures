const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer((req,res)=> {
    // set header content type
    res.setHeader('Content-Type','text/html');
    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default :
            path += '404.html'
            break;
    }

    // send an html file
    fs.readFile(path,(err,data)=> {
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