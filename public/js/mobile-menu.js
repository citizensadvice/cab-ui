$(function ($) {
    var isSetup = false;
    var $mainMenu;

    $('.js-toggle-menu').on('click', function (e) {
        e.preventDefault();
        $mainMenu = $mainMenu || $('.main-nav');
        setup();
        $mainMenu.slideToggle();
    });

    // Hack to get the secondary navigation to appear in the main menu
    function setup() {
        if ( isSetup ) {
            return;
        }
        var $secondary = $('<ul class="main-nav__mobile-secondary">');
        $('.main-header__top-nav').children().not('.nav-list-primary-more').each(function () {
            $secondary.append($('<li class="top-item">').append($(this).clone()));
        });
        $mainMenu.append($secondary);

        // If we get bigger than the mobile size hide the menu
        if ( window.matchMedia ) {
            matchMedia("(min-width:768px)").addListener(function (match) {
                if (match.matches) {
                    // Need to add overflow: visible for the mega menus stop working
                    $mainMenu.attr('style', 'overflow: visible');
                }
            });
        }
        isSetup = true;
    }


});



