(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top - 25
        });
        return this;
    }
})(jQuery);

$(document).ready(function($) {
    $('#collapse').find('.collapse-toggle').click(function(){
        $(this).toggleClass("open");
        $(this).next().slideToggle();
        $(this).goTo();
    });
    $('#collapse').find('.collapse-toggle-close').click(function(){
        $(this).parent().slideToggle();
        $(this).parent().prev().toggleClass("open");
        $(this).parent().prev().goTo();
    });
});

