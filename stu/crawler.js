/**
 * Created by Administrator on 2017/5/4.
 */
var http = require('http');
var htmlHandler = require('./handleImoocHtml');
var url = 'http://www.imooc.com/learn/348';

http.get(url, function (res) {
    var html = '';
    res.on('data', function(data){
        html += data;
    })
    res.on('end', function () {
        var courseData = htmlHandler.handle(html)
        printCourseInfo(courseData)
    })
});

function printCourseInfo(courseData) {
    courseData.forEach(function (item) {
        var chapterTitle = item.chapterTitle
        console.log(chapterTitle);
        item.videos.forEach(function (video) {
            console.log(video.id + ":" + video.title)
        })
    })
}