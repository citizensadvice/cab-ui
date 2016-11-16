$window = $(window);

$(function ($) {
    "use strict";

    // Resize main navigation

    var $more = $('.nav-list-primary-more');
    var $moreContainer = $('.main-nav__more-links');
    var $navItems = $('.top-item');
    // Used to check if we are in mobile mode (better support than matchMedia)
    var $mobileMenu = $('.js-toggle-menu');
    var ie8 = !!$('.ie8').length;
    var inResize = false;
    
    // Overflow is hidden to stop jumping as the page loads in the CSS
    // Allow it to show mega menus
    $('.main-nav').css('overflow', 'visible');

    // If we only have two items we will not need to resize
    if ($navItems.length < 2) {
        return;
    }

    function checkNav() {

        // IE8 is slightly hyperactive with resize.  Only run this once
        if (inResize) {
            return;
        }
        inResize = true;

        //If the site is being displayed on a mobile device, we will not need to resize
        if( !$mobileMenu.is(':visible') ){

            $navItems.hide();
            $more.show();
            var moreOffsetTop = $more.offset().top;
            $more.hide();
            $navItems.show();

            // Find the top offset of the first item
            var topOffset = $navItems.eq(0).offset().top;
            var lastTopOffset = $navItems.last().offset().top;

            // If the last item does not have the same top offset
            if (lastTopOffset > topOffset) {
                // Hide and show the more link
                $moreContainer.empty();
                hideItem($navItems.last());
                $more.show().css('visiblity', 'hidden');
               
                // Keep taking off items until the last item has the same offset as the first item
                for (var i = $navItems.length - 2; i >= 0; --i) {
                    var $item = $navItems.eq(i);
                    if ($item.offset().top > topOffset || $more.offset().top > moreOffsetTop) {
                        hideItem($item);
                    } else {
                        break;
                    }
                }
                $more.show().css('visiblity', 'visible');
            }
        } else {
            $more.hide();
            $navItems.show();
        }

        // IE8 will throw it's self into a never ending resize loop unless we do this
        if (ie8) {
            window.setTimeout( function() {
                inResize = false;
           }, 0 );
        } else {
            inResize = false;
        }
    }

    // Hide a menu item and add it to the more menu
    function hideItem($item) {
       
        var link = $item.children('a')[0];
        var html = '<li><a href="' + link.href + '">' + link.innerHTML + '</a></li>';
        $moreContainer.prepend(html);
        $item.hide();
    }

    $(window).on('resize', checkNav);
    checkNav();
});