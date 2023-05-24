const http = require("node:http")

const fs = require("node:fs")

http.createServer((req,res) => {
    fs.readFile('./page/index.html',(err,data)  => {
        res.write(data);
        res.end()
    })
}).listen(4000,() => console.log('server running on port 4000'))
