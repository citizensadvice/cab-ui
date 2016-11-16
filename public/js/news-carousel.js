$(function ($) {
    // To do - allow as many news items as required
    // To do - test no js
    // To do - check with feed
    // To do - check in old IE
    
    var currentClass = 'top-news__navigation__item--current';
    var $parent = $('.js-news-carousel');
    var $newsItems = $parent.find('.top-news__article');
    var $navigationItems = $parent.find('.top-news__navigation__item');
    var index = 0;
    var match;

    // Add index items so each control knows which news article is will be controlling
    $navigationItems.each(function (i) {
        $(this).attr('data-item', i);
    });

    $navigationItems
        .on('mouseenter focusin', function () {
            var $this = $(this);
            index = parseInt($this.attr('data-item'), 10);
            $newsItems.hide().eq(index).show();
            $navigationItems.removeClass(currentClass);
            $this.addClass(currentClass);
        });
    
    // Show them all on a mobile
    if (window.matchMedia) {
        match = matchMedia("(max-width:767px)");
        match.addListener(function (match) {
            if (match.matches) {
                $newsItems.show();
            } else {
                $navigationItems.eq(index).triggerHandler('mouseenter');
            }
        });
    }

    if ( !match || !match.matches ) {
        $navigationItems.eq(0).triggerHandler('mouseenter');
    }

});