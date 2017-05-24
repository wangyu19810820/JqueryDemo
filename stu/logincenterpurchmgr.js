/**
 * Created by Administrator on 2017/5/5.
 */
var http = require('http');
var queryString = require('querystring');

var postData = queryString.stringify({
    username:'admin',
    password:'1'
});

var options = {
    hostname: '127.0.0.1',
    port:8080,
    path:'/login',
    method:'POST',
    headers:{
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding':'gzip, deflate, br',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Cache-Control':'max-age=0',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded',
        'Cookie':'Webstorm-d364d7dc=6d98b4ec-989f-4d34-a4aa-fe58f780b440; _ga=GA1.1.834988302.1493257023; JSESSIONID=8CA5A33186A12D92859DDD0022BE3C6B',
        'Upgrade-Insecure-Requests':1
    }
};

var req = http.request(options, function (res) {
    console.log('res.statusCode:', res.statusCode);
    res.on('data', function (d) {
        console.log('data:' + d)
    });
    res.on('end', function () {
        console.log('end')
    })
}).on('error', function (e) {
    console.log('error1:' + e)
}).write(postData);