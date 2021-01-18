//The HTTP Module to create a web server
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World from Node js');
        res.end();
    }
    else{
        res.write("using some other domain");
        res.end();
    }
    // res.write('Hello World from Node js');
    // res.end();
});

server.listen('3000');