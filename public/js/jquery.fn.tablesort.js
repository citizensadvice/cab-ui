/* jshint jquery: true, browser: true, undef: true */

/**
 *  jQuery.fn.tablesort
 *
 *  @requires jQuery
 *  @requires Date parses JSON format - use https://github.com/es-shims/es5-shim for old browsers
 */
(function ($, window) {

    'use strict';

    // Constants to improve minification
    var NAMESPACE = 'tablesort';
    var DOTNAMESPACE = '.' + NAMESPACE;
    var ATTRIBUTEPREFIX = 'data-' + NAMESPACE + '-';
    var EXPANDOPREFIX = NAMESPACE + ('' + Math.random()).slice(2);
    var EXPANDOSORTKEY = EXPANDOPREFIX + 'SortKey';
    var EXPANDODISPLAY = EXPANDOPREFIX + 'Display';
    var BUTTONCLASS = NAMESPACE + '-button';
    var WRAPCLASS = NAMESPACE + '-wrap';
    var SORTABLECLASS = NAMESPACE + '-sortable';
    var fromCharCode = String.fromCharCode;
    var guid = 0;

    var rComma = /\s*,\s*/;

    var defaultSortFns = {
        /** Numberical stable sort */
        num: function (n, m) {
            if (n[0] === m[0]) {
                return n[4] > m[4];
            }
            return n[0] > m[0] ? 1 : -1;
        }
    };

    var defaultFilterFns = {
        /** Field exactly matches search */
        exact: function (key, text) {
            return key == text.toLowerCase();
        },
        /** Field contains search */
        has: function (key, text) {
            return key.indexOf(text.toLowerCase()) > -1;
        },
        /** Item is in a comma separated list */
        inList: function (key, text) {
            return key.split(rComma).indexOf(text.toLowerCase()) > -1;
        },
        /** Field contains each space separated token */
        hasEach: function (key, text) {
            var parts = text.toLowerCase().split(' ');
            return every(parts, function (item) {
                return key.indexOf(item) > -1;
            });
        }
    };

    // So empty rows are sorted first
    function isNaNToNegativeInfinity(num) {
        if (isNaN(num)) {
            return -Infinity;
        }
        return num;
    }

    // Correct a two digit year to a 4 digit year
    function correctYear(year) {
        year = +year;
        if (year < 100) {
            year += year < 50 ? 2000 : 1900;
        }
        return year;
    }

    // Get the text content of a cell
    function getText(el) {
        return $.trim($.text(el)).toLowerCase();
    }

    var defaultKeyGens = {
        text: getText,
        isodate: function (el) {
            // This relies on the browser supporting ISO date parsing
            var num = Date.parse(getText(el).toUpperCase());
            return isNaNToNegativeInfinity(num);
        },
        ddmmyy: function (el) {
            var match = getText(el).match(rDate);
            var num;
            if (match) {
                num = new Date(correctYear(match[4]), +match[3] + 1, match[1]).valueOf();
            }
            return isNaNToNegativeInfinity(num);
        },
        mmddyy: function (el) {
            var match = getText(el).match(rDate);
            var num;
            if (match) {
                num = new Date(correctYear(match[4]), +match[1] + 1, match[3]).valueOf();
            }
            return isNaNToNegativeInfinity(num);
        },
        dmmmy: function (el) {
            var match = getText(el).match(rDateMonthYear);
            var num;
            if (match) {
                num = new Date(match[3] ? correctYear(match[3]) : new Date().getFullYear(), monthNames[match[2]], match[1]).valueOf();
            }
            return isNaNToNegativeInfinity(num);
        },
        mmmdy: function (el) {
            var match = getText(el).match(rMonthDateYear);
            var num;
            if (match) {
                num = new Date(match[3] ? correctYear(match[3]) : new Date().getFullYear(), monthNames[match[1]], match[2]).valueOf();
            }
            return isNaNToNegativeInfinity(num);
        },
        num: function (el) {
            var match = getText(el).match(rNumber);
            var num = NaN;
            if (match) {
                num = parseFloat((match[1] || '') + match[2].replace(/,/g, ''));
            }
            return isNaNToNegativeInfinity(num);
        }
    };
    /** Starts with something number like */
    var rNumber = /^(-?)[&#163;$&#164;]?\s*([\d,.]+)/;
    var rDateMonthYear = /^([1-3]?\d)[,\s]+([a-z]{3,})(?:[,\s]+(\d{2,4}))?/;
    var rMonthDateYear = /^([a-z]{3,})[,\s]+([1-3]?\d)(?:[,\s]+(\d{2,4}))?/;
    var rISODate = /^(\d{4})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?(Z|(?:(\+|-)(\d{2}):?(\d{2})))?)?)?)?$/i;
    var rDate = /^(\d{1,2})\s*([.\/\\\-])\s*(\d{1,2})\s*\2\s*(\d{2,4})/;
    var monthNames = {
        jan: 0,
        january: 0,
        feb: 1,
        february: 1,
        mar: 2,
        march: 2,
        apr: 3,
        april: 3,
        may: 4,
        jun: 5,
        june: 5,
        jul: 6,
        july: 6,
        aug: 7,
        august: 7,
        sep: 8,
        september: 8,
        oct: 9,
        october: 9,
        nov: 10,
        november: 10,
        dec: 11,
        december: 11
    };

    function every(ar, fn) {
        if (ar.every) {
            return ar.every(fn);
        }
        for (var i = 0, j = ar.length; i < j; ++i) {
            if (!fn(ar[i])) {
                return false;
            }
        }
        return true;
    }

    var tests = [
        function (cells) {
            if (every(cells, function (data) {
                var match = data[0].match(rDateMonthYear);
                return match && +match[1] < 31 && monthNames[match[2]] >= 0;
            })) {
                return 'dmmmy';
            }
        },
        function (cells) {
            if (every(cells, function (data) {
                var match = data[0].match(rMonthDateYear);
                return match && +match[1] < 31 && monthNames[match[2]] >= 0;
            })) {
                return 'mmmdy';
            }
        },
        function (cells) {
            if (every(cells, function (data) {
                return rISODate.test(data[0]);
            })) {
                return 'isodate';
            }
        },
        function (cells) {
            if (every(cells, function (data) {
                var match = data[0].match(rDate);
                return match && +match[1] < 32 && +match[3] < 13;
            })) {
                return 'ddmmyy';
            }
        },
        function (cells) {
            if (every(cells, function (data) {
                var match = data[0].match(rDate);
                return match && +match[1] < 13 && +match[3] < 32;
            })) {
                return 'mmddyy';
            }
        },
        // Run last
        function (cells) {
            if (every(cells, function (data) {
                return rNumber.test(data[0]);
            })) {
                return 'num';
            }
        }
    ];

    var types = {
        num: {
            keygen: 'num',
            fn: 'num'
        },
        dmmmy: {
            keygen: 'dmmmy',
            fn: 'num'
        },
        mmmdy: {
            keygen: 'mmmdy',
            fn: 'num'
        },
        isodate: {
            keygen: 'isodate',
            fn: 'num'
        },
        ddmmyy: {
            keygen: 'ddmmyy',
            fn: 'num'
        },
        mmddyy: {
            keygen: 'mmddyy',
            fn: 'num'
        }
    };

    var labels = {
        sortAsc: 'Sort ascending',
        sortDesc: 'Sort desending',
        search: 'Search column',
        filter: 'Filter column'
    };
    var defaultButton = '<button type="button" class="' + BUTTONCLASS + '" ' + ATTRIBUTEPREFIX + 'asc-title="' + labels.sortAsc + '"  ' + ATTRIBUTEPREFIX + 'desc-title="' + labels.sortDesc + '"><span></span></button>';

    function makeSortable(options) {

        // jshint -W040
        var table = this;
        // jshint +W040
        var $table = $(table);
        var data = $table.data(NAMESPACE);

        if (options === false || $table.hasClass(SORTABLECLASS)) {

            if (data) {
                $table
                    .removeClass(SORTABLECLASS)
                    .find('tbody').add(table)
                        .off(DOTNAMESPACE)
                        .removeData(NAMESPACE);

                $table.find('thead .' + WRAPCLASS).each(function () {
                    $(this).replaceWith(this.childNodes);
                });

                $table.find('th').removeClass(NAMESPACE + '-asc ' + NAMESPACE + '-desc');
                $table.find('[class^="' + NAMESPACE + '-"]').remove();

                $(window).off(DOTNAMESPACE + data.guid);
            }

            if (options === false) {
                return;
            }
        }

        $table.addClass(SORTABLECLASS);

        if (!data) {
            ++guid;
            data = $.data(table, NAMESPACE, { guid: guid });
        }

        options = options || {};

        var sortFns = $.extend({}, defaultSortFns, options.sortFns);
        var keyGens = $.extend({}, defaultKeyGens, options.keyGens);
        var filterFns = $.extend({}, defaultFilterFns, options.filterFns);
        var dynamic = options.dynamic;

        if (options.ui !== false) {

            // We must have heading cells
            if (!$table.find('th').length) {
                return;
            }

            // Make sure we have a thead
            if (!$table.find('thead').length) {
                $table.prepend($('<thead>').append(table.rows[0]));
            }

            var $thead = $table.find('thead');

            // Add supporting elements to cells
            $thead
                .find('th')
                .each(function () {
                    var th = this;
                    var $th = $(th);
                    var cellIndex = attr(th, 'index');
                    var settings = {};
                    if (cellIndex === false) {
                        cellIndex = th.cellIndex;
                    }

                    // Check sorting isn't disabled
                    if (!attr(th, 'nosort')) {
                        $th.wrapInner($('<div class="' + WRAPCLASS + '"/>')).children().append(defaultButton);
                        setButtonTitles($th, !attr(th, 'reverse'));

                        var sortType = attr(th, 'type') || guessSortType(table, cellIndex);

                        $.extend(settings, types[sortType]);
                    }

                    var filterFn, filterKeyGen;
                    var selectFilter = attr(th, 'select');
                    if (selectFilter) {
                        var multiple = selectFilter === 'multiple';
                        // If a delimiter is supplied that a cell can contain multiple items for the select
                        $th.append('<span class="' + NAMESPACE + '-span-filter">' + createSelectFilter(table, cellIndex, multiple) + '</span>');
                        settings['filter-fn'] = multiple ? 'inList' : 'exact';
                        settings['filter-keygen'] = 'text';
                    }

                    if (attr(th, 'filter')) {
                        $th.append('<span class="' + NAMESPACE + '-span-filter"><input type="search" class="' + NAMESPACE + '-filter" title="' + labels.search + '"></span>');
                        settings['filter-fn'] = 'has';
                        settings['filter-keygen'] = 'text';
                    }

                    if (dynamic) {
                        settings.dynamic = true;
                    }

                    for (var i in settings) {
                        if (!$.isFunction(settings[i])) {
                            attr(th, i, settings[i]);
                        }
                    }

                });

            // Add col to keep the columns even
            if (options.maintainWidth !== false && !$table.find('col').length) {
                var tableWidth = $table.width();
                var colgroupHTML = '';
                $(table.tBodies[0].rows[0].cells).each(function () {
                    var width = $(this).width();
                    colgroupHTML += '<col class="' + NAMESPACE + '-col" style="width:' + ((width / tableWidth * 100).toFixed(2)) + '%">';
                });
                $thead.before(colgroupHTML);
            }

            $table
                .on('click.' + NAMESPACE, 'th', function (e) {
                    var $target = $(e.target);

                    // Do not run if the user clicks an interactive element we didn't put there
                    if ($target.is('.' + BUTTONCLASS) || !$target.is('a,a *,button,button *,input,select,select *,textarea')) {

                        $target = $(this);
                        var i, j;
                        if (!$target.is('th')) {
                            $target = $target.closest('th');
                        }
                        var th = $target[0];

                        if (attr(th, 'nosort')) {
                            return;
                        }

                        var sortFn = sortFns[attr(th, 'fn')];
                        var keyGen = keyGens[attr(th, 'keygen')];
                        var reverse = attr(th, 'reverse');
                        var dir = reverse;
                        var skipCache = attr(th, 'dynamic');
                        var cellIndex = attr(th, 'index') || th.cellIndex;

                        if ($target.hasClass(NAMESPACE + '-asc')) {
                            dir = !dir;
                        }

                        $table.trigger('sort', [{
                            cellIndex: cellIndex,
                            sortFn: sortFn,
                            keyGen: keyGen,
                            reverse: dir,
                            skipCache: skipCache
                        }]);

                        if (reverse) {
                            dir = !dir;
                        }

                        $target
                            .toggleClass(NAMESPACE + '-asc', !dir)
                            .toggleClass(NAMESPACE + '-desc', dir);

                        setButtonTitles($target, dir);
                    }


                })
                .on('input.' + NAMESPACE, '.' + NAMESPACE + '-filter', function (e) {
                    // debounce
                    var that = this;
                    window.clearTimeout(this[NAMESPACE + 'Timeout']);
                    this[NAMESPACE + 'Timeout'] = window.setTimeout(function () {
                        $(that).trigger('change.' + NAMESPACE);
                    }, 100);
                })
                .on('change.' + NAMESPACE, '.' + NAMESPACE + '-filter', function (e) {
                    var $target = $(this);
                    var $this = $target;
                    var i, j;
                    if (!$target.is('th')) {
                        $target = $target.closest('th');
                    }
                    var th = $target[0];

                    var filterFn = filterFns[attr(th, 'filter-fn')];
                    var keyGen = keyGens[attr(th, 'filter-keygen')];
                    var skipCache = attr(th, 'dynamic') !== null;
                    var text = $this.val();
                    var cellIndex = attr(th, 'index') || th.cellIndex;


                    $table.trigger('filter', [{
                        cellIndex: cellIndex,
                        clear: !text,
                        text: text,
                        filterFn: filterFn,
                        keyGen: keyGen,
                        skipCache: skipCache
                    }]);

                });

            // Make sure the filters are run when the user uses the back button
            $(window).on('pageload' + DOTNAMESPACE + data.guid, function () {
                $(table.tHead).find('.' + NAMESPACE + '-search-filter').trigger('change.' + NAMESPACE);
            });

        }


        // Events that actually do the sorting
        $table
            .on('sort.' + NAMESPACE, function (e, options) {
                options = options || {};

                var $target = $(e.target);

                if (!$target.is('tbody,table')) {
                    $target = $target.closest('tbody,table');
                }

                if ($target.is('table')) {
                    $target = $target.find('tbody');
                }

                $target.each(function () {
                    sortTBody(
                         this,
                         options.cellIndex,
                         options.keyGen,
                         options.sortFn,
                         options.reverse,
                         options.skipCache
                    );
                });

                $table.trigger('sorted', [$target, options]);

            })
            .on('filter.' + NAMESPACE, function (e, filters) {

                var $target = $(e.target);

                if (!$target.is('tbody,table')) {
                    $target = $target.closest('tbody,table');
                }

                if ($target.is('table')) {
                    $target = $target.find('tbody');
                }

                $target.each(function () {
                    filterTBody(
                         this,
                         filters
                    );
                });

                $table.trigger('filtered', [$target, options]);

            });

    }

    /**
     *  Gets or sets an attribute
     *  @param {DOMElement} el The element
     *  @param {String} name The name of the attribute.  Will automatically be prefixed with the namespace
     *  @param {String|Boolean} [value] The value to set to.  If true the value will be set to ''.  false will set it to "false"
     *  @returns {String|Boolean} If no attribute is present false.  If the attribute is empty true. Otherwise the value.
     */
    function attr(el, name, value) {
        var r = $.attr(el, ATTRIBUTEPREFIX + name, value === true ? '' : value);
        if (r === undefined) {
            return false;
        }
        if (r === '') {
            return true;
        }
        return r;
    }

    function setButtonTitles($tr, dir) {
        var button = $tr.find('.' + BUTTONCLASS);
        var title = attr(button[0], (dir ? 'desc' : 'asc') + '-title');
        $tr[0].title = title;
        button[0].title = title;
        button.find('span').text(title);
    }

    /**
     *  Guess the sort type by examining the first 3 non-empty cells of the first tbody
     */
    function guessSortType(table, cellIndex) {
        var rows = table.tBodies[0].rows;
        var i, j, test, cell, text;
        var testCells = [];

        for (i = 0, j = rows.length; testCells.length < 3 && i < rows.length; ++i) {
            cell = rows[i].cells[cellIndex];
            if (cell) {
                text = getText(cell);
                if (text) {
                    testCells.push([text, cell]);
                }
            }
        }
        for (i = 0, j = tests.length; i < j; ++i) {
            test = tests[i](testCells);
            if (test) {
                return test;
            }
        }

        return false;
    }

    /**
     *  Create a select filter for a column.
     */
    function createSelectFilter(table, cellIndex, multiple) {
        var i, j;
        var values = {};
        var valuesAr = [];
        var select;
        var tbodies = table.tBodies;

        for (i = 0, j = tbodies.length; i < j; ++i) {
            $.extend(values, searchTBodies(tbodies[i], cellIndex, multiple));
        }

        for (i in values) {
            valuesAr.push(i);
        }

        valuesAr.sort();

        select = '<select class="' + NAMESPACE + '-filter" title="' + labels.filter + '"><option>';
        for (i = 0, j = valuesAr.length; i < j; ++i) {
            if (valuesAr[i]) {
                select += '<option>' + valuesAr[i];
            }
        }
        return select + '</select>';
    }

    /**
     *  Find values for the select filter
     */
    function searchTBodies(tbody, cellIndex, multiple) {
        var i, j, value;
        var values = {};
        var rows = tbody.rows;

        function addValue(value) {
            values[value.trim()] = true;
        }

        for (i = 0, j = rows.length; i < j; ++i) {
            value = $.text(rows[i].cells[cellIndex] || '');
            if (multiple) {
                value.split(rComma).forEach(addValue);
            } else {
                addValue(value);
            }
        }

        return values;
    }

    /**
     *  Stable sorting is achived by converting the count of the row into a unicode character
     *  Normally we can use String.fromCharCode but
     *  after 65535 rows we need to use two or more characters. 
     */
    function getLargeStableSortKey(i) {
        var r = '';
        var base = i;
        var max = 65536;
        // Could use logs - this is easier
        while (base >= max) {
            base = base / max;
            r += '\uffff';
        }
        r += fromCharCode(i % max);
        return r;
    }

    /**
     *  Sort a tbody
     *  @param {HTMLTableSectionElement} tBody to sort
     *  @param {Integer} cellIndex to sort on.  If not supplied the tbody will be resorted into the original order
     *  @param {Function} keyGen Key generator.  It not supplied text will be used
     *  @param {Function} sortFn Function to sort with.  If not supplied the standard string based system will be used
     *  @param {Boolean} reverse If true reverse the sort
     *  @param {Boolean} skipCache If true do not use cached keys
     */
    function sortTBody(tbody, cellIndex, keyGen, sortFn, reverse, skipCache) {

        var i, j, row, key, cell;
        var arr = [];
        var getStableSortKey = fromCharCode;
        var keySeparator = '\uffff';
        var data = $.data(tbody, NAMESPACE) || {};

        if (!skipCache && data.lastCellIndex === cellIndex && data.reversed !== reverse) {
            // If the last sort was in on the same column in the opposite direction just reverse
            reverseTBody(tbody);
        } else {

            keyGen = keyGen || defaultKeyGens.text;

            if (cellIndex === undefined) {
                // Always use number to sort into the original order
                sortFn = defaultSortFns.num;
            }

            if (tbody.rows.length > 65536) {
                // Detect a very long table and change the stable key generation method
                // and work out a new key separator
                getStableSortKey = getLargeStableSortKey;
                keySeparator = getStableSortKey(tbody.rows.length).replace(/[^\uffff]/g, '');
            }


            for (i = 0, j = tbody.rows.length ; i < j; ++i) {
                row = tbody.rows[i];
                key = '';

                // Mark rows with the original sort order
                if (row[EXPANDOSORTKEY] === undefined) {
                    row[EXPANDOSORTKEY] = i;
                }

                if (cellIndex !== undefined) {
                    // Sorting a column
                    cell = row.cells[cellIndex];
                    if (cell) {
                        key = cell[EXPANDOSORTKEY];
                        if (key === undefined || skipCache) {
                            key = cell.getAttribute(ATTRIBUTEPREFIX + 'key');
                            if (key === null) {
                                key = keyGen(cell);
                            }
                            cell[EXPANDOSORTKEY] = key;
                        }
                    }

                } else {
                    // Sorting the tbody into the original order
                    key = row[EXPANDOSORTKEY];
                }

                arr.push([key, keySeparator, String.fromCharCode(i), keySeparator, i, row]);
            }

            if (sortFn) {
                arr.sort(sortFn);
            } else {
                arr.sort();
            }

            if (reverse) {
                arr.reverse();
            }
            for (i = 0, j = arr.length ; i < j; ++i) {
                tbody.appendChild(arr[i][5]);
            }
        }

        // Remember the last sort
        data.lastCellIndex = cellIndex;
        data.reversed = reverse;
        $.data(tbody, NAMESPACE, data);

    }

    /**
     *  Reverse a tbody.  Quicker than sorting.
     */
    function reverseTBody(tbody) {
        var rows = tbody.rows;
        var row;

        for (var i = rows.length - 1 ; i >= 0 ; --i) {

            // Mark rows with the original sort order
            if (rows[i][EXPANDOSORTKEY] === undefined) {
                row[i][EXPANDOSORTKEY] = i;
            }

            tbody.appendChild(rows[i]);
        }

    }

    /**
     *  Filter a tbody
     */
    function filterTBody(tbody, filter, limitToRowsSet) {
        var i, j, row, m, n, hide, hideCell, cell, key;

        // Apply the filters to each row
        for (i = 0, j = tbody.rows.length ; i < j; ++i) {
            row = tbody.rows[i];

            // Allows a particular rows to be updated
            if (limitToRowsSet && !limitToRowsSet[i]) {
                continue;
            }

            hide = false;

            for (m = 0, n = row.cells.length; m < n; ++m) {

                cell = row.cells[m];

                if (m === filter.cellIndex) {

                    hideCell = false;


                    if (filter.clear) {
                        hideCell = false;
                    } else {

                        key = cell[EXPANDOPREFIX + 'FilterKey'];
                        if (key === undefined || filter.skipCache) {
                            key = cell.getAttribute(ATTRIBUTEPREFIX + 'filter-key');
                            if (key === null) {
                                key = filter.keyGen(cell);
                            }
                            cell[EXPANDOPREFIX + 'FilterKey'] = key;
                        }

                        hideCell = !filter.filterFn(key, filter.text);

                        if (hideCell) {
                            hide = true;
                        }

                    }

                    cell[EXPANDOPREFIX + 'Hide'] = hideCell;

                } else {

                    if (cell[EXPANDOPREFIX + 'Hide']) {
                        hide = true;
                    }
                }
            }

            if (hide) {
                if (row[EXPANDODISPLAY] === undefined) {
                    row[EXPANDODISPLAY] = row.style.display;
                }
                row.style.display = 'none';
            } else {
                row.style.display = row[EXPANDODISPLAY] || '';
            }

        }
    }

    var fn = function (options) {
        this.filter('table').each(function () {
            makeSortable.call(this, options);
        });
        return this;
    };
    fn.keyGens = defaultSortFns;
    fn.filterFns = defaultFilterFns;
    fn.monthNames = monthNames;
    fn.types = types;
    fn.labels = labels;

    // Create the sortable function
    $.fn[NAMESPACE] = fn;

}(jQuery, window));

jQuery(function () {
    $('table.sortable').tablesort();
});