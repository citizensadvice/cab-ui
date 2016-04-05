jQuery(function($){
    // flag to allow clicking
    var clickAllowed = true;

    // click function
    $('.section-nav__heading').click(function(){
        if(clickAllowed) {
            $('.section-nav__heading').parent().toggleClass('expanded');
        }
    });

    // check if browser size is compatible with click event
    onResize = function() {
        if($(window).width() < 600){
            clickAllowed = true;
        } else {
            clickAllowed = false;
            $('.section-nav').removeClass('expanded');
        }
    }

    $(document).ready(onResize);
    $(window).bind('resize', onResize);
});