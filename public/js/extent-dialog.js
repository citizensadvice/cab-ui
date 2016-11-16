/**
 *  Open and close the extent picker dialog box
 *
 *  @requires jQuery.dialog
 */
$(function ($) {

    var dialog;
    var $dialog = $('#js-extent-dialog');

    if ($('html').hasClass('offline')) {
        return;
    }

    $('.js-toggle-extent-dialog')
        .attr( 'role', 'button' )
        .on('click', function (e) {

            e.preventDefault();

            if (!dialog) {

                // Create the dialog only if it doesn't already exist
                dialog = new $.Dialog({
                        title: $dialog.attr('data-title'),
                        content: $dialog.text(),
                        className: 'dialog--simple dialog--extent-picker',
                        role: 'alertdialog',
                    })
                    .on('close', function () {
                        // If closed, assume they have accepted the current extent
                        // and set the cookie
                        var language = $('html').attr('lang');
                        document.cookie = 'CABExtent=' + language + '; path=/';
                    });
            }

            dialog.showModal();
        });
});
