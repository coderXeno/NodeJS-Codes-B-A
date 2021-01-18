// Working with EJS templates
const express=require('express');
const path=require('path');
const server=express();

server.use('/public',express.static(path.join(__dirname,'FileName')));
server.set('view engine','ejs');

server.get('/:userQuery',(req,res)=>{
    // res.send('hello world');
    res.render('index',{data : {userQuery : req.params.userQuery , 
                                searchResult : ['property1','property2','property3'], loggedIn: true, username: 'King DSG'}});
});

server.listen(3000);