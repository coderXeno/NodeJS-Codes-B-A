const fs=require('fs');
//Make a File
fs.mkdir('Test',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Successully Completed!!');
        fs.rmdir('Test',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Successully Completed!!")
            }
        })
    }
});