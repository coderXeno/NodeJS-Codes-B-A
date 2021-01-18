const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());
// The function below is invoked when we create custom middleware
 app.use((req,res,next)=>{ // Callback argument to the middleware function, called "next" by convention
     console.log(req.url,req.nethod); 
     next();
 });

 app.use('tester',(req,res,next)=>{
    console.log(req.url,req.nethod);
    req.property='property';
    next();
});


app.get('/',(req,res)=>{
    console.log(req.property);
    res.send('Testing out Middleware');
});
