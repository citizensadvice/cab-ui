/**
 *  Additional tracking for Google Analytics
 *  Note that the classes and rel are set in LinkHTMLRewriter script
 */
jQuery(function ($) {

    if (!window.ga) {
        return;
    }

    var TRACKEVENT = 'data-track';
    var TRACKSUBMIT = 'data-track-submit';
    var TRACKCLICKZONE = 'data-track-zone';
    var rExtent = /(?:\?|&)lang=([^&]+)/i;

    var trackForm = '';

    // See if sessionStorage is supported
    // This can throw errors in some browsers
    var sessionStorage;
    try {
        sessionStorage = window.sessionStorage;
        sessionStorage.getItem('x');
    } catch (e) {
        sessionStorage = null;
    }

    $(document)
		// Track external links, emails and downloads
		.on('click', 'a[rel=external]', function (e) {
		    if (!e.isDefaultPrevented()) {
		        ga('send', 'event', 'External link', this.href, location.href);
		    }
		})
		// Track downloads
		.on('click', 'a.a-binary', function (e) {
		    if (!e.isDefaultPrevented()) {
		        ga('send', 'event', 'Download', this.href, location.href);
		    }
		})
		// Track emails
		.on('click', 'a[href^="mailto:"]', function (e) {
		    if (!e.isDefaultPrevented()) {
		        ga('send', 'event', 'Email', this.href, location.href);
		    }
		})
		// Track the usage of features - tracked regardless of whether the default action is prevented
		.on('click', 'a[' + TRACKEVENT + '], button[' + TRACKEVENT + ']', function () {
		    ga('send', 'event', 'Actions', this.getAttribute(TRACKEVENT), location.href);
		})
		// Track how users are navigating though the site
		.on('click', '[' + TRACKCLICKZONE + '] a', function (e) {
		    if (!sessionStorage || e.isDefaultPrevented()) {
		        return;
		    }
		    var value = $(this).closest('[' + TRACKCLICKZONE + ']').attr(TRACKCLICKZONE);
		    sessionStorage.setItem(TRACKCLICKZONE, JSON.stringify([Date.now(), value]))
		})
        // Track successful forms submissions
		.on('submit', 'form', function (e) {
		    // If a form is successfully submitted, see if the either the form has a track attibute, or the button that submitted it does
		    if (!e.isDefaultPrevented() && (this.hasAttribute(TRACKEVENT) || trackForm)) {
		        ga('send', 'event', 'Form submission', this.getAttribute(TRACKEVENT) || trackForm, location.href);
		    }
		})
        .on('click', 'button[' + TRACKSUBMIT + '],input[type=submit][' + TRACKSUBMIT + '],input[type=image][' + TRACKSUBMIT + ']', function (e) {
            // If a track form button is pressed save the attribute value for this tick of the event loop
            trackForm = this.getAttribute(TRACKSUBMIT);
            setTimeout(function () {
                // Clear the track value
                trackForm = '';
            }, 0);
        })
        // Track extent changing
        .on('click', '.js-track-extent, a[href*="?lang="]', function (e) {

            if (e.isDefaultPrevented()) {
                return;
            }

            var target = '';
            var $this = $(this);
            if ($this.is('input[type=submit]')) {
                // The form version
                target = $this.parent().find('select').val();
            } else if ($this.is('a')) {
                // A link
                target = (this.search.match(rExtent) || [])[1] || '';
            }
            var zone = $(this).closest('[' + TRACKCLICKZONE + ']').attr(TRACKCLICKZONE);
            // The current extent is in the lang attribute of html
            var action = zone + ': ' + $('html').attr('lang') + ' => ' + target;
            ga('send', 'event', 'Extent', action, location.href);
        });

    // Track if a user spends 15s on a page that is visible
    (function() {
        // Time until we want to record (30 seconds)
        var readingTime = 30 * 1000;
        // Our timeout
        var timeout = null;
        // Have we recorded
        var recorded = false;

        function recordReading() {
            // Non-interactive
            ga('send', 'event', 'reading', (readingTime / 1000) + 's', {
                nonInteraction: true
            });
            recorded = true;
            timeout = null;
        }

        function setup() {

            // If we've already recorded don't record again
            if (recorded) {
                return;
            }

            // Assume the page is visible if the browser doesn't support visibilty
            var hidden = 'hidden' in document ? document.hidden : false;
            if (!hidden) {
                timeout = setTimeout(recordReading, readingTime);
            } else if (timeout !== null) {
                // Clear the timer
                clearTimeout(timeout);
                timeout = null;
            }
        }

        if ('addEventListener' in document) {
            // Clear or add the timer based on the page visibilty
            document.addEventListener('visibilitychange', setup, false);
        }

        setup();

    }());

});