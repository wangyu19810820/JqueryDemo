/**
 * Created by Administrator on 2017/5/14.
 */
;(function ($) {
    // $.extend({
    //     'nav':function () {
    //         $("ul").css({
    //             'list-style': 'none',
    //             'padding': 0,
    //             'margin': 0
    //         });
    //         $("ul li").css({
    //             'width': '80px',
    //             'height': '30px',
    //             'line-height': '30px',
    //             'background-color': 'black',
    //             'color': 'wheat',
    //             'text-align': 'center'
    //         });
    //         $("li.mainmenu").css({
    //             'float': 'left'
    //         });
    //         $(".mainmenu > ul").css({
    //             'display': 'none'
    //         });
    //         $('.mainmenu').on('mouseenter', function () {
    //             $(this).find('ul').stop().slideDown();
    //         }).on('mouseleave', function () {
    //             $(this).find('ul').stop().slideUp();
    //         });
    //     }
    // })
    $.fn.extend({
        'nav':function () {
            this.find("ul").css({
                'list-style': 'none',
                'padding': 0,
                'margin': 0
            });
            this.find("ul li").css({
                'width': '80px',
                'height': '30px',
                'line-height': '30px',
                'background-color': 'black',
                'color': 'red',
                'text-align': 'center'
            });
            this.find("li.mainmenu").css({
                'float': 'left'
            });
            this.find(".mainmenu > ul").css({
                'display': 'none'
            });
            this.find('.mainmenu').on('mouseenter', function () {
                $(this).find('ul').stop().slideDown();
            }).on('mouseleave', function () {
                $(this).find('ul').stop().slideUp();
            });
        }
    })
})(jQuery);