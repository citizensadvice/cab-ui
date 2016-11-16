$(function ($) {
    var timeout;
    var $extentPopup = $('.js-extent-popup');
    var $extentLink = $('.js-extent-link');
    var $pointer;

    function showPopup() {
        $extentPopup.show();
        if (!$pointer) {
            $pointer = $('<span class="breadcrumb__extent-popup__arrow">').appendTo($extentPopup);
            var leftPos = $extentLink.offset().left + $extentLink.outerWidth() / 2 - $pointer.outerWidth() / 2;
            $pointer.offset({ left: leftPos, top: $extentPopup.offset().top - $pointer.outerHeight() + 1 });
        }
    }

    $extentLink
        .on('click', false) // Stop the link being pressed if JS is enabled
        .add($extentPopup)
            .on('mouseenter focusin', function () {
                clearTimeout(timeout);
                showPopup();
            })
            .on('mouseleave focusout', function (e) {
                // Timeout is 0 for focusout in case the focus moves to a link inside the popup in this tick
                timeout = setTimeout(function () {
                    $extentPopup.hide();
                }, e.type === 'mouseleave' ? 250 : 0);
            });
});




