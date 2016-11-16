$(function ($) {
    "use strict";

    // Show more menu and mega menus

    var $navContainer = $('.nav-list-primary');
    // Used to hide the menus
    var $menus = $('.js-mega-menu, .js-more-menu');
    var timeout;

    $('.js-more-menu')
        .on('focusin mouseenter', function () {
            clearTimeout(timeout);
            $menus.removeClass('active');
            $(this).addClass('active');
        })
        .on('focusout mouseleave', function (e) {
            clearTimeout(timeout);
            var $this = $(this);
            // Set the timeout to 250ms on this one.
            // It feels better if it is a little more responive
            timeout = setTimeout(function () {
                $this.removeClass('active');
            }, e.type === 'mouseleave' ? 250 : 0);
        })
        .on('keyup', arrowKeyNavigation)
        .children('a')
            .on('click', false);

    // Megamenu drop downs

    $('.js-mega-menu')
        .on('focusin', function () {
            clearTimeout(timeout);
            showMegaMenu($(this));
        })
        .on('mouseenter', function () {
            var $this = $(this);
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                showMegaMenu($this);
            }, 500);
        })
        .on('focusout mouseleave', function (e) {
            clearTimeout(timeout);
            var $this = $(this);

            // For mouseleave wait half a second.
            // For keyboard just wait long one tick so the focus can move
            timeout = setTimeout(function () {
                $this.removeClass('active');
            }, e.type === 'mouseleave' ? 500 : 0);

        })
        .on('keyup', arrowKeyNavigation);

    function arrowKeyNavigation(e) {
        var $target = $();
        var $this = $(this);
        if (e.keyCode === 37) {
            $target = traverseVisible($this, 'prev');
        } else if (e.keyCode === 39) {
            $target = traverseVisible($this, 'next');
        }
        $target.children().first('a').trigger('focus');
    }

    function traverseVisible($item, direction) {
        do {
            if (direction === 'next') {
                $item = $item.next();
            } else if (direction === 'prev') {
                $item = $item.prev();
            }

        } while ($item[0] && !$item.is(':visible'));
        return $item;
    }


    function showMegaMenu($li) {

        // Don't run if alway open
        if ($li.hasClass('active')) {
            return;
        }

        // Hide all the other menus
        $menus.removeClass('active');
        $li.addClass('active');

        // Find the menu
        var $menu = $li.children('.mega-menu');
        // If there isn't one return
        if ($menu.length === 0) {
            return;
        }

        // Clear any previously set left value
        $menu.css('left', '');

        // If the menu is off the right of the page then move it
        var rightEdge = $navContainer.offset().left + $navContainer.outerWidth();
        var menuWidth = $menu.outerWidth();
        var menuOffset = $menu.offset();
        var paddingRight = parseFloat($navContainer.css('paddingRight'));
        if (rightEdge - paddingRight < menuOffset.left + menuWidth) {
            $menu.offset({ left: rightEdge - menuWidth - paddingRight });
        }

        // Position the arrow
        // This needs to go in the middle of the <li> and at the top of the mega menu
        // As we are moving the menu around we need to manually set the left position
        // Chrome and Firefox have different interpretations of absolute positioning inside display table
        // One includes the border and one doesn't.  This means we need to manually set the top position
        // The + 1 on the top is to give a one pixel overlap, which stops separation at some zoom levels
        var $arrow = $menu.children('.mega-menu__arrow');
        var leftPos = $li.offset().left + $li.outerWidth() / 2 - $arrow.outerWidth() / 2;
        $arrow.offset({ left: leftPos, top: menuOffset.top - $arrow.outerHeight() + 1 });

    }

});