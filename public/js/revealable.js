/**
 *  Setup and run revealables
 *  @requires jQuery
 *  @requires jQuery.fn.cssSlide
 */
$( function ($) {
    'use strict';

    // Used to generate ids
    var count = 0;

    // If true refocus to the hash
    var refocus = false;

    var namespace = 'revealable';
    var classSetup = namespace + '--setup';

    // Generate an unique id
    function getId() {
        return namespace + '-' + (++count);
    }

    var w = window;
    var $w = $(w);

    var translate = w.cab && w.cab.translate;

    // Get translated labels
    var closeLabel = translate('Close');

    function refocusHash() {
        $w.scrollTop( $( location.hash ).offset().top );
    }

    function scrollTo($el) {

        var windowTop = $w.scrollTop();
        var offset = $el.offset();
        if (offset.top < windowTop || offset.top + 100 > $w.height() + windowTop ) {
            $('html, body').animate({
                scrollTop: offset.top
            }, 500);
        }

    }

    function setup() {

        var $this = $(this);

        // The state of the element
        var expanded = null;

        // Check this hasn't already been setup
        if ( $this.hasClass( classSetup ) ) {
            return;
        }

        var $children = $this.children();
        var $heading = $children.first();

        // The first item needs to be a heading for this to work
        if (!$heading.is('h2,h3,h4')) {
            return;
        }

        $this.addClass( classSetup );

        // Wrap the bit that will be hidden
        var containerId = getId();
        var $container = $('<div class="' + namespace + '__content" id="' + containerId + '" tabindex="-1" />');
        var container = $container[0];
        $heading.after($container.append($children.not($heading)));
        $heading.attr('data-action', 'toggle');

        // Setup the heading
        $heading.addClass(namespace + '__heading');
        $heading.attr('aria-controls', containerId);
        $heading.attr('tabindex', 0);

        // Setup the close link
        var $close = $('<button type="button" class="' + namespace + '__close" data-action="close">' + closeLabel + '</button>');
        $container.append($close);

        /**
         *  Toggle showing and hiding
         *  @param {Boolean} [forceClose] Force to a particular state.
         *  @param {Boolean} [noTransition] If true don't transition
         */
        function toggle( forceExpanded, noTransition ) {

            if (forceExpanded === expanded) {
                return;
            }

            var forced = forceExpanded !== undefined;
            expanded = forced ? forceExpanded : !expanded;

            $heading.attr('aria-expanded', String(expanded));

            if (noTransition) {
                $container.toggleClass('slide--hidden', !expanded);
            } else {
                $container.cssSlideToggle(expanded);
            }
            
            // Focus on the expanded section
            if (expanded) {
                var focus = document.activeElement;
                if (expanded && !noTransition && container[0] !== focus && !$.contains(focus, container[0])) {
                    $container.focus();
                }
            }

            if (!noTransition) {
                scrollTo($this);
            }

            // Allows other things based on the window height to resize
            $w.trigger('resize');

        }

        $this
            .on('click', '[data-action]', function (e) {
                    
                if (e.isDefaultPrevented()) {
                    return;
                }
                e.preventDefault();
                toggle(this.getAttribute('data-action') === 'close' ? false : undefined );
            });

        // Heading keyboard navigation
        $heading
            .on('keyup', function (e) {
                if (e.which === 32 || e.which===13 ) {
                    $heading.click();
                }
            });

        // Check if the hash is in this section
        function openHash() {
            if ( location.hash && $this.find( location.hash ).length ) {
                toggle(true,true);
                return true;
            }
        }

        // If someone links to something in this section expand to show it
        $w.on('hashchange', function () {
            if ( openHash() ) {
                refocusHash();
            }
        });

        // If we are in the expanded area than expand
        if ( openHash($this) ) {
            // Need to refocus as the opening and closing can confuse the browser
            refocus = true;
            return;
        }

        // Otherwise collapse this section
        toggle( false, true );

    }

    // Setup
    $('section.' + namespace).each(setup);

    // Refocus if required
    if (refocus) {
        refocusHash();
    }


});