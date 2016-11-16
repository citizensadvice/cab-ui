/**
 *  Resize an iframe when the content loads
 */
(function ($) {
    if ( !window.postMessage ) {
        return;
    }

    // Frames indexed by Livelink URL
    var frames = {};

    // I would use a class,but TinyMCE won't let me http://stackoverflow.com/questions/13161323/tinymce-strips-class-attribute-from-iframe-element
    $('iframe[data-auto-resize]')
        .each(function () {
            var iframe = this;
            var $iframe = $(this);

            // Extract the Livelink URL
            var frameId = iframe.src.replace(/\?.*$/, '').replace(/\/+$/, '').replace(/^.*\//, '');
            frames[frameId] = $iframe;+ 'id=' + frameId;

            $(this)
                .on('cabResizeFrame', function (e, height) {
                    // Get rid of scroll bars and stop jumping
                    iframe.scrolling = 'no';
                    currentHeight = $iframe.height();
                    // Don't change height if it is only 30px smaller - hoepfully stops jumping
                    if (height && height > currentHeight || height < (currentHeight - 30)) {
                        $iframe.height(height);
                    }
                })
                .on('cabScrollTop', function (e) {
                    // Scroll to top of iframe
                    $('html, body').animate({
                        scrollTop: $iframe.offset().top
                    }, 500);
                })
                .on('cabScrollTo', function (e, position) {
                    // Scroll to a position in the frame
                    $('html, body').animate({
                        scrollTop: $iframe.offset().top + position
                    }, 500);
                });
        });


    $(window).on('message', function(e) {
        var message = e.originalEvent;
        if (/(citizensadvice|cabsrv)\.org\.uk$/i.test(message.origin)) {
            // Message will be {url: url, height: int, scrollTop: boolean}
            // URL is to identify the frame (because you can't idenify a remote frame from a message)

            var data = JSON.parse(message.data) || {};

            var frame = frames[data.url];
            if (frame) {
                if (data.height) {
                    frame.trigger('cabResizeFrame', data.height);
                }
                if (data.scrollTop) {
                    frame.trigger('cabScrollTop');
                }
                if (data.scrollTo) {
                    frame.trigger('cabScrollTo', data.scrollTo);
                }
            }
        }
    });

}(jQuery));
