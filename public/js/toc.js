/**
 *  Allows the second level of a legacy AdviserNet page to be open and closed.
 */
jQuery(function ($) {

    var className = 'js-collapse-toc';
    var openLabel = 'Hide';
    var closeLabel = 'Show';
    var openAllLabel = '<span class="toc-legacy__mono">+</span> Open all';
    var closeAllLabel = '<span class="toc-legacy__mono">-</span> Close all';
    // Used to generate unique ids
    var count = 0;
    
    // Add to all tables of contents on a page with .js-collapse-toc
    $('.' + 'js-collapse-toc').each(function () {
        makeCollaspsable($(this));
    });

    // Open or close an li
    function toogle($li, open) {
        $li
            .children('button')
                .attr('data-action', open ? 'close' : 'open')
                .attr('title', open ? openLabel : closeLabel)
                .attr('aria-label', open ? openLabel : closeLabel)
                .text( open ? '-' : '+')
            .end()
            .children('ul').attr('aria-expanded', !!open);
    }

    function makeCollaspsable($ul) {

        // Add an open all button above the TOC
        var $openAll = $('<button class="no-print" type="button" data-action="open">' + openAllLabel + '</button>')
            .on('click', function () {
                var $this = $(this);
                var action = $(this).attr('data-action');
                $ul.children('li').trigger(action);
                $this
                    .attr('data-action', action === 'open' ? 'close' : 'open')
                    .html(action === 'open' ? closeAllLabel : openAllLabel);
            })
            .insertBefore($ul);

        $ul
            .removeClass(className)
            .addClass('toc-legacy--expandable')
            .on('open', 'li', function () {
                toogle($(this), true);
            })
            .on('close', 'li', function () {
                toogle($(this), false);
            })
            .on('click', 'button[data-action=open]', function () {
                $(this).parent().trigger('open');
            })
            .on('click', 'button[data-action=close]', function () {
                $(this).parent().trigger('close');
            })
            .find('ul')
                .each(function () {
                    var id = className + '-' + (count++);
                    $(this)
                        .prop('id',id)
                        .attr('aria-expanded', 'false')
                        .parent()
                            .prepend('<button type="button" class="toc-legacy__button no-print" title="' + closeLabel + '" aria-label="' + closeLabel + '" data-action="open" aria-controls="' + id + '">+</button>');
                })

    }

        

});