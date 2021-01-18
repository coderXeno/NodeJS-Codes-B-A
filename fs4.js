const fs=require('fs');
//Read a Directory
fs.readdir('Test',(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
        //List out the files in the created folder
        console.log(files);
    }
})