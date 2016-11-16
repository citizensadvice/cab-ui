/**
 *  Expand and contract the section navigation on a mobile
 *  See https://www.w3.org/WAI/GL/wiki/Using_the_WAI-ARIA_aria-expanded_state_to_mark_expandable_and_collapsible_regions
 */
jQuery(function ($) {

    // Just do this to the first one on the page
    var $nav = $('.js-section-nav').eq(0);
    
    if (!$nav.length) {
        return;
    }

    var $heading = $nav.find('.section-nav__heading');
    var $label = $('<span class="screenreader"/>');
    var $link = $('<a href="#!"/>')
        .append($label)
        .append(document.createTextNode(' ' + $heading.text()));
    var $ul = $('#section-nav-list');

    $heading
        .empty()
        .append($link);
        

    // The current state
    var expanded = false;

    $link
        .attr('aria-controls', 'section-nav-list')
        .on('click', function (e) {
            e.preventDefault();
            toggle();
        });
    
    /**
     *  Toggle between open and closed
     *  @param {Boolean} [state] If set force a specific state, otherwise toggle
     */
    function toggle(state) {
        var newState = state === undefined ? !expanded : state;
        $link.attr('aria-expanded', String(newState));
        $label.text(newState ? 'Hide' : 'Show');
        $nav.toggleClass('expanded', newState);
        expanded = newState;
        if (newState) {
            $ul.focus();
        }
    }

    // Set inital state to closed
    toggle(false);

});