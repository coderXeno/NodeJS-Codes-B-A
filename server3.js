// Handling Post requests like email signup
const express=require('express');
const path=require('path');
const server=express();
const bodyParser=require('body-parser');

server.use('/public', express.static(path.join(__dirname,'FileName')));
server.use(bodyParser.urlencoded({extended: false}));

server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'FileName','Forms1.html'));
});

server.post('/',(req,res)=>{
    console.log(req.body);
    //Database Work here
    res.send('Done Posting data');
})

server.listen(3000);