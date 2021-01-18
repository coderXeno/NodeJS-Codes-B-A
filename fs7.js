const fs=require('fs');
const zlib=require('zlib');//Compression
const gzip=zlib.createGzip();
const readStream=fs.createReadStream('./example.txt','utf8');
const writeStream=fs.createWriteStream('./example2.txt.gz');
//Short version for copying content from
//source to destination
//readStream.pipe(fs.writeStream);
readStream.pipe(gzip).pipe(fs.writeStream);