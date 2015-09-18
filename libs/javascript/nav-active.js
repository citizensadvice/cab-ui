function onScroll(event){
    var scrollPos = $(document).scrollTop();

    $('.steps--navigation li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top + 100 <= scrollPos && refElement.position().top + 130 + refElement.height() > scrollPos) {
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });

    // Mobile
    $('.steps--navigation--fixed__link span').click(function(){
        $('.steps--navigation--overlay').addClass("open").css('opacity',1);
    });

    $('.steps--navigation--overlay__link a').click(function(){
        $('.steps--navigation--overlay').removeClass("open").css('opacity',0);
    });

    $('.steps--navigation--fixed__link span').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("class"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.steps--navigation--fixed__link').removeClass("active");
            currLink.parent().addClass("active");
            $(this).parent().show();
        }
        else{
            currLink.removeClass("active");
            $(this).parent().hide();
        }
    });

    $('.steps--navigation--overlay li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}