const fs=require('fs');
//Make a Directory
fs.mkdir('Test',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        //Making a text file inside the created folder
        fs.writeFile('./Test/example.txt','123',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Successully Completed!!");
            }
        })
    }
});

// Delete the file inside the folder
 fs.unlink('./Test/example.txt',(err)=>{
     if(err){
         console.log(err)
     }
     else{
         console.log('Successully Completed!!');
     }
 });

// Delete the Folder itself
 fs.rmdir('Test',(err)=>{
     if(err){
         console.log(err);
     }
     else{
         console.log('Successully Completed!!');
     }
 });