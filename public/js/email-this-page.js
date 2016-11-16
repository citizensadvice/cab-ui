/**
 *  The email this page form
 *
 *  The template for this form is included on the page in <script type="text/x-template">
 *
 *  All elements of this theoertically translatable into Welsh.  This is why more of the template
 *  isn't included in this script.
 *
 *  @required jQuery
 *  @requires cab.templater
 *  @requires cab.translate
 *
 */
$(function ($) {

    var encode = encodeURIComponent;

    var emailEndPoint = '/api/session/email-page';
    var csrfEndPoint = '/api/session/email-page/csrf';
    var templateId = '#template-email-page';
    var error403Template = '<p class="highlight--error">Sorry there has been an error. Please ensure you have cookies turned on in your browser.</p>';
    var errorTemplate = '<p class="highlight--error">Sorry something went wrong sending your message. Please try again in a few minutes.</p>';
    var thankYouTemplate = '<p>{message}</p><p><button type="button" data-action="close">{close}</button>';
    
    $('.js-email-page').on('click', function (e) {
        e.preventDefault();

        var $template = $(templateId);

        var dialog = $.Dialog({
            title: $template.data('title'),
            content: cab.templater($template.html(), { mailto: getEmailLink($template) }),
            className: "dialog--simple",
            destoryOnClose: true
        })
            .on('submit', 'form', function (e) {
                e.preventDefault();
                var $form = $(this);

                // Prevent multiple submissions
                $form.find('button').prop('disabled', true).addClass('button--submitting');

                // Get our CSRF token
                $.ajax({
                    url: csrfEndPoint
                })
                .then(function (csrf) {

                    // Submit the form with the CSRF token
                    var formData = ($form).serialize();
                    formData += '&csrf=' + encodeURIComponent(csrf);

                    return $.ajax({
                        url: emailEndPoint,
                        method: 'PUT',
                        data: formData,
                        dataType: 'json'
                    });

                })
                .then(
                    function () {
                        dialog.$content.html(cab.templater(thankYouTemplate, { message: $template.data('thankYou'), close: cab.translate('Close') }));
                    },
                    function (req) {
                        if (req.responseJSON && req.status === 400) {
                            invalid($form, req.responseJSON.ModelState);
                            $form.find('button').prop('disabled', false).removeClass('button--submitting');
                            return;
                        }
                        var errorMessage = errorTemplate;
                        if (req.status === 403) {
                            errorMessage = error403Template;
                        }
                        dialog.$content.html(errorMessage);

                    }
                );
            })
            .on('change', '#email-page-email', function () {
                this.value = this.value.trim();
            });

        // Notify the user of updates to the dialog content
        dialog.$dialog.attr('aria-live', 'polite');

        dialog.showModal();        
        
    });

    /**
     *  Genearate a mailto link to email this page
     */
    function getEmailLink($template) {

        // <title> has " - Citizens Advice" at the end.  The real title is in the meta value
        var encodedTitle = encode($('meta[name="cab-title"]').attr('content') || document.title);
        return 'mailto:?subject=' + encode($template.data('subject') + ': ') + encodedTitle
            + '&amp;body='
            + encode( $template.data('introduction') ) + '%0A%0A' + encodedTitle + '%0A' + encode( $('meta[name="description"]').attr('content') || '') + "%0A" + location.href;
    }

    /**
     *  If the submission is invalid, add validation errors to the form
     *  These come from the WebAPI validation model on the server.
     */
    function invalid($form, modelState) {
        var name, $label, $error;

        $form.find('.js-error').css('display', 'block');

        // Hide existing errors
        $form.find('.form__invalid').hide();
        for (var key in modelState) {
            // For some reason the model keys start with  "submitted."
            name = key.replace(/^[^.]*\./, '');
            // Find an existing error element, or create a new one
            $label = $form.find('label[for="' + $form[0].elements[name].id + '"]');
            $error = $label.find('.form__invalid');
            if ( !$error.length ) {
                $error = $('<span class="form__invalid"/>').appendTo($label);
            }
            $error.html(modelState[key].join(', ')).show();
        }
    }
});
