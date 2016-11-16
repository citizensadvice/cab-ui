/**
 *  Detect support for pointer events
 *  Used to disable the custom dropdown button
 *  See https://github.com/ausi/Feature-detection-technique-for-pointer-events/blob/master/modernizr-pointerevents.js
 */
(function () {
    var pointerEvents = 'pointer-events';
    var element = document.createElement('x');
    element.style.cssText = pointerEvents + ':auto';
    if (element.style.pointerEvents !== 'auto') {
        document.documentElement.className += ' no-' + pointerEvents;
    }
}());
