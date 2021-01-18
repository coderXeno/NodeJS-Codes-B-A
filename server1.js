const express=require('express');
const server=express();

server.get('/',(req,res)=>{
    res.send('hello world');
});

server.get('/example',(req,res)=>{
    res.send('hitting example route');
});

server.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send('example with route params');
    res.send(req.params.name+":"+req.params.age);
});

server.listen(3000);