var Promise = require('bluebird')
var http = require('http')
var baseUrl = "http://www.imooc.com/learn/"
var htmlHandler = require('./handleImoocHtml1');

function getPageAsync(url) {
    return new Promise(function (resolve, reject) {
        console.log('正在爬取' + url)
        http.get(url, function (res) {
            var html = '';
            res.on('data', function(data){
                html += data;
            })
            res.on('end', function () {
                resolve(html)
                // console.log(html)
            })
        }).on('error', function (e) {
            console.log('获取数据出错')
            reject(e)
        });
    })
}

var vedioIds = [728, 348, 637]
var fetchCourceArray = []
vedioIds.forEach(function (id) {
    fetchCourceArray.push(getPageAsync(baseUrl + id))
})



Promise
    .all(fetchCourceArray)
    .then(function (pages) {
        var coursesData = []
        pages.forEach(function (html) {
            var courses = htmlHandler.filterChapters(html);
            coursesData.push(courses)
        });
        coursesData.forEach(function (element) {
            printCourseInfo(element)
        })
    })


function printCourseInfo(courseData) {
    console.log(courseData.title)
    // courseData.forEach(function (item) {
    //     var chapterTitle = item.chapterTitle
    //     console.log(chapterTitle);
    //     item.videos.forEach(function (video) {
    //         console.log(video.id + ":" + video.title)
    //     })
    // })
}