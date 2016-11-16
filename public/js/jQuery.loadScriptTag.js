/**
 *  jQuery.loadScript
 *  Simple script loader
 *  Unlike jQuery.getScript() this loads the script using a script tag. Advantages:
 *	  - it makes debugging easier. 
 *	  - might result in better caching in some browsers (maybe?)
 *	  - no same origin issues
 *	  - works for sites using local files
 *
 *	jQuery.loadScript( url [, successCallback] )
 *		url: The url of the script
 *		successCallback: Function to run when the script is loaded
 *
 *	Returns a promise object
 *
 *	Use then for serial loading eg $.loadScript('url1').then( $.loadScript('url2') ).done(fn)
 *	Use jQuery.when for parallel loading
 *
 *	More information:
 *	  - http://dustindiaz.com/scriptjs
 *	  - http://www.nczonline.net/blog/2009/06/23/loading-javascript-without-blocking/
 *	  - http://stackoverflow.com/questions/1929742/can-script-readystate-be-trusted-to-detect-the-end-of-dynamic-script-loading
 */
(function ($, document) {
    var deferrerdMap = {};

    function loadScript(url) {
        var loaded;
        var deferred = deferrerdMap[url] = $.Deferred();
        var script = $('<script/>')[0];
        var target = $('script')[0];

        script.onload = script.onreadystatechange = function () {
            var temp;
            if (((temp = script.readyState) && temp !== "complete" && temp !== "loaded") || loaded) {
                return;
            }
            deferred.resolve();
        };

        script.onerror = function () {
            deferred.reject();
            // This doesn't work in all browsers
            // See http://www.quirksmode.org/dom/events/error.html
            // And http://stackoverflow.com/questions/2027849/how-to-trigger-script-onerror-in-internet-explorer/2032014#2032014
            // Also it doesn't work for the file protocol - presumably for security reasons
        }

        deferred.always(function () {
            loaded = true;
            script.onload = script.onreadystatechange = script.onerror = null;
        });

        script.async = true;
        script.src = url;

        target.parentNode.insertBefore(script, target);

        return deferred;
    }

    /**
	 *	@param {String|Array} url The url.  Will also accept Deferred or promise objects for parallel loading
	 *	@param {Function} [callback] Optional callback.  The script returns a promise so
	 */
    $.loadScriptTag = function (url, callback) {
        var deferred = deferrerdMap[url] || loadScript(url);
        if (callback) {
            deferred.done(callback);
        }
        return deferred.promise();
    }

}(jQuery, document));