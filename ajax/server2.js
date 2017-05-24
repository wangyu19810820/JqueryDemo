/**
 * Created by Administrator on 2017/5/6.
 */
var http = require('http');
var url = require('url');

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    var arg = url.parse(req.url, true).query;
    console.log(arg);
    console.log(arg.callback + '({"success":true,"msg":"aa"})');
    res.end(arg.callback + '({"success":true,"msg":"aa"})');
}).listen(3000, '127.0.0.1', () => {
    console.log("aaa")
})