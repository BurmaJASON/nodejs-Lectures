const http = require("node:http")

const fs = require("node:fs")

http.createServer((req,res) => {
    const url = req.url;
    if(url == "/") {
        fs.readFile('./page/index.html',(err,data)=> {
            res.write(data);
            res.end();
        })
    }else if (url == "/about") {
        fs.readFile('./page/about.html',(err,data)=> {
            res.write(data);
            res.end()
        })
    }else {
        fs.readFile('./page/contact.html',(err,data) => {
            res.write(data);
            res.end();
        })
    }
}).listen(4000,() => console.log('server running on port 4000'))
