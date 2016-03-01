/**
 *	CSS transition based slide up and slide down
 */
(function ($) {

    var namespace = 'slide';
    var classHidden = namespace + '--hidden';
    var classUp = namespace + '--up';
    var classDown = namespace + '--down';
    var classDownSetup = classDown + '-setup';

    function getHeight($el) {

        // If the height has been saved used the saved height
        // This is only used if the element is mid transition
        var height = $el.data(namespace);
        if (height) {
            return height;
        }

        var hidden = $el.hasClass(classHidden);
        if (hidden) {
            $el.removeClass(classHidden);
        }


        // Get the appropriate height
        if ($el.css('box-sizing') === 'border-box') {
            height = $el.outerHeight();
        } else {
            height = $el.height();
        }

        // If required hide it again
        if (hidden) {
            $el.addClass(classHidden);
        }

        // Save the height
        $el.data(namespace, height);

        return height;

    }

    function cssSlideUp(el) {

        var $el = $(el);

        // Don't slide up if already hidden
        if (!$el.is(':visible')) {
            return;
        }

        var height = getHeight($el);

        $el.css('height', height);

        // Trigger a size calculation
        el.offsetHeight;

        $el
			.one('transitionend', function (e) {

			    // Remove our values and mark as hidden
			    // Remove data so it will be recalculated next time
			    $el
                	.css('height', '')
                	.addClass(classHidden)
                	.removeClass(classUp)
                	.removeData(namespace);
			})
            // Start the transition
            .css('height', 0)
			.addClass(classUp);

    }

    function cssSlideDown(el) {

        var $el = $(el);

        if ($el.is(':visible') && !$el.hasClass(classUp)) {
            return;
        }

        var height = getHeight($el);

        // Setup, remove a running slide up
        $el
			.removeClass(classUp + ' ' + classHidden)
			.addClass(classDownSetup)
			.css('height', 0);

        // Trigger a size calculation
        el.offsetHeight;

        $el
			.one('transitionend', function (e) {

			    // Remove our values and mark as hidden
			    // Remove data so it will be recalculated next time
			    // Remove hidden in-case we interupted a slide up
			    $el
                	.css('height', '')
                	.removeClass(classDown + ' ' + classHidden)
                	.removeData(namespace);
			})
            // Start the transition
            .css('height', height)
            .removeClass(classDownSetup)
            .addClass(classDown);
    }

    $.fn.cssSlideUp = function (el) {

        this.each(function () {
            cssSlideUp(this);
        });

        return this;

    };

    $.fn.cssSlideDown = function (el) {

        this.each(function () {
            cssSlideDown(this);
        });

        return this;

    };

    $.fn.cssSlideToggle = function (state) {

        this.each(function () {

            var $el = $(this);
            var show = typeof state === 'boolean' ? state : !$el.is(':visible') || $el.hasClass(classUp)

            if (show) {
                $el.cssSlideDown();
            } else {
                $el.cssSlideUp();
            }

        });

        return this;

    };


}(jQuery));
