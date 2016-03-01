(function () {

    var data = {
       // No data to put here yet!
    };

    var defaultLanguage = 'en-GB';
    var language = document.documentElement.lang;

    var cab = window.cab = window.cab || {};
    cab.translate = function (key) {
        return data[key] && ( data[key][language] || data[key][defaultLanguage] ) || key;
    };

}());