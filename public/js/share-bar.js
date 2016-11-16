( function ($,encodeURIComponent) {

    // Twitter
    $('.js-twitter').on('click', function (e) {
        e.preventDefault();
        window.open(this.href + encodeURIComponent(location.href), '', 'width=550,height=520')
    });

    // Facebook
    $('.js-facebook').on('click', function (e) {
        e.preventDefault();
        window.open(this.href + encodeURIComponent(location.href), '', 'width=626,height=436');
    });

    // Google+
    $('.js-google-plus').on('click', function (e) {
        e.preventDefault();
        window.open(this.href + encodeURIComponent(location.href), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    });
  
    // Add the current URL to the email this page link
    mailLink = $(".mailLink")[0];
    if ( mailLink ) {
        mailLink.href += encodeURIComponent(location);
    }

    if ($('.popup_feedback').length) {

        $('input[type="radio"][name="ctl00$ctl00$RootPlaceHolder$ShareBar$ctl00$contactmethodradio"]').change(function () {
            if (this.value == 'feedbackformemail') {
                $('#lblMethod').html('Email:');

                //$('#validationFail').html('Not a valid Email address');
            }
            else if (this.value == 'feedbackformtelephone') {
                $('#lblMethod').html('Telephone:');

                //$('#validationFail').html('Not a valid telephone number');
            }
        });

        $('.last-page').html(document.URL);
    }

    /**
     *  If a user has used an option on the share bar the focus will return to the link after they've used the option
     *  This causes the label to reshow and overlay the content annoying users
     *  This adds an extra state to the link that will hide the label when the focus returns, and
     *  then removes that state when the user has finished with it.
     */

    var shareFocusClassName = 'share-bar__link--closed';
    var $sharebar = $('.share-bar');
    var $shareLinks = $sharebar.find('a');

    function hackShareBarFocus($a) {
        $a.addClass(shareFocusClassName);
        $a.one('focusout', function () {
            $a.removeClass(shareFocusClassName);
            window.setTimeout(function () {
                // If the focus is flashing back and forth reapply the hack.  Happens while printing
                if (document.activeElement === $a[0]) {
                    hackShareBarFocus($a);
                }
            }, 0);
        });
    }

    $sharebar
       .on('click', 'a', function () {
           var $a = $(this);
           window.setTimeout(function () {
               hackShareBarFocus($a);
           }, 0);
       })
       .on('focusin', 'a', function () {
           $shareLinks.not(this).removeClass(shareFocusClassName);
       });

}(jQuery, encodeURIComponent));