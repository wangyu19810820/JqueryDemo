/**
 * Created by Administrator on 2017/5/13.
 */
var fs = require('fs');
fs.readFile('logo.png', function (err, origin_buffer) {
    console.log(Buffer.isBuffer(origin_buffer))
    // fs.writeFile('logo1.png', origin_buffer, function (err) {
    //     if (err) console.log(err)
    // })
    var base64Image = origin_buffer.toString('base64')
    var decodeBuffer = new Buffer(base64Image, 'base64');
    console.log(base64Image)
    console.log(Buffer.compare(origin_buffer, decodeBuffer))
    fs.writeFile('logo2.png', decodeBuffer, function (err) {
        if (err) console.log(err)
    })
});