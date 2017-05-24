/**
 * Created by Administrator on 2017/5/13.
 */
var fs = require('fs')
var readStream = fs.createReadStream('1.jpg')
var writeStream = fs.createWriteStream('2.jpg')

readStream.on('data', function (chunk) {
    if (writeStream.write(chunk) === false) {
        console.log('readstream pause, because writestream still cached')
        readStream.pause()
    }
})
.on('end', function () {
    writeStream.end()
})

writeStream.on('drain', function () {
    console.log('write stream drain, resume readstream')
    readStream.resume()
})