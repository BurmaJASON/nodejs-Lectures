const http = require("node:http")

http.createServer((req,res) => {
    res.end("hello nodejs")
}).listen(4000,() => console.log('server running on port 4000'))
