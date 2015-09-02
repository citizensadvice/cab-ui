(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top - 20
        });
        return this;
    }
})(jQuery);

$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){
        $(this).toggleClass("open");
        $(this).next().slideToggle();
        $(this).goTo();
    });
    $('#accordion').find('.accordion-toggle-close').click(function(){
        $(this).parent().slideToggle();
        $(this).parent().prev().toggleClass("open");
        $(this).parent().prev().goTo();
    });
});