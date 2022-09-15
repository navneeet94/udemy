const page404 = require('./page404');
const home = require('./home');
const users = require('./users');
const fs = require('fs');


const pageHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.write(home.html);
        return res.end();
    }

    if (url === '/users'){
        res.write(users.html);
        return res.end();
    }

    if (url === '/create-user' && method === 'POST'){
        const data = []

        req.on('data', chunks => {
            console.log(chunks);
            data.push(chunks);
        });

        return req.on('end', () => {
            const parsedData = Buffer.concat(data).toString()
            console.log(parsedData)
            const username = parsedData.split("=")[1];
            console.log(username);
            fs.writeFileSync('created-user.txt',username);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        })

    }

    res.setHeader('Content-Type', 'text/html')
    res.write(page404.html)
    res.end();
}

module.exports = {
    handler:pageHandler
}