/**
 *  Controls the accordion buttons
 */
$('.accordionButton')
    .on('click', function () {
        var $this = $(this);
        var $content = $this.next('.accordionContent');
        var $img = $this.find("img");
        if ($this.hasClass('on')) {
            $this.removeClass('on');
            $content.slideUp();
            $img
                .attr("src", "/static/layout/accordion-closed.png")
                .attr("alt", "Expand"); // TODO need to translate these
        } else {
            $this.addClass('on');
            $content.slideDown();
            $img
                .attr("src", "/static/layout/accordion-open.png")
                .attr("alt", "Collapse");
        }
    })
    .next('.accordionContent') // Hide the content which is initally open
        .hide();