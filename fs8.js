const fs=require('fs');
const zlib=require('zlib');//Compression
const gunzip=zlib.createGunzip();//Uncompress a file
const readStream=fs.createReadStream('./example2.txt.gz');
const writeStream=fs.createWriteStream('uncompressed.txt');
//Short version for copying content from
//source to destination
readStream.pipe(fs.writeStream);
readStream.pipe(gunzip).pipe(fs.writeStream);