const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url , req.method, req.headers);
    // this is use for exit process loop
    // process.exit() 

    res.setHeader('Content-Type','text/html');

    res.write("<html>");
    res.write("<head><title>Hello Dummy Page</title></head>");
    res.write("<boby>This is Dummy content</body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);