jQuery(function($){
    // flag to allow clicking
    var clickAllowed = true;

    // click function
    $('.side-nav-beta__button').click(function(){
        if(clickAllowed) {
            $('.side-nav-beta__button').parent().parent().toggleClass('expanded');
        }
    });

    // check if browser size is compatible with click event
    onResize = function() {
        if($(window).width() < 600){
            clickAllowed = true;
        } else {
            clickAllowed = false;
            $('.side-nav').removeClass('expanded');
        }
    }

    $(document).ready(onResize);
    $(window).bind('resize', onResize);
});