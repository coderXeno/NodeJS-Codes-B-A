const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream=fs.createWriteStream('example2.txt');
readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
});

// For Large Files that exceed the buffer limit
const readStream = fs.readStream('./largefile.txt','utf8');
readStream.on('data',(chunk)=>{
    console.log(chunk);
});