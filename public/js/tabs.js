// Generic script for tab switching

$(function ($) {

    var $tabsContainers = $('.js-tabs');

    // Cache of all panel ids, and there index in that group of panels
    // An ID must be globally unique
    var panelIdMap = {};

    $tabsContainers.on('click', 'a', function (e) {
        // Find the index of the panel to show from the id
        var panelId = this.hash;
        var panelIndex = panelIdMap[this.hash];
        var $container = $(this).closest('.js-tabs');

        // See http://www.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/
        // Hide all but the current panel
        $container.data('cab-panels')
            .hide()
            .attr('hidden',true)
            .eq(panelIndex)
                .show()
                .removeAttr('hidden')

        // Mark which panel is showing
        $container.data('cab-tabs')
            .attr( 'aria-expanded', 'false' )
            .eq(panelIndex)
                .attr( 'aria-expanded', 'true' )

        e.preventDefault();
    });


    // Find the tabs and panels in the tab container
    $tabsContainers.each(function () {
        var $this = $(this);
        var $tabs = $this.find('[role=tab]'); 
        var count = 0;
        var $links = $tabs.find('a');
        var $panels = $links.map(function () {
            panelIdMap[this.hash] = count++;
            return $(this.hash)[0];
        });
        // Cache them
        $this.data('cab-tabs', $tabs);
        $this.data('cab-panels', $panels);

        // Mark the first panel as showing
        $links.eq(0).trigger('click');
    });


});