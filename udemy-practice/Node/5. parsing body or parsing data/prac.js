// module files
const http = require('http');
const fs = require('fs');

// pages
const page404 = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page Not Found</title>
</head>
<body>
<div style="text-align: center;padding: 50px 0px">
    <h1>Page Not Found</h1><br />
    <h4>404</h4>
</div>
</body>
</html>
`;

const namePage = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Name Page</title>
</head>
<body>
<h1>Enter Details</h1>
<form action="/message" method="POST">
    <input type="text" name="username" />
    <button type="submit">send</button>
</form>
</body>
</html>
`

// create server
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // console.log(req)
    // console.log("requesting url => "+req.url)
    // console.log("requesting url => "+req.headers)
    // console.log("requesting url => "+req.method)

    if(url === '/'){
        res.write(namePage);
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const data = []
        req.on('data', (chunks) => {
            // console.log(chunks)
            data.push(chunks);
        })
        req.on('end', ()=> {
            const parsedData = Buffer.concat(data).toString()
            const message = parsedData.split("=")[1]
            console.log(message)
            fs.writeFileSync("user.txt",`User name is = ${message}`);
        })
        res.statusCode = 302; // for redirect
        res.setHeader('Location','/')
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(page404);
    res.end();
})

// calling server
server.listen(3000)