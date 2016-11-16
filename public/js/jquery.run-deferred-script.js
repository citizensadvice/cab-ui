/**
 *	Run any deferred scripts that were added before jQuery was loaded
 *  See head.js
 *  @author Daniel Lewis
 */
(function (jQuery, window) {
    var fake$;

    // Get the original $ back
    jQuery.noConflict();

    fake$ = window.$;

    if (fake$ && (q = fake$.q) && q.length) {

        jQuery.each(q, function (i, fn) {
            jQuery(fn);
        });

    }

    // Restore jQuery to $
    window.$ = jQuery;

}(jQuery, window));