// Validating user entries using the JOI module of ExpressJS
//Convert to post json folder
const express=require('express');
const path=require('path');
const server=express();
const bodyParser=require('body-parser');
const Joi=require('joi');
const { required } = require('joi');

server.use('/public', express.static(path.join(__dirname,'FileName')));
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'FileName','Forms1.html'));
});

server.post('/',(req,res)=>{
    console.log(req.body);
    const schema=Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required(),
        name: Joi.string()
    });
    Joi.validate(req.body,schema,(err,result)=>{
        if(err){
            console.log(err);
            res.send("An error has occurred");
        }
        console.log(result);
        res.send("Done!");
    });
    //Database Work here
});

server.listen(3000);