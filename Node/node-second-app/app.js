const http = require('http')
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write(`
        <html>
        <head><title>Enter Details</title></head>
        <body>
        <style>
            body{
                font-family: calibri
            }
        </style>
        <form action="/message" method="POST">
            <label>Enter name</label><br />
            <input type="text" name="message" />
            <button type="submit">Send</button>
        </form>
        </body>
        </html>
        `);
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const data = []
        req.on('data', (chunk) => {
            console.log(chunk);
            data.push(chunk);
        })
        req.on('end', () => {
            const parsedData = Buffer.concat(data).toString();
            // console.log(parsedData);
            const message = parsedData.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        })
    }

    res.setHeader('Content-Type','text/html');
    res.write(`
    <html>
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <h1>This is a dummy page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odio consectetur dolores facilis ab eos ipsum debitis, optio aspernatur maxime eum ipsam.</p>
        </body>
    </html>
    `);
    res.end();
})

server.listen(3000)