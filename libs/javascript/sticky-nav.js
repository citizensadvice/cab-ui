$(window).load(function(){

    //var step1 = $('#step1').position().top - 450;
    //$('.steps--navigation').css({ 'margin-top': step1 });

    var height = $('#footer').height();
    $(".sticker").sticky({ topSpacing: 20, bottomSpacing: height + 80 });
    $(".js-make-sticky").sticky({ topSpacing: 20, bottomSpacing: height + 20 });
    $(".steps--navigation").sticky({ topSpacing: 20, bottomSpacing: height + 80 });
});

$(document).ready(function () {

    //smoothscroll
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-55
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});