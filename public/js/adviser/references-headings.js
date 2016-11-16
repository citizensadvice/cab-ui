/* jshint undef:true, jquery:true, browser: true */
/* jshint -W040 */

/**
 *	Adds the "add reference" links to headings
 *
 *	@requires jQuery
 *	@requires window.CAB.references
 *
 */
(function (CAB, $) {
    "use strict";

    var references = window.CAB && window.CAB.references;

    if (!references) {
        return;
    }

    var headingRefs = {};
    var pageData;
    var dataName = 'cab-ref';
    var classModule = 'ref-heading';
    var classRefOn = classModule + '__toggle--on';
    var classRefOff = classModule + '__toggle--off';
    var ADDED = 'Added';
    var REMOVE = 'Remove';
    var ADD = 'Add reference';

    /**
	 *	Load information about what page this is from the pages metadata
	 */
    function loadPageData() {

        // pageId - EPiServer GUID in "content-guid"
        // extent - Page Extent code in "cab-extent"
        // title - Taken from the pages first <h1>

        var $head = $('head');

        pageData = {
            id: $head.find('meta[name="cab-guid"]').prop('content'),
            extent: $head.find('meta[name="cab-extent"]').prop('content'),
            title: $('h1').eq(0).text().replace(/\s+/g, ' ').trim(), // There is a lot of extra crap in the header
            url: location.href.replace(/[?#].*$/, '') // Link without fragment or query
        };
    }

    function toggleReference(e) {

        var $ref = $(e.delegateTarget);

        e.preventDefault();

        if ($ref.hasClass(classRefOn)) {
            references.remove($ref.data(dataName));
        } else {
            references.add($ref.data(dataName));
        }

    }

    /**
	 *	Add the add to reference link to a heading
	 */
    function addLink() {

        // IE8 has an odd bug that dom properites that are empty strings turn 
        // into "null" in JSON.stringify.  Need to || '' to override that
        var $this = $(this);
        var ref, $span, details = {};
        if (!$this.is('h1')) {

            if (!this.id) {
                // Don't add sub headings with an id
                return;
            }

            details = {
                hash: this.id || '',
                section: this.textContent || this.innerText || '',
                paraStart: this.getAttribute('data-para-start') || '',
                paraEnd: this.getAttribute('data-para-end') || '',
                url: pageData.url + '#' + this.id
            };
        }
        ref = $.extend({}, pageData, details);
        $span = $('<span class="' + classModule + '__toggle"/>')
			.data(dataName, ref)
			.on('click', '.js-toggle-ref', toggleReference)
            .html('<a class="js-toggle-ref" href="#!">' + ADD + '</a>');

        $this
			.removeClass('js-ref')
			.addClass(classModule)
			.wrapInner('<span class="' + classModule + '__heading"/>').append($span);

        headingRefs[references.getKey(ref)] = $span;
    }

    function refresh() {

        var key;

        for (key in headingRefs) {
            updateHeading(key, headingRefs[key]);
        }

        // Resets anything depending on the page size
        $(window).trigger('resize');
        
    }

    function updateHeading(key, $heading) {
        var update = false;
        var label = '';
        var hasRef = !!references.get(key);

        if (hasRef && !$heading.hasClass(classRefOn)) {
            update = true;
            label = ADDED;    
        } else if (!hasRef && !$heading.hasClass(classRefOff)) {
            update = true;
            label = ADD;
        }

        if (update) {
            $heading
				.toggleClass(classRefOn, hasRef)
				.toggleClass(classRefOff, !hasRef)
				.find('a').text(label);
        }

    }

    loadPageData();

    // Add references to headings
    $('.js-ref').each(addLink);

    // Populate with the latest data
    refresh();

    // Monitor for UI refresh triggers
    references.on('change', refresh);


}(window, jQuery));