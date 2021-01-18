const fs=require('fs');
//Read a Directory
fs.readdir('Test',(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
        for(let file of files){
            fs.unlink('./example/'+file,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('Successully Completed!!');
                }
            })
        }
    }
})