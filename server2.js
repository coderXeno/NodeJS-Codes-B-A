const express=require('express');
const path=require('path');
const server=express();

server.use('/public',express.static(path.join(_dirname,'FileName')));

server.get('/',(req,res)=>{
    // res.send('hello world');
    res.sendFile(path.join(_dirname,'FileName','Forms1.html'));
});

server.listen(3000);