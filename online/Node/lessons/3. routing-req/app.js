const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/'){
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Home Page</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
                <h1>Enter Details</h1>
                <form action="/message" method="POST">
                <input type="text" name="message" />
                <button type="submit">Send</button>
                </form>
            </body>
        </html>
        `);
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <!DOCTYPE html>
<html lang="en">
    <head>
        <title>First Node HTMl</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <h1>Hello this is a first node app</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nobis earum, voluptates velit magnam fugit reprehenderit. Beatae quibusdam soluta libero in reprehenderit!</p>
    </body>
</html>
    `);
    res.end();
})

server.listen(3000)