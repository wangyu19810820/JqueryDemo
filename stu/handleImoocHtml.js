/**
 * Created by Administrator on 2017/5/4.
 */
var cheerio = require('cheerio');

function handle(html) {
    // console.log(html);
    var $ = cheerio.load(html)
    var chapters = $('.chapter')
    var courseData = [];

    chapters.each(function (element) {
        var chapter = $(this)
        var chapterTitle = chapter.find('strong').contents().eq(2).text().trim();
        var videos = chapter.find('.video').children('li')


        var chapterData = {
            chapterTitle:'【' + chapterTitle + '】',
            videos:[]
        }
        videos.each(function (element) {
            var video = $(this).find('a');
            var videoTitle = video.contents().eq(2).text().trim().split('    ')[0];
            var videoId = video.attr("href").split('/video/')[1]
            chapterData.videos.push({
                title:videoTitle,
                id:videoId
            })
        })
        courseData.push(chapterData)
    })
    return courseData
}

exports.handle = handle