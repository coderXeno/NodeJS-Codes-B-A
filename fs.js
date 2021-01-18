const fs=require('fs');
//Create a Text File
fs.writeFile('Write.txt',"This is an example",(err=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successully Completed!!");
        fs.readFile('Write.txt','utf8',(err,file)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(file);
            }
        })
    }
}))

//Rename your File
fs.rename('Example.txt','Yo.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successully Completed!!");
    }
});

//Append Data to the File
fs.appendFile('Yo.txt','Some data',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successully Completed!!");
    }
})

//Deletion of the Created File
fs.unlink('Yo.txt',(err)=>{
    if(err){
      console.log(err);
    }
    else{
        console.log("Done!!");
    }
});