/**
 *  @fileoverview
 *  Adds a cookie warning to the site
 *  The warning is shown if the user accepts cookies and if it hasn't already been shown three times
 *  It can be forced to show by adding showeprivacy=true to the url search
 */
jQuery(function ($) {
    // Finds the cookies
    var rCookie = /eprivacy=([1-3])(?:;|$)/;
    // Reduces minified size
    var doc = document;
    // Find the value in the cookie
    var match = doc.cookie.match(rCookie);
    // shownCount be number
    var shownCount = Number(match && match[1] || 0);
    // To set the cookie date
    var date = new Date();
    var cookieDatePart, el;
    var force = location.search.indexOf('showeprivacy=true') > -1;

    if (shownCount < 3 || force ) {

        // Expires in one year
        date.setFullYear(date.getFullYear() + 1);
        cookieDatePart = '; expires=' + date.toUTCString() + '; path=/';

        // Advance the counter
        if (shownCount < 3) {
            ++shownCount;
        }

        if (force) {
            $('html').removeClass('hide-cookie-monster');
        }

        // Set the new value
        doc.cookie = 'eprivacy=' + shownCount + cookieDatePart;
        
        // If the close button is pressed remove and set the cookie
        $('.cookie-monster').on('click','[data-action=close]', function(e) {
            e.preventDefault();
            doc.cookie = 'eprivacy=3' + cookieDatePart;
            $(e.delegateTarget).slideUp();
        } );
    }
});