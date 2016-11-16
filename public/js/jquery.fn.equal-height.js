/**
 *	A simple script for setting floats in a row to an equal height
 */
(function ($, window) {

    var namespace = 'equalHeight';
    var className = 'js-equal-height';
    var classNameSetup = className + '-setup';

    // Check if flexbox is supported - new or tweener syntax only as we need wrap support
    var $test = $('<div style="display:-webkit-flex;display:-ms-flexbox;display:flex;"/>');
    var supportsFlexBox = $test.css('display').indexOf('flex') > -1;

    var globalEventsSetup = false;
    // This prevents IE8 fireing infinite resize events
    var resizeRunning = false;
    var $elements = $();

    function setupGlobalEvents() {
        if (globalEventsSetup) {
            return;
        }
        $(window).on('resize', function () {

            if (!resizeRunning) {
                resizeRunning = true;
                $elements.trigger('resize');
            }
            setTimeout(function () {
                resizeRunning = false;
            }, 0);

        });
    }

    function setHeight(items) {

        if (items.length <= 1) {
            return;
        }

        var maxHeight = 0;

        items.forEach(function (item) {
            // Don't use .height(), it gets and sets the innerHeight only
            var height = item.outerHeight();

            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        items.forEach(function (item) {
            item.css( 'height', maxHeight );
        });

    }

    function equalHeight() {

        var $this = $(this);
        var lastOffsetTop = 0;
        var row = [];

        $this.children().toArray()
            .map(function (item) {
                // Reset all heights
                var $item = $(item);
                $item.css('height', '');
                return $item;
            } )
            .forEach(function ($item) {

			    var offset = $item.offset();

			    if (offset.top === lastOffsetTop) {
			        row.push($item);
			    } else {
			        setHeight(row);
			        offset = $item.offset();
			        row = [$item];
			        lastOffsetTop = offset.top;
			    }

			});
        setHeight(row);
    }

    function setup() {
        var $this = $(this);
        if ($this.hasClass(classNameSetup)) {
            return;
        }
        setupGlobalEvents();
        $elements = $elements.add(this);
        $this.on('resize', equalHeight);
        $this.addClass(classNameSetup);
        equalHeight.call(this);
        setTimeout(equalHeight.bind(this), 100);
    }

    $.fn[namespace] = function () {
        $(this).each(setup);
        return this;
    };

    $.fn[namespace].supportsFlexBox = supportsFlexBox;

    if (!supportsFlexBox) {
        $('.' + className)[namespace]();
    }

}(jQuery, window));