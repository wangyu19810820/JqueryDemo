/**
 * Created by Administrator on 2017/5/13.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World11!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    app.use(express.static('public'));
    console.log('Example app listening at http://%s:%s', host, port);
});