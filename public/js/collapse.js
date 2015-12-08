(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top - 25
        });
        return this;
    };
})(jQuery);

$(document).ready(function($) {
    //$('.open').next.slideDown();
    $('.collapse').find('.collapse-toggle').click(function(){
        $(this).toggleClass("open");
        $(this).next().slideToggle();
        //$(this).goTo();
        if ( !$(this).parent().hasClass('side-nav') ) {
            $(this).goTo();
        }
    });
    $('.collapse').find('.collapse-toggle-close').click(function(){
        $(this).parent().slideToggle();
        $(this).parent().prev().toggleClass("open");
        $(this).parent().prev().goTo();
    });
});

// Collapsible tables
$(document).ready(function($) {
    $('.table-collapse--toggle').click(function(){
        $(this).toggleClass("active");
        $(this).next().toggle();
    });
});