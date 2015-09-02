function onScroll(event){
    var scrollPos = $(document).scrollTop();

    $('.o2__link a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.o2__link').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });

    $('.o2fixed__link span').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("class"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.o2fixed__link').removeClass("active");
            currLink.parent().addClass("active");
            $(this).parent().show();
        }
        else{
            currLink.removeClass("active");
            $(this).parent().hide();
        }
    });

    $('.o2fixed__link span').click(function(){
        $('.o2mobile').addClass("open").css('opacity',1);
    });

    $('.o2mobile__link a').click(function(){
        $('.o2mobile').removeClass("open").css('opacity',0);
    });
}

