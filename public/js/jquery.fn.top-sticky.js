/* jshint laxbreak: true */

/*!
 * jQuery.fn.top-sticky.js v0.3
 * © 2014 Daniel Lewis github.com/mrdaniellewis/jquery.fn.top-sticky.js
 * MIT license
 */

( function( $, window, max, min ) {
    
    "use strict";

    var dataName = '.topSticky';

    // String constants for over the top minification optimisation
    var MARGIN = 'margin';
    var POSITION = 'position';
    var STICKY = 'sticky';
    var PADDING = 'padding';
    var RESIZE = 'resize';
    var STATIC = 'static';
    var ABSOLUTE = 'absolute';

    // Test for native support
    var nativeSupport = $('<i style="010-webkit-1"/>'
        .replace(/0|1/g,function(m) {
            return [ POSITION + ':', STICKY + ';' ][m];
        }))
        .css(POSITION)
        .indexOf(STICKY) > -1;

    // Cross browser request animation frame
    var RAF = 'equestAnimationFrame';
    var requestAnimationFrame = window[ 'r' + RAF ] 
        || window[ 'webkitR' + RAF ] 
        || window[ 'mozR' + RAF ] 
        || window[ 'oR' + RAF ] 
        || function(fn) {
            return setTimeout( fn, 0 ); // 0 results in less positioning errors and a smoother appearance
        };

    var $window = $(window);
    var windowHeight, scrollTop;
    var lastScrollTop = -1;

    // Elements to process when scrolling - these are elements that are actively being positioned
    var $scroll = $();
    // Elements to process when resizing - these are the scroll elements, 
    // plus any that are hidden or have top=auto
    var $resize = $();

    // Are we currently positioning
    var running = false;
    // Are we currently resizing
    var resizing = false;

    // Called when resizing
    function onResize() {
        resizing = true;
        onScroll();
    }

    // Update all elements
    function update() {

        var $collection = $scroll;
        // Swap to the resize collection in a resize
        if ( resizing ) {
            $collection = $resize;
        }

        windowHeight = $window.height();
        scrollTop = $window.scrollTop();

        $collection.each( function() {
            $.data( this, dataName )(resizing);
        } );

        if ( lastScrollTop != scrollTop ) {
            lastScrollTop = scrollTop;
            requestAnimationFrame( update );
        } else {
            running = resizing = false;
        }
    }

    // The scroll event - also called on a resize
    function onScroll() {

        if ( !running ) {
            requestAnimationFrame( update );
            running = true;
        }
    }

    // Add or remove the global scroll event
    var scrollEventSet = false;
    function setScrollEvent() {
        if ( !$scroll.length ) {
            $window.off( 'scroll' + dataName + ' touchmove' + dataName );
        } else if ( !scrollEventSet ) {
            $window.on( 'scroll' + dataName + ' touchmove' + dataName, onScroll );
            scrollEventSet = true;
        }
    }

    // Add or remove the global resize event
    var resizeEventSet = false;
    function setResizeEvent() {
        if ( !$resize.length ) {
            $window.off( RESIZE + dataName );
        } else if ( !resizeEventSet ) {
            $window.on( RESIZE + dataName, onResize );
            resizeEventSet = true;
        }
    }


    // Creates the functions and holds the values for moving an element
    // A closure, while less readable, minifies rather better
    function makeStickyClosure(el, parent) {
        var $el = $(el);
        
        var lastPosition = '';
        var $ghost = $();
        var width, height, top, marginTop, marginLeft, marginBottom, marginRight, parentHeight, 
            parentPaddingBottom, offset, windowHeight;
        var active = false;
        var lastState = false;
        var elResizing = false;
        var $parent;

        // Don't add it twice
        if ( $.data( el, dataName ) ) {
            return;
        }

        // Reset back to the elements natural position
        function reset() {
            $el.attr('style','');
            $ghost.hide();
        }

        function setPosition(isResize) {

            // IE8/7 triggers a resize event on itself when its dimensions change
            // Prevent endless loops
            elResizing = true;
            setTimeout( function() {
                elResizing = false;
            },0);

            if ( isResize ) {

                top = null;
                lastPosition = '';
                
                if ( $el.is(':visible') ) {

                    $parent = parent ? $(parent) : $el.parent();

                    // Reset original size and position
                    reset();

                    width = $el.outerWidth();
                    height = $el.outerHeight();

                    // This is part is painful
                    // If the element is hidden (and also positioned absolutely for Safari)
                    // then getComputedStyle gives you the actual CSS value
                    // If it shows and is absolute/fixed you get the pixels from its offset parent
                    // which isn't what we want
                    // For top jQuery manages to give you the value in pixels
                    // For bottom (which this doesn't need) some browsers give it you in what ever
                    // units you used.
                    $el.css( {display: 'none', position: ABSOLUTE } );
                    if ( $el.css('top') == 'auto' ) {
                        // Auto means it isn't set
                        top = null;
                    } else {
                        // Display and get the top property
                        // Providing it is set we seem to get it in pixels in all browsers
                        $el.css('display','');
                        top = getDimension( $el, 'top' );
                    }
                }

                active = top !== null;
            
                if ( lastState !== active ) {
                    // Add or remove from the scroll list
                    // and set the event so scroll is only
                    // running if it really needs to
                    if ( active ) {
                        $scroll = $scroll.add(el);
                    } else {
                        $scroll = $scroll.not(el);
                    }
                    lastState = active;
                    setScrollEvent();
                }

                if ( !active ) {
                    reset();
                    return;
                }

                // Get the normal position
                $el.css(POSITION, STATIC);
                offset = $el.offset();

                // We need all the margins for the ghost
                marginTop = getDimension( $el, MARGIN + 'Top' ) || 0;
                marginLeft = getDimension( $el, MARGIN + 'Left' ) || 0;
                marginBottom = getDimension( $el, MARGIN + 'Bottom' ) || 0;
                marginRight = getDimension( $el, MARGIN + 'Right' ) || 0;

                parentHeight = $parent.innerHeight();
                parentPaddingBottom = getDimension( $parent, PADDING + 'Bottom' );
            }

            var position = '';
            var currentOffset = $el.offset();
            var windowTop = scrollTop + top;
            var parentBottom = $parent.offset().top + parentHeight - parentPaddingBottom - height - marginBottom;

            var calculatedTop = max( 
                offset.top,
                min( 
                    windowTop,
                    parentBottom
                )
            );

            if ( offset.top === calculatedTop ) {
                position = STATIC;
            } else if ( calculatedTop === windowTop ) {
                position = 'fixed';
            } else if ( calculatedTop === parentBottom ) {
                position = ABSOLUTE;
            }

            // Only reposition if we have to
            if ( lastPosition != position || currentOffset.left != offset.left ) {

                lastPosition = position;

                if ( position == STATIC ) {
                    reset();
                    $ghost.hide();
                    return;
                } 

                $el
                    .css( POSITION, position )
                    .offset({ top: calculatedTop, left: offset.left })
                    .outerWidth(width)
                    .outerHeight(height);

                if ( !$ghost.length ) {
                    $ghost = $('<div>')
                        .css( {
                            visibility: 'hidden',
                            width: width,
                            height: height,
                            margin: [marginTop,marginRight,marginBottom,marginLeft].join('px ') + 'px',
                            border: 0,
                            padding: 0
                        } )
                        .insertAfter($el);
                }
                $ghost.show();

            }
        }

        // Function to remove the stickyness
        setPosition.x = function() {
            if ( $ghost ) {
                $ghost.remove();                
            }

            $el
                .css(reset)
                .off(dataname)
                .removeData(dataName);

            $resize = $resize.not(el);
            $scroll = $scroll.not(el);
            setScrollEvent();
            setResizeEvent();       
        };

        $resize = $resize.add(el);
        $.data( el, dataName, setPosition );
        setResizeEvent();
        $el.on( RESIZE + dataName, function() {
            // IE8 can call resize on elements
            // It then ends up in endless loops
            if ( elResizing ) {
                return;
            }
            setPosition(true);
        } );
        setPosition(true);
    }

    function getDimension($el,prop) {
        var val = parseFloat($el.css(prop));
        if ( isNaN(val) ) {
            val = null;
        }
        return val;
    }

    function stickify(parent) {
        /* jshint -W040 */
        this.each(function() {
            makeStickyClosure(this,parent);
        } );
        return this;
    }

    stickify.support = nativeSupport;
    $.fn.stickify = stickify;

    $.fn.unstickify = function() {
        this.each( function() {
            var fn = $.data(this,dataName);
            if ( fn ) {
                fn.x();
            }
        } );
        return this;
    };

    $( function($) {
        if (!$.fn.stickify.support) {
            $('.js-make-sticky').stickify();
        }
    } );


}( jQuery, window, Math.max, Math.min ) );


