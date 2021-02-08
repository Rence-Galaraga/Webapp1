const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
    console.log(req.url);

    let u = '';

    if(req.url == '/'){
        u += 'index.html';
        res.statusCode = 200;
    }else if (req.url == '/about'){
        u += 'About.html';
        res.statusCode = 200;
    }else if (req.url == '/contact'){
        u += 'Contact.html';
        res.statusCode = 200;
    }
    else if (req.url == '/css/materialize.min.css'){
        u += './css/materialize.min.css';
        res.statusCode = 200;
    }
    else if (req.url == '/js/materialize.min.js'){
        u += './js/materialize.min.js';
        res.statusCode = 200;
    }else{
        u += '404.html';
        res.statusCode = 404;
    }

    res.setHeader('Content-Type','text/html');
    fs.readFile(u , (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })
});

server.listen(6969,'localhost',() => {
    console.log('listening');
})
