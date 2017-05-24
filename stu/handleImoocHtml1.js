/**
 * Created by Administrator on 2017/5/10.
 */

var cheerio = require("cheerio");

function filterChapters(html) {

    var $ = cheerio.load(html)
    // var chapters =
    var title = $("h2.l").text();

    var courseData = {
        title: title,
        videos: []
    }


    return courseData;
}

exports.filterChapters = filterChapters