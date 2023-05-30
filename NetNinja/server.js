const http = require('node:http')

const server = http.createServer((req,res)=> {
    // console.log(req.url,req.method);

    // set header content type
    res.setHeader('Content-Type','text/html')

    res.write('<header><link rel="stylesheet" href="#"></header>');
    res.write('<h2>hello burma</h2>');
    res.write('<p>hello again, burma</p>');
    res.end();
});


server.listen(3000,'localhost',() => {
    console.log('listening for request on port 3000');
})