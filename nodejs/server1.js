var http = require("http");
var server = http.createServer(function (req, res) {
    res.writeHead(200, {"ContentType": "text/plain"});
    res.end("Hello Node");
}).listen(8880, '127.0.0.1');
