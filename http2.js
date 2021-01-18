const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    const readStream=fs.createReadStream('./static/index.html');
    // const readStream=fs.createReadStream('./static/yo.json');
    // const readStream=fs.createReadStream('./static/hi.png');

    //Write a header to let the client knwo aboutthe data
    res.writeHead(200,{'Content-type': 'text/html'});
    // res.writeHead(200,{'Content-type': 'application/json'});
    // res.writeHead(200,{'Content-type': 'image/png'});
    readStream.pipe(res);

}).listen(3000);