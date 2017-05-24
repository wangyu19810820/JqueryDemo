var fs = require('fs');

// var data = fs.readFileSync('logo.png');
// fs.writeFile('logo3.png', data);

var readCount = 0;

// var readStream = fs.createReadStream('buffer1.js');
var readStream = fs.createReadStream('1.jpg');
readStream.on('data', function (chunk) {
    readCount++;
    console.log('data emits');
    // console.log(Buffer.isBuffer(chunk));
    // console.log(chunk.toString('utf-8'));
    readStream.pause();
    setTimeout(function () {
        console.log('data pause end');
        readStream.resume()
    }, 500)
})
.on('readable', function () {
    console.log('data readable')
})
.on('end', function () {
    console.log('data end and read count:' + readCount)
})
.on('close', function () {
    console.log('data close')
})
.on('error', function (e) {
    console.log('data read error:' + e)
})