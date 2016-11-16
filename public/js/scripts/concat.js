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
var navTop = $('.side-nav-beta').offset().top;
var navHeight = $('.side-nav-beta').height();

var contentTop1 = $('#advisorInline1').offset().top;
var theTop1 = contentTop1 - navTop - navHeight;
//$('#advisorInline1--box').css('top', theTop+'px');

var contentTop2 = $('#advisorInline2').offset().top;
var theTop2 = contentTop2 - navTop - navHeight;
//$('#advisorInline2--box').css('top', theTop+'px');

$(document).ready(function(){
	$('#advisorInline1Button').click(function() {	 
		$('#advisorInline1--box').css('top', theTop1+'px');   

		$('#advisorInline1--box').slideToggle('show');
		$('#advisorInline2--box').slideUp();
	});
	$('#advisorInline2Button').click(function() {
		$('#advisorInline2--box').css('top', theTop2+'px');  

		$('#advisorInline1--box').slideUp();
		$('#advisorInline2--box').slideToggle('show');
	});

	$('#advisor1').click(function(){
		if($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0)
			$(".tooltip.1").remove();
		} else {
			$(this).attr('data-click-state', 1)
			$("#advisor1").append('<div class="tooltip 1"><p>This is a tooltip. It is typically used to explain something to a user without taking up space on the page.</p></div>');
			var tooltipHeight = $('.tooltip').height();
			var tooltipHeight = tooltipHeight - tooltipHeight * 2 - 32;
			$('.tooltip.1').css('top', tooltipHeight);
			//alert(tooltipHeight);
		}
	});

	$('#advisor2').click(function(){
		if($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0)
			$(".tooltip.2").remove();
		} else {
			$(this).attr('data-click-state', 1)
			$("#advisor2").append('<div class="tooltip 2"><p>This is a tooltip. It is typically used to explain something to a user without taking up space on the page.</p></div>');
			var tooltipHeight = $('.tooltip').height();
			var tooltipHeight = tooltipHeight - tooltipHeight * 2 - 32;
			$('.tooltip.2').css('top', tooltipHeight);
			//alert(tooltipHeight);
		}
	});
});
/**
 * Web chat
 */

if (location.protocol == "https:") {
    var dplat = "https://cita.logo-net.co.uk/Delivery/DBURLssl.php";
} else {
    var dplat = "http://cita.logo-net.co.uk/Delivery/DBURL.php";
}

var strPURL = parent.document.URL;
strPURL = strPURL.replace(/&/g, "^");
strPURL = strPURL.toLowerCase();
strPURL = strPURL.replace(/script/g, "HACK");
strPURL = strPURL.replace(/</g, "HACKONE");
strPURL = strPURL.replace(/>/g, "HACKTWO");
strPURL = strPURL.replace(/%3c/g, "HACKONE");
strPURL = strPURL.replace(/%3e/g, "HACKTWO");
var T = new Date();
var cMS = T.getTime();
document.write("<scr" + "ipt type='text/javascript' src='" + dplat);
document.write("?SDTID=158");
document.write('&PURL=' + strPURL);
document.write('&CMS=' + cMS);
document.write("'></scr" + "ipt>");

$(function ($) {
    var timeout;
    var $extentPopup = $('.js-extent-popup');
    var $extentLink = $('.js-extent-link');
    var $pointer;

    function showPopup() {
        $extentPopup.show();
        if (!$pointer) {
            $pointer = $('<span class="breadcrumb__extent-popup__arrow">').appendTo($extentPopup);
            var leftPos = $extentLink.offset().left + $extentLink.outerWidth() / 2 - $pointer.outerWidth() / 2;
            $pointer.offset({ left: leftPos, top: $extentPopup.offset().top - $pointer.outerHeight() + 1 });
        }
    }

    $extentLink
        .on('click', false) // Stop the link being pressed if JS is enabled
        .add($extentPopup)
            .on('mouseenter focusin', function () {
                clearTimeout(timeout);
                showPopup();
            })
            .on('mouseleave focusout', function (e) {
                // Timeout is 0 for focusout in case the focus moves to a link inside the popup in this tick
                timeout = setTimeout(function () {
                    $extentPopup.hide();
                }, e.type === 'mouseleave' ? 250 : 0);
            });
});





window.cab = window.cab || {};
/**
 *  Micro-templater
 *  Replaces {name} with the property from data
 */
window.cab.templater = function templater(str, data) {
    return str.replace(/\{([^}]+)\}/g, function (m, name) {
        return data[name] || '';
    });
};
/*!
 * clipboard.js v1.5.10
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
 
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(c,a){if(!n[c]){if(!e[c]){var s="function"==typeof require&&require;if(!a&&s)return s(c,!0);if(r)return r(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[c]={exports:{}};e[c][0].call(u.exports,function(t){var n=e[c][1][t];return i(n?n:t)},u,u.exports,t,e,n,o)}return n[c].exports}for(var r="function"==typeof require&&require,c=0;c<o.length;c++)i(o[c]);return i}({1:[function(t,e,n){var o=t("matches-selector");e.exports=function(t,e,n){for(var i=n?t:t.parentNode;i&&i!==document;){if(o(i,e))return i;i=i.parentNode}}},{"matches-selector":5}],2:[function(t,e,n){function o(t,e,n,o,r){var c=i.apply(this,arguments);return t.addEventListener(n,c,r),{destroy:function(){t.removeEventListener(n,c,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e,!0),n.delegateTarget&&o.call(t,n)}}var r=t("closest");e.exports=o},{closest:1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!a.string(e))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(t))return i(t,e,n);if(a.nodeList(t))return r(t,e,n);if(a.string(t))return c(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function c(t,e,n){return s(document.body,t,e,n)}var a=t("./is"),s=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t,e){if(r)return r.call(t,e);for(var n=t.parentNode.querySelectorAll(e),o=0;o<n.length;++o)if(n[o]==t)return!0;return!1}var i=Element.prototype,r=i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=o},{}],6:[function(t,e,n){function o(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=o},{}],7:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;i>o;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,c=o.length;c>r;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if("undefined"!=typeof o)r(n,e("select"));else{var c={exports:{}};r(c,i.select),i.clipboardAction=c.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){this.text?this.selectFake():this.target&&this.selectTarget()},t.prototype.selectFake=function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return e.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="fixed",this.fakeElem.style[n?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=(0,i.default)(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},c(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==("undefined"==typeof e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=a})},{select:6}],9:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var c={exports:{}};r(c,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=c.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=i(e),u=i(n),f=i(o),d=function(t){function e(n,o){r(this,e);var i=c(this,t.call(this));return i.resolveOptions(o),i.listenClick(n),i}return a(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.listenClick=function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})},e.prototype.onClick=function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})},e.prototype.defaultAction=function t(e){return s("action",e)},e.prototype.defaultTarget=function t(e){var n=s("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return s("text",e)},e.prototype.destroy=function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(u.default);t.exports=d})},{"./clipboard-action":8,"good-listener":4,"tiny-emitter":7}]},{},[9])(9)});
/**
 *  @fileoverview
 *  Adds a cookie warning to the site
 *  The warning is shown if the user accepts cookies and if it hasn't already been shown three times
 *  It can be forced to show by adding showeprivacy=true to the url search
 */
jQuery(function ($) {
    // Finds the cookies
    var rCookie = /eprivacy=([1-3])(?:;|$)/;
    // Reduces minified size
    var doc = document;
    // Find the value in the cookie
    var match = doc.cookie.match(rCookie);
    // shownCount be number
    var shownCount = Number(match && match[1] || 0);
    // To set the cookie date
    var date = new Date();
    var cookieDatePart, el;
    var force = location.search.indexOf('showeprivacy=true') > -1;

    if (shownCount < 3 || force ) {

        // Expires in one year
        date.setFullYear(date.getFullYear() + 1);
        cookieDatePart = '; expires=' + date.toUTCString() + '; path=/';

        // Advance the counter
        if (shownCount < 3) {
            ++shownCount;
        }

        if (force) {
            $('html').removeClass('hide-cookie-monster');
        }

        // Set the new value
        doc.cookie = 'eprivacy=' + shownCount + cookieDatePart;
        
        // If the close button is pressed remove and set the cookie
        $('.cookie-monster').on('click','[data-action=close]', function(e) {
            e.preventDefault();
            doc.cookie = 'eprivacy=3' + cookieDatePart;
            $(e.delegateTarget).slideUp();
        } );
    }
});
! function(n, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports =
        n.document ? t(n, !0) : function(n) {
            if (!n.document) throw new Error(
                "jQuery requires a window with a document");
            return t(n)
        } : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    function ri(n) {
        var t = "length" in n && n.length,
            r = i.type(n);
        return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType &&
            t ? !0 : "array" === r || 0 === t || "number" == typeof t &&
            t > 0 && t - 1 in n
    }

    function ui(n, t, r) {
        if (i.isFunction(t)) return i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n, function(n) {
            return n === t !== r
        });
        if ("string" == typeof t) {
            if (re.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }

    function hr(n, t) {
        do n = n[t]; while (n && 1 !== n.nodeType);
        return n
    }

    function ee(n) {
        var t = fi[n] = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function cr() {
        u.addEventListener ? (u.removeEventListener("DOMContentLoaded",
            a, !1), n.removeEventListener("load", a, !1)) : (u.detachEvent(
            "onreadystatechange", a), n.detachEvent("onload", a))
    }

    function a() {
        (u.addEventListener || "load" === event.type || "complete" ===
            u.readyState) && (cr(), i.ready())
    }

    function yr(n, t, r) {
        if (void 0 === r && 1 === n.nodeType) {
            var u = "data-" + t.replace(vr, "-$1").toLowerCase();
            if (r = n.getAttribute(u), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" ===
                        r ? null : +r + "" === r ? +r : ar.test(r) ? i.parseJSON(
                            r) : r
                } catch (f) {}
                i.data(n, t, r)
            } else r = void 0
        }
        return r
    }

    function ei(n) {
        var t;
        for (t in n)
            if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !==
                t) return !1;
        return !0
    }

    function pr(n, t, r, u) {
        if (i.acceptData(n)) {
            var s, e, h = i.expando,
                l = n.nodeType,
                o = l ? i.cache : n,
                f = l ? n[h] : n[h] && h;
            if (f && o[f] && (u || o[f].data) || void 0 !== r ||
                "string" != typeof t) return f || (f = l ? n[h] = c.pop() ||
                    i.guid++ : h), o[f] || (o[f] = l ? {} : {
                    toJSON: i.noop
                }), ("object" == typeof t || "function" == typeof t) &&
                (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(
                    o[f].data, t)), e = o[f], u || (e.data || (e.data = {}),
                    e = e.data), void 0 !== r && (e[i.camelCase(t)] =
                    r), "string" == typeof t ? (s = e[t], null == s &&
                    (s = e[i.camelCase(t)])) : s = e, s
        }
    }

    function wr(n, t, u) {
        if (i.acceptData(n)) {
            var o, s, h = n.nodeType,
                f = h ? i.cache : n,
                e = h ? n[i.expando] : i.expando;
            if (f[e]) {
                if (t && (o = u ? f[e] : f[e].data)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) :
                        (t in o) ? t = [t] : (t = i.camelCase(t), t = (
                            t in o) ? [t] : t.split(" ")), s = t.length; s--;
                    ) delete o[t[s]];
                    if (u ? !ei(o) : !i.isEmptyObject(o)) return
                }(u || (delete f[e].data, ei(f[e]))) && (h ? i.cleanData(
                        [n], !0) : r.deleteExpando || f != f.window ?
                    delete f[e] : f[e] = null)
            }
        }
    }

    function vt() {
        return !0
    }

    function it() {
        return !1
    }

    function dr() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function gr(n) {
        var i = nu.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length) t.createElement(i.pop());
        return t
    }

    function f(n, t) {
        var e, u, s = 0,
            r = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(
                t || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(
                t || "*") : void 0;
        if (!r)
            for (r = [], e = n.childNodes || n; null != (u = e[s]); s++)
                !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
        return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) :
            r
    }

    function we(n) {
        oi.test(n.type) && (n.defaultChecked = n.checked)
    }

    function eu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ?
            t : t.firstChild, "tr") ? n.getElementsByTagName(
            "tbody")[0] || n.appendChild(n.ownerDocument.createElement(
            "tbody")) : n
    }

    function ou(n) {
        return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type,
            n
    }

    function su(n) {
        var t = ve.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function li(n, t) {
        for (var u, r = 0; null != (u = n[r]); r++) i._data(u,
            "globalEval", !t || i._data(t[r], "globalEval"))
    }

    function hu(n, t) {
        if (1 === t.nodeType && i.hasData(n)) {
            var u, f, o, s = i._data(n),
                r = i._data(t, s),
                e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0, o = e[u].length; o > f; f++) i.event.add(
                        t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }

    function be(n, t) {
        var u, e, f;
        if (1 === t.nodeType) {
            if (u = t.nodeName.toLowerCase(), !r.noCloneEvent && t[i.expando]) {
                f = i._data(t);
                for (e in f.events) i.removeEvent(t, e, f.handle);
                t.removeAttribute(i.expando)
            }
            "script" === u && t.text !== n.text ? (ou(t).text = n.text,
                    su(t)) : "object" === u ? (t.parentNode && (t.outerHTML =
                        n.outerHTML), r.html5Clone && n.innerHTML && !i
                    .trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) :
                "input" === u && oi.test(n.type) ? (t.defaultChecked =
                    t.checked = n.checked, t.value !== n.value && (t.value =
                        n.value)) : "option" === u ? t.defaultSelected =
                t.selected = n.defaultSelected : ("input" === u ||
                    "textarea" === u) && (t.defaultValue = n.defaultValue)
        }
    }

    function cu(t, r) {
        var f, u = i(r.createElement(t)).appendTo(r.body),
            e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(
                u[0])) ? f.display : i.css(u[0], "display");
        return u.detach(), e
    }

    function yt(n) {
        var r = u,
            t = ai[n];
        return t || (t = cu(n, r), "none" !== t && t || (ot = (ot || i(
                "<iframe frameborder='0' width='0' height='0'/>"
            )).appendTo(r.documentElement), r = (ot[0].contentWindow ||
                ot[0].contentDocument).document, r.write(), r.close(),
            t = cu(n, r), ot.detach()), ai[n] = t), t
    }

    function au(n, t) {
        return {
            get: function() {
                var i = n();
                if (null != i) return i ? void delete this.get : (
                    this.get = t).apply(this, arguments)
            }
        }
    }

    function pu(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i =
            yu.length; i--;)
            if (t = yu[i] + r, t in n) return t;
        return u
    }

    function wu(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++) r =
            n[u], r.style && (e[u] = i._data(r, "olddisplay"), f = r.style
                .display, t ? (e[u] || "none" !== f || (r.style.display =
                    ""), "" === r.style.display && et(r) && (e[u] =
                    i._data(r, "olddisplay", yt(r.nodeName)))) : (o =
                    et(r), (f && "none" !== f || !o) && i._data(r,
                        "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; s > u; u++) r = n[u], r.style && (t && "none" !== r
            .style.display && "" !== r.style.display || (r.style.display =
                t ? e[u] || "" : "none"));
        return n
    }

    function bu(n, t, i) {
        var r = no.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function ku(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" ===
            t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(
            n, r + w[e], !0, f)), u ? ("content" === r && (o -= i.css(
            n, "padding" + w[e], !0, f)), "margin" !== r && (o -=
            i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(
            n, "padding" + w[e], !0, f), "padding" !== r && (o +=
            i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }

    function du(n, t, u) {
        var o = !0,
            f = "width" === t ? n.offsetWidth : n.offsetHeight,
            e = k(n),
            s = r.boxSizing && "border-box" === i.css(n, "boxSizing", !
                1, e);
        if (0 >= f || null == f) {
            if (f = d(n, t, e), (0 > f || null == f) && (f = n.style[t]),
                pt.test(f)) return f;
            o = s && (r.boxSizingReliable() || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + ku(n, t, u || (s ? "border" : "content"), o, e) +
            "px"
    }

    function e(n, t, i, r, u) {
        return new e.prototype.init(n, t, i, r, u)
    }

    function nf() {
        return setTimeout(function() {
            rt = void 0
        }), rt = i.now()
    }

    function kt(n, t) {
        var r, i = {
                height: n
            },
            u = 0;
        for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = w[u], i["margin" + r] =
            i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function tf(n, t, i) {
        for (var u, f = (st[t] || []).concat(st["*"]), r = 0, e = f.length; e >
            r; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function fo(n, t, u) {
        var f, a, p, v, s, w, h, b, l = this,
            y = {},
            o = n.style,
            c = n.nodeType && et(n),
            e = i._data(n, "fxshow");
        u.queue || (s = i._queueHooks(n, "fx"), null == s.unqueued && (
            s.unqueued = 0, w = s.empty.fire, s.empty.fire =
            function() {
                s.unqueued || w()
            }), s.unqueued++, l.always(function() {
            l.always(function() {
                s.unqueued--;
                i.queue(n, "fx").length || s.empty.fire()
            })
        }));
        1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [
                o.overflow, o.overflowX, o.overflowY
            ], h = i.css(n, "display"), b = "none" === h ? i._data(
                n, "olddisplay") || yt(n.nodeName) : h, "inline" ===
            b && "none" === i.css(n, "float") && (r.inlineBlockNeedsLayout &&
                "inline" !== yt(n.nodeName) ? o.zoom = 1 : o.display =
                "inline-block"));
        u.overflow && (o.overflow = "hidden", r.shrinkWrapBlocks() || l
            .always(function() {
                o.overflow = u.overflow[0];
                o.overflowX = u.overflow[1];
                o.overflowY = u.overflow[2]
            }));
        for (f in t)
            if (a = t[f], ro.exec(a)) {
                if (delete t[f], p = p || "toggle" === a, a === (c ?
                    "hide" : "show")) {
                    if ("show" !== a || !e || void 0 === e[f]) continue;
                    c = !0
                }
                y[f] = e && e[f] || i.style(n, f)
            } else h = void 0;
        if (i.isEmptyObject(y)) "inline" === ("none" === h ? yt(n.nodeName) :
            h) && (o.display = h);
        else {
            e ? "hidden" in e && (c = e.hidden) : e = i._data(n,
                "fxshow", {});
            p && (e.hidden = !c);
            c ? i(n).show() : l.done(function() {
                i(n).hide()
            });
            l.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in y) i.style(n, t, y[t])
            });
            for (f in y) v = tf(c ? e[f] : 0, f, l), f in e || (e[f] =
                v.start, c && (v.end = v.start, v.start = "width" ===
                    f || "height" === f ? 1 : 0))
        }
    }

    function eo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) &&
                (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u,
                    delete n[r]), o = i.cssHooks[f], o && "expand" in o
            ) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function rf(n, t, r) {
        var h, e, o = 0,
            l = bt.length,
            f = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (e) return !1;
                for (var s = rt || nf(), t = Math.max(0, u.startTime +
                        u.duration - s), h = t / u.duration || 0, i =
                    1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[
                    r].run(i);
                return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(
                    n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: rt || nf(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[
                        t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; r > i; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(
                        n, [u, t]), this
                }
            }),
            s = u.props;
        for (eo(s, u.opts.specialEasing); l > o; o++)
            if (h = bt[o].call(u, n, s, u.opts)) return h;
        return i.map(s, tf, u), i.isFunction(u.opts.start) && u.opts.start
            .call(n, u), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail).always(u.opts.always)
    }

    function af(n) {
        return function(t, r) {
            "string" != typeof t && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) "+" === u.charAt(0) ? (u = u.slice(
                    1) || "*", (n[u] = n[u] || []).unshift(
                    r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function vf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ?
                    o ? !(h = s) : void 0 : (t.dataTypes.unshift(
                        s), e(s), !1)
            }), h
        }
        var f = {},
            o = n === bi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ki(n, t) {
        var u, r, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] =
            t[r]);
        return u && i.extend(!0, n, u), n
    }

    function ao(n, t, i) {
        for (var o, e, u, f, s = n.contents, r = n.dataTypes;
            "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType ||
            t.getResponseHeader("Content-Type"));
        if (e)
            for (f in s)
                if (s[f] && s[f].test(e)) {
                    r.unshift(f);
                    break
                }
        if (r[0] in i) u = r[0];
        else {
            for (f in i) {
                if (!r[0] || n.converters[f + " " + r[0]]) {
                    u = f;
                    break
                }
                o || (o = f)
            }
            u = u || o
        } if (u) return (u !== r[0] && r.unshift(u), i[u])
    }

    function vo(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e &&
                r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
                e = u, u = c.shift())
                if ("*" === u) u = e;
                else if ("*" !== e && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " +
                        s[0]] || o["* " + s[0]])) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0],
                            c.unshift(s[1]));
                        break
                    }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e +
                            " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function di(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function(t, i) {
            r || po.test(n) ? u(n, i) : di(n + "[" + ("object" ==
                typeof i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== i.type(t)) u(n, t);
        else
            for (f in t) di(n + "[" + f + "]", t[f], r, u)
    }

    function pf() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }

    function go() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function wf(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView ||
            n.parentWindow : !1
    }
    var c = [],
        l = c.slice,
        ir = c.concat,
        ii = c.push,
        rr = c.indexOf,
        ct = {},
        df = ct.toString,
        tt = ct.hasOwnProperty,
        r = {},
        ur = "1.11.3",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        gf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ne = /^-ms-/,
        te = /-([\da-z])/gi,
        ie = function(n, t) {
            return t.toUpperCase()
        },
        p, or, sr, h, fi, lt, o, lr, ar, vr, ot, ai, uf, ef, of, gt, gi, ti,
        nr, tr, bf, kf;
    i.fn = i.prototype = {
        jquery: ur,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return l.call(this)
        },
        get: function(n) {
            return null != n ? 0 > n ? this[n + this.length] : this[
                n] : l.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ii,
        sort: c.sort,
        splice: c.splice
    };
    i.extend = i.fn.extend = function() {
        var r, e, t, f, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++),
            "object" == typeof n || i.isFunction(n) || (n = {}), u ===
            c && (n = this, u--); c > u; u++)
            if (null != (o = arguments[u]))
                for (f in o) r = n[f], t = o[f], n !== t && (h && t &&
                    (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ?
                        (e = !1, s = r && i.isArray(r) ? r : []) :
                        s = r && i.isPlainObject(r) ? r : {}, n[f] =
                        i.extend(h, s, t)) : void 0 !== t && (n[f] =
                        t));
        return n
    };
    i.extend({
        expando: "jQuery" + (ur + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray || function(n) {
            return "array" === i.type(n)
        },
        isWindow: function(n) {
            return null != n && n == n.window
        },
        isNumeric: function(n) {
            return !i.isArray(n) && n - parseFloat(n) + 1 >= 0
        },
        isEmptyObject: function(n) {
            var t;
            for (t in n) return !1;
            return !0
        },
        isPlainObject: function(n) {
            var t;
            if (!n || "object" !== i.type(n) || n.nodeType || i
                .isWindow(n)) return !1;
            try {
                if (n.constructor && !tt.call(n, "constructor") &&
                    !tt.call(n.constructor.prototype,
                        "isPrototypeOf")) return !1
            } catch (u) {
                return !1
            }
            if (r.ownLast)
                for (t in n) return tt.call(n, t);
            for (t in n);
            return void 0 === t || tt.call(n, t)
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n ||
                "function" == typeof n ? ct[df.call(n)] ||
                "object" : typeof n
        },
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            })(t)
        },
        camelCase: function(n) {
            return n.replace(ne, "ms-").replace(te, ie)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t
                .toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0,
                f = n.length,
                e = ri(n);
            if (i) {
                if (e) {
                    for (; f > r; r++)
                        if (u = t.apply(n[r], i), u === !1)
                            break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i), u === !1)
                            break
            } else if (e) {
                for (; f > r; r++)
                    if (u = t.call(n[r], r, n[r]), u === !1)
                        break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]), u === !1)
                        break; return n
        },
        trim: function(n) {
            return null == n ? "" : (n + "").replace(gf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (ri(Object(n)) ? i.merge(r,
                "string" == typeof n ? [n] : n) : ii.call(
                r, n)), r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (rr) return rr.call(t, n, i);
                for (r = t.length, i = i ? 0 > i ? Math.max(0,
                    r + i) : i : 0; r > i; i++)
                    if (i in t && t[i] === n) return i
            }
            return -1
        },
        merge: function(n, t) {
            for (var r = +t.length, i = 0, u = n.length; r > i;)
                n[u++] = t[i++];
            if (r !== r)
                while (void 0 !== t[i]) n[u++] = t[i++];
            return n.length = u, n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; e >
                r; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0,
                e = n.length,
                o = ri(n),
                f = [];
            if (o)
                for (; e > r; r++) u = t(n[r], r, i), null != u &&
                    f.push(u);
            else
                for (r in n) u = t(n[r], r, i), null != u && f.push(
                    u);
            return ir.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, r, f;
            return "string" == typeof t && (f = n[t], t = n, n =
                    f), i.isFunction(n) ? (u = l.call(arguments,
                    2), r = function() {
                    return n.apply(t || this, u.concat(l.call(
                        arguments)))
                }, r.guid = n.guid = n.guid || i.guid++, r) :
                void 0
        },
        now: function() {
            return +new Date
        },
        support: r
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(
        " "), function(n, t) {
        ct["[object " + t + "]"] = t.toLowerCase()
    });
    p = function(n) {
        function r(n, t, i, r) {
            var p, s, a, c, w, y, d, v, nt, g;
            if ((t ? t.ownerDocument || t : h) !== o && k(t), t = t ||
                o, i = i || [], c = t.nodeType, "string" != typeof n ||
                !n || 1 !== c && 9 !== c && 11 !== c) return i;
            if (!r && l) {
                if (11 !== c && (p = hr.exec(n)))
                    if (a = p[1]) {
                        if (9 === c) {
                            if (s = t.getElementById(a), !s || !s.parentNode)
                                return i;
                            if (s.id === a) return i.push(s), i
                        } else if (t.ownerDocument && (s = t.ownerDocument
                                .getElementById(a)) && et(t, s) &&
                            s.id === a) return i.push(s), i
                    } else {
                        if (p[2]) return b.apply(i, t.getElementsByTagName(
                            n)), i;
                        if ((a = p[3]) && u.getElementsByClassName)
                            return b.apply(i, t.getElementsByClassName(
                                a)), i
                    }
                if (u.qsa && (!e || !e.test(n))) {
                    if (v = d = f, nt = t, g = 1 !== c && n, 1 ===
                        c && "object" !== t.nodeName.toLowerCase()) {
                        for (y = ft(n), (d = t.getAttribute("id")) ?
                            v = d.replace(cr, "\\$&") : t.setAttribute(
                                "id", v), v = "[id='" + v + "'] ",
                            w = y.length; w--;) y[w] = v + vt(y[w]);
                        nt = dt.test(n) && ti(t.parentNode) || t;
                        g = y.join(",")
                    }
                    if (g) try {
                        return b.apply(i, nt.querySelectorAll(g)),
                            i
                    } catch (tt) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return oi(n.replace(lt, "$1"), t, i, r)
        }

        function gt() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength &&
                    delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function c(n) {
            return n[f] = !0, n
        }

        function v(n) {
            var t = o.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ni(n, i) {
            for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[
                u[r]] = i
        }

        function wi(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && (~
                    t.sourceIndex || li) - (~n.sourceIndex || li);
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }

        function ar(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type ===
                    n
            }
        }

        function tt(n) {
            return c(function(t) {
                return t = +t, c(function(i, r) {
                    for (var u, f = n([], i.length,
                        t), e = f.length; e--;) i[u =
                        f[e]] && (i[u] = !(r[u] =
                        i[u]))
                })
            })
        }

        function ti(n) {
            return n && "undefined" != typeof n.getElementsByTagName &&
                n
        }

        function bi() {}

        function vt(n) {
            for (var t = 0, r = n.length, i = ""; r > t; t++) i +=
                n[t].value;
            return i
        }

        function ii(n, t, i) {
            var r = t.dir,
                u = i && "parentNode" === r,
                e = ki++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (1 === t.nodeType || u) return n(t, i, f)
            } : function(t, i, o) {
                var s, h, c = [a, e];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i,
                            o)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || u) {
                            if (h = t[f] || (t[f] = {}), (s = h[
                                    r]) && s[0] === a && s[1] ===
                                e) return c[2] = s[2];
                            if (h[r] = c, c[2] = n(t, i, o))
                                return !0
                        }
            }
        }

        function ri(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function vr(n, t, i) {
            for (var u = 0, f = t.length; f > u; u++) r(n, t[u], i);
            return i
        }

        function yt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; s >
                f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(
                e), h && t.push(f));
            return o
        }

        function ui(n, t, i, r, u, e) {
            return r && !r[f] && (r = ui(r)), u && !u[f] && (u = ui(
                u, e)), c(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    k = f || vr(t || "*", o.nodeType ? [o] :
                        o, []),
                    v = !n || !f && t ? k : yt(k, p, n, o,
                        s),
                    h = i ? u || (f ? n : w || r) ? [] : e :
                    v;
                if (i && i(v, h, o, s), r)
                    for (l = yt(h, y), r(l, [], o, s), c =
                        l.length; c--;)(a = l[c]) && (h[y[c]] = !
                        (v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)
                                (a = h[c]) && l.push(v[c] =
                                    a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) &&
                            (l = u ? nt(f, a) : p[c]) > -1 &&
                            (f[l] = !(e[l] = a))
                    }
                } else h = yt(h === e ? h.splice(w, h.length) :
                    h), u ? u(null, e, h, s) : b.apply(
                    e, h)
            })
        }

        function fi(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type],
                c = h || t.relative[" "], i = h ? 1 : 0, l = ii(
                    function(n) {
                        return n === o
                    }, c, !0), a = ii(function(n) {
                    return nt(o, n) > -1
                }, c, !0), e = [
                    function(n, t, i) {
                        var r = !h && (i || t !== ht) || ((o =
                                t).nodeType ? l(n, t, i) :
                            a(n, t, i));
                        return o = null, r
                    }
                ]; s > i; i++)
                if (u = t.relative[n[i].type]) e = [ii(ri(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches),
                        u[f]) {
                        for (r = ++i; s > r; r++)
                            if (t.relative[n[r].type]) break;
                        return ui(i > 1 && ri(e), i > 1 && vt(n.slice(
                                0, i - 1).concat({
                                value: " " === n[i - 2]
                                    .type ? "*" : ""
                            })).replace(lt, "$1"), u, r > i &&
                            fi(n.slice(i, r)), s > r && fi(n =
                                n.slice(r)), s > r && vt(n))
                    }
                    e.push(u)
                }
            return ri(e)
        }

        function yr(n, i) {
            var u = i.length > 0,
                f = n.length > 0,
                e = function(e, s, h, c, l) {
                    var y, d, w, k = 0,
                        v = "0",
                        g = e && [],
                        p = [],
                        nt = ht,
                        tt = e || f && t.find.TAG("*", l),
                        it = a += null == nt ? 1 : Math.random() ||
                        .1,
                        rt = tt.length;
                    for (l && (ht = s !== o && s); v !== rt && null !=
                        (y = tt[v]); v++) {
                        if (f && y) {
                            for (d = 0; w = n[d++];)
                                if (w(y, s, h)) {
                                    c.push(y);
                                    break
                                }
                            l && (a = it)
                        }
                        u && ((y = !w && y) && k--, e && g.push(y))
                    }
                    if (k += v, u && v !== k) {
                        for (d = 0; w = i[d++];) w(g, p, s, h);
                        if (e) {
                            if (k > 0)
                                while (v--) g[v] || p[v] || (p[v] =
                                    gi.call(c));
                            p = yt(p)
                        }
                        b.apply(c, p);
                        l && !e && p.length > 0 && k + i.length > 1 &&
                            r.uniqueSort(c)
                    }
                    return l && (a = it, ht = nt), g
                };
            return u ? c(e) : e
        }
        var it, u, t, st, ei, ft, pt, oi, ht, w, rt, k, o, s, l, e, d,
            ct, et, f = "sizzle" + 1 * new Date,
            h = n.document,
            a = 0,
            ki = 0,
            si = gt(),
            hi = gt(),
            ci = gt(),
            wt = function(n, t) {
                return n === t && (rt = !0), 0
            },
            li = -2147483648,
            di = {}.hasOwnProperty,
            g = [],
            gi = g.pop,
            nr = g.push,
            b = g.push,
            ai = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; r > i; i++)
                    if (n[i] === t) return i;
                return -1
            },
            bt =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            i = "[\\x20\\t\\r\\n\\f]",
            ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            vi = ut.replace("w", "w#"),
            yi = "\\[" + i + "*(" + ut + ")(?:" + i + "*([*^$|!~]?=)" +
            i +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            vi + "))|)" + i + "*\\]",
            kt = ":(" + ut +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            yi + ")*)|.*)\\)|)",
            tr = new RegExp(i + "+", "g"),
            lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i +
                "+$", "g"),
            ir = new RegExp("^" + i + "*," + i + "*"),
            rr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
            ur = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]",
                "g"),
            fr = new RegExp(kt),
            er = new RegExp("^" + vi + "$"),
            at = {
                ID: new RegExp("^#(" + ut + ")"),
                CLASS: new RegExp("^\\.(" + ut + ")"),
                TAG: new RegExp("^(" + ut.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + yi),
                PSEUDO: new RegExp("^" + kt),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    i + "*(even|odd|(([+-]|)(\\d*)n|)" + i +
                    "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)",
                    "i"),
                bool: new RegExp("^(?:" + bt + ")$", "i"),
                needsContext: new RegExp("^" + i +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)",
                    "i")
            },
            or = /^(?:input|select|textarea|button)$/i,
            sr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            hr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            dt = /[+~]/,
            cr = /'|\\/g,
            y = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i +
                ")|.)", "ig"),
            p = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : 0 > r ? String.fromCharCode(r +
                    65536) : String.fromCharCode(r >> 10 | 55296,
                    1023 & r | 56320)
            },
            pi = function() {
                k()
            };
        try {
            b.apply(g = ai.call(h.childNodes), h.childNodes);
            g[h.childNodes.length].nodeType
        } catch (pr) {
            b = {
                apply: g.length ? function(n, t) {
                    nr.apply(n, ai.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];)
                    ;
                    n.length = i - 1
                }
            }
        }
        u = r.support = {};
        ei = r.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        };
        k = r.setDocument = function(n) {
            var a, c, r = n ? n.ownerDocument || n : h;
            return r !== o && 9 === r.nodeType && r.documentElement ?
                (o = r, s = r.documentElement, c = r.defaultView, c &&
                    c !== c.top && (c.addEventListener ? c.addEventListener(
                        "unload", pi, !1) : c.attachEvent && c.attachEvent(
                        "onunload", pi)), l = !ei(r), u.attributes =
                    v(function(n) {
                        return n.className = "i", !n.getAttribute(
                            "className")
                    }), u.getElementsByTagName = v(function(n) {
                        return n.appendChild(r.createComment("")), !
                            n.getElementsByTagName("*").length
                    }), u.getElementsByClassName = ot.test(r.getElementsByClassName),
                    u.getById = v(function(n) {
                        return s.appendChild(n).id = f, !r.getElementsByName ||
                            !r.getElementsByName(f).length
                    }), u.getById ? (t.find.ID = function(n, t) {
                        if ("undefined" != typeof t.getElementById &&
                            l) {
                            var i = t.getElementById(n);
                            return i && i.parentNode ? [i] : []
                        }
                    }, t.filter.ID = function(n) {
                        var t = n.replace(y, p);
                        return function(n) {
                            return n.getAttribute("id") ===
                                t
                        }
                    }) : (delete t.find.ID, t.filter.ID = function(
                        n) {
                        var t = n.replace(y, p);
                        return function(n) {
                            var i = "undefined" != typeof n
                                .getAttributeNode && n.getAttributeNode(
                                    "id");
                            return i && i.value === t
                        }
                    }), t.find.TAG = u.getElementsByTagName ?
                    function(n, t) {
                        return "undefined" != typeof t.getElementsByTagName ?
                            t.getElementsByTagName(n) : u.qsa ? t.querySelectorAll(
                                n) : void 0
                    } : function(n, t) {
                        var i, r = [],
                            f = 0,
                            u = t.getElementsByTagName(n);
                        if ("*" === n) {
                            while (i = u[f++]) 1 === i.nodeType &&
                                r.push(i);
                            return r
                        }
                        return u
                    }, t.find.CLASS = u.getElementsByClassName &&
                    function(n, t) {
                        if (l) return t.getElementsByClassName(n)
                    }, d = [], e = [], (u.qsa = ot.test(r.querySelectorAll)) &&
                    (v(function(n) {
                        s.appendChild(n).innerHTML =
                            "<a id='" + f +
                            "'><\/a><select id='" + f +
                            "-\f]' msallowcapture=''><option selected=''><\/option><\/select>";
                        n.querySelectorAll(
                                "[msallowcapture^='']").length &&
                            e.push("[*^$]=" + i +
                                "*(?:''|\"\")");
                        n.querySelectorAll("[selected]").length ||
                            e.push("\\[" + i + "*(?:value|" +
                                bt + ")");
                        n.querySelectorAll("[id~=" + f +
                            "-]").length || e.push("~=");
                        n.querySelectorAll(":checked").length ||
                            e.push(":checked");
                        n.querySelectorAll("a#" + f + "+*")
                            .length || e.push(".#.+[+~]")
                    }), v(function(n) {
                        var t = r.createElement("input");
                        t.setAttribute("type", "hidden");
                        n.appendChild(t).setAttribute(
                            "name", "D");
                        n.querySelectorAll("[name=d]").length &&
                            e.push("name" + i +
                                "*[*^$|!~]?=");
                        n.querySelectorAll(":enabled").length ||
                            e.push(":enabled", ":disabled");
                        n.querySelectorAll("*,:x");
                        e.push(",.*:")
                    })), (u.matchesSelector = ot.test(ct = s.matches ||
                        s.webkitMatchesSelector || s.mozMatchesSelector ||
                        s.oMatchesSelector || s.msMatchesSelector
                    )) && v(function(n) {
                        u.disconnectedMatch = ct.call(n, "div");
                        ct.call(n, "[s!='']:x");
                        d.push("!=", kt)
                    }), e = e.length && new RegExp(e.join("|")), d =
                    d.length && new RegExp(d.join("|")), a = ot.test(
                        s.compareDocumentPosition), et = a || ot.test(
                        s.contains) ? function(n, t) {
                        var r = 9 === n.nodeType ? n.documentElement :
                            n,
                            i = t && t.parentNode;
                        return n === i || !(!i || 1 !== i.nodeType ||
                            !(r.contains ? r.contains(i) : n.compareDocumentPosition &&
                                16 & n.compareDocumentPosition(
                                    i)))
                    } : function(n, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === n) return !0;
                        return !1
                    }, wt = a ? function(n, t) {
                        if (n === t) return rt = !0, 0;
                        var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                        return i ? i : (i = (n.ownerDocument || n) ===
                            (t.ownerDocument || t) ? n.compareDocumentPosition(
                                t) : 1, 1 & i || !u.sortDetached &&
                            t.compareDocumentPosition(n) === i ?
                            n === r || n.ownerDocument === h &&
                            et(h, n) ? -1 : t === r || t.ownerDocument ===
                            h && et(h, t) ? 1 : w ? nt(w, n) -
                            nt(w, t) : 0 : 4 & i ? -1 : 1)
                    } : function(n, t) {
                        if (n === t) return rt = !0, 0;
                        var i, u = 0,
                            o = n.parentNode,
                            s = t.parentNode,
                            f = [n],
                            e = [t];
                        if (!o || !s) return n === r ? -1 : t === r ?
                            1 : o ? -1 : s ? 1 : w ? nt(w, n) -
                            nt(w, t) : 0;
                        if (o === s) return wi(n, t);
                        for (i = n; i = i.parentNode;) f.unshift(i);
                        for (i = t; i = i.parentNode;) e.unshift(i);
                        while (f[u] === e[u]) u++;
                        return u ? wi(f[u], e[u]) : f[u] === h ? -1 :
                            e[u] === h ? 1 : 0
                    }, r) : o
        };
        r.matches = function(n, t) {
            return r(n, null, null, t)
        };
        r.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== o && k(n), t = t.replace(
                ur, "='$1']"), !(!u.matchesSelector || !l || d &&
                d.test(t) || e && e.test(t))) try {
                var i = ct.call(n, t);
                if (i || u.disconnectedMatch || n.document &&
                    11 !== n.document.nodeType) return i
            } catch (f) {}
            return r(t, o, null, [n]).length > 0
        };
        r.contains = function(n, t) {
            return (n.ownerDocument || n) !== o && k(n), et(n, t)
        };
        r.attr = function(n, i) {
            (n.ownerDocument || n) !== o && k(n);
            var f = t.attrHandle[i.toLowerCase()],
                r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(
                    n, i, !l) : void 0;
            return void 0 !== r ? r : u.attributes || !l ? n.getAttribute(
                    i) : (r = n.getAttributeNode(i)) && r.specified ?
                r.value : null
        };
        r.error = function(n) {
            throw new Error(
                "Syntax error, unrecognized expression: " + n);
        };
        r.uniqueSort = function(n) {
            var r, f = [],
                t = 0,
                i = 0;
            if (rt = !u.detectDuplicates, w = !u.sortStable && n.slice(
                0), n.sort(wt), rt) {
                while (r = n[i++]) r === n[i] && (t = f.push(i));
                while (t--) n.splice(f[t], 1)
            }
            return w = null, n
        };
        st = r.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i +=
                        st(n)
                } else if (3 === t || 4 === t) return n.nodeValue
            } else
                while (r = n[u++]) i += st(r);
            return i
        };
        t = r.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: at,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p), n[3] = (n[
                        3] || n[4] || n[5] || "").replace(y,
                        p), "~=" === n[2] && (n[3] = " " +
                        n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), "nth" ===
                        n[1].slice(0, 3) ? (n[3] || r.error(n[0]),
                            n[4] = +(n[4] ? n[5] + (n[6] || 1) :
                                2 * ("even" === n[3] || "odd" ===
                                    n[3])), n[5] = +(n[7] + n[8] ||
                                "odd" === n[3])) : n[3] && r.error(
                            n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return at.CHILD.test(n[0]) ? null : (n[3] ?
                        n[2] = n[4] || n[5] || "" : t && fr
                        .test(t) && (i = ft(t, !0)) && (i =
                            t.indexOf(")", t.length - i) -
                            t.length) && (n[0] = n[0].slice(
                            0, i), n[2] = t.slice(0, i)), n
                        .slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() ===
                            t
                    }
                },
                CLASS: function(n) {
                    var t = si[n + " "];
                    return t || (t = new RegExp("(^|" + i + ")" +
                        n + "(" + i + "|$)")) && si(n,
                        function(n) {
                            return t.test("string" ==
                                typeof n.className && n
                                .className ||
                                "undefined" != typeof n
                                .getAttribute && n.getAttribute(
                                    "class") || "")
                        })
                },
                ATTR: function(n, t, i) {
                    return function(u) {
                        var f = r.attr(u, n);
                        return null == f ? "!=" === t : t ?
                            (f += "", "=" === t ? f === i :
                                "!=" === t ? f !== i : "^=" ===
                                t ? i && 0 === f.indexOf(i) :
                                "*=" === t ? i && f.indexOf(
                                    i) > -1 : "$=" === t ?
                                i && f.slice(-i.length) ===
                                i : "~=" === t ? (" " + f.replace(
                                    tr, " ") + " ").indexOf(
                                    i) > -1 : "|=" === t ?
                                f === i || f.slice(0, i.length +
                                    1) === i + "-" : !1) :
                            !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3),
                        o = "last" !== n.slice(-4),
                        e = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var v, k, c, l, y, w, b = s !== o ?
                            "nextSibling" :
                            "previousSibling",
                            p = t.parentNode,
                            g = e && t.nodeName.toLowerCase(),
                            d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];)
                                        if (e ? c.nodeName.toLowerCase() ===
                                            g : 1 === c.nodeType
                                        ) return !1;
                                    w = b = "only" === n &&
                                        !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? p.firstChild : p.lastChild],
                                o && d) {
                                for (k = p[f] || (p[f] = {}),
                                    v = k[n] || [], y = v[0] ===
                                    a && v[1], l = v[0] ===
                                    a && v[2], c = y && p.childNodes[
                                        y]; c = ++y && c &&
                                    c[b] || (l = y = 0) ||
                                    w.pop();)
                                    if (1 === c.nodeType &&
                                        ++l && c === t) {
                                        k[n] = [a, y, l];
                                        break
                                    }
                            } else if (d && (v = (t[f] || (
                                    t[f] = {}))[n]) && v[0] ===
                                a) l = v[1];
                            else
                                while (c = ++y && c && c[b] ||
                                    (l = y = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() ===
                                        g : 1 === c.nodeType
                                    ) && ++l && (d && (
                                        (c[f] || (c[
                                            f
                                        ] = {}))[n] = [
                                            a, l
                                        ]), c === t)) break; return
                                l -= u, l === r || l % r ==
                                0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] ||
                        r.error("unsupported pseudo: " + n);
                    return u[f] ? u(i) : u.length > 1 ? (e = [n,
                            n, "", i
                        ], t.setFilters.hasOwnProperty(n.toLowerCase()) ?
                        c(function(n, t) {
                            for (var r, f = u(n, i), e =
                                f.length; e--;) r = nt(
                                n, f[e]), n[r] = !(
                                t[r] = f[e])
                        }) : function(n) {
                            return u(n, 0, e)
                        }) : u
                }
            },
            pseudos: {
                not: c(function(n) {
                    var t = [],
                        r = [],
                        i = pt(n.replace(lt, "$1"));
                    return i[f] ? c(function(n, t, r, u) {
                        for (var e, o = i(n, null,
                            u, []), f = n.length; f--;)
                            (e = o[f]) && (n[f] = !
                                (t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n, i(t, null, f,
                            r), t[0] = null, !r.pop()
                    }
                }),
                has: c(function(n) {
                    return function(t) {
                        return r(n, t).length > 0
                    }
                }),
                contains: c(function(n) {
                    return n = n.replace(y, p),
                        function(t) {
                            return (t.textContent || t.innerText ||
                                st(t)).indexOf(n) > -1
                        }
                }),
                lang: c(function(n) {
                    return er.test(n || "") || r.error(
                            "unsupported lang: " + n), n =
                        n.replace(y, p).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = l ? t.lang : t.getAttribute(
                                    "xml:lang") || t.getAttribute(
                                    "lang")) return i = i.toLowerCase(),
                                    i === n || 0 === i.indexOf(
                                        n + "-");
                            while ((t = t.parentNode) && 1 ===
                                t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === o.activeElement && (!o.hasFocus ||
                        o.hasFocus()) && !!(n.type || n.href ||
                        ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked ||
                        "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                        n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return sr.test(n.nodeName)
                },
                input: function(n) {
                    return or.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type ||
                        "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() &&
                        "text" === n.type && (null == (t = n.getAttribute(
                            "type")) || "text" === t.toLowerCase())
                },
                first: tt(function() {
                    return [0]
                }),
                last: tt(function(n, t) {
                    return [t - 1]
                }),
                eq: tt(function(n, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: tt(function(n, t) {
                    for (var i = 0; t > i; i += 2) n.push(i);
                    return n
                }),
                odd: tt(function(n, t) {
                    for (var i = 1; t > i; i += 2) n.push(i);
                    return n
                }),
                lt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; --r >=
                        0;) n.push(r);
                    return n
                }),
                gt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; ++r < t;)
                        n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (it in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) t.pseudos[it] = lr(it);
        for (it in {
            submit: !0,
            reset: !0
        }) t.pseudos[it] = ar(it);
        return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi,
            ft = r.tokenize = function(n, i) {
                var e, f, s, o, u, h, c, l = hi[n + " "];
                if (l) return i ? 0 : l.slice(0);
                for (u = n, h = [], c = t.preFilter; u;) {
                    (!e || (f = ir.exec(u))) && (f && (u = u.slice(f[0]
                        .length) || u), h.push(s = []));
                    e = !1;
                    (f = rr.exec(u)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(lt, " ")
                    }), u = u.slice(e.length));
                    for (o in t.filter)(f = at[o].exec(u)) && (!c[o] ||
                        (f = c[o](f))) && (e = f.shift(), s.push({
                        value: e,
                        type: o,
                        matches: f
                    }), u = u.slice(e.length));
                    if (!e) break
                }
                return i ? u.length : u ? r.error(n) : hi(n, h).slice(0)
            }, pt = r.compile = function(n, t) {
                var r, u = [],
                    e = [],
                    i = ci[n + " "];
                if (!i) {
                    for (t || (t = ft(n)), r = t.length; r--;) i = fi(t[
                        r]), i[f] ? u.push(i) : e.push(i);
                    i = ci(n, yr(e, u));
                    i.selector = n
                }
                return i
            }, oi = r.select = function(n, i, r, f) {
                var s, e, o, a, v, c = "function" == typeof n && n,
                    h = !f && ft(n = c.selector || n);
                if (r = r || [], 1 === h.length) {
                    if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" ===
                        (o = e[0]).type && u.getById && 9 === i.nodeType &&
                        l && t.relative[e[1].type]) {
                        if (i = (t.find.ID(o.matches[0].replace(y, p),
                            i) || [])[0], !i) return r;
                        c && (i = i.parentNode);
                        n = n.slice(e.shift().value.length)
                    }
                    for (s = at.needsContext.test(n) ? 0 : e.length; s--;) {
                        if (o = e[s], t.relative[a = o.type]) break;
                        if ((v = t.find[a]) && (f = v(o.matches[0].replace(
                            y, p), dt.test(e[0].type) && ti(
                            i.parentNode) || i))) {
                            if (e.splice(s, 1), n = f.length && vt(e), !
                                n) return b.apply(r, f), r;
                            break
                        }
                    }
                }
                return (c || pt(n, h))(f, i, !l, r, dt.test(n) && ti(i.parentNode) ||
                    i), r
            }, u.sortStable = f.split("").sort(wt).join("") === f, u.detectDuplicates = !
            !rt, k(), u.sortDetached = v(function(n) {
                return 1 & n.compareDocumentPosition(o.createElement(
                    "div"))
            }), v(function(n) {
                return n.innerHTML = "<a href='#'><\/a>", "#" === n
                    .firstChild.getAttribute("href")
            }) || ni("type|href|height|width", function(n, t, i) {
                if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ?
                    1 : 2)
            }), u.attributes && v(function(n) {
                return n.innerHTML = "<input/>", n.firstChild.setAttribute(
                    "value", ""), "" === n.firstChild.getAttribute(
                    "value")
            }) || ni("value", function(n, t, i) {
                if (!i && "input" === n.nodeName.toLowerCase())
                    return n.defaultValue
            }), v(function(n) {
                return null == n.getAttribute("disabled")
            }) || ni(bt, function(n, t, i) {
                var r;
                if (!i) return n[t] === !0 ? t.toLowerCase() : (r =
                        n.getAttributeNode(t)) && r.specified ?
                    r.value : null
            }), r
    }(n);
    i.find = p;
    i.expr = p.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = p.uniqueSort;
    i.text = p.getText;
    i.isXMLDoc = p.isXML;
    i.contains = p.contains;
    var fr = i.expr.match.needsContext,
        er = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        re = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ?
            i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n,
                i.grep(t, function(n) {
                    return 1 === n.nodeType
                }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r = [],
                u = this,
                f = u.length;
            if ("string" != typeof n) return this.pushStack(i(n)
                .filter(function() {
                    for (t = 0; f > t; t++)
                        if (i.contains(u[t], this))
                            return !0
                }));
            for (t = 0; f > t; t++) i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r),
                r.selector = this.selector ? this.selector +
                " " + n : n, r
        },
        filter: function(n) {
            return this.pushStack(ui(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(ui(this, n || [], !0))
        },
        is: function(n) {
            return !!ui(this, "string" == typeof n && fr.test(n) ?
                i(n) : n || [], !1).length
        }
    });
    var ft, u = n.document,
        ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        fe = i.fn.init = function(n, t) {
            var r, f;
            if (!n) return this;
            if ("string" == typeof n) {
                if (r = "<" === n.charAt(0) && ">" === n.charAt(n.length -
                        1) && n.length >= 3 ? [null, n, null] : ue.exec(n), !
                    r || !r[1] && t) return !t || t.jquery ? (t || ft).find(
                    n) : this.constructor(t).find(n);
                if (r[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(
                        r[1], t && t.nodeType ? t.ownerDocument ||
                        t : u, !0)), er.test(r[1]) && i.isPlainObject(t))
                        for (r in t) i.isFunction(this[r]) ? this[r](t[r]) :
                            this.attr(r, t[r]);
                    return this
                }
                if (f = u.getElementById(r[2]), f && f.parentNode) {
                    if (f.id !== r[2]) return ft.find(n);
                    this.length = 1;
                    this[0] = f
                }
                return this.context = u, this.selector = n, this
            }
            return n.nodeType ? (this.context = this[0] = n, this.length =
                    1, this) : i.isFunction(n) ? "undefined" != typeof ft.ready ?
                ft.ready(n) : n(i) : (void 0 !== n.selector && (this.selector =
                    n.selector, this.context = n.context), i.makeArray(
                    n, this))
        };
    fe.prototype = i.fn;
    ft = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.extend({
        dir: function(n, t, r) {
            for (var f = [], u = n[t]; u && 9 !== u.nodeType &&
                (void 0 === r || 1 !== u.nodeType || !i(u).is(r));
            ) 1 === u.nodeType && f.push(u), u = u[t];
            return f
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType &&
                n !== t && i.push(n);
            return i
        }
    });
    i.fn.extend({
        has: function(n) {
            var t, r = i(n, this),
                u = r.length;
            return this.filter(function() {
                for (t = 0; u > t; t++)
                    if (i.contains(this, r[t])) return !
                        0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = fr.test(
                n) || "string" != typeof n ? i(n, t ||
                this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 :
                        1 === r.nodeType && i.find.matchesSelector(
                            r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) :
                u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? i.inArray(this[0],
                    i(n)) : i.inArray(n.jquery ? n[0] : n, this) :
                this[0] && this[0].parentNode ? this.first().prevAll()
                .length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.unique(i.merge(this.get(),
                i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject
                .filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return hr(n, "nextSibling")
        },
        prev: function(n) {
            return hr(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument ||
                n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u &&
                "string" == typeof u && (f = i.filter(u, f)),
                this.length > 1 && (sr[n] || (f = i.unique(f)),
                    or.test(n) && (f = f.reverse())), this.pushStack(
                    f)
        }
    });
    h = /\S+/g;
    fi = {};
    i.Callbacks = function(n) {
        n = "string" == typeof n ? fi[n] || ee(n) : i.extend({}, n);
        var o, u, h, f, e, c, t = [],
            r = !n.once && [],
            l = function(i) {
                for (u = n.memory && i, h = !0, e = c || 0, c = 0, f =
                    t.length, o = !0; t && f > e; e++)
                    if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                        u = !1;
                        break
                    }
                o = !1;
                t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
            },
            s = {
                add: function() {
                    if (t) {
                        var r = t.length;
                        ! function e(r) {
                            i.each(r, function(r, u) {
                                var f = i.type(u);
                                "function" === f ? n.unique &&
                                    s.has(u) || t.push(
                                        u) : u && u.length &&
                                    "string" !== f && e(
                                        u)
                            })
                        }(arguments);
                        o ? f = t.length : u && (c = r, l(u))
                    }
                    return this
                },
                remove: function() {
                    return t && i.each(arguments, function(n, r) {
                        for (var u;
                            (u = i.inArray(r, t, u)) > -1;)
                            t.splice(u, 1), o && (f >= u &&
                                f--, e >= u && e--)
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, t) > -1 : !(!t || !t.length)
                },
                empty: function() {
                    return t = [], f = 0, this
                },
                disable: function() {
                    return t = r = u = void 0, this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return r = void 0, u || s.disable(), this
                },
                locked: function() {
                    return !r
                },
                fireWith: function(n, i) {
                    return !t || h && !r || (i = i || [], i = [n, i
                        .slice ? i.slice() : i
                    ], o ? r.push(i) : l(i)), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!h
                }
            };
        return s
    };
    i.extend({
        Deferred: function(n) {
            var u = [
                    ["resolve", "done", i.Callbacks(
                        "once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks(
                        "once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return t.done(arguments).fail(
                            arguments), this
                    },
                    then: function() {
                        var n = arguments;
                        return i.Deferred(function(f) {
                            i.each(u, function(u, e) {
                                var o = i.isFunction(
                                    n[u]
                                ) && n[
                                    u];
                                t[e[1]](
                                    function() {
                                        var
                                            n =
                                            o &&
                                            o
                                            .apply(
                                                this,
                                                arguments
                                            );
                                        n
                                            &&
                                            i
                                            .isFunction(
                                                n
                                                .promise
                                            ) ?
                                            n
                                            .promise()
                                            .done(
                                                f
                                                .resolve
                                            )
                                            .fail(
                                                f
                                                .reject
                                            )
                                            .progress(
                                                f
                                                .notify
                                            ) :
                                            f[
                                                e[
                                                    0
                                                ] +
                                                "With"
                                            ]
                                            (
                                                this ===
                                                r ?
                                                f
                                                .promise() :
                                                this,
                                                o ? [
                                                    n
                                                ] :
                                                arguments
                                            )
                                    })
                            });
                            n = null
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? i.extend(n, r) :
                            r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function(n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                        f = o
                    }, u[1 ^ n][2].disable, u[2][2]
                    .lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this ===
                        t ? r : this, arguments
                    ), this
                };
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function(n) {
            var t = 0,
                u = l.call(arguments),
                r = u.length,
                e = 1 !== r || n && i.isFunction(n.promise) ? r :
                0,
                f = 1 === e ? n : i.Deferred(),
                h = function(n, t, i) {
                    return function(r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? l.call(
                            arguments) : r;
                        i === o ? f.notifyWith(t, i) : --e ||
                            f.resolveWith(t, i)
                    }
                },
                o, c, s;
            if (r > 1)
                for (o = new Array(r), c = new Array(r), s =
                    new Array(r); r > t; t++) u[t] && i.isFunction(
                    u[t].promise) ? u[t].promise().done(h(t,
                    s, u)).fail(f.reject).progress(h(t, c,
                    o)) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!u.body) return setTimeout(i.ready);
                i.isReady = !0;
                n !== !0 && --i.readyWait > 0 || (lt.resolveWith(
                    u, [i]), i.fn.triggerHandler && (i(
                        u).triggerHandler("ready"), i(u)
                    .off("ready")))
            }
        }
    });
    i.ready.promise = function(t) {
        if (!lt)
            if (lt = i.Deferred(), "complete" === u.readyState)
                setTimeout(i.ready);
            else if (u.addEventListener) u.addEventListener(
            "DOMContentLoaded", a, !1), n.addEventListener("load",
            a, !1);
        else {
            u.attachEvent("onreadystatechange", a);
            n.attachEvent("onload", a);
            var r = !1;
            try {
                r = null == n.frameElement && u.documentElement
            } catch (e) {}
            r && r.doScroll && ! function f() {
                if (!i.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (n) {
                        return setTimeout(f, 50)
                    }
                    cr();
                    i.ready()
                }
            }()
        }
        return lt.promise(t)
    };
    o = "undefined";
    for (lr in i(r)) break;
    r.ownLast = "0" !== lr;
    r.inlineBlockNeedsLayout = !1;
    i(function() {
            var f, t, n, i;
            n = u.getElementsByTagName("body")[0];
            n && n.style && (t = u.createElement("div"), i = u.createElement(
                    "div"), i.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                n.appendChild(i).appendChild(t), typeof t.style.zoom !==
                o && (t.style.cssText =
                    "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    r.inlineBlockNeedsLayout = f = 3 === t.offsetWidth,
                    f && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var n = u.createElement("div");
            if (null == r.deleteExpando) {
                r.deleteExpando = !0;
                try {
                    delete n.test
                } catch (t) {
                    r.deleteExpando = !1
                }
            }
            n = null
        }();
    i.acceptData = function(n) {
        var t = i.noData[(n.nodeName + " ").toLowerCase()],
            r = +n.nodeType || 1;
        return 1 !== r && 9 !== r ? !1 : !t || t !== !0 && n.getAttribute(
            "classid") === t
    };
    ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    vr = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i
                .expando], !!n && !ei(n)
        },
        data: function(n, t, i) {
            return pr(n, t, i)
        },
        removeData: function(n, t) {
            return wr(n, t)
        },
        _data: function(n, t, i) {
            return pr(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return wr(n, t, !0)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, r = this[0],
                o = r && r.attributes;
            if (void 0 === n) {
                if (this.length && (e = i.data(r), 1 === r.nodeType &&
                    !i._data(r, "parsedAttrs"))) {
                    for (f = o.length; f--;) o[f] && (u = o[f].name,
                        0 === u.indexOf("data-") && (u = i.camelCase(
                            u.slice(5)), yr(r, u, e[u])));
                    i._data(r, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, t)
            }) : r ? yr(r, n, i.data(r, n)) : void 0
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, r) {
            var u;
            if (n) return (t = (t || "fx") + "queue", u = i._data(
                n, t), r && (!u || i.isArray(r) ? u =
                i._data(n, t, i.makeArray(r)) : u.push(
                    r)), u || [])
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() {
                    i.dequeue(n, t)
                };
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f
                .stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(
                    function() {
                        i._removeData(n, t +
                            "queue");
                        i._removeData(n, r)
                    })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--),
                arguments.length < r ? i.queue(this[0], n) :
                void 0 === t ? this : this.each(function() {
                    var r = i.queue(this, n, t);
                    i._queueHooks(this, n);
                    "fx" === n && "inprogress" !== r[0] &&
                        i.dequeue(this, n)
                })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var r, f = 1,
                e = i.Deferred(),
                u = this,
                o = this.length,
                s = function() {
                    --f || e.resolveWith(u, [u])
                };
            for ("string" != typeof n && (t = n, n = void 0), n =
                n || "fx"; o--;) r = i._data(u[o], n +
                "queueHooks"), r && r.empty && (f++, r.empty
                .add(s));
            return s(), e.promise(t)
        }
    });
    var at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = ["Top", "Right", "Bottom", "Left"],
        et = function(n, t) {
            return n = t || n, "none" === i.css(n, "display") || !i.contains(
                n.ownerDocument, n)
        },
        b = i.access = function(n, t, r, u, f, e, o) {
            var s = 0,
                c = n.length,
                h = null == r;
            if ("object" === i.type(r)) {
                f = !0;
                for (s in r) i.access(n, t, s, r[s], !0, e, o)
            } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0),
                h && (o ? (t.call(n, u), t = null) : (h = t, t =
                    function(n, t, r) {
                        return h.call(i(n), r)
                    })), t))
                for (; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s],
                    r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        },
        oi = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = u.createElement("input"),
            n = u.createElement("div"),
            i = u.createDocumentFragment();
        if (n.innerHTML =
            "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>",
            r.leadingWhitespace = 3 === n.firstChild.nodeType, r.tbody = !n
            .getElementsByTagName("tbody").length, r.htmlSerialize = !!n.getElementsByTagName(
                "link").length, r.html5Clone = "<:nav><\/:nav>" !== u.createElement(
                "nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !
            0, i.appendChild(t), r.appendChecked = t.checked, n.innerHTML =
            "<textarea>x<\/textarea>", r.noCloneChecked = !!n.cloneNode(!0)
            .lastChild.defaultValue, i.appendChild(n), n.innerHTML =
            "<input type='radio' checked='checked' name='t'/>", r.checkClone =
            n.cloneNode(!0).cloneNode(!0).lastChild.checked, r.noCloneEvent = !
            0, n.attachEvent && (n.attachEvent("onclick", function() {
                r.noCloneEvent = !1
            }), n.cloneNode(!0).click()), null == r.deleteExpando) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch (f) {
                r.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, i, f = u.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) i = "on" + t, (r[t + "Bubbles"] = i in n) || (f.setAttribute(i,
            "t"), r[t + "Bubbles"] = f.attributes[i].expando === !1);
        f = null
    }();
    var si = /^(?:input|select|textarea)$/i,
        oe = /^key/,
        se = /^(?:mouse|pointer|contextmenu)|click/,
        br = /^(?:focusinfocus|focusoutblur)$/,
        kr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, t, r, u, f) {
            var w, y, b, p, s, c, l, a, e, k, d, v = i._data(n);
            if (v) {
                for (r.handler && (p = r, r = p.handler, f = p.selector),
                    r.guid || (r.guid = i.guid++), (y = v.events) ||
                    (y = v.events = {}), (c = v.handle) || (c = v.handle =
                        function(n) {
                            if (typeof i !== o && (!n || i.event.triggered !==
                                n.type)) return i.event.dispatch.apply(
                                c.elem, arguments)
                        }, c.elem = n), t = (t || "").match(h) || [
                        ""
                    ], b = t.length; b--;) w = kr.exec(t[b]) || [],
                    e = d = w[1], k = (w[2] || "").split(".").sort(),
                    e && (s = i.event.special[e] || {}, e = (f ? s.delegateType :
                            s.bindType) || e, s = i.event.special[e] || {},
                        l = i.extend({
                            type: e,
                            origType: d,
                            data: u,
                            handler: r,
                            guid: r.guid,
                            selector: f,
                            needsContext: f && i.expr.match.needsContext
                                .test(f),
                            namespace: k.join(".")
                        }, p), (a = y[e]) || (a = y[e] = [], a.delegateCount =
                            0, s.setup && s.setup.call(n, u, k, c) !==
                            !1 || (n.addEventListener ? n.addEventListener(
                                e, c, !1) : n.attachEvent && n.attachEvent(
                                "on" + e, c))), s.add && (s.add.call(
                            n, l), l.handler.guid || (l.handler
                            .guid = r.guid)), f ? a.splice(a.delegateCount++,
                            0, l) : a.push(l), i.event.global[e] = !
                        0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, s, b, p, a, c, l, e, w, k, v = i.hasData(n) &&
                i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(h) || [""], p = t.length; p--;)
                    if (s = kr.exec(t[p]) || [], e = k = s[1], w =
                        (s[2] || "").split(".").sort(), e) {
                        for (c = i.event.special[e] || {}, e = (u ?
                                c.delegateType : c.bindType) || e,
                            l = a[e] || [], s = s[2] && new RegExp(
                                "(^|\\.)" + w.join("\\.(?:.*\\.|)") +
                                "(\\.|$)"), b = y = l.length; y--;)
                            o = l[y], !f && k !== o.origType || r &&
                            r.guid !== o.guid || s && !s.test(o.namespace) ||
                            u && u !== o.selector && ("**" !== u ||
                                !o.selector) || (l.splice(y, 1), o.selector &&
                                l.delegateCount--, c.remove && c.remove
                                .call(n, o));
                        b && !l.length && (c.teardown && c.teardown
                            .call(n, w, v.handle) !== !1 || i.removeEvent(
                                n, e, v.handle), delete a[e])
                    } else
                        for (e in a) i.event.remove(n, e + t[p], r,
                            u, !0);
                i.isEmptyObject(a) && (delete v.handle, i._removeData(
                    n, "events"))
            }
        },
        trigger: function(t, r, f, e) {
            var l, a, o, p, c, h, w, y = [f || u],
                s = tt.call(t, "type") ? t.type : t,
                v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = h = f = f || u, 3 !== f.nodeType && 8 !== f.nodeType &&
                !br.test(s + i.event.triggered) && (s.indexOf(".") >=
                    0 && (v = s.split("."), s = v.shift(), v.sort()),
                    a = s.indexOf(":") < 0 && "on" + s, t = t[i.expando] ?
                    t : new i.Event(s, "object" == typeof t && t),
                    t.isTrigger = e ? 2 : 3, t.namespace = v.join(
                        "."), t.namespace_re = t.namespace ? new RegExp(
                        "(^|\\.)" + v.join("\\.(?:.*\\.|)") +
                        "(\\.|$)") : null, t.result = void 0, t.target ||
                    (t.target = f), r = null == r ? [t] : i.makeArray(
                        r, [t]), c = i.event.special[s] || {}, e ||
                    !c.trigger || c.trigger.apply(f, r) !== !1)) {
                if (!e && !c.noBubble && !i.isWindow(f)) {
                    for (p = c.delegateType || s, br.test(p + s) ||
                        (o = o.parentNode); o; o = o.parentNode) y.push(
                        o), h = o;
                    h === (f.ownerDocument || u) && y.push(h.defaultView ||
                        h.parentWindow || n)
                }
                for (w = 0;
                    (o = y[w++]) && !t.isPropagationStopped();) t.type =
                    w > 1 ? p : c.bindType || s, l = (i._data(o,
                        "events") || {})[t.type] && i._data(o,
                        "handle"), l && l.apply(o, r), l = a && o[a],
                    l && l.apply && i.acceptData(o) && (t.result =
                        l.apply(o, r), t.result === !1 && t.preventDefault()
                    );
                if (t.type = s, !e && !t.isDefaultPrevented() && (!
                    c._default || c._default.apply(y.pop(), r) ===
                    !1) && i.acceptData(f) && a && f[s] && !i.isWindow(
                    f)) {
                    h = f[a];
                    h && (f[a] = null);
                    i.event.triggered = s;
                    try {
                        f[s]()
                    } catch (b) {}
                    i.event.triggered = void 0;
                    h && (f[a] = h)
                }
                return t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var e, f, t, r, o, s = [],
                h = l.call(arguments),
                c = (i._data(this, "events") || {})[n.type] || [],
                u = i.event.special[n.type] || {};
            if (h[0] = n, n.delegateTarget = this, !u.preDispatch ||
                u.preDispatch.call(this, n) !== !1) {
                for (s = i.event.handlers.call(this, n, c), e = 0;
                    (r = s[e++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = r.elem, o = 0;
                        (t = r.handlers[o++]) && !n.isImmediatePropagationStopped();
                    )(!n.namespace_re || n.namespace_re.test(t.namespace)) &&
                        (n.handleObj = t, n.data = t.data, f = ((i.event
                                    .special[t.origType] || {}).handle ||
                                t.handler).apply(r.elem, h), void 0 !==
                            f && (n.result = f) === !1 && (n.preventDefault(),
                                n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this,
                    n), n.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, h = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && (!n.button || "click" !== n.type))
                for (; r != this; r = r.parentNode || this)
                    if (1 === r.nodeType && (r.disabled !== !0 ||
                        "click" !== n.type)) {
                        for (u = [], o = 0; s > o; o++) e = t[o], f =
                            e.selector + " ", void 0 === u[f] && (u[
                                    f] = e.needsContext ? i(f, this)
                                .index(r) >= 0 : i.find(f, this,
                                    null, [r]).length), u[f] && u.push(
                                e);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }), h
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var e, o, s, r = n.type,
                f = n,
                t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = se.test(r) ? this.mouseHooks :
                    oe.test(r) ? this.keyHooks : {}), s = t.props ?
                this.props.concat(t.props) : this.props, n = new i.Event(
                    f), e = s.length; e--;) o = s[e], n[o] = f[o];
            return n.target || (n.target = f.srcElement || u), 3 ===
                n.target.nodeType && (n.target = n.target.parentNode),
                n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) :
                n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
            .split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ?
                    t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
                .split(" "),
            filter: function(n, t) {
                var i, e, r, f = t.button,
                    o = t.fromElement;
                return null == n.pageX && null != t.clientX && (e =
                        n.target.ownerDocument || u, r = e.documentElement,
                        i = e.body, n.pageX = t.clientX + (r && r.scrollLeft ||
                            i && i.scrollLeft || 0) - (r && r.clientLeft ||
                            i && i.clientLeft || 0), n.pageY = t.clientY +
                        (r && r.scrollTop || i && i.scrollTop || 0) -
                        (r && r.clientTop || i && i.clientTop || 0)
                    ), !n.relatedTarget && o && (n.relatedTarget =
                        o === n.target ? t.toElement : o), n.which ||
                    void 0 === f || (n.which = 1 & f ? 1 : 2 & f ?
                        3 : 4 & f ? 2 : 0), n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== dr() && this.focus) try {
                        return this.focus(), !1
                    } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === dr() && this.blur) return (this.blur(), !
                        1)
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (i.nodeName(this, "input") && "checkbox" ===
                        this.type && this.click) return (this.click(), !
                        1)
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent
                        .returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(
                t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = u.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(
            r, i))
    };
    i.Event = function(n, t) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent =
                n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented ||
                void 0 === n.defaultPrevented && n.returnValue ===
                !1 ? vt : it) : this.type = n, t && i.extend(this,
                t), this.timeStamp = n && n.timeStamp || i.now(),
            void(this[i.expando] = !0)) : new i.Event(n, t)
    };
    i.Event.prototype = {
        isDefaultPrevented: it,
        isPropagationStopped: it,
        isImmediatePropagationStopped: it,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = vt;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !
                1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = vt;
            n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !
                0)
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = vt;
            n && n.stopImmediatePropagation && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return (!r || r !== f && !i.contains(f, r)) &&
                    (n.type = e.origType, u = e.handler.apply(
                        this, arguments), n.type = t), u
            }
        }
    });
    r.submitBubbles || (i.event.special.submit = {
        setup: function() {
            return i.nodeName(this, "form") ? !1 : void i.event
                .add(this, "click._submit keypress._submit",
                    function(n) {
                        var r = n.target,
                            t = i.nodeName(r, "input") || i.nodeName(
                                r, "button") ? r.form : void 0;
                        t && !i._data(t, "submitBubbles") && (i
                            .event.add(t, "submit._submit",
                                function(n) {
                                    n._submit_bubble = !0
                                }), i._data(t,
                                "submitBubbles", !0))
                    })
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode &&
                !n.isTrigger && i.event.simulate("submit",
                    this.parentNode, n, !0))
        },
        teardown: function() {
            return i.nodeName(this, "form") ? !1 : void i.event
                .remove(this, "._submit")
        }
    });
    r.changeBubbles || (i.event.special.change = {
        setup: function() {
            return si.test(this.nodeName) ? (("checkbox" ===
                    this.type || "radio" === this.type) &&
                (i.event.add(this, "propertychange._change",
                    function(n) {
                        "checked" === n.originalEvent.propertyName &&
                            (this._just_changed = !0)
                    }), i.event.add(this,
                    "click._change", function(n) {
                        this._just_changed && !n.isTrigger &&
                            (this._just_changed = !1);
                        i.event.simulate("change", this,
                            n, !0)
                    })), !1) : void i.event.add(this,
                "beforeactivate._change", function(n) {
                    var t = n.target;
                    si.test(t.nodeName) && !i._data(t,
                        "changeBubbles") && (i.event.add(
                        t, "change._change",
                        function(n) {
                            !this.parentNode || n.isSimulated ||
                                n.isTrigger || i.event
                                .simulate("change",
                                    this.parentNode,
                                    n, !0)
                        }), i._data(t,
                        "changeBubbles", !0))
                })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger ||
                "radio" !== t.type && "checkbox" !== t.type)
                return n.handleObj.handler.apply(this,
                    arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"), !si.test(
                this.nodeName)
        }
    });
    r.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var r = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                var u = this.ownerDocument || this,
                    f = i._data(u, t);
                f || u.addEventListener(n, r, !0);
                i._data(u, t, (f || 0) + 1)
            },
            teardown: function() {
                var u = this.ownerDocument || this,
                    f = i._data(u, t) - 1;
                f ? i._data(u, t, f) : (u.removeEventListener(
                    n, r, !0), i._removeData(u, t))
            }
        }
    });
    i.fn.extend({
        on: function(n, t, r, u, f) {
            var o, e;
            if ("object" == typeof n) {
                "string" != typeof t && (r = r || t, t = void 0);
                for (o in n) this.on(o, t, r, n[o], f);
                return this
            }
            if (null == r && null == u ? (u = t, r = t = void 0) :
                null == u && ("string" == typeof t ? (u = r, r =
                    void 0) : (u = r, r = t, t = void 0)), u ===
                !1) u = it;
            else if (!u) return this;
            return 1 === f && (e = u, u = function(n) {
                    return i().off(n), e.apply(this,
                        arguments)
                }, u.guid = e.guid || (e.guid = i.guid++)),
                this.each(function() {
                    i.event.add(this, n, u, r, t)
                })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u =
                n.handleObj, i(n.delegateTarget).off(u.namespace ?
                    u.origType + "." + u.namespace : u.origType,
                    u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (r =
                t, t = void 0), r === !1 && (r = it), this.each(
                function() {
                    i.event.remove(this, n, r, t)
                })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    var nu =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        he = / jQuery\d+="(?:null|\d+)"/g,
        tu = new RegExp("<(?:" + nu + ")[\\s/>]", "i"),
        hi = /^\s+/,
        iu =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ru = /<([\w:]+)/,
        uu = /<tbody/i,
        ce = /<|&#?\w+;/,
        le = /<(?:script|style|link)/i,
        ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fu = /^$|\/(?:java|ecma)script/i,
        ve = /^true\/(.*)/,
        ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        s = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            legend: [1, "<fieldset>", "<\/fieldset>"],
            area: [1, "<map>", "<\/map>"],
            param: [1, "<object>", "<\/object>"],
            thead: [1, "<table>", "<\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            col: [2, "<table><tbody><\/tbody><colgroup>",
                "<\/colgroup><\/table>"
            ],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>",
                "<\/div>"
            ]
        },
        pe = gr(u),
        ci = pe.appendChild(u.createElement("div"));
    s.optgroup = s.option;
    s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
    s.th = s.td;
    i.extend({
        clone: function(n, t, u) {
            var e, c, s, o, h, l = i.contains(n.ownerDocument,
                n);
            if (r.html5Clone || i.isXMLDoc(n) || !tu.test("<" +
                n.nodeName + ">") ? s = n.cloneNode(!0) : (
                ci.innerHTML = n.outerHTML, ci.removeChild(
                    s = ci.firstChild)), !(r.noCloneEvent &&
                r.noCloneChecked || 1 !== n.nodeType && 11 !==
                n.nodeType || i.isXMLDoc(n)))
                for (e = f(s), h = f(n), o = 0; null != (c = h[
                    o]); ++o) e[o] && be(c, e[o]);
            if (t)
                if (u)
                    for (h = h || f(n), e = e || f(s), o = 0; null !=
                        (c = h[o]); o++) hu(c, e[o]);
                else hu(n, s);
            return e = f(s, "script"), e.length > 0 && li(e, !l &&
                f(n, "script")), e = h = c = null, s
        },
        buildFragment: function(n, t, u, e) {
            for (var c, o, b, h, p, w, a, k = n.length, v = gr(
                t), l = [], y = 0; k > y; y++)
                if (o = n[y], o || 0 === o)
                    if ("object" === i.type(o)) i.merge(l, o.nodeType ? [
                        o
                    ] : o);
                    else if (ce.test(o)) {
                for (h = h || v.appendChild(t.createElement(
                        "div")), p = (ru.exec(o) || ["", ""])[1]
                    .toLowerCase(), a = s[p] || s._default, h.innerHTML =
                    a[1] + o.replace(iu, "<$1><\/$2>") + a[2],
                    c = a[0]; c--;) h = h.lastChild;
                if (!r.leadingWhitespace && hi.test(o) && l.push(
                    t.createTextNode(hi.exec(o)[0])), !r.tbody)
                    for (o = "table" !== p || uu.test(o) ?
                        "<table>" !== a[1] || uu.test(o) ? 0 :
                        h : h.firstChild, c = o && o.childNodes
                        .length; c--;) i.nodeName(w = o.childNodes[
                            c], "tbody") && !w.childNodes.length &&
                        o.removeChild(w);
                for (i.merge(l, h.childNodes), h.textContent =
                    ""; h.firstChild;) h.removeChild(h.firstChild);
                h = v.lastChild
            } else l.push(t.createTextNode(o));
            for (h && v.removeChild(h), r.appendChecked || i.grep(
                f(l, "input"), we), y = 0; o = l[y++];)
                if ((!e || -1 === i.inArray(o, e)) && (b = i.contains(
                    o.ownerDocument, o), h = f(v.appendChild(
                    o), "script"), b && li(h), u))
                    for (c = 0; o = h[c++];) fu.test(o.type ||
                        "") && u.push(o);
            return h = null, v
        },
        cleanData: function(n, t) {
            for (var u, e, f, s, a = 0, h = i.expando, l = i.cache,
                    v = r.deleteExpando, y = i.event.special; null !=
                (u = n[a]); a++)
                if ((t || i.acceptData(u)) && (f = u[h], s = f &&
                    l[f])) {
                    if (s.events)
                        for (e in s.events) y[e] ? i.event.remove(
                            u, e) : i.removeEvent(u, e, s.handle);
                    l[f] && (delete l[f], v ? delete u[h] :
                        typeof u.removeAttribute !== o ? u.removeAttribute(
                            h) : u[h] = null, c.push(f))
                }
        }
    });
    i.fn.extend({
        text: function(n) {
            return b(this, function(n) {
                return void 0 === n ? i.text(this) :
                    this.empty().append((this[0] &&
                            this[0].ownerDocument || u)
                        .createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType ||
                    9 === this.nodeType) {
                    var t = eu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType ||
                    9 === this.nodeType) {
                    var t = eu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(
                    n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(
                    n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, e = n ? i.filter(n, this) : this, u = 0; null !=
                (r = e[u]); u++) t || 1 !== r.nodeType || i.cleanData(
                f(r)), r.parentNode && (t && i.contains(r.ownerDocument,
                r) && li(f(r, "script")), r.parentNode.removeChild(
                r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) {
                for (1 === n.nodeType && i.cleanData(f(n, !1)); n
                    .firstChild;) n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options
                    .length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n, t = null == t ? n :
                t, this.map(function() {
                    return i.clone(this, n, t)
                })
        },
        html: function(n) {
            return b(this, function(n) {
                var t = this[0] || {},
                    u = 0,
                    e = this.length;
                if (void 0 === n) return 1 === t.nodeType ?
                    t.innerHTML.replace(he, "") :
                    void 0;
                if (!("string" != typeof n || le.test(n) ||
                    !r.htmlSerialize && tu.test(n) ||
                    !r.leadingWhitespace && hi.test(
                        n) || s[(ru.exec(n) || ["",
                        ""
                    ])[1].toLowerCase()])) {
                    n = n.replace(iu, "<$1><\/$2>");
                    try {
                        for (; e > u; u++) t = this[u] || {},
                            1 === t.nodeType && (i.cleanData(
                                    f(t, !1)), t.innerHTML =
                                n);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = arguments[0];
            return this.domManip(arguments, function(t) {
                    n = this.parentNode;
                    i.cleanData(f(this));
                    n && n.replaceChild(t, this)
                }), n && (n.length || n.nodeType) ? this : this
                .remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t) {
            n = ir.apply([], n);
            var h, u, c, o, v, s, e = 0,
                l = this.length,
                p = this,
                w = l - 1,
                a = n[0],
                y = i.isFunction(a);
            if (y || l > 1 && "string" == typeof a && !r.checkClone &&
                ae.test(a)) return this.each(function(i) {
                var r = p.eq(i);
                y && (n[0] = a.call(this, i, r.html()));
                r.domManip(n, t)
            });
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !
                    1, this), h = s.firstChild, 1 === s.childNodes
                .length && (s = h), h)) {
                for (o = i.map(f(s, "script"), ou), c = o.length; l >
                    e; e++) u = s, e !== w && (u = i.clone(u, !
                    0, !0), c && i.merge(o, f(u,
                    "script"))), t.call(this[e], u, e);
                if (c)
                    for (v = o[o.length - 1].ownerDocument, i.map(
                        o, su), e = 0; c > e; e++) u = o[e], fu
                        .test(u.type || "") && !i._data(u,
                            "globalEval") && i.contains(v, u) &&
                        (u.src ? i._evalUrl && i._evalUrl(u.src) :
                            i.globalEval((u.text || u.textContent ||
                                u.innerHTML || "").replace(
                                ye, "")));
                s = h = null
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length -
                1; o >= r; r++) u = r === o ? this : this.clone(!
                0), i(e[r])[t](u), ii.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    ai = {};
    ! function() {
        var n;
        r.shrinkWrapBlocks = function() {
            if (null != n) return n;
            n = !1;
            var t, i, r;
            return i = u.getElementsByTagName("body")[0], i && i.style ?
                (t = u.createElement("div"), r = u.createElement("div"),
                    r.style.cssText =
                    "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    i.appendChild(r).appendChild(t), typeof t.style.zoom !==
                    o && (t.style.cssText =
                        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                        t.appendChild(u.createElement("div")).style.width =
                        "5px", n = 3 !== t.offsetWidth), i.removeChild(
                        r), n) : void 0
        }
    }();
    var lu = /^margin/,
        pt = new RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
        k, d, ke = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (k = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument
            .defaultView.getComputedStyle(t, null) : n.getComputedStyle(
                t, null)
    }, d = function(n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || k(n), u = r ? r.getPropertyValue(t) || r[t] :
            void 0, r && ("" !== u || i.contains(n.ownerDocument, n) ||
                (u = i.style(n, t)), pt.test(u) && lu.test(t) && (e =
                    f.width, o = f.minWidth, s = f.maxWidth, f.minWidth =
                    f.maxWidth = f.width = u, u = r.width, f.width =
                    e, f.minWidth = o, f.maxWidth = s)), void 0 ===
            u ? u : u + ""
    }) : u.documentElement.currentStyle && (k = function(n) {
        return n.currentStyle
    }, d = function(n, t, i) {
        var o, f, e, r, u = n.style;
        return i = i || k(n), r = i ? i[t] : void 0, null == r && u &&
            u[t] && (r = u[t]), pt.test(r) && !ke.test(t) && (o = u
                .left, f = n.runtimeStyle, e = f && f.left, e && (f
                    .left = n.currentStyle.left), u.left =
                "fontSize" === t ? "1em" : r, r = u.pixelLeft +
                "px", u.left = o, e && (f.left = e)), void 0 === r ?
            r : r + "" || "auto"
    });
    ! function() {
        var f, t, l, o, s, e, h;
        if (f = u.createElement("div"), f.innerHTML =
            "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>",
            l = f.getElementsByTagName("a")[0], t = l && l.style) {
            t.cssText = "float:left;opacity:.5";
            r.opacity = "0.5" === t.opacity;
            r.cssFloat = !!t.cssFloat;
            f.style.backgroundClip = "content-box";
            f.cloneNode(!0).style.backgroundClip = "";
            r.clearCloneStyle = "content-box" === f.style.backgroundClip;
            r.boxSizing = "" === t.boxSizing || "" === t.MozBoxSizing || "" ===
                t.WebkitBoxSizing;
            i.extend(r, {
                reliableHiddenOffsets: function() {
                    return null == e && c(), e
                },
                boxSizingReliable: function() {
                    return null == s && c(), s
                },
                pixelPosition: function() {
                    return null == o && c(), o
                },
                reliableMarginRight: function() {
                    return null == h && c(), h
                }
            });

            function c() {
                var i, r, f, t;
                r = u.getElementsByTagName("body")[0];
                r && r.style && (i = u.createElement("div"), f = u.createElement(
                        "div"), f.style.cssText =
                    "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    r.appendChild(f).appendChild(i), i.style.cssText =
                    "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                    o = s = !1, h = !0, n.getComputedStyle && (o =
                        "1%" !== (n.getComputedStyle(i, null) || {})
                        .top, s = "4px" === (n.getComputedStyle(i,
                            null) || {
                            width: "4px"
                        }).width, t = i.appendChild(u.createElement(
                            "div")), t.style.cssText = i.style.cssText =
                        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        t.style.marginRight = t.style.width = "0",
                        i.style.width = "1px", h = !parseFloat((n.getComputedStyle(
                            t, null) || {}).marginRight), i.removeChild(
                            t)), i.innerHTML =
                    "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>",
                    t = i.getElementsByTagName("td"), t[0].style.cssText =
                    "margin:0;border:0;padding:0;display:none", e =
                    0 === t[0].offsetHeight, e && (t[0].style.display =
                        "", t[1].style.display = "none", e = 0 ===
                        t[0].offsetHeight), r.removeChild(f))
            }
        }
    }();
    i.swap = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t) e[u] = n.style[u], n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t) n.style[u] = e[u];
        return f
    };
    var vi = /alpha\([^)]*\)/i,
        de = /opacity\s*=\s*([^)]*)/,
        ge = /^(none|table(?!-c[ea]).+)/,
        no = new RegExp("^(" + at + ")(.*)$", "i"),
        to = new RegExp("^([+-])=(" + at + ")", "i"),
        io = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        vu = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        yu = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = d(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: r.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, t, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var o, h, e, s = i.camelCase(t),
                    c = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = pu(c,
                        s)), e = i.cssHooks[t] || i.cssHooks[s],
                    void 0 === u) return e && "get" in e &&
                    void 0 !== (o = e.get(n, !1, f)) ? o :
                    c[t];
                if (h = typeof u, "string" === h && (o = to.exec(
                        u)) && (u = (o[1] + 1) * o[2] +
                        parseFloat(i.css(n, t)), h = "number"),
                    null != u && u === u && ("number" !== h ||
                        i.cssNumber[s] || (u += "px"), r.clearCloneStyle ||
                        "" !== u || 0 !== t.indexOf(
                            "background") || (c[t] = "inherit"), !
                        (e && "set" in e && void 0 === (u = e.set(
                            n, u, f))))) try {
                    c[t] = u
                } catch (l) {}
            }
        },
        css: function(n, t, r, u) {
            var s, f, e, o = i.camelCase(t);
            return t = i.cssProps[o] || (i.cssProps[o] = pu(n.style,
                    o)), e = i.cssHooks[t] || i.cssHooks[o], e &&
                "get" in e && (f = e.get(n, !0, r)), void 0 ===
                f && (f = d(n, t, u)), "normal" === f && t in
                vu && (f = vu[t]), "" === r || r ? (s =
                    parseFloat(f), r === !0 || i.isNumeric(s) ?
                    s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return ge.test(i.css(n, "display")) &&
                    0 === n.offsetWidth ? i.swap(n, io,
                        function() {
                            return du(n, t, u)
                        }) : du(n, t, u)
            },
            set: function(n, u, f) {
                var e = f && k(n);
                return bu(n, u, f ? ku(n, t, f, r.boxSizing &&
                    "border-box" === i.css(n,
                        "boxSizing", !1, e), e) : 0)
            }
        }
    });
    r.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return de.test((t && n.currentStyle ? n.currentStyle
                    .filter : n.style.filter) || "") ? .01 *
                parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t +
                ")" : "",
                f = u && u.filter || r.filter || "";
            r.zoom = 1;
            (t >= 1 || "" === t) && "" === i.trim(f.replace(vi,
                "")) && r.removeAttribute && (r.removeAttribute(
                "filter"), "" === t || u && !u.filter) || (
                r.filter = vi.test(f) ? f.replace(vi, e) :
                f + " " + e)
        }
    });
    i.cssHooks.marginRight = au(r.reliableMarginRight, function(n, t) {
        if (t) return i.swap(n, {
            display: "inline-block"
        }, d, [n, "marginRight"])
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" ==
                        typeof i ? i.split(" ") : [i]; 4 >
                    r; r++) f[n + w[r] + t] = u[r] || u[r -
                    2] || u[0];
                return f
            }
        };
        lu.test(n) || (i.cssHooks[n + t].set = bu)
    });
    i.fn.extend({
        css: function(n, t) {
            return b(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (i.isArray(t)) {
                    for (f = k(n), e = t.length; e > u; u++)
                        o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) :
                    i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return wu(this, !0)
        },
        hide: function() {
            return wu(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() :
                this.hide() : this.each(function() {
                    et(this) ? i(this).show() : i(this).hide()
                })
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(
                this)
        },
        run: function(n) {
            var t, r = e.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[
                    this.easing](n, this.options.duration * n, 0, 1,
                    this.options.duration) : t = n, this.now = (
                    this.end - this.start) * t + this.start, this.options
                .step && this.options.step.call(this.elem, this.now,
                    this), r && r.set ? r.set(this) : e.propHooks._default
                .set(this), this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style &&
                    null != n.elem.style[n.prop] ? (t = i.css(n.elem,
                        n.prop, ""), t && "auto" !== t ? t : 0) : n
                    .elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style &&
                    (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[
                        n.prop]) ? i.style(n.elem, n.prop, n.now +
                        n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] =
                n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.fx = e.prototype.init;
    i.fx.step = {};
    var rt, wt, ro = /^(?:toggle|show|hide)$/,
        gu = new RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
        uo = /queueHooks$/,
        bt = [fo],
        st = {
            "*": [
                function(n, t) {
                    var f = this.createTween(n, t),
                        s = f.cur(),
                        r = gu.exec(t),
                        e = r && r[3] || (i.cssNumber[n] ? "" : "px"),
                        u = (i.cssNumber[n] || "px" !== e && +s) && gu.exec(
                            i.css(f.elem, n)),
                        o = 1,
                        h = 20;
                    if (u && u[3] !== e) {
                        e = e || u[3];
                        r = r || [];
                        u = +s || 1;
                        do o = o || ".5", u /= o, i.style(f.elem, n, u +
                            e); while (o !== (o = f.cur() / s) && 1 !==
                            o && --h)
                    }
                    return r && (u = f.start = +u || +s || 0, f.unit =
                        e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +
                        r[2]), f
                }
            ]
        };
    i.Animation = i.extend(rf, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(
                " ");
            for (var r, u = 0, f = n.length; f > u; u++) r = n[
                u], st[r] = st[r] || [], st[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? bt.unshift(n) : bt.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ?
            u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] :
            i.fx.speeds._default, (null == u.queue || u.queue === !0) &&
            (u.queue = "fx"), u.old = u.complete, u.complete = function() {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(et).css("opacity", 0).show().end()
                .animate({
                    opacity: t
                }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n),
                e = i.speed(t, r, u),
                f = function() {
                    var t = rf(this, i.extend({}, n), e);
                    (o || i._data(this, "finish")) && t.stop(!0)
                };
            return f.finish = f, o || e.queue === !1 ? this.each(
                f) : this.queue(e.queue, f)
        },
        stop: function(n, t, r) {
            var u = function(n) {
                var t = n.stop;
                delete n.stop;
                t(r)
            };
            return "string" != typeof n && (r = t, t = n, n =
                void 0), t && n !== !1 && this.queue(n ||
                "fx", []), this.each(function() {
                var o = !0,
                    t = null != n && n + "queueHooks",
                    e = i.timers,
                    f = i._data(this);
                if (t) f[t] && f[t].stop && u(f[t]);
                else
                    for (t in f) f[t] && f[t].stop &&
                        uo.test(t) && u(f[t]);
                for (t = e.length; t--;) e[t].elem !==
                    this || null != n && e[t].queue !==
                    n || (e[t].anim.stop(r), o = !1, e.splice(
                        t, 1));
                (o || !r) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(
                function() {
                    var t, f = i._data(this),
                        r = f[n + "queue"],
                        e = f[n + "queueHooks"],
                        u = i.timers,
                        o = r ? r.length : 0;
                    for (f.finish = !0, i.queue(this, n, []),
                        e && e.stop && e.stop.call(this, !0),
                        t = u.length; t--;) u[t].elem ===
                        this && u[t].queue === n && (u[t].anim
                            .stop(!0), u.splice(t, 1));
                    for (t = 0; o > t; t++) r[t] && r[t].finish &&
                        r[t].finish.call(this);
                    delete f.finish
                })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(
                this, arguments) : this.animate(kt(t, !0),
                n, i, u)
        }
    });
    i.each({
        slideDown: kt("show"),
        slideUp: kt("hide"),
        slideToggle: kt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = i.timers,
            t = 0;
        for (rt = i.now(); t < n.length; t++) r = n[t], r() || n[t] !==
            r || n.splice(t--, 1);
        n.length || i.fx.stop();
        rt = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        wt || (wt = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
        clearInterval(wt);
        wt = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(
                t, function(t, i) {
                    var r = setTimeout(t, n);
                    i.stop = function() {
                        clearTimeout(r)
                    }
                })
        },
        function() {
            var n, t, f, i, e;
            t = u.createElement("div");
            t.setAttribute("className", "t");
            t.innerHTML =
                "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
            i = t.getElementsByTagName("a")[0];
            f = u.createElement("select");
            e = f.appendChild(u.createElement("option"));
            n = t.getElementsByTagName("input")[0];
            i.style.cssText = "top:1px";
            r.getSetAttribute = "t" !== t.className;
            r.style = /top/.test(i.getAttribute("style"));
            r.hrefNormalized = "/a" === i.getAttribute("href");
            r.checkOn = !!n.value;
            r.optSelected = e.selected;
            r.enctype = !!u.createElement("form").enctype;
            f.disabled = !0;
            r.optDisabled = !e.disabled;
            n = u.createElement("input");
            n.setAttribute("value", "");
            r.input = "" === n.getAttribute("value");
            n.value = "t";
            n.setAttribute("type", "radio");
            r.radioValue = "t" === n.value
        }();
    uf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n),
                this.each(function(r) {
                    var u;
                    1 === this.nodeType && (u = f ? n.call(
                            this, r, i(this).val()) :
                        n, null == u ? u = "" :
                        "number" == typeof u ? u +=
                        "" : i.isArray(u) && (u = i
                            .map(u, function(n) {
                                return null ==
                                    n ? "" : n +
                                    ""
                            })), t = i.valHooks[
                            this.type] || i.valHooks[
                            this.nodeName.toLowerCase()
                        ], t && "set" in t && void 0 !==
                        t.set(this, u, "value") ||
                        (this.value = u))
                })) : u ? (t = i.valHooks[u.type] || i.valHooks[
                    u.nodeName.toLowerCase()], t && "get" in
                t && void 0 !== (r = t.get(u, "value")) ? r :
                (r = u.value, "string" == typeof r ? r.replace(
                    uf, "") : null == r ? "" : r)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : i.trim(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var o, t, s = n.options, u = n.selectedIndex,
                            f = "select-one" === n.type || 0 >
                            u, h = f ? null : [], c = f ? u + 1 :
                            s.length, e = 0 > u ? c : f ? u : 0; c >
                        e; e++)
                        if (t = s[e], !(!t.selected && e !== u ||
                            (r.optDisabled ? t.disabled :
                                null !== t.getAttribute(
                                    "disabled")) || t.parentNode
                            .disabled && i.nodeName(t.parentNode,
                                "optgroup"))) {
                            if (o = i(t).val(), f) return o;
                            h.push(o)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var f, r, u = n.options, o = i.makeArray(
                        t), e = u.length; e--;)
                        if (r = u[e], i.inArray(i.valHooks.option
                            .get(r), o) >= 0) try {
                            r.selected = f = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return f || (n.selectedIndex = -1), u
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(
                    i(n).val(), t) >= 0
            }
        };
        r.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" :
                n.value
        })
    });
    var ut, ff, v = i.expr.attrHandle,
        yi = /^(?:checked|selected)$/i,
        g = r.getSetAttribute,
        dt = r.input;
    i.fn.extend({
        attr: function(n, t) {
            return b(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e) return
                typeof n.getAttribute === o ? i.prop(n, t,
                    r) : (1 === e && i.isXMLDoc(n) || (t =
                        t.toLowerCase(), u = i.attrHooks[t] ||
                        (i.expr.match.bool.test(t) ? ff :
                            ut)), void 0 === r ? u && "get" in
                    u && null !== (f = u.get(n, t)) ? f : (
                        f = i.find.attr(n, t), null == f ?
                        void 0 : f) : null !== r ? u &&
                    "set" in u && void 0 !== (f = u.set(n,
                        r, t)) ? f : (n.setAttribute(t, r +
                        ""), r) : void i.removeAttr(n, t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
                f = t && t.match(h);
            if (f && 1 === n.nodeType)
                while (r = f[e++]) u = i.propFix[r] || r, i.expr
                    .match.bool.test(r) ? dt && g || !yi.test(r) ?
                    n[u] = !1 : n[i.camelCase("default-" + r)] =
                    n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(
                        g ? r : u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!r.radioValue && "radio" === t && i.nodeName(
                        n, "input")) {
                        var u = n.value;
                        return n.setAttribute("type", t), u &&
                            (n.value = u), t
                    }
                }
            }
        }
    });
    ff = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : dt && g || !yi.test(
                    r) ? n.setAttribute(!g && i.propFix[r] || r, r) :
                n[i.camelCase("default-" + r)] = n[r] = !0, r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = v[t] || i.find.attr;
        v[t] = dt && g || !yi.test(t) ? function(n, t, i) {
            var u, f;
            return i || (f = v[t], v[t] = u, u = null != r(n, t,
                i) ? t.toLowerCase() : null, v[t] = f), u
        } : function(n, t, r) {
            if (!r) return n[i.camelCase("default-" + t)] ? t.toLowerCase() :
                null
        }
    });
    dt && g || (i.attrHooks.value = {
        set: function(n, t, r) {
            return i.nodeName(n, "input") ? void(n.defaultValue =
                t) : ut && ut.set(n, t, r)
        }
    });
    g || (ut = {
        set: function(n, t, i) {
            var r = n.getAttributeNode(i);
            return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(
                    i)), r.value = t += "", "value" === i || t ===
                n.getAttribute(i) ? t : void 0
        }
    }, v.id = v.name = v.coords = function(n, t, i) {
        var r;
        if (!i) return (r = n.getAttributeNode(t)) && "" !== r.value ?
            r.value : null
    }, i.valHooks.button = {
        get: function(n, t) {
            var i = n.getAttributeNode(t);
            if (i && i.specified) return i.value
        },
        set: ut.set
    }, i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            ut.set(n, "" === t ? !1 : t, i)
        }
    }, i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = {
            set: function(n, i) {
                if ("" === i) return (n.setAttribute(t,
                    "auto"), i)
            }
        }
    }));
    r.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || void 0
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    });
    ef = /^(?:input|select|textarea|button|object)$/i;
    of = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return b(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n, this.each(function() {
                try {
                    this[n] = void 0;
                    delete this[n]
                } catch (t) {}
            })
        }
    });
    i.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, t, r) {
            var f, u, o, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e) return o =
                1 !== e || !i.isXMLDoc(n), o && (t = i.propFix[
                    t] || t, u = i.propHooks[t]), void 0 !==
                r ? u && "set" in u && void 0 !== (f = u.set(
                    n, r, t)) ? f : n[t] = r : u && "get" in
                u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : ef.test(n.nodeName) ||
                        of.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    });
    r.hrefNormalized || i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    });
    r.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode
                .selectedIndex), null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing",
        "cellPadding", "rowSpan", "colSpan", "useMap",
        "frameBorder", "contentEditable"
    ], function() {
        i.propFix[this.toLowerCase()] = this
    });
    r.enctype || (i.propFix.enctype = "encoding");
    gt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, s, f, e = 0,
                c = this.length,
                l = "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t,
                    this.className))
            });
            if (l)
                for (o = (n || "").match(h) || []; c > e; e++)
                    if (t = this[e], r = 1 === t.nodeType && (t
                        .className ? (" " + t.className +
                            " ").replace(gt, " ") : " ")) {
                        for (s = 0; u = o[s++];) r.indexOf(" " +
                            u + " ") < 0 && (r += u + " ");
                        f = i.trim(r);
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        removeClass: function(n) {
            var o, t, r, u, s, f, e = 0,
                c = this.length,
                l = 0 === arguments.length || "string" ==
                typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t,
                    this.className))
            });
            if (l)
                for (o = (n || "").match(h) || []; c > e; e++)
                    if (t = this[e], r = 1 === t.nodeType && (t
                        .className ? (" " + t.className +
                            " ").replace(gt, " ") : "")) {
                        for (s = 0; u = o[s++];)
                            while (r.indexOf(" " + u + " ") >=
                                0) r = r.replace(" " + u + " ",
                                " ");
                        f = n ? i.trim(r) : "";
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return "boolean" == typeof t && "string" === r ? t ?
                this.addClass(n) : this.removeClass(n) : this.each(
                    i.isFunction(n) ? function(r) {
                        i(this).toggleClass(n.call(this, r,
                            this.className, t), t)
                    } : function() {
                        if ("string" === r)
                            for (var t, f = 0, u = i(this), e =
                                n.match(h) || []; t = e[f++];) u
                                .hasClass(t) ? u.removeClass(t) :
                                u.addClass(t);
                        else(r === o || "boolean" === r) && (
                            this.className && i._data(this,
                                "__className__", this.className
                            ), this.className = this.className ||
                            n === !1 ? "" : i._data(this,
                                "__className__") || "")
                    })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; r >
                t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className +
                    " ").replace(gt, " ").indexOf(i) >= 0)
                    return !0;
            return !1
        }
    });
    i.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
        .split(" "), function(n, t) {
            i.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) :
                    this.trigger(t)
            }
        });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") :
                this.off(t, n || "**", i)
        }
    });
    var pi = i.now(),
        wi = /\?/,
        oo =
        /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function(t) {
        if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
        var f, r = null,
            u = i.trim(t + "");
        return u && !i.trim(u.replace(oo, function(n, t, i, u) {
            return f && t && (r = 0), 0 === r ? n : (f = i ||
                t, r += !u - !i, "")
        })) ? Function("return " + u)() : i.error("Invalid JSON: " +
            t)
    };
    i.parseXML = function(t) {
        var r, u;
        if (!t || "string" != typeof t) return null;
        try {
            n.DOMParser ? (u = new DOMParser, r = u.parseFromString(t,
                "text/xml")) : (r = new ActiveXObject(
                "Microsoft.XMLDOM"), r.async = "false", r.loadXML(
                t))
        } catch (f) {
            r = void 0
        }
        return r && r.documentElement && !r.getElementsByTagName(
                "parsererror").length || i.error("Invalid XML: " + t),
            r
    };
    var nt, y, so = /#.*$/,
        sf = /([?&])_=[^&]*/,
        ho = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        co = /^(?:GET|HEAD)$/,
        lo = /^\/\//,
        hf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        cf = {},
        bi = {},
        lf = "*/".concat("*");
    try {
        y = location.href
    } catch (ns) {
        y = u.createElement("a");
        y.href = "";
        y = y.href
    }
    nt = hf.exec(y.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: y,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
                .test(nt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": lf,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings,
                n)
        },
        ajaxPrefilter: af(cf),
        ajaxTransport: af(bi),
        ajax: function(n, t) {
            function w(n, t, s, h) {
                var v, it, nt, y, w, c = t;
                2 !== e && (e = 2, k && clearTimeout(k), a =
                    void 0, b = h || "", u.readyState =
                    n > 0 ? 4 : 0, v = n >= 200 && 300 >
                    n || 304 === n, s && (y = ao(r, u,
                        s)), y = vo(r, y, u, v), v ? (r
                        .ifModified && (w = u.getResponseHeader(
                                "Last-Modified"), w &&
                            (i.lastModified[f] = w), w =
                            u.getResponseHeader("etag"),
                            w && (i.etag[f] = w)), 204 ===
                        n || "HEAD" === r.type ? c =
                        "nocontent" : 304 === n ? c =
                        "notmodified" : (c = y.state,
                            it = y.data, nt = y.error,
                            v = !nt)) : (nt = c, (n ||
                        !c) && (c = "error", 0 > n &&
                        (n = 0))), u.status = n, u.statusText =
                    (t || c) + "", v ? g.resolveWith(o, [
                        it, c, u
                    ]) : g.rejectWith(o, [u, c, nt]), u
                    .statusCode(p), p = void 0, l && d.trigger(
                        v ? "ajaxSuccess" : "ajaxError", [
                            u, r, v ? it : nt
                        ]), tt.fireWith(o, [u, c]), l &&
                    (d.trigger("ajaxComplete", [u, r]), --
                        i.active || i.event.trigger(
                            "ajaxStop")))
            }
            "object" == typeof n && (t = n, n = void 0);
            t = t || {};
            var s, c, f, b, k, l, a, v, r = i.ajaxSetup({}, t),
                o = r.context || r,
                d = r.context && (o.nodeType || o.jquery) ? i(o) :
                i.event,
                g = i.Deferred(),
                tt = i.Callbacks("once memory"),
                p = r.statusCode || {},
                it = {},
                rt = {},
                e = 0,
                ut = "canceled",
                u = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (2 === e) {
                            if (!v)
                                for (v = {}; t = ho.exec(b);)
                                    v[t[1].toLowerCase()] =
                                    t[2];
                            t = v[n.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === e ? b : null
                    },
                    setRequestHeader: function(n, t) {
                        var i = n.toLowerCase();
                        return e || (n = rt[i] = rt[i] || n,
                            it[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return e || (r.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (2 > e)
                                for (t in n) p[t] = [p[t],
                                    n[t]
                                ];
                            else u.always(n[u.status]);
                        return this
                    },
                    abort: function(n) {
                        var t = n || ut;
                        return a && a.abort(t), w(0, t),
                            this
                    }
                };
            if (g.promise(u).complete = tt.add, u.success = u.done,
                u.error = u.fail, r.url = ((n || r.url || y) +
                    "").replace(so, "").replace(lo, nt[1] +
                    "//"), r.type = t.method || t.type || r.method ||
                r.type, r.dataTypes = i.trim(r.dataType || "*")
                .toLowerCase().match(h) || [""], null == r.crossDomain &&
                (s = hf.exec(r.url.toLowerCase()), r.crossDomain = !
                    (!s || s[1] === nt[1] && s[2] === nt[2] &&
                        (s[3] || ("http:" === s[1] ? "80" :
                            "443")) === (nt[3] || ("http:" ===
                            nt[1] ? "80" : "443")))), r.data &&
                r.processData && "string" != typeof r.data && (
                    r.data = i.param(r.data, r.traditional)),
                vf(cf, r, t, u), 2 === e) return u;
            l = i.event && r.global;
            l && 0 == i.active++ && i.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !co.test(r.type);
            f = r.url;
            r.hasContent || (r.data && (f = r.url += (wi.test(f) ?
                    "&" : "?") + r.data, delete r.data), r.cache ===
                !1 && (r.url = sf.test(f) ? f.replace(sf,
                    "$1_=" + pi++) : f + (wi.test(f) ?
                    "&" : "?") + "_=" + pi++));
            r.ifModified && (i.lastModified[f] && u.setRequestHeader(
                    "If-Modified-Since", i.lastModified[f]),
                i.etag[f] && u.setRequestHeader(
                    "If-None-Match", i.etag[f]));
            (r.data && r.hasContent && r.contentType !== !1 ||
                t.contentType) && u.setRequestHeader(
                "Content-Type", r.contentType);
            u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[
                r.dataTypes[0]] ? r.accepts[r.dataTypes[
                0]] + ("*" !== r.dataTypes[0] ? ", " +
                lf + "; q=0.01" : "") : r.accepts["*"]);
            for (c in r.headers) u.setRequestHeader(c, r.headers[
                c]);
            if (r.beforeSend && (r.beforeSend.call(o, u, r) ===
                !1 || 2 === e)) return u.abort();
            ut = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            }) u[c](r[c]);
            if (a = vf(bi, r, t, u)) {
                u.readyState = 1;
                l && d.trigger("ajaxSend", [u, r]);
                r.async && r.timeout > 0 && (k = setTimeout(
                    function() {
                        u.abort("timeout")
                    }, r.timeout));
                try {
                    e = 1;
                    a.send(it, w)
                } catch (ft) {
                    if (!(2 > e)) throw ft;
                    w(-1, ft)
                }
            } else w(-1, "No Transport");
            return u
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r =
                void 0), i.ajax({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            })
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    };
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!
                    0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild &&
                        1 === n.firstChild.nodeType;) n =
                        n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return this.each(i.isFunction(n) ? function(t) {
                i(this).wrapInner(n.call(this, t))
            } : function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(
                    this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() &&
            "none" === (n.style && n.style.display || i.css(n,
                "display"))
    };
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    };
    var yo = /%20/g,
        po = /\[\]$/,
        yf = /\r?\n/g,
        wo = /^(?:submit|button|image|reset|file)$/i,
        bo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
            f = function(n, t) {
                t = i.isFunction(t) ? t() : null == t ? "" : t;
                u[u.length] = encodeURIComponent(n) + "=" +
                    encodeURIComponent(t)
            };
        if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional),
            i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n,
            function() {
                f(this.name, this.value)
            });
        else
            for (r in n) di(r, n[r], t, f);
        return u.join("&").replace(yo, "+")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(
                        ":disabled") && bo.test(this.nodeName) &&
                    !wo.test(n) && (this.checked || !oi
                        .test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ?
                    i.map(r, function(n) {
                        return {
                            name: t.name,
                            value: n.replace(yf,
                                "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace(yf, "\r\n")
                    }
            }).get()
        }
    });
    i.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i
            .test(this.type) && pf() || go()
    } : pf;
    var ko = 0,
        ni = {},
        ht = i.ajaxSettings.xhr();
    return n.attachEvent && n.attachEvent("onunload", function() {
            for (var n in ni) ni[n](void 0, !0)
        }), r.cors = !!ht && "withCredentials" in ht, ht = r.ajax = !!ht,
        ht && i.ajaxTransport(function(n) {
            if (!n.crossDomain || r.cors) {
                var t;
                return {
                    send: function(r, u) {
                        var e, f = n.xhr(),
                            o = ++ko;
                        if (f.open(n.type, n.url, n.async, n.username,
                            n.password), n.xhrFields)
                            for (e in n.xhrFields) f[e] = n.xhrFields[
                                e];
                        n.mimeType && f.overrideMimeType && f.overrideMimeType(
                            n.mimeType);
                        n.crossDomain || r["X-Requested-With"] || (
                            r["X-Requested-With"] =
                            "XMLHttpRequest");
                        for (e in r) void 0 !== r[e] && f.setRequestHeader(
                            e, r[e] + "");
                        f.send(n.hasContent && n.data || null);
                        t = function(r, e) {
                            var s, c, h;
                            if (t && (e || 4 === f.readyState))
                                if (delete ni[o], t = void 0, f
                                    .onreadystatechange = i.noop,
                                    e) 4 !== f.readyState && f.abort();
                                else {
                                    h = {};
                                    s = f.status;
                                    "string" == typeof f.responseText &&
                                        (h.text = f.responseText);
                                    try {
                                        c = f.statusText
                                    } catch (l) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ?
                                        1223 === s && (s = 204) :
                                        s = h.text ? 200 : 404
                                }
                            h && u(s, c, h, f.getAllResponseHeaders())
                        };
                        n.async ? 4 === f.readyState ? setTimeout(t) :
                            f.onreadystatechange = ni[o] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(n) {
                    return i.globalEval(n), n
                }
            }
        }), i.ajaxPrefilter("script", function(n) {
            void 0 === n.cache && (n.cache = !1);
            n.crossDomain && (n.type = "GET", n.global = !1)
        }), i.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var t, r = u.head || i("head")[0] || u.documentElement;
                return {
                    send: function(i, f) {
                        t = u.createElement("script");
                        t.async = !0;
                        n.scriptCharset && (t.charset = n.scriptCharset);
                        t.src = n.url;
                        t.onload = t.onreadystatechange = function(
                            n, i) {
                            (i || !t.readyState ||
                                /loaded|complete/.test(t.readyState)
                            ) && (t.onload = t.onreadystatechange =
                                null, t.parentNode && t.parentNode
                                .removeChild(t), t = null, i ||
                                f(200, "success"))
                        };
                        r.insertBefore(t, r.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        }), gi = [], ti = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var n = gi.pop() || i.expando + "_" + pi++;
                return this[n] = !0, n
            }
        }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
            var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" :
                "string" == typeof t.data && !(t.contentType || "")
                .indexOf("application/x-www-form-urlencoded") && ti
                .test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return (f = t.jsonpCallback =
                i.isFunction(t.jsonpCallback) ? t.jsonpCallback() :
                t.jsonpCallback, s ? t[s] = t[s].replace(ti,
                    "$1" + f) : t.jsonp !== !1 && (t.url += (wi
                        .test(t.url) ? "&" : "?") + t.jsonp +
                    "=" + f), t.converters["script json"] =
                function() {
                    return e || i.error(f + " was not called"),
                        e[0]
                }, t.dataTypes[0] = "json", o = n[f], n[f] =
                function() {
                    e = arguments
                }, u.always(function() {
                    n[f] = o;
                    t[f] && (t.jsonpCallback = r.jsonpCallback,
                        gi.push(f));
                    e && i.isFunction(o) && o(e[0]);
                    e = o = void 0
                }), "script")
        }), i.parseHTML = function(n, t, r) {
            if (!n || "string" != typeof n) return null;
            "boolean" == typeof t && (r = t, t = !1);
            t = t || u;
            var f = er.exec(n),
                e = !r && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment([n],
                t, e), e && e.length && i(e).remove(), i.merge([],
                f.childNodes))
        }, nr = i.fn.load, i.fn.load = function(n, t, r) {
            if ("string" != typeof n && nr) return nr.apply(this, arguments);
            var u, o, s, f = this,
                e = n.indexOf(" ");
            return e >= 0 && (u = i.trim(n.slice(e, n.length)), n = n.slice(
                    0, e)), i.isFunction(t) ? (r = t, t = void 0) : t &&
                "object" == typeof t && (s = "POST"), f.length > 0 && i.ajax({
                    url: n,
                    type: s,
                    dataType: "html",
                    data: t
                }).done(function(n) {
                    o = arguments;
                    f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) :
                        n)
                }).complete(r && function(n, t) {
                    f.each(r, o || [n.responseText, t, n])
                }), this
        }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError",
            "ajaxSuccess", "ajaxSend"
        ], function(n, t) {
            i.fn[t] = function(n) {
                return this.on(t, n)
            }
        }), i.expr.filters.animated = function(n) {
            return i.grep(i.timers, function(t) {
                return n === t.elem
            }).length
        }, tr = n.document.documentElement, i.offset = {
            setOffset: function(n, t, r) {
                var e, o, s, h, u, c, v, l = i.css(n, "position"),
                    a = i(n),
                    f = {};
                "static" === l && (n.style.position = "relative");
                u = a.offset();
                s = i.css(n, "top");
                c = i.css(n, "left");
                v = ("absolute" === l || "fixed" === l) && i.inArray(
                    "auto", [s, c]) > -1;
                v ? (e = a.position(), h = e.top, o = e.left) : (h =
                    parseFloat(s) || 0, o = parseFloat(c) || 0);
                i.isFunction(t) && (t = t.call(n, r, u));
                null != t.top && (f.top = t.top - u.top + h);
                null != t.left && (f.left = t.left - u.left + o);
                "using" in t ? t.using.call(n, f) : a.css(f)
            }
        }, i.fn.extend({
            offset: function(n) {
                if (arguments.length) return void 0 === n ? this :
                    this.each(function(t) {
                        i.offset.setOffset(this, n, t)
                    });
                var t, f, u = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    e = r && r.ownerDocument;
                if (e) return t = e.documentElement, i.contains(t,
                    r) ? (typeof r.getBoundingClientRect !==
                    o && (u = r.getBoundingClientRect()), f =
                    wf(e), {
                        top: u.top + (f.pageYOffset || t.scrollTop) -
                            (t.clientTop || 0),
                        left: u.left + (f.pageXOffset || t.scrollLeft) -
                            (t.clientLeft || 0)
                    }) : u
            },
            position: function() {
                if (this[0]) {
                    var n, r, t = {
                            top: 0,
                            left: 0
                        },
                        u = this[0];
                    return "fixed" === i.css(u, "position") ? r = u
                        .getBoundingClientRect() : (n = this.offsetParent(),
                            r = this.offset(), i.nodeName(n[0],
                                "html") || (t = n.offset()), t.top +=
                            i.css(n[0], "borderTopWidth", !0), t.left +=
                            i.css(n[0], "borderLeftWidth", !0)), {
                            top: r.top - t.top - i.css(u,
                                "marginTop", !0),
                            left: r.left - t.left - i.css(u,
                                "marginLeft", !0)
                        }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var n = this.offsetParent || tr; n &&
                        !i.nodeName(n, "html") && "static" ===
                        i.css(n, "position");) n = n.offsetParent;
                    return n || tr
                })
            }
        }), i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(n, t) {
            var r = /Y/.test(t);
            i.fn[n] = function(u) {
                return b(this, function(n, u, f) {
                    var e = wf(n);
                    return void 0 === f ? e ? t in e ? e[t] :
                        e.document.documentElement[u] : n[u] :
                        void(e ? e.scrollTo(r ? i(e).scrollLeft() :
                            f, r ? f : i(e).scrollTop()
                        ) : n[u] = f)
                }, n, u, arguments.length, null)
            }
        }), i.each(["top", "left"], function(n, t) {
            i.cssHooks[t] = au(r.pixelPosition, function(n, r) {
                if (r) return (r = d(n, t), pt.test(r) ? i(n).position()[
                    t] + "px" : r)
            })
        }), i.each({
            Height: "height",
            Width: "width"
        }, function(n, t) {
            i.each({
                padding: "inner" + n,
                content: t,
                "": "outer" + n
            }, function(r, u) {
                i.fn[u] = function(u, f) {
                    var e = arguments.length && (r ||
                            "boolean" != typeof u),
                        o = r || (u === !0 || f === !0 ?
                            "margin" : "border");
                    return b(this, function(t, r, u) {
                        var f;
                        return i.isWindow(t) ? t.document
                            .documentElement[
                                "client" + n] : 9 ===
                            t.nodeType ? (f = t.documentElement,
                                Math.max(t.body[
                                    "scroll" +
                                    n], f[
                                    "scroll" +
                                    n], t.body[
                                    "offset" +
                                    n], f[
                                    "offset" +
                                    n], f[
                                    "client" +
                                    n])) : void 0 ===
                            u ? i.css(t, r, o) : i.style(
                                t, r, u, o)
                    }, t, e ? u : void 0, e, null)
                }
            })
        }), i.fn.size = function() {
            return this.length
        }, i.fn.andSelf = i.fn.addBack, "function" == typeof define &&
        define.amd && define("jquery", [], function() {
            return i
        }), bf = n.jQuery, kf = n.$, i.noConflict = function(t) {
            return n.$ === i && (n.$ = kf), t && n.jQuery === i && (n.jQuery =
                bf), i
        }, typeof t === o && (n.jQuery = n.$ = i), i
}),
function() {
    var n = {},
        t = "en-GB",
        i = document.documentElement.lang,
        r = window.cab = window.cab || {};
    r.translate = function(r) {
        return n[r] && (n[r][i] || n[r][t]) || r
    }
}(),
function(n) {
    function i(i) {
        var f, u = t[i] = n.Deferred(),
            r = n("<script/>")[0],
            e = n("script")[0];
        return r.onload = r.onreadystatechange = function() {
            var n;
            (n = r.readyState) && n !== "complete" && n !== "loaded" ||
                f || u.resolve()
        }, r.onerror = function() {
            u.reject()
        }, u.always(function() {
            f = !0;
            r.onload = r.onreadystatechange = r.onerror = null
        }), r.async = !0, r.src = i, e.parentNode.insertBefore(r, e), u
    }
    var t = {};
    n.loadScriptTag = function(n, r) {
        var u = t[n] || i(n);
        return r && u.done(r), u.promise()
    }
}(jQuery, document),
function(n) {
    var t = [],
        i = [];
    n.fn.popup = n.fn.popup = function(r) {
        var y = n("body"),
            p = n(window),
            k = n(document),
            f, e, o, u = {},
            h, c, w = {
                type: "overlay",
                action: "click",
                background: !0,
                color: "black",
                opacity: "0.4",
                horizontal: "center",
                vertical: "center",
                escape: !0,
                blur: !0,
                fade: 250,
                opensufix: "_open",
                closesufix: "_close",
                keepfocus: !0,
                reposition: !1,
                autozindex: !1
            },
            b = function(h) {
                var c, v, p;
                if (n(h).attr("id") || n(h).attr("id", "j-popup-" +
                        parseInt(Math.random() * 1e8)), i[h.id] = !1, t[h.id] =
                    0, f = n(h), u = n.extend({}, w, r), u.reposition === !
                    0) return e = f, f = o = n("#" + h.id + "_wrapper"), a(
                    h), !1;
                if (f.attr("data-popup-initialized")) return !1;
                f.attr("data-popup-initialized", "true");
                c = "." + h.id + u.opensufix;
                u.type == "tooltip" && (u.background = !1, u.keepfocus = !1);
                f.css({
                    display: "none"
                });
                y.prepend(h);
                u.background && !n("#" + h.id + "_background").length && (v =
                    '<div id="' + h.id +
                    '_background" class="popup_background"><\/div>', y.prepend(
                        v), n("#" + h.id + "_background").css({
                        backgroundColor: u.color,
                        opacity: u.opacity,
                        position: "fixed",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                        display: "none"
                    }));
                u.type == "overlay" && (f.css({
                        display: "inline-block",
                        textAlign: "left",
                        position: "relative",
                        verticalAlign: "middle"
                    }).addClass("popup_content"), f.wrap('<div id="' +
                        h.id + '_wrapper" class="popup_wrapper" />'), o =
                    n("#" + h.id + "_wrapper"), o.css({
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        display: "none",
                        textAlign: "center"
                    }), o.append('<div class="popup_align" />'), n(
                        ".popup_align").css({
                        display: "inline-block",
                        verticalAlign: "middle",
                        height: "100%"
                    }), u.horizontal == "right" ? o.css("text-align",
                        "right") : u.horizontal == "left" && o.css(
                        "text-align", "left"), u.vertical == "bottom" ?
                    f.css("vertical-align", "bottom") : u.vertical ==
                    "top" && f.css("vertical-align", "top"), e = f, f =
                    o);
                n(c).each(function(t, i) {
                    n(i).attr("data-popup-order", t)
                });
                u.action == "click" ? (n(c).click(function(t) {
                    if (f.is(":hidden")) {
                        var i = n(this).attr("data-popup-order");
                        l(h, i);
                        t.preventDefault()
                    }
                }), n("." + h.id + u.closesufix).click(function(n) {
                    s(h);
                    n.preventDefault()
                })) : u.action == "hover" ? (n(c).mouseenter(function() {
                    l(h, n(this).attr("data-popup-order"))
                }), n(c).mouseleave(function() {
                    s(h)
                })) : (n(c).mouseover(function() {
                    l(h, n(this).attr("data-popup-order"))
                }), n(c).mouseout(function() {
                    s(h)
                }));
                u.escape && n(document).keydown(function(n) {
                    n.keyCode == 27 && f.css("display") == "block" &&
                        s(h)
                });
                n(window).bind("resize", function() {
                    u.type != "tooltip" && a(h)
                });
                u.autozindex === !0 && (p = Math.max(0, Math.max.apply(null,
                    n.map(n.makeArray(document.getElementsByTagName(
                        "*")), function(t) {
                        return parseFloat(n(t).css(
                            "z-index")) || null
                    }))), t[h.id] = p, t[h.id] > 0 && f.css({
                    zIndex: t[h.id] + 2
                }), u.background && t[h.id] > 0 && n("#" + h.id +
                    "_background").css({
                    zIndex: t[h.id] + 1
                }));
                u.autoopen && l(h, 0)
            },
            l = function(t, r) {
                var o = r;
                v(u.beforeopen, o);
                i[t.id] = o;
                u.fade ? f.fadeIn(u.fade, function() {
                    n(document).on("click", h);
                    n(document).on("focusin", c)
                }) : (f.show(), setTimeout(function() {
                    n(document).on("click", h);
                    n(document).on("focusin", c)
                }, 0));
                a(t, o);
                u.background && (u.fade ? n("#" + t.id + "_background").fadeIn(
                    u.fade) : n("#" + t.id + "_background").show());
                u.keepfocus && (e.attr("tabindex", -1).focus(), c =
                    function(i) {
                        n(i.target).parents().andSelf().is("#" + t.id) ||
                            e.focus()
                    });
                v(u.onOpen, o);
                u.blur && (h = function(i) {
                    n(i.target).parents().andSelf().is("#" + t.id) ||
                        s(t)
                })
            },
            a = function(t, i) {
                if (i = i || 0, u.type == "tooltip") {
                    f.css({
                        position: "absolute"
                    });
                    var o = n("." + t.id + u.opensufix +
                            '[data-popup-order="' + i + '"]'),
                        r = o.offset();
                    u.horizontal == "right" ? f.css("left", r.left + o.outerWidth()) :
                        u.horizontal == "left" ? f.css("right", n(window).width() -
                            r.left) : f.css("left", r.left + o.outerWidth() /
                            2 - n(t).outerWidth() / 2 - parseFloat(n(t).css(
                                "marginLeft")));
                    u.vertical == "bottom" ? f.css("top", r.top + o.outerHeight()) :
                        u.vertical == "top" ? f.css("bottom", n(window).height() -
                            r.top) : f.css("top", r.top + o.outerHeight() /
                            2 - n(t).outerHeight() / 2 - parseFloat(n(t).css(
                                "marginTop")))
                } else u.type == "overlay" && (p.height() < e.outerHeight() +
                    parseFloat(e.css("marginTop")) + parseFloat(e.css(
                        "marginBottom")) ? f.css({
                        position: "absolute",
                        top: p.scrollTop()
                    }) : f.css({
                        position: "fixed",
                        top: "0"
                    }))
            },
            s = function(t) {
                u.background && (u.fade ? n("#" + t.id + "_background").fadeOut(
                    u.fade) : n("#" + t.id + "_background").hide());
                u.blur && n(document).off("click", h);
                u.keepfocus && (n(document).off("focusin", c), n("." + t.id +
                    u.opensufix).focus());
                u.fade ? f.fadeOut(u.fade) : f.hide();
                v(u.onClose, i[t.id])
            },
            v = function(t, i) {
                var r = n("." + f.attr("id") + u.opensufix +
                    '[data-popup-order="' + i + '"]');
                typeof t == "function" && t(r)
            };
        this.each(function() {
            b(this)
        })
    }
}(jQuery),
function(n, t) {
    "use strict";

    function s(n) {
        return isNaN(n) ? -Infinity : n
    }

    function v(n) {
        return n = +n, n < 100 && (n += n < 50 ? 2e3 : 1900), n
    }

    function u(t) {
        return n.trim(n.text(t)).toLowerCase()
    }

    function e(n, t) {
        if (n.every) return n.every(t);
        for (var i = 0, r = n.length; i < r; ++i)
            if (!t(n[i])) return !1;
        return !0
    }

    function vt(u) {
        var e = this,
            f = n(e),
            o = f.data(i),
            s, l, h;
        if (u !== !1 && !f.hasClass(k) || (o && (f.removeClass(k).find(
                "tbody").add(e).off(p).removeData(i), f.find(
                "thead ." + g).each(function() {
                n(this).replaceWith(this.childNodes)
            }), f.find("th").removeClass(i + "-asc " + i + "-desc"),
            f.find('[class^="' + i + '-"]').remove(), n(t).off(p +
                o.guid)), u !== !1)) {
            f.addClass(k);
            o || (++tt, o = n.data(e, i, {
                guid: tt
            }));
            u = u || {};
            var v = n.extend({}, d, u.sortFns),
                c = n.extend({}, ut, u.keyGens),
                y = n.extend({}, rt, u.filterFns),
                w = u.dynamic;
            if (u.ui !== !1) {
                if (!f.find("th").length) return;
                f.find("thead").length || f.prepend(n("<thead>").append(e.rows[
                    0]));
                s = f.find("thead");
                s.find("th").each(function() {
                    var t = this,
                        f = n(t),
                        o = r(t, "index"),
                        u = {},
                        l, h, c, s;
                    o === !1 && (o = t.cellIndex);
                    r(t, "nosort") || (f.wrapInner(n('<div class="' +
                            g + '"/>')).children().append(at),
                        ct(f, !r(t, "reverse")), l = r(t,
                            "type") || yt(e, o), n.extend(u, ht[
                            l]));
                    h = r(t, "select");
                    h && (c = h === "multiple", f.append(
                            '<span class="' + i +
                            '-span-filter">' + pt(e, o, c) +
                            "<\/span>"), u["filter-fn"] = c ?
                        "inList" : "exact", u["filter-keygen"] =
                        "text");
                    r(t, "filter") && (f.append('<span class="' + i +
                            '-span-filter"><input type="search" class="' +
                            i + '-filter" title="' + a.search +
                            '"><\/span>'), u["filter-fn"] =
                        "has", u["filter-keygen"] = "text");
                    w && (u.dynamic = !0);
                    for (s in u) n.isFunction(u[s]) || r(t, s, u[s])
                });
                u.maintainWidth === !1 || f.find("col").length || (l = f.width(),
                    h = "", n(e.tBodies[0].rows[0].cells).each(function() {
                        var t = n(this).width();
                        h += '<col class="' + i +
                            '-col" style="width:' + (t / l * 100).toFixed(
                                2) + '%">'
                    }), s.before(h));
                f.on("click." + i, "th", function(t) {
                    var u = n(t.target),
                        e;
                    if (u.is("." + b) || !u.is(
                        "a,a *,button,button *,input,select,select *,textarea"
                    )) {
                        if (u = n(this), u.is("th") || (u = u.closest(
                            "th")), e = u[0], r(e, "nosort")) return
                        ;
                        var h = v[r(e, "fn")],
                            l = c[r(e, "keygen")],
                            s = r(e, "reverse"),
                            o = s,
                            a = r(e, "dynamic"),
                            y = r(e, "index") || e.cellIndex;
                        u.hasClass(i + "-asc") && (o = !o);
                        f.trigger("sort", [{
                            cellIndex: y,
                            sortFn: h,
                            keyGen: l,
                            reverse: o,
                            skipCache: a
                        }]);
                        s && (o = !o);
                        u.toggleClass(i + "-asc", !o).toggleClass(i +
                            "-desc", o);
                        ct(u, o)
                    }
                }).on("input." + i, "." + i + "-filter", function() {
                    var r = this;
                    t.clearTimeout(this[i + "Timeout"]);
                    this[i + "Timeout"] = t.setTimeout(function() {
                        n(r).trigger("change." + i)
                    }, 100)
                }).on("change." + i, "." + i + "-filter", function() {
                    var t = n(this),
                        e = t;
                    t.is("th") || (t = t.closest("th"));
                    var i = t[0],
                        o = y[r(i, "filter-fn")],
                        s = c[r(i, "filter-keygen")],
                        h = r(i, "dynamic") !== null,
                        u = e.val(),
                        l = r(i, "index") || i.cellIndex;
                    f.trigger("filter", [{
                        cellIndex: l,
                        clear: !u,
                        text: u,
                        filterFn: o,
                        keyGen: s,
                        skipCache: h
                    }])
                });
                n(t).on("pageload" + p + o.guid, function() {
                    n(e.tHead).find("." + i + "-search-filter").trigger(
                        "change." + i)
                })
            }
            f.on("sort." + i, function(t, i) {
                i = i || {};
                var r = n(t.target);
                r.is("tbody,table") || (r = r.closest("tbody,table"));
                r.is("table") && (r = r.find("tbody"));
                r.each(function() {
                    kt(this, i.cellIndex, i.keyGen, i.sortFn,
                        i.reverse, i.skipCache)
                });
                f.trigger("sorted", [r, i])
            }).on("filter." + i, function(t, i) {
                var r = n(t.target);
                r.is("tbody,table") || (r = r.closest("tbody,table"));
                r.is("table") && (r = r.find("tbody"));
                r.each(function() {
                    gt(this, i)
                });
                f.trigger("filtered", [r, u])
            })
        }
    }

    function r(t, i, r) {
        var u = n.attr(t, c + i, r === !0 ? "" : r);
        return u === undefined ? !1 : u === "" ? !0 : u
    }

    function ct(n, t) {
        var i = n.find("." + b),
            u = r(i[0], (t ? "desc" : "asc") + "-title");
        n[0].title = u;
        i[0].title = u;
        i.find("span").text(u)
    }

    function yt(n, t) {
        for (var f = n.tBodies[0].rows, o, r, s, h = [], i = 0, e = f.length; h
            .length < 3 && i < f.length; ++i) r = f[i].cells[t], r && (s =
            u(r), s && h.push([s, r]));
        for (i = 0, e = st.length; i < e; ++i)
            if (o = st[i](h), o) return o;
        return !1
    }

    function pt(t, r, u) {
        for (var h = {}, e = [], s, c = t.tBodies, f = 0, o = c.length; f <
            o; ++f) n.extend(h, wt(c[f], r, u));
        for (f in h) e.push(f);
        for (e.sort(), s = '<select class="' + i + '-filter" title="' + a.filter +
            '"><option>', f = 0, o = e.length; f < o; ++f) e[f] && (s +=
            "<option>" + e[f]);
        return s + "<\/select>"
    }

    function wt(t, i, r) {
        function h(n) {
            o[n.trim()] = !0
        }
        for (var f, o = {}, s = t.rows, u = 0, e = s.length; u < e; ++u) f =
            n.text(s[u].cells[i] || ""), r ? f.split(it).forEach(h) : h(f);
        return o
    }

    function bt(n) {
        for (var r = "", t = n, i = 65536; t >= i;) t = t / i, r += "￿";
        return r + nt(n % i)
    }

    function kt(t, r, u, e, o, s) {
        var h, w, a, l, v, y = [],
            k = nt,
            b = "￿",
            p = n.data(t, i) || {};
        if (s || p.lastCellIndex !== r || p.reversed === o) {
            for (u = u || ut.text, r === undefined && (e = d.num), t.rows.length >
                65536 && (k = bt, b = k(t.rows.length).replace(/[^\uffff]/g,
                    "")), h = 0, w = t.rows.length; h < w; ++h) a = t.rows[
                    h], l = "", a[f] === undefined && (a[f] = h), r !==
                undefined ? (v = a.cells[r], v && (l = v[f], (l ===
                    undefined || s) && (l = v.getAttribute(c +
                    "key"), l === null && (l = u(v)), v[f] = l))) : l = a[f],
                y.push([l, b, String.fromCharCode(h), b, h, a]);
            for (e ? y.sort(e) : y.sort(), o && y.reverse(), h = 0, w = y.length; h <
                w; ++h) t.appendChild(y[h][5])
        } else dt(t);
        p.lastCellIndex = r;
        p.reversed = o;
        n.data(t, i, p)
    }

    function dt(n) {
        for (var i = n.rows, r, t = i.length - 1; t >= 0; --t) i[t][f] ===
            undefined && (r[t][f] = t), n.appendChild(i[t])
    }

    function gt(n, t, i) {
        for (var r, s, v, l, h, u, f, e = 0, a = n.rows.length; e < a; ++e)
            if (r = n.rows[e], !i || i[e]) {
                for (l = !1, s = 0, v = r.cells.length; s < v; ++s) u = r.cells[
                        s], s === t.cellIndex ? (h = !1, t.clear ? h = !1 :
                        (f = u[o + "FilterKey"], (f === undefined || t.skipCache) &&
                            (f = u.getAttribute(c + "filter-key"), f ===
                                null && (f = t.keyGen(u)), u[o +
                                    "FilterKey"] = f), h = !t.filterFn(f, t
                                .text), h && (l = !0)), u[o + "Hide"] = h) :
                    u[o + "Hide"] && (l = !0);
                l ? (r[w] === undefined && (r[w] = r.style.display), r.style
                    .display = "none") : r.style.display = r[w] || ""
            }
    }
    var i = "tablesort",
        p = "." + i,
        c = "data-" + i + "-",
        o = i + ("" + Math.random()).slice(2),
        f = o + "SortKey",
        w = o + "Display",
        b = i + "-button",
        g = i + "-wrap",
        k = i + "-sortable",
        nt = String.fromCharCode,
        tt = 0,
        it = /\s*,\s*/,
        d = {
            num: function(n, t) {
                return n[0] === t[0] ? n[4] > t[4] : n[0] > t[0] ? 1 : -1
            }
        },
        rt = {
            exact: function(n, t) {
                return n == t.toLowerCase()
            },
            has: function(n, t) {
                return n.indexOf(t.toLowerCase()) > -1
            },
            inList: function(n, t) {
                return n.split(it).indexOf(t.toLowerCase()) > -1
            },
            hasEach: function(n, t) {
                var i = t.toLowerCase().split(" ");
                return e(i, function(t) {
                    return n.indexOf(t) > -1
                })
            }
        },
        ut = {
            text: u,
            isodate: function(n) {
                var t = Date.parse(u(n).toUpperCase());
                return s(t)
            },
            ddmmyy: function(n) {
                var t = u(n).match(y),
                    i;
                return t && (i = new Date(v(t[4]), +t[3] + 1, t[1]).valueOf()),
                    s(i)
            },
            mmddyy: function(n) {
                var t = u(n).match(y),
                    i;
                return t && (i = new Date(v(t[4]), +t[1] + 1, t[3]).valueOf()),
                    s(i)
            },
            dmmmy: function(n) {
                var t = u(n).match(et),
                    i;
                return t && (i = new Date(t[3] ? v(t[3]) : (new Date).getFullYear(),
                    l[t[2]], t[1]).valueOf()), s(i)
            },
            mmmdy: function(n) {
                var t = u(n).match(ot),
                    i;
                return t && (i = new Date(t[3] ? v(t[3]) : (new Date).getFullYear(),
                    l[t[1]], t[2]).valueOf()), s(i)
            },
            num: function(n) {
                var t = u(n).match(ft),
                    i = NaN;
                return t && (i = parseFloat((t[1] || "") + t[2].replace(
                    /,/g, ""))), s(i)
            }
        },
        ft = /^(-?)[&#163;$&#164;]?\s*([\d,.]+)/,
        et = /^([1-3]?\d)[,\s]+([a-z]{3,})(?:[,\s]+(\d{2,4}))?/,
        ot = /^([a-z]{3,})[,\s]+([1-3]?\d)(?:[,\s]+(\d{2,4}))?/,
        lt =
        /^(\d{4})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?(Z|(?:(\+|-)(\d{2}):?(\d{2})))?)?)?)?$/i,
        y = /^(\d{1,2})\s*([.\/\\\-])\s*(\d{1,2})\s*\2\s*(\d{2,4})/,
        l = {
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
        },
        st = [
            function(n) {
                if (e(n, function(n) {
                    var t = n[0].match(et);
                    return t && +t[1] < 31 && l[t[2]] >= 0
                })) return "dmmmy"
            },
            function(n) {
                if (e(n, function(n) {
                    var t = n[0].match(ot);
                    return t && +t[1] < 31 && l[t[2]] >= 0
                })) return "mmmdy"
            },
            function(n) {
                if (e(n, function(n) {
                    return lt.test(n[0])
                })) return "isodate"
            },
            function(n) {
                if (e(n, function(n) {
                    var t = n[0].match(y);
                    return t && +t[1] < 32 && +t[3] < 13
                })) return "ddmmyy"
            },
            function(n) {
                if (e(n, function(n) {
                    var t = n[0].match(y);
                    return t && +t[1] < 13 && +t[3] < 32
                })) return "mmddyy"
            },
            function(n) {
                if (e(n, function(n) {
                    return ft.test(n[0])
                })) return "num"
            }
        ],
        ht = {
            num: {
                keygen: "num",
                fn: "num"
            },
            dmmmy: {
                keygen: "dmmmy",
                fn: "num"
            },
            mmmdy: {
                keygen: "mmmdy",
                fn: "num"
            },
            isodate: {
                keygen: "isodate",
                fn: "num"
            },
            ddmmyy: {
                keygen: "ddmmyy",
                fn: "num"
            },
            mmddyy: {
                keygen: "mmddyy",
                fn: "num"
            }
        },
        a = {
            sortAsc: "Sort ascending",
            sortDesc: "Sort desending",
            search: "Search column",
            filter: "Filter column"
        },
        at = '<button type="button" class="' + b + '" ' + c + 'asc-title="' + a
        .sortAsc + '"  ' + c + 'desc-title="' + a.sortDesc +
        '"><span><\/span><\/button>',
        h = function(n) {
            return this.filter("table").each(function() {
                vt.call(this, n)
            }), this
        };
    h.keyGens = d;
    h.filterFns = rt;
    h.monthNames = l;
    h.types = ht;
    h.labels = a;
    n.fn[i] = h
}(jQuery, window);
jQuery(function() {
    $("table.sortable").tablesort()
});
var twitterFetcher = function() {
    function c(n) {
        return n.replace(/<b[^>]*>(.*?)<\/b>/gi, function(n, t) {
            return t
        }).replace(
            /class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,
            "")
    }

    function i(n, t) {
        for (var u = [], f = RegExp("(^| )" + t + "( |$)"), r = n.getElementsByTagName(
            "*"), i = 0, e = r.length; i < e; i++) f.test(r[i].className) &&
            u.push(r[i]);
        return u
    }
    var l = "",
        t = 20,
        f = !0,
        n = [],
        e = !1,
        r = !0,
        u = !0,
        o = null,
        s = !0,
        a = !0,
        h = null,
        v = !0;
    return {
        fetch: function(i, s, c, y, p, w, b, k, d, g) {
            void 0 === c && (c = 20);
            void 0 === y && (f = !0);
            void 0 === p && (p = !0);
            void 0 === w && (w = !0);
            void 0 === b && (b = "default");
            void 0 === k && (k = !0);
            void 0 === d && (d = null);
            void 0 === g && (g = !0);
            e ? n.push({
                id: i,
                domId: s,
                maxTweets: c,
                enableLinks: y,
                showUser: p,
                showTime: w,
                dateFunction: b,
                showRt: k,
                customCallback: d,
                showInteraction: g
            }) : (e = !0, l = s, t = c, f = y, u = p, r = w, a = k,
                o = b, h = d, v = g, s = document.createElement(
                    "script"), s.type = "text/javascript", s.src =
                "//cdn.syndication.twimg.com/widgets/timelines/" +
                i +
                "?&lang=en&callback=twitterFetcher.callback&suppress_response_codes=true&rnd=" +
                Math.random(), document.getElementsByTagName("head")[
                    0].appendChild(s))
        },
        callback: function(y) {
            var w = document.createElement("div"),
                b, tt, it;
            w.innerHTML = y.body;
            "undefined" == typeof w.getElementsByClassName && (s = !1);
            y = [];
            var g = [],
                d = [],
                p = [],
                nt = [],
                k = 0;
            if (s)
                for (w = w.getElementsByClassName("tweet"); k < w.length;)
                    0 < w[k].getElementsByClassName("retweet-credit").length ?
                    p.push(!0) : p.push(!1), (!p[k] || p[k] && a) && (y
                        .push(w[k].getElementsByClassName(
                            "e-entry-title")[0]), nt.push(w[k].getAttribute(
                            "data-tweet-id")), g.push(w[k].getElementsByClassName(
                            "p-author")[0]), d.push(w[k].getElementsByClassName(
                            "dt-updated")[0])), k++;
            else
                for (w = i(w, "tweet"); k < w.length;) y.push(i(w[k],
                        "e-entry-title")[0]), nt.push(w[k].getAttribute(
                        "data-tweet-id")), g.push(i(w[k], "p-author")[0]),
                    d.push(i(w[k], "dt-updated")[0]), 0 < i(w[k],
                        "retweet-credit").length ? p.push(!0) : p.push(!
                        1), k++;
            for (y.length > t && (y.splice(t, y.length - t), g.splice(t,
                    g.length - t), d.splice(t, d.length - t), p.splice(
                    t, p.length - t)), w = [], k = y.length, p = 0; p <
                k;) "string" != typeof o && (b = new Date(d[p].getAttribute(
                        "datetime").replace(/-/g, "/").replace("T",
                        " ").split("+")[0]), b = o(b), d[p].setAttribute(
                        "aria-label", b), y[p].innerText ? s ? d[p].innerText =
                    b : (tt = document.createElement("p"), it =
                        document.createTextNode(b), tt.appendChild(it),
                        tt.setAttribute("aria-label", b), d[p] = tt) :
                    d[p].textContent = b), b = "", f ? (u && (b +=
                        '<div class="user">' + c(g[p].innerHTML) +
                        "<\/div>"), b += '<p class="tweet">' + c(y[p].innerHTML) +
                    "<\/p>", r && (b += '<p class="timePosted">' + d[p]
                        .getAttribute("aria-label") + "<\/p>")) : y[p].innerText ?
                (u && (b += '<p class="user">' + g[p].innerText +
                        "<\/p>"), b += '<p class="tweet">' + y[p].innerText +
                    "<\/p>", r && (b += '<p class="timePosted">' + d[p]
                        .innerText + "<\/p>")) : (u && (b +=
                        '<p class="user">' + g[p].textContent + "<\/p>"
                    ), b += '<p class="tweet">' + y[p].textContent +
                    "<\/p>", r && (b += '<p class="timePosted">' + d[p]
                        .textContent + "<\/p>")), v && (b +=
                    '<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to=' +
                    nt[p] +
                    '" class="twitter_reply_icon">Reply<\/a><a href="https://twitter.com/intent/retweet?tweet_id=' +
                    nt[p] +
                    '" class="twitter_retweet_icon">Retweet<\/a><a href="https://twitter.com/intent/favorite?tweet_id=' +
                    nt[p] +
                    '" class="twitter_fav_icon">Favorite<\/a><\/p>'), w
                .push(b), p++;
            if (null == h) {
                for (y = w.length, g = 0, d = document.getElementById(l),
                    nt = "<ul>"; g < y;) nt += "<li>" + w[g] + "<\/li>",
                    g++;
                d.innerHTML = nt + "<\/ul>"
            } else h(w);
            e = !1;
            0 < n.length && (twitterFetcher.fetch(n[0].id, n[0].domId,
                n[0].maxTweets, n[0].enableLinks, n[0].showUser,
                n[0].showTime, n[0].dateFunction, n[0].showRt,
                n[0].customCallback, n[0].showInteraction), n.splice(
                0, 1))
        }
    }
}();
(function(n) {
    n.fn.rwdImageMaps = function() {
        var t = this,
            i = function() {
                t.each(function() {
                    if (typeof n(this).attr("usemap") !=
                        "undefined") {
                        var i = this,
                            t = n(i);
                        n("<img />").load(function() {
                            var r = t.attr("width"),
                                u = t.attr("height"),
                                f;
                            r && u || (f = new Image, f
                                .src = t.attr("src"),
                                r || (r = f.width),
                                u || (u = f.height)
                            );
                            var e = t.width() / 100,
                                o = t.height() / 100,
                                s = t.attr("usemap").replace(
                                    "#", ""),
                                i = "coords";
                            n('map[name="' + s + '"]').find(
                                "area").each(
                                function() {
                                    var f = n(this),
                                        s, h, t;
                                    for (f.data(i) ||
                                        f.data(i, f
                                            .attr(i)
                                        ), s = f.data(
                                            i).split(
                                            ","), h =
                                        new Array(s
                                            .length
                                        ), t = 0; t <
                                        h.length; ++
                                        t) h[t] = t %
                                        2 == 0 ?
                                        parseInt(s[
                                                t] /
                                            r * 100 *
                                            e) :
                                        parseInt(s[
                                                t] /
                                            u * 100 *
                                            o);
                                    f.attr(i, h.toString())
                                })
                        }).attr("src", t.attr("src"))
                    }
                })
            };
        return n(window).resize(i).trigger("resize"), this
    }
})(jQuery);
$window = $(window);
$(function(n) {
    "use strict";

    function f() {
        var c, f, l, n, h;
        if (!r) {
            if (r = !0, o.is(":visible")) i.hide(), t.show();
            else if (t.hide(), i.show(), c = i.offset().top, i.hide(),
                t.show(), f = t.eq(0).offset().top, l = t.last().offset()
                .top, l > f) {
                for (u.empty(), e(t.last()), i.show().css(
                        "visiblity", "hidden"), n = t.length - 2; n >=
                    0; --n)
                    if (h = t.eq(n), h.offset().top > f || i.offset()
                        .top > c) e(h);
                    else break;
                i.show().css("visiblity", "visible")
            }
            s ? window.setTimeout(function() {
                r = !1
            }, 0) : r = !1
        }
    }

    function e(n) {
        var t = n.children("a")[0],
            i = '<li><a href="' + t.href + '">' + t.innerHTML +
            "<\/a><\/li>";
        u.prepend(i);
        n.hide()
    }
    var i = n(".nav-list-primary-more"),
        u = n(".main-nav__more-links"),
        t = n(".top-item"),
        o = n(".js-toggle-menu"),
        s = !!n(".ie8").length,
        r = !1;
    if (n(".main-nav").css("overflow", "visible"), !(t.length < 2)) {
        n(window).on("resize", f);
        f()
    }
});
$(function(n) {
    "use strict";

    function u(t) {
        var i = n(),
            r = n(this);
        t.keyCode === 37 ? i = f(r, "prev") : t.keyCode === 39 && (
            i = f(r, "next"));
        i.children().first("a").trigger("focus")
    }

    function f(n, t) {
        do t === "next" ? n = n.next() : t === "prev" && (n = n.prev()); while (
            n[0] && !n.is(":visible"));
        return n
    }

    function e(n) {
        var t, u, h;
        if (!n.hasClass("active") && (r.removeClass("active"), n.addClass(
                "active"), t = n.children(".mega-menu"), t.length !==
            0)) {
            t.css("left", "");
            var f = i.offset().left + i.outerWidth(),
                e = t.outerWidth(),
                o = t.offset(),
                s = parseFloat(i.css("paddingRight"));
            f - s < o.left + e && t.offset({
                left: f - e - s
            });
            u = t.children(".mega-menu__arrow");
            h = n.offset().left + n.outerWidth() / 2 - u.outerWidth() /
                2;
            u.offset({
                left: h,
                top: o.top - u.outerHeight() + 1
            })
        }
    }
    var i = n(".nav-list-primary"),
        r = n(".js-mega-menu, .js-more-menu"),
        t;
    n(".js-more-menu").on("focusin mouseenter", function() {
        clearTimeout(t);
        r.removeClass("active");
        n(this).addClass("active")
    }).on("focusout mouseleave", function(i) {
        clearTimeout(t);
        var r = n(this);
        t = setTimeout(function() {
            r.removeClass("active")
        }, i.type === "mouseleave" ? 250 : 0)
    }).on("keyup", u).children("a").on("click", !1);
    n(".js-mega-menu").on("focusin", function() {
        clearTimeout(t);
        e(n(this))
    }).on("mouseenter", function() {
        var i = n(this);
        clearTimeout(t);
        t = setTimeout(function() {
            e(i)
        }, 500)
    }).on("focusout mouseleave", function(i) {
        clearTimeout(t);
        var r = n(this);
        t = setTimeout(function() {
            r.removeClass("active")
        }, i.type === "mouseleave" ? 500 : 0)
    }).on("keyup", u)
});
$(function(n) {
        function r() {
            if (!i) {
                var r = n('<ul class="main-nav__mobile-secondary">');
                n(".main-header__top-nav").children().not(
                    ".nav-list-primary-more").each(function() {
                    r.append(n('<li class="top-item">').append(
                        n(this).clone()))
                });
                t.append(r);
                window.matchMedia && matchMedia("(min-width:768px)").addListener(
                    function(n) {
                        n.matches && t.attr("style",
                            "overflow: visible")
                    });
                i = !0
            }
        }
        var i = !1,
            t;
        n(".js-toggle-menu").on("click", function(i) {
            i.preventDefault();
            t = t || n(".main-nav");
            r();
            t.slideToggle()
        })
    }),
    function(n, t) {
        function r(t) {
            function i(n) {
                n.keyCode === 27 && (n.preventDefault(), r())
            }

            function r() {
                t.hide();
                n(".popup-background").hide();
                n(document).off("keydown", i);
                t.find("input[type=text],input[type=email]").val("")
            }
            t.show();
            n(".popup-background").show();
            t.trigger("focus");
            t.on("click", "[data-action=close]", function(n) {
                n.preventDefault();
                r()
            });
            n(document).on("keydown", i)
        }

        function f(n) {
            n.addClass(i);
            n.one("focusout", function() {
                n.removeClass(i);
                window.setTimeout(function() {
                    document.activeElement === n[0] && f(n)
                }, 0)
            })
        }
        n(".js-email-page").on("click", function(t) {
            t.preventDefault();
            r(n(".popup_email"))
        });
        n(".js-feedback").on("click", function(t) {
            t.preventDefault();
            r(n(".popup_feedback").first())
        });
        n(".js-twitter").on("click", function(n) {
            n.preventDefault();
            window.open(this.href + t(location.href), "",
                "width=550,height=520")
        });
        n(".js-facebook").on("click", function(n) {
            n.preventDefault();
            window.open(this.href + t(location.href), "",
                "width=626,height=436")
        });
        n(".js-google-plus").on("click", function(n) {
            n.preventDefault();
            window.open(this.href + t(location.href), "",
                "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600"
            )
        });
        mailLink = n(".mailLink")[0];
        mailLink && (mailLink.href += t(location));
        n(".popup_feedback").length && (n(
            'input[type="radio"][name="ctl00$ctl00$RootPlaceHolder$ShareBar$ctl00$contactmethodradio"]'
        ).change(function() {
            this.value == "feedbackformemail" ? n("#lblMethod").html(
                    "Email:") : this.value ==
                "feedbackformtelephone" && n("#lblMethod").html(
                    "Telephone:")
        }), n(".last-page").html(document.URL));
        var i = "share-bar__link--closed",
            u = n(".share-bar"),
            e = u.find("a");
        u.on("click", "a", function() {
            var t = n(this);
            window.setTimeout(function() {
                f(t)
            }, 0)
        }).on("focusin", "a", function() {
            e.not(this).removeClass(i)
        })
    }(jQuery, encodeURIComponent);
$(function(n) {
    function f() {
        if (t.show(), !i) {
            i = n('<span class="breadcrumb__extent-popup__arrow">')
                .appendTo(t);
            var u = r.offset().left + r.outerWidth() / 2 - i.outerWidth() /
                2;
            i.offset({
                left: u,
                top: t.offset().top - i.outerHeight() + 1
            })
        }
    }
    var u, t = n(".js-extent-popup"),
        r = n(".js-extent-link"),
        i;
    r.on("click", !1).add(t).on("mouseenter focusin", function() {
        clearTimeout(u);
        f()
    }).on("mouseleave focusout", function(n) {
        u = setTimeout(function() {
            t.hide()
        }, n.type === "mouseleave" ? 250 : 0)
    })
});
$(".accordionButton").on("click", function() {
    var n = $(this),
        t = n.next(".accordionContent"),
        i = n.find("img");
    n.hasClass("on") ? (n.removeClass("on"), t.slideUp(), i.attr("src",
        "/static/layout/accordion-closed.png").attr("alt",
        "Expand")) : (n.addClass("on"), t.slideDown(), i.attr("src",
        "/static/layout/accordion-open.png").attr("alt",
        "Collapse"))
}).next(".accordionContent").hide();
jQuery(function(n) {
        n(
            ".twitter-timeline,.twitter-follow-button,.twitter-video,.twitter-tweet,.twitter-share-button"
        ).length && ! function(n, t, i) {
            var r, u = n.getElementsByTagName(t)[0];
            n.getElementById(i) || (r = n.createElement(t), r.id = i, r
                .src = "https://platform.twitter.com/widgets.js", u
                .parentNode.insertBefore(r, u))
        }(document, "script", "twitter-wjs")
    }),
    function(n) {
        if (window.postMessage) {
            var t = {};
            n("iframe[data-auto-resize]").each(function() {
                var r = this,
                    i = n(this),
                    u = r.src.replace(/\?.*$/, "").replace(/\/+$/, "").replace(
                        /^.*\//, "");
                t[u] = i; + 'id=' + u;
                n(this).on("cabResizeFrame", function(n, t) {
                    r.scrolling = "no";
                    currentHeight = i.height();
                    (t && t > currentHeight || t <
                        currentHeight - 30) && i.height(t)
                }).on("cabScrollTop", function() {
                    n("html, body").animate({
                        scrollTop: i.offset().top
                    }, 500)
                }).on("cabScrollTo", function(t, r) {
                    n("html, body").animate({
                        scrollTop: i.offset().top + r
                    }, 500)
                })
            });
            n(window).on("message", function(n) {
                var u = n.originalEvent,
                    i, r;
                /(citizensadvice|cabsrv)\.org\.uk$/i.test(u.origin) &&
                    (i = JSON.parse(u.data) || {}, r = t[i.url], r && (
                        i.height && r.trigger("cabResizeFrame", i.height),
                        i.scrollTop && r.trigger("cabScrollTop"), i
                        .scrollTo && r.trigger("cabScrollTo", i.scrollTo)
                    ))
            })
        }
    }(jQuery);
jQuery(function(n) {
    var i = document,
        f = i.cookie.match(/eprivacy=([1-3])(?:;|$)/),
        t = Number(f && f[1] || 0),
        r = new Date,
        u, e = location.search.indexOf("showeprivacy=true") > -1;
    if (t < 3 || e) {
        r.setFullYear(r.getFullYear() + 1);
        u = "; expires=" + r.toUTCString() + "; path=/";
        t < 3 && ++t;
        e && n("html").removeClass("hide-cookie-monster");
        i.cookie = "eprivacy=" + t + u;
        n(".cookie-monster").on("click", "[data-action=close]",
            function(t) {
                t.preventDefault();
                i.cookie = "eprivacy=3" + u;
                n(t.delegateTarget).slideUp()
            })
    }
});
$(function(n) {
    var u = "top-news__navigation__item--current",
        f = n(".js-news-carousel"),
        e = f.find(".top-news__article"),
        t = f.find(".top-news__navigation__item"),
        r = 0,
        i;
    t.each(function(t) {
        n(this).attr("data-item", t)
    });
    t.on("mouseenter focusin", function() {
        var i = n(this);
        r = parseInt(i.attr("data-item"), 10);
        e.hide().eq(r).show();
        t.removeClass(u);
        i.addClass(u)
    });
    window.matchMedia && (i = matchMedia("(max-width:767px)"), i.addListener(
        function(n) {
            n.matches ? e.show() : t.eq(r).triggerHandler(
                "mouseenter")
        }));
    i && i.matches || t.eq(0).triggerHandler("mouseenter")
});
$(function(n) {
        var t = n(".js-tabs"),
            i = {};
        t.on("click", "a", function(t) {
            var f = this.hash,
                r = i[this.hash],
                u = n(this).closest(".js-tabs");
            u.data("cab-panels").hide().attr("hidden", !0).eq(r).show()
                .removeAttr("hidden");
            u.data("cab-tabs").attr("aria-expanded", "false").eq(r)
                .attr("aria-expanded", "true");
            t.preventDefault()
        });
        t.each(function() {
            var t = n(this),
                r = t.find("[role=tab]"),
                f = 0,
                u = r.find("a"),
                e = u.map(function() {
                    return i[this.hash] = f++, n(this.hash)[0]
                });
            t.data("cab-tabs", r);
            t.data("cab-panels", e);
            u.eq(0).trigger("click")
        })
    }),
    function(n, t) {
        function a() {
            if (!l) n(t).on("resize", function() {
                r || (r = !0, u.trigger("resize"));
                setTimeout(function() {
                    r = !1
                }, 0)
            })
        }

        function h(n) {
            if (!(n.length <= 1)) {
                var t = 0;
                n.forEach(function(n) {
                    var i = n.outerHeight();
                    i > t && (t = i)
                });
                n.forEach(function(n) {
                    n.css("height", t)
                })
            }
        }

        function f() {
            var r = n(this),
                i = 0,
                t = [];
            r.children().toArray().map(function(t) {
                var i = n(t);
                return i.css("height", ""), i
            }).forEach(function(n) {
                var r = n.offset();
                r.top === i ? t.push(n) : (h(t), r = n.offset(), t = [
                    n
                ], i = r.top)
            });
            h(t)
        }

        function v() {
            var t = n(this);
            if (!t.hasClass(o)) {
                a();
                u = u.add(this);
                t.on("resize", f);
                t.addClass(o);
                f.call(this);
                setTimeout(f.bind(this), 100)
            }
        }
        var i = "equalHeight",
            e = "js-equal-height",
            o = e + "-setup",
            c = n(
                '<div style="display:-webkit-flex;display:-ms-flexbox;display:flex;"/>'
            ),
            s = c.css("display").indexOf("flex") > -1,
            l = !1,
            r = !1,
            u = n();
        n.fn[i] = function() {
            return n(this).each(v), this
        };
        n.fn[i].supportsFlexBox = s;
        s || n("." + e)[i]()
    }(jQuery, window),
    function(n, t, i, r) {
        "use strict";

        function ct() {
            v = !0;
            tt()
        }

        function nt() {
            var t = f;
            v && (t = o);
            ht = e.height();
            a = e.scrollTop();
            t.each(function() {
                n.data(this, u)(v)
            });
            g != a ? (g = a, d(nt)) : w = v = !1
        }

        function tt() {
            w || (d(nt), w = !0)
        }

        function rt() {
            if (f.length) {
                if (!it) {
                    e.on("scroll" + u + " touchmove" + u, tt);
                    it = !0
                }
            } else e.off("scroll" + u + " touchmove" + u)
        }

        function ft() {
            if (o.length) {
                if (!ut) {
                    e.on(y + u, ct);
                    ut = !0
                }
            } else e.off(y + u)
        }

        function lt(t, e) {
            function tt() {
                l.attr("style", "");
                v.hide()
            }

            function it(u) {
                if (ht = !0, setTimeout(function() {
                    ht = !1
                }, 0), u) {
                    if (w = null, ut = "", l.is(":visible") && (nt = e ?
                            n(e) : l.parent(), tt(), et = l.outerWidth(),
                            g = l.outerHeight(), l.css({
                                display: "none",
                                position: k
                            }), l.css("top") == "auto" ? w = null : (l.css(
                                "display", ""), w = s(l, "top"))), d =
                        w !== null, pt !== d && (f = d ? f.add(t) : f.not(
                            t), pt = d, rt()), !d) {
                        tt();
                        return
                    }
                    l.css(c, p);
                    b = l.offset();
                    ct = s(l, h + "Top") || 0;
                    lt = s(l, h + "Left") || 0;
                    st = s(l, h + "Bottom") || 0;
                    at = s(l, h + "Right") || 0;
                    vt = nt.innerHeight();
                    yt = s(nt, ot + "Bottom")
                }
                var o = "",
                    wt = l.offset(),
                    it = a + w,
                    ft = nt.offset().top + vt - yt - g - st,
                    y = i(b.top, r(it, ft));
                if (b.top === y ? o = p : y === it ? o = "fixed" : y ===
                    ft && (o = k), ut != o || wt.left != b.left) {
                    if (ut = o, o == p) {
                        tt();
                        v.hide();
                        return
                    }
                    l.css(c, o).offset({
                        top: y,
                        left: b.left
                    }).outerWidth(et).outerHeight(g);
                    v.length || (v = n("<div>").css({
                        visibility: "hidden",
                        width: et,
                        height: g,
                        margin: [ct, at, st, lt].join("px ") +
                            "px",
                        border: 0,
                        padding: 0
                    }).insertAfter(l));
                    v.show()
                }
            }
            var l = n(t),
                ut = "",
                v = n(),
                et, g, w, ct, lt, st, at, vt, yt, b, d = !1,
                pt = !1,
                ht = !1,
                nt;
            if (!n.data(t, u)) {
                it.x = function() {
                    v && v.remove();
                    l.css(tt).off(dataname).removeData(u);
                    o = o.not(t);
                    f = f.not(t);
                    rt();
                    ft()
                };
                o = o.add(t);
                n.data(t, u, it);
                ft();
                l.on(y + u, function() {
                    ht || it(!0)
                });
                it(!0)
            }
        }

        function s(n, t) {
            var i = parseFloat(n.css(t));
            return isNaN(i) && (i = null), i
        }

        function et(n) {
            return this.each(function() {
                lt(this, n)
            }), this
        }
        var u = ".topSticky",
            h = "margin",
            c = "position",
            b = "sticky",
            ot = "padding",
            y = "resize",
            p = "static",
            k = "absolute",
            st = n('<i style="010-webkit-1"/>'.replace(/0|1/g, function(n) {
                return [c + ":", b + ";"][n]
            })).css(c).indexOf(b) > -1,
            l = "equestAnimationFrame",
            d = t["r" + l] || t["webkitR" + l] || t["mozR" + l] || t["oR" + l] ||
            function(n) {
                return setTimeout(n, 0)
            },
            e = n(t),
            ht, a, g = -1,
            f = n(),
            o = n(),
            w = !1,
            v = !1,
            it = !1,
            ut = !1;
        et.support = st;
        n.fn.stickify = et;
        n.fn.unstickify = function() {
            return this.each(function() {
                var t = n.data(this, u);
                t && t.x()
            }), this
        }
    }(jQuery, window, Math.max, Math.min);
$.fn.stickify.support || $(".js-make-sticky").stickify();
jQuery(function(n) {
    if (window.ga) {
        var i = "data-track",
            u = "data-track-submit",
            t = "data-track-zone",
            e = /(?:\?|&)lang=([^&]+)/i,
            f = "",
            r;
        try {
            r = window.sessionStorage;
            r.getItem("x")
        } catch (o) {
            r = null
        }
        n(document).on("click", "a[rel=external]", function(n) {
            n.isDefaultPrevented() || ga("send", "event",
                "External link", this.href, location.href)
        }).on("click", "a.a-binary", function(n) {
            n.isDefaultPrevented() || ga("send", "event",
                "Download", this.href, location.href)
        }).on("click", 'a[href^="mailto:"]', function(n) {
            n.isDefaultPrevented() || ga("send", "event",
                "Email", this.href, location.href)
        }).on("click", "a[" + i + "], button[" + i + "]", function() {
            ga("send", "event", "Actions", this.getAttribute(i),
                location.href)
        }).on("click", "[" + t + "] a", function(i) {
            if (r && !i.isDefaultPrevented()) {
                var u = n(this).closest("[" + t + "]").attr(t);
                r.setItem(t, JSON.stringify([Date.now(), u]))
            }
        }).on("submit", "form", function(n) {
            !n.isDefaultPrevented() && (this.hasAttribute(i) ||
                f) && ga("send", "event", "Form submission",
                this.getAttribute(i) || f, location.href)
        }).on("click", "button[" + u + "],input[type=submit][" + u +
            "],input[type=image][" + u + "]", function() {
                f = this.getAttribute(u);
                setTimeout(function() {
                    f = ""
                }, 0)
            }).on("click", '.js-track-extent, a[href*="?lang="]',
            function(i) {
                var r, u, f, o;
                i.isDefaultPrevented() || (r = "", u = n(this), u.is(
                        "input[type=submit]") ? r = u.parent().find(
                        "select").val() : u.is("a") && (r = (
                            this.search.match(e) || [])[1] ||
                        ""), f = n(this).closest("[" + t + "]")
                    .attr(t), o = f + ": " + n("html").attr(
                        "lang") + " => " + r, ga("send",
                        "event", "Extent", o, location.href))
            })
    }
});
$(function(n) {
        "use strict";

        function s() {
            return t + "-" + ++o
        }

        function a(n, t, i) {
            i === undefined && (i = n.attr("aria-expanded") === "false");
            n.attr("aria-expanded", String(i));
            n.prop("title", i ? c : h);
            t.attr("aria-expanded", String(i));
            t.attr("aria-hidden", String(!i))
        }

        function e() {
            f.scrollTop(n(location.hash).offset().top)
        }

        function v() {
            function p() {
                if (location.hash && o.find(location.hash).length)
                    return r(!0), !0
            }
            var o = n(this),
                c, i, v, h, y, r;
            if (!o.hasClass(t) && (c = o.children(), i = c.first(), i.is(
                "h2,h3,h4"))) {
                o.addClass(t);
                v = s();
                h = n('<div class="' + t + '__content" id="' + v +
                    '"/>');
                i.after(h.append(c.not(i)));
                i.addClass(t + "__heading");
                i.attr("aria-controls", v);
                i.attr("tabindex", 0);
                i.prepend('<i class="' + t +
                    '__icon" aria-hidden="true"/>');
                y = n('<a href="#" class="' + t +
                    '__close"><i class="icon-chevron-up" aria-hidden="true"/>' +
                    l + "<\/a>");
                h.append(y);
                r = a.bind(null, i, h);
                h.on("focus", function() {
                    r(!0)
                });
                i.on("click", function(n) {
                    n.isDefaultPrevented() || r()
                });
                y.on("click", function(n) {
                    n.preventDefault();
                    r(!1);
                    i[0].focus()
                });
                f.on("hashchange", function() {
                    p() && e()
                });
                if (p(o)) {
                    u = !0;
                    return
                }
                r(!1)
            }
        }
        var o = 0,
            u = !1,
            t = "revealable",
            i = window,
            f = n(i),
            r = i.cab && i.cab.translate,
            h = r("Expand section"),
            c = r("Hide section"),
            l = r("Close");
        n("section.js-" + t).each(v);
        u && e()
    }),
    function(n, t) {
        var i;
        n.noConflict();
        i = t.$;
        i && (q = i.q) && q.length && n.each(q, function(t, i) {
            n(i)
        });
        t.$ = n
    }(jQuery, window);
jQuery(function(n) {
    function r(n) {
        n.children("ul").slideDown(200, function() {
            n.addClass(t)
        })
    }

    function i(n) {
        n.children("ul").slideUp(200, function() {
            n.removeClass(t)
        })
    }
    var t = "-open";
    n("#beta-dap-menu-accordion li.has-sub>a").on("click", function() {
        var u = n(this).parent("li");
        u.hasClass(t) ? (ga("send", "event", "Accordion",
                location.href, "Close: " + n(this).text()),
            i(u)) : (ga("send", "event", "Accordion",
                location.href, "Open: " + n(this).text()),
            r(u), u.siblings("li").each(function() {
                i(n(this))
            }))
    })
})
﻿/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.1.0/LICENSE
 */
(function(t,e){"use strict";if(typeof define==="function"&&define.amd){define(e)}else if(typeof exports==="object"){module.exports=e()}else{t.returnExports=e()}})(this,function(){var t=Array.prototype;var e=Object.prototype;var r=Function.prototype;var n=String.prototype;var i=Number.prototype;var a=t.slice;var o=t.splice;var u=t.push;var l=t.unshift;var f=r.call;var s=e.toString;var c=Array.isArray||function ye(t){return s.call(t)==="[object Array]"};var p=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var h;var v=Function.prototype.toString,g=function de(t){try{v.call(t);return true}catch(e){return false}},y="[object Function]",d="[object GeneratorFunction]";h=function me(t){if(typeof t!=="function"){return false}if(p){return g(t)}var e=s.call(t);return e===y||e===d};var m;var b=RegExp.prototype.exec,w=function be(t){try{b.call(t);return true}catch(e){return false}},T="[object RegExp]";m=function we(t){if(typeof t!=="object"){return false}return p?w(t):s.call(t)===T};var x;var O=String.prototype.valueOf,j=function Te(t){try{O.call(t);return true}catch(e){return false}},S="[object String]";x=function xe(t){if(typeof t==="string"){return true}if(typeof t!=="object"){return false}return p?j(t):s.call(t)===S};var E=function Oe(t){var e=s.call(t);var r=e==="[object Arguments]";if(!r){r=!c(t)&&t!==null&&typeof t==="object"&&typeof t.length==="number"&&t.length>=0&&h(t.callee)}return r};var N=function(t){var e=Object.defineProperty&&function(){try{Object.defineProperty({},"x",{});return true}catch(t){return false}}();var r;if(e){r=function(t,e,r,n){if(!n&&e in t){return}Object.defineProperty(t,e,{configurable:true,enumerable:false,writable:true,value:r})}}else{r=function(t,e,r,n){if(!n&&e in t){return}t[e]=r}}return function n(e,i,a){for(var o in i){if(t.call(i,o)){r(e,o,i[o],a)}}}}(e.hasOwnProperty);function I(t){var e=typeof t;return t===null||e==="undefined"||e==="boolean"||e==="number"||e==="string"}var D={ToInteger:function je(t){var e=+t;if(e!==e){e=0}else if(e!==0&&e!==1/0&&e!==-(1/0)){e=(e>0||-1)*Math.floor(Math.abs(e))}return e},ToPrimitive:function Se(t){var e,r,n;if(I(t)){return t}r=t.valueOf;if(h(r)){e=r.call(t);if(I(e)){return e}}n=t.toString;if(h(n)){e=n.call(t);if(I(e)){return e}}throw new TypeError},ToObject:function(t){if(t==null){throw new TypeError("can't convert "+t+" to object")}return Object(t)},ToUint32:function Ee(t){return t>>>0}};var M=function Ne(){};N(r,{bind:function Ie(t){var e=this;if(!h(e)){throw new TypeError("Function.prototype.bind called on incompatible "+e)}var r=a.call(arguments,1);var n;var i=function(){if(this instanceof n){var i=e.apply(this,r.concat(a.call(arguments)));if(Object(i)===i){return i}return this}else{return e.apply(t,r.concat(a.call(arguments)))}};var o=Math.max(0,e.length-r.length);var u=[];for(var l=0;l<o;l++){u.push("$"+l)}n=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this, arguments); }")(i);if(e.prototype){M.prototype=e.prototype;n.prototype=new M;M.prototype=null}return n}});var F=f.bind(e.hasOwnProperty);var R=function(){var t=[1,2];var e=t.splice();return t.length===2&&c(e)&&e.length===0}();N(t,{splice:function De(t,e){if(arguments.length===0){return[]}else{return o.apply(this,arguments)}}},!R);var U=function(){var e={};t.splice.call(e,0,0,1);return e.length===1}();N(t,{splice:function Me(t,e){if(arguments.length===0){return[]}var r=arguments;this.length=Math.max(D.ToInteger(this.length),0);if(arguments.length>0&&typeof e!=="number"){r=a.call(arguments);if(r.length<2){r.push(this.length-t)}else{r[1]=D.ToInteger(e)}}return o.apply(this,r)}},!U);var k=[].unshift(0)!==1;N(t,{unshift:function(){l.apply(this,arguments);return this.length}},k);N(Array,{isArray:c});var A=Object("a");var C=A[0]!=="a"||!(0 in A);var P=function Fe(t){var e=true;var r=true;if(t){t.call("foo",function(t,r,n){if(typeof n!=="object"){e=false}});t.call([1],function(){"use strict";r=typeof this==="string"},"x")}return!!t&&e&&r};N(t,{forEach:function Re(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=arguments[1],i=-1,a=r.length>>>0;if(!h(t)){throw new TypeError}while(++i<a){if(i in r){t.call(n,r[i],i,e)}}}},!P(t.forEach));N(t,{map:function Ue(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=r.length>>>0,i=Array(n),a=arguments[1];if(!h(t)){throw new TypeError(t+" is not a function")}for(var o=0;o<n;o++){if(o in r){i[o]=t.call(a,r[o],o,e)}}return i}},!P(t.map));N(t,{filter:function ke(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=r.length>>>0,i=[],a,o=arguments[1];if(!h(t)){throw new TypeError(t+" is not a function")}for(var u=0;u<n;u++){if(u in r){a=r[u];if(t.call(o,a,u,e)){i.push(a)}}}return i}},!P(t.filter));N(t,{every:function Ae(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=r.length>>>0,i=arguments[1];if(!h(t)){throw new TypeError(t+" is not a function")}for(var a=0;a<n;a++){if(a in r&&!t.call(i,r[a],a,e)){return false}}return true}},!P(t.every));N(t,{some:function Ce(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=r.length>>>0,i=arguments[1];if(!h(t)){throw new TypeError(t+" is not a function")}for(var a=0;a<n;a++){if(a in r&&t.call(i,r[a],a,e)){return true}}return false}},!P(t.some));var Z=false;if(t.reduce){Z=typeof t.reduce.call("es5",function(t,e,r,n){return n})==="object"}N(t,{reduce:function Pe(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=r.length>>>0;if(!h(t)){throw new TypeError(t+" is not a function")}if(!n&&arguments.length===1){throw new TypeError("reduce of empty array with no initial value")}var i=0;var a;if(arguments.length>=2){a=arguments[1]}else{do{if(i in r){a=r[i++];break}if(++i>=n){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;i<n;i++){if(i in r){a=t.call(void 0,a,r[i],i,e)}}return a}},!Z);var J=false;if(t.reduceRight){J=typeof t.reduceRight.call("es5",function(t,e,r,n){return n})==="object"}N(t,{reduceRight:function Ze(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=r.length>>>0;if(!h(t)){throw new TypeError(t+" is not a function")}if(!n&&arguments.length===1){throw new TypeError("reduceRight of empty array with no initial value")}var i,a=n-1;if(arguments.length>=2){i=arguments[1]}else{do{if(a in r){i=r[a--];break}if(--a<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}if(a<0){return i}do{if(a in r){i=t.call(void 0,i,r[a],a,e)}}while(a--);return i}},!J);var z=Array.prototype.indexOf&&[0,1].indexOf(1,2)!==-1;N(t,{indexOf:function Je(t){var e=C&&x(this)?this.split(""):D.ToObject(this),r=e.length>>>0;if(!r){return-1}var n=0;if(arguments.length>1){n=D.ToInteger(arguments[1])}n=n>=0?n:Math.max(0,r+n);for(;n<r;n++){if(n in e&&e[n]===t){return n}}return-1}},z);var $=Array.prototype.lastIndexOf&&[0,1].lastIndexOf(0,-3)!==-1;N(t,{lastIndexOf:function ze(t){var e=C&&x(this)?this.split(""):D.ToObject(this),r=e.length>>>0;if(!r){return-1}var n=r-1;if(arguments.length>1){n=Math.min(n,D.ToInteger(arguments[1]))}n=n>=0?n:r-Math.abs(n);for(;n>=0;n--){if(n in e&&t===e[n]){return n}}return-1}},$);var B=!{toString:null}.propertyIsEnumerable("toString"),G=function(){}.propertyIsEnumerable("prototype"),H=!F("x","0"),L=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],X=L.length;N(Object,{keys:function $e(t){var e=h(t),r=E(t),n=t!==null&&typeof t==="object",i=n&&x(t);if(!n&&!e&&!r){throw new TypeError("Object.keys called on a non-object")}var a=[];var o=G&&e;if(i&&H||r){for(var u=0;u<t.length;++u){a.push(String(u))}}if(!r){for(var l in t){if(!(o&&l==="prototype")&&F(t,l)){a.push(String(l))}}}if(B){var f=t.constructor,s=f&&f.prototype===t;for(var c=0;c<X;c++){var p=L[c];if(!(s&&p==="constructor")&&F(t,p)){a.push(p)}}}return a}});var Y=Object.keys&&function(){return Object.keys(arguments).length===2}(1,2);var q=Object.keys;N(Object,{keys:function Be(e){if(E(e)){return q(t.slice.call(e))}else{return q(e)}}},!Y);var K=-621987552e5;var Q="-000001";var V=Date.prototype.toISOString&&new Date(K).toISOString().indexOf(Q)===-1;N(Date.prototype,{toISOString:function Ge(){var t,e,r,n,i;if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")}n=this.getUTCFullYear();i=this.getUTCMonth();n+=Math.floor(i/12);i=(i%12+12)%12;t=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];n=(n<0?"-":n>9999?"+":"")+("00000"+Math.abs(n)).slice(0<=n&&n<=9999?-4:-6);e=t.length;while(e--){r=t[e];if(r<10){t[e]="0"+r}}return n+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}},V);var W=false;try{W=Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(K).toJSON().indexOf(Q)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(_){}if(!W){Date.prototype.toJSON=function He(t){var e=Object(this),r=D.ToPrimitive(e),n;if(typeof r==="number"&&!isFinite(r)){return null}n=e.toISOString;if(typeof n!=="function"){throw new TypeError("toISOString property is not callable")}return n.call(e)}}var te=Date.parse("+033658-09-27T01:46:40.000Z")===1e15;var ee=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"));var re=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(!Date.parse||re||ee||!te){Date=function(t){function e(r,n,i,a,o,u,l){var f=arguments.length;if(this instanceof t){var s=f===1&&String(r)===r?new t(e.parse(r)):f>=7?new t(r,n,i,a,o,u,l):f>=6?new t(r,n,i,a,o,u):f>=5?new t(r,n,i,a,o):f>=4?new t(r,n,i,a):f>=3?new t(r,n,i):f>=2?new t(r,n):f>=1?new t(r):new t;s.constructor=e;return s}return t.apply(this,arguments)}var r=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:(\\.\\d{1,}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");var n=[0,31,59,90,120,151,181,212,243,273,304,334,365];function i(t,e){var r=e>1?1:0;return n[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)}function a(e){return Number(new t(1970,0,1,0,0,0,e))}for(var o in t){e[o]=t[o]}e.now=t.now;e.UTC=t.UTC;e.prototype=t.prototype;e.prototype.constructor=e;e.parse=function u(e){var n=r.exec(e);if(n){var o=Number(n[1]),u=Number(n[2]||1)-1,l=Number(n[3]||1)-1,f=Number(n[4]||0),s=Number(n[5]||0),c=Number(n[6]||0),p=Math.floor(Number(n[7]||0)*1e3),h=Boolean(n[4]&&!n[8]),v=n[9]==="-"?1:-1,g=Number(n[10]||0),y=Number(n[11]||0),d;if(f<(s>0||c>0||p>0?24:25)&&s<60&&c<60&&p<1e3&&u>-1&&u<12&&g<24&&y<60&&l>-1&&l<i(o,u+1)-i(o,u)){d=((i(o,u)+l)*24+f+g*v)*60;d=((d+s+y*v)*60+c)*1e3+p;if(h){d=a(d)}if(-864e13<=d&&d<=864e13){return d}}return NaN}return t.parse.apply(this,arguments)};return e}(Date)}if(!Date.now){Date.now=function Le(){return(new Date).getTime()}}var ne=i.toFixed&&(8e-5.toFixed(3)!=="0.000"||.9.toFixed(0)!=="1"||1.255.toFixed(2)!=="1.25"||0xde0b6b3a7640080.toFixed(0)!=="1000000000000000128");var ie={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function Xe(t,e){var r=-1;while(++r<ie.size){e+=t*ie.data[r];ie.data[r]=e%ie.base;e=Math.floor(e/ie.base)}},divide:function Ye(t){var e=ie.size,r=0;while(--e>=0){r+=ie.data[e];ie.data[e]=Math.floor(r/t);r=r%t*ie.base}},numToString:function qe(){var t=ie.size;var e="";while(--t>=0){if(e!==""||t===0||ie.data[t]!==0){var r=String(ie.data[t]);if(e===""){e=r}else{e+="0000000".slice(0,7-r.length)+r}}}return e},pow:function Ke(t,e,r){return e===0?r:e%2===1?Ke(t,e-1,r*t):Ke(t*t,e/2,r)},log:function Qe(t){var e=0;while(t>=4096){e+=12;t/=4096}while(t>=2){e+=1;t/=2}return e}};N(i,{toFixed:function Ve(t){var e,r,n,i,a,o,u,l;e=Number(t);e=e!==e?0:Math.floor(e);if(e<0||e>20){throw new RangeError("Number.toFixed called with invalid number of decimals")}r=Number(this);if(r!==r){return"NaN"}if(r<=-1e21||r>=1e21){return String(r)}n="";if(r<0){n="-";r=-r}i="0";if(r>1e-21){a=ie.log(r*ie.pow(2,69,1))-69;o=a<0?r*ie.pow(2,-a,1):r/ie.pow(2,a,1);o*=4503599627370496;a=52-a;if(a>0){ie.multiply(0,o);u=e;while(u>=7){ie.multiply(1e7,0);u-=7}ie.multiply(ie.pow(10,u,1),0);u=a-1;while(u>=23){ie.divide(1<<23);u-=23}ie.divide(1<<u);ie.multiply(1,1);ie.divide(2);i=ie.numToString()}else{ie.multiply(0,o);ie.multiply(1<<-a,0);i=ie.numToString()+"0.00000000000000000000".slice(2,2+e)}}if(e>0){l=i.length;if(l<=e){i=n+"0.0000000000000000000".slice(0,e-l+2)+i}else{i=n+i.slice(0,l-e)+"."+i.slice(l-e)}}else{i=n+i}return i}},ne);var ae=n.split;if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1){(function(){var t=typeof/()??/.exec("")[1]==="undefined";n.split=function(e,r){var n=this;if(typeof e==="undefined"&&r===0){return[]}if(!m(e)){return ae.call(this,e,r)}var i=[],a=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":""),o=0,l,f,s,c;e=new RegExp(e.source,a+"g");n+="";if(!t){l=new RegExp("^"+e.source+"$(?!\\s)",a)}r=typeof r==="undefined"?-1>>>0:D.ToUint32(r);f=e.exec(n);while(f){s=f.index+f[0].length;if(s>o){i.push(n.slice(o,f.index));if(!t&&f.length>1){f[0].replace(l,function(){for(var t=1;t<arguments.length-2;t++){if(typeof arguments[t]==="undefined"){f[t]=void 0}}})}if(f.length>1&&f.index<n.length){u.apply(i,f.slice(1))}c=f[0].length;o=s;if(i.length>=r){break}}if(e.lastIndex===f.index){e.lastIndex++}f=e.exec(n)}if(o===n.length){if(c||!e.test("")){i.push("")}}else{i.push(n.slice(o))}return i.length>r?i.slice(0,r):i}})()}else if("0".split(void 0,0).length){n.split=function We(t,e){if(typeof t==="undefined"&&e===0){return[]}return ae.call(this,t,e)}}var oe=n.replace;var ue=function(){var t=[];"x".replace(/x(.)?/g,function(e,r){t.push(r)});return t.length===1&&typeof t[0]==="undefined"}();if(!ue){n.replace=function _e(t,e){var r=h(e);var n=m(t)&&/\)[*?]/.test(t.source);if(!r||!n){return oe.call(this,t,e)}else{var i=function(r){var n=arguments.length;var i=t.lastIndex;t.lastIndex=0;var a=t.exec(r)||[];t.lastIndex=i;a.push(arguments[n-2],arguments[n-1]);return e.apply(this,a)};return oe.call(this,t,i)}}}var le=n.substr;var fe="".substr&&"0b".substr(-1)!=="b";N(n,{substr:function tr(t,e){return le.call(this,t<0?(t=this.length+t)<0?0:t:t,e)}},fe);var se="	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";var ce="\u200b";var pe="["+se+"]";var he=new RegExp("^"+pe+pe+"*");var ve=new RegExp(pe+pe+"*$");var ge=n.trim&&(se.trim()||!ce.trim());N(n,{trim:function er(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}return String(this).replace(he,"").replace(ve,"")}},ge);if(parseInt(se+"08")!==8||parseInt(se+"0x16")!==22){parseInt=function(t){var e=/^0[xX]/;return function r(n,i){n=String(n).trim();if(!Number(i)){i=e.test(n)?16:10}return t(n,i)}}(parseInt)}});

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

/**
 *  Additional tracking for Google Analytics
 *  Note that the classes and rel are set in LinkHTMLRewriter script
 */
jQuery(function ($) {

    if (!window.ga) {
        return;
    }

    var TRACKEVENT = 'data-track';
    var TRACKSUBMIT = 'data-track-submit';
    var TRACKCLICKZONE = 'data-track-zone';
    var rExtent = /(?:\?|&)lang=([^&]+)/i;

    var trackForm = '';

    // See if sessionStorage is supported
    // This can throw errors in some browsers
    var sessionStorage;
    try {
        sessionStorage = window.sessionStorage;
        sessionStorage.getItem('x');
    } catch (e) {
        sessionStorage = null;
    }

    $(document)
		// Track external links, emails and downloads
		.on('click', 'a[rel=external]', function (e) {
		    if (!e.isDefaultPrevented()) {
		        ga('send', 'event', 'External link', this.href, location.href);
		    }
		})
		// Track downloads
		.on('click', 'a.a-binary', function (e) {
		    if (!e.isDefaultPrevented()) {
		        ga('send', 'event', 'Download', this.href, location.href);
		    }
		})
		// Track emails
		.on('click', 'a[href^="mailto:"]', function (e) {
		    if (!e.isDefaultPrevented()) {
		        ga('send', 'event', 'Email', this.href, location.href);
		    }
		})
		// Track the usage of features - tracked regardless of whether the default action is prevented
		.on('click', 'a[' + TRACKEVENT + '], button[' + TRACKEVENT + ']', function () {
		    ga('send', 'event', 'Actions', this.getAttribute(TRACKEVENT), location.href);
		})
		// Track how users are navigating though the site
		.on('click', '[' + TRACKCLICKZONE + '] a', function (e) {
		    if (!sessionStorage || e.isDefaultPrevented()) {
		        return;
		    }
		    var value = $(this).closest('[' + TRACKCLICKZONE + ']').attr(TRACKCLICKZONE);
		    sessionStorage.setItem(TRACKCLICKZONE, JSON.stringify([Date.now(), value]))
		})
        // Track successful forms submissions
		.on('submit', 'form', function (e) {
		    // If a form is successfully submitted, see if the either the form has a track attibute, or the button that submitted it does
		    if (!e.isDefaultPrevented() && (this.hasAttribute(TRACKEVENT) || trackForm)) {
		        ga('send', 'event', 'Form submission', this.getAttribute(TRACKEVENT) || trackForm, location.href);
		    }
		})
        .on('click', 'button[' + TRACKSUBMIT + '],input[type=submit][' + TRACKSUBMIT + '],input[type=image][' + TRACKSUBMIT + ']', function (e) {
            // If a track form button is pressed save the attribute value for this tick of the event loop
            trackForm = this.getAttribute(TRACKSUBMIT);
            setTimeout(function () {
                // Clear the track value
                trackForm = '';
            }, 0);
        })
        // Track extent changing
        .on('click', '.js-track-extent, a[href*="?lang="]', function (e) {

            if (e.isDefaultPrevented()) {
                return;
            }

            var target = '';
            var $this = $(this);
            if ($this.is('input[type=submit]')) {
                // The form version
                target = $this.parent().find('select').val();
            } else if ($this.is('a')) {
                // A link
                target = (this.search.match(rExtent) || [])[1] || '';
            }
            var zone = $(this).closest('[' + TRACKCLICKZONE + ']').attr(TRACKCLICKZONE);
            // The current extent is in the lang attribute of html
            var action = zone + ': ' + $('html').attr('lang') + ' => ' + target;
            ga('send', 'event', 'Extent', action, location.href);
        });

    // Track if a user spends 15s on a page that is visible
    (function() {
        // Time until we want to record (30 seconds)
        var readingTime = 30 * 1000;
        // Our timeout
        var timeout = null;
        // Have we recorded
        var recorded = false;

        function recordReading() {
            // Non-interactive
            ga('send', 'event', 'reading', (readingTime / 1000) + 's', {
                nonInteraction: true
            });
            recorded = true;
            timeout = null;
        }

        function setup() {

            // If we've already recorded don't record again
            if (recorded) {
                return;
            }

            // Assume the page is visible if the browser doesn't support visibilty
            var hidden = 'hidden' in document ? document.hidden : false;
            if (!hidden) {
                timeout = setTimeout(recordReading, readingTime);
            } else if (timeout !== null) {
                // Clear the timer
                clearTimeout(timeout);
                timeout = null;
            }
        }

        if ('addEventListener' in document) {
            // Clear or add the timer based on the page visibilty
            document.addEventListener('visibilitychange', setup, false);
        }

        setup();

    }());

});
/**
 *  @fileoverview
 *
 *  Scripts to go directly into the <head> element
 *  These should be very small and therefore they should not be included as a file, but as inline JS
 *  
 *  This script needs minfiying before being added to the <head>
 */

( function (document, window ) {

    /**
     *	Update the no-js class to js
     */
    var html = document.documentElement;
    html.className = html.className.replace(/\bno-js\b/, 'js');

    /**
     *	Creates a dummy version of $
     *	Any functions add will be queued to run after jQuery is built and ready
     */
    window.$ = function (fn) {
        var q = window.$.q = window.$.q || [];
        q.push(fn);
        if (typeof fn !== 'function') {
            throw new Error('jQuery not yet loaded');
        }
    };

    /**
     *	Cookie banner
     */
    if (/\beprivacy=3(;|$)/i.test(document.cookie)) {
        html.className += ' hide-cookie-monster';
    }

    /**
     *  Are (session) cookies accepted
     */
    document.cookie = 'z=1; path=/';
    if (/(?:^| )z=1(?:;|$)/.test(document.cookie)) {
        document.cookie = 'z=; expires=' + new Date(0).toUTCString() + '; path=/';
    } else {
        html.className = html.className += ' no-cookies';
    }

}( document, window ));

/**
 *  @fileoverview
 *
 *  Scripts to go directly into the head element
 *  These should be very small and therefore they should not be included as a file, but as inline JS
 *
 *  @author Daniel Lewis
 */

(function (document, window ) {

    /**
     *	Update the no-js class to js
     */
    var html = document.documentElement;
    html.className = html.className.replace(/\bno-js\b/, 'js');

    /**
     *	Creates a dummy version of $
     *	Any functions add will be queued to run after jQuery is built and ready
     */
    window.$ = function (fn) {
        var q = window.$.q = window.$.q || [];
        q.push(fn);
        if (typeof fn !== 'function') {
            throw new Error('jQuery not yet loaded');
        }
    };

    /**
     *	Cookie banner
     */
    if (/\beprivacy=3(;|$)/i.test(document.cookie)) {
        html.className += ' hide-cookie-monster';
    }

    /**
     *  Are (session) cookies accepted
     */
    document.cookie = 'z=1; path=/';
    if (/(?:^| )z=1(?:;|$)/.test(document.cookie)) {
        document.cookie = 'z=; expires=' + new Date(0).toUTCString() + '; path=/';
    } else {
        html.className = html.className += ' no-cookies';
    }

    /**
     *  Do we need to load any polyfills
     *  See http://kangax.github.io/compat-table/es5/
     *  If the browser doesn't support bind we will load them all
     *  We are not supporting IE7
     */
    if (!$.bind) {
        // We were using an escaped character for the closing script
        // but Ugligy JS was minifying it
        // Use the replace instead
        document.write('<script src="/static/build/js/polyfills.js"><~script>'.replace('~','/'));
    }

}(document, window ));




/**
* @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=y.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=y.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),y.elements=c+" "+a,j(b)}function f(a){var b=x[a[v]];return b||(b={},w++,a[v]=w,x[w]=b),b}function g(a,c,d){if(c||(c=b),q)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():u.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||t.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),q)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return y.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(y,b.frag)}function j(a){a||(a=b);var d=f(a);return!y.shivCSS||p||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),q||i(a,d),a}function k(a){for(var b,c=a.getElementsByTagName("*"),e=c.length,f=RegExp("^(?:"+d().join("|")+")$","i"),g=[];e--;)b=c[e],f.test(b.nodeName)&&g.push(b.applyElement(l(b)));return g}function l(a){for(var b,c=a.attributes,d=c.length,e=a.ownerDocument.createElement(A+":"+a.nodeName);d--;)b=c[d],b.specified&&e.setAttribute(b.nodeName,b.nodeValue);return e.style.cssText=a.style.cssText,e}function m(a){for(var b,c=a.split("{"),e=c.length,f=RegExp("(^|[\\s,>+~])("+d().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),g="$1"+A+"\\:$2";e--;)b=c[e]=c[e].split("}"),b[b.length-1]=b[b.length-1].replace(f,g),c[e]=b.join("}");return c.join("{")}function n(a){for(var b=a.length;b--;)a[b].removeNode()}function o(a){function b(){clearTimeout(g._removeSheetTimer),d&&d.removeNode(!0),d=null}var d,e,g=f(a),h=a.namespaces,i=a.parentWindow;return!B||a.printShived?a:("undefined"==typeof h[A]&&h.add(A),i.attachEvent("onbeforeprint",function(){b();for(var f,g,h,i=a.styleSheets,j=[],l=i.length,n=Array(l);l--;)n[l]=i[l];for(;h=n.pop();)if(!h.disabled&&z.test(h.media)){try{f=h.imports,g=f.length}catch(o){g=0}for(l=0;g>l;l++)n.push(f[l]);try{j.push(h.cssText)}catch(o){}}j=m(j.reverse().join("")),e=k(a),d=c(a,j)}),i.attachEvent("onafterprint",function(){n(e),clearTimeout(g._removeSheetTimer),g._removeSheetTimer=setTimeout(b,500)}),a.printShived=!0,a)}var p,q,r="3.7.2",s=a.html5||{},t=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",w=0,x={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",p="hidden"in a,q=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){p=!0,q=!0}}();var y={elements:s.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:r,shivCSS:s.shivCSS!==!1,supportsUnknownElements:q,shivMethods:s.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=y,j(b);var z=/^$|\b(?:all|print)\b/,A="html5shiv",B=!q&&function(){var c=b.documentElement;return!("undefined"==typeof b.namespaces||"undefined"==typeof b.parentWindow||"undefined"==typeof c.applyElement||"undefined"==typeof c.removeNode||"undefined"==typeof a.attachEvent)}();y.type+=" print",y.shivPrint=o,o(b)}(this,document);
/* This creates a dummy $ variable to prevent script errors in IE7 */
if (!window.$) {
    window.$ = function () { }
}

/**
 *  jQuery.loadScript
 *  Simple script loader
 *  Unlike jQuery.getScript() this loads the script using a script tag. Advantages:
 *	  - it makes debugging easier. 
 *	  - might result in better caching in some browsers (maybe?)
 *	  - no same origin issues
 *	  - works for sites using local files
 *
 *	jQuery.loadScript( url [, successCallback] )
 *		url: The url of the script
 *		successCallback: Function to run when the script is loaded
 *
 *	Returns a promise object
 *
 *	Use then for serial loading eg $.loadScript('url1').then( $.loadScript('url2') ).done(fn)
 *	Use jQuery.when for parallel loading
 *
 *	More information:
 *	  - http://dustindiaz.com/scriptjs
 *	  - http://www.nczonline.net/blog/2009/06/23/loading-javascript-without-blocking/
 *	  - http://stackoverflow.com/questions/1929742/can-script-readystate-be-trusted-to-detect-the-end-of-dynamic-script-loading
 */
(function ($, document) {
    var deferrerdMap = {};

    function loadScript(url) {
        var loaded;
        var deferred = deferrerdMap[url] = $.Deferred();
        var script = $('<script/>')[0];
        var target = $('script')[0];

        script.onload = script.onreadystatechange = function () {
            var temp;
            if (((temp = script.readyState) && temp !== "complete" && temp !== "loaded") || loaded) {
                return;
            }
            deferred.resolve();
        };

        script.onerror = function () {
            deferred.reject();
            // This doesn't work in all browsers
            // See http://www.quirksmode.org/dom/events/error.html
            // And http://stackoverflow.com/questions/2027849/how-to-trigger-script-onerror-in-internet-explorer/2032014#2032014
            // Also it doesn't work for the file protocol - presumably for security reasons
        }

        deferred.always(function () {
            loaded = true;
            script.onload = script.onreadystatechange = script.onerror = null;
        });

        script.async = true;
        script.src = url;

        target.parentNode.insertBefore(script, target);

        return deferred;
    }

    /**
	 *	@param {String|Array} url The url.  Will also accept Deferred or promise objects for parallel loading
	 *	@param {Function} [callback] Optional callback.  The script returns a promise so
	 */
    $.loadScriptTag = function (url, callback) {
        var deferred = deferrerdMap[url] || loadScript(url);
        if (callback) {
            deferred.done(callback);
        }
        return deferred.promise();
    }

}(jQuery, document));
/* jshint undef:true, jquery:true, browser: true */

/**
 *	jQuery plugin to create a dialog
 *
 *	This supports modal and non-modal dialogs
 *	Dialogs are stacked in creation order or modal order
 *	
 *	Dialogs are not moveable or resizable	
 *
 *	@requires jQuery
 *	@requires Function.prototype.bind
 *	@requires Array.prototype.forEach
 *	@requires Array.prototype.indexOf
 */
(function ($, window) {

    "use strict";

    var $window = $(window);

    // Sets the CSS namespace and the event namespace
    var namespace = 'dialog';

    // Ordering stack for modal dialogs
    var stack = [];
    // Counter for generating IDs
    var counter = 0;
    // Are the global keypress and click events setup
    var hasGlobalEvents = false;
    // Has the browser been setup and tested
    var isSetup = false;
    // Reference to the mask
    var $mask = null;

    var supportsFixed = true;
    var supportsFlexBox = true;
    var supportsTransform = false;
    var supportsResizingScrollableChildren = true;

    // Micro templater
    // Replaces '{name}' with the value from data
    function templater(str, data) {
        return str.replace(/\{([^}]+)\}/g, function (m, name) {
            return data[name] || '';
        });
    }

    // Initial setup.  Create the modal dialog mask and run any feature tests
    function setup() {

        if (isSetup) {
            return;
        }

        $mask = $('<div class="' + namespace + '__mask">')
			.hide()
			.appendTo('body');

        var $test = $('<div class="' + namespace + '" style="max-height:0;height:auto;"><p class="' + namespace + '__main" style="height:100px;color:red;padding:0;border:0;"></p></div>').appendTo('body');
        supportsFixed = $test.css('position') === 'fixed';
        supportsFlexBox = $test.css('display').indexOf('flex') > -1;

        // The dialog is centred using transform. This tests this this works. 
        // If it succeeds the test element will be right of the centre
        // If it fails the test element left edge will be left of the centre
        // Use + 1 to avoid rounding errors
        supportsTransform = $test.offset().left + 1 < $window.width() / 2;

        // In IE, if a flex container contains a child with "overflow-y: auto",
        // the child content overflows the container
        // This is partly fixed in IE11, where this only happens if the the container
        // has no explict height
        // This tests for this
        supportsResizingScrollableChildren = $test.find('.' + namespace + '__main').height() === 0;
        $test.remove();
        isSetup = true;
    }

    /**
	 * Find the top modal dialog and recover from a missing dialog
	 */
    function getTopModalDialog() {
        var dialog = stack.slice(-1)[0];
        if (!dialog) {
            // Something has gone wrong - recover gracefully
            hideModal();
            return null;
        }
        if (!dialog.$dialog.is(':visible')) {
            // Again, this shouldn't happen, ignore this one and get the next
            stack.pop();
            return getTopModalDialog();
        }

        return dialog;
    }

    /**
	 *	Check if the top dialog contains the focus and if it doesn't force it to.
	 */
    function checkFocus(e) {

        var dialog = getTopModalDialog();
        if (!dialog) {
            return;
        }

        var el = dialog.$dialog[0];
        var target = e.target;

        if (target !== el && !$.contains(el, target)) {
            dialog._focus(true);
        }

    }

    // Find all focusable elements in $el
    // (Image-maps are complicated and ignored)
    function getFocusable($el) {

        return $el
			.find('a[href],input,select,textarea,button,object,[tabindex]')
			.not(':disabled')
			.filter(':visible');

    }

    // Setup events to run if there is a modal dialog
    function setupGlobalEvents() {

        if (hasGlobalEvents) {
            return;
        }

        // Needs to be document for IE8
        $(document)
			.on('keydown.' + namespace, function (e) {
			    // Close the top dialog using the escape key
			    if (!e.isDefaultPrevented() && e.keyCode === 27) {
			        e.preventDefault();
			        var dialog = getTopModalDialog();
			        if (!dialog) {
			            return;
			        }
			        dialog.close();
			    }
			});

        $('body')
			.on('focusin.' + namespace, function (e) {
			    // Keep the focus in the top dialog
			    // All sorts of problems happen if you don't do this on a timeout
			    setTimeout(function () {
			        checkFocus(e);
			    }, 0);
			});

        hasGlobalEvents = true;

    }

    // Remove the global events
    function removeGlobalEvents() {
        $('body').add(document).off('.' + namespace);
        hasGlobalEvents = false;
    }

    // Update the stack and show the mask for a modal dialog
    function showModal(dialog) {

        // Remove the dialog from the stack if present
        var index = stack.indexOf(dialog);
        if (index !== -1) {
            stack.splice(index, 1);
        }

        // Add to the top of the stack
        stack.push(dialog);
        setupGlobalEvents();
        zIndex();
        $mask.show();

    }

    // Hide a modal dialog
    function hideModal(dialog) {

        var index = stack.indexOf(dialog);
        if (index > -1) {
            stack.splice(index, 1);
        }
        if (!stack.length) {
            $mask.hide();
            removeGlobalEvents();
        } else {
            zIndex();
        }
    }

    // Set the z-indexes on the dialogs
    function zIndex() {

        var index = 0;
        var topIndex = stack.length - 1;
        stack.forEach(function (item, i) {
            var $dialog = item.$dialog;
            if (!index) {
                // Reset the z index
                $dialog.css('z-index', '');
                // Get the default
                index = parseInt($dialog.css('z-index'), 10) || 1;
            }
            // Add the index
            if (i === topIndex) {
                $mask.css('z-index', ++index);
            }

            $dialog.css('z-index', ++index);
        });
    }

    /**
	 *	Create a new dialogue and appends it to the document
	 *	@param {Object} options
	 *	@param {String} [options.title]
	 *	@param {Boolean} [options.content]
	 *	@param {Boolean} [options.footer]
	 *	@param {Boolean} [options.className]
	 *	@param {Boolean} [options.destroyOnClose]
	 *	@param {Boolean} [options.form] Wraps the dialog contents in a form
	 */
    function Dialog(options) {

        if (!(this instanceof Dialog)) {
            return new Dialog(options);
        }

        setup();
        this._id = ++counter;
        this.returnValue = '';

        this._create(options);

    }

    var proto = {

        /**
		 *	Show the dialog
		 */
        show: function () {

            this.$dialog.show();
            this._position();
            this.openedBy = document.activeElement;
            this._focus();
            $window.on('resize.' + namespace + ':' + this._id, this._position.bind(this));
        },

        /**
		 *	Show the dialog as a modal dialog
		 */
        showModal: function () {

            showModal(this);
            this.show();
        },

        /**
		 *	Close the dialog
		 */
        close: function (ret) {

            var $dialog = this.$dialog;

            if (!$dialog.is(':visible')) {
                return;
            }

            this.returnValue = String(ret);
            $dialog.hide();
            hideModal(this);

            $window.off('resize.' + namespace + ':' + this._id);

            // Return focus to the openning element
            if (this.openedBy) {
                this.openedBy.focus();
            }

            var event = $.Event('close');
            $dialog.trigger(event);
        },

        /**
		 *	Destroy a dialog.  Completely remove it from the DOM
		 */
        destroy: function () {
            this.close();
            this.$dialog.remove();
        },

        /**
		 *	Adds an event to the dialog	element
		 */
        on: function () {
            var $dialog = this.$dialog;
            $dialog.on.apply($dialog, arguments);
            return this;
        },

        /**
		 *	Create the dialog
		 */
        _create: function (options) {

            options = options || {};
            var className = [
				namespace,
				options.className || '',
				supportsFixed ? '' : namespace + '--absolute'
            ].join(' ');

            var html = templater(("<{nodeName} class=\"{className}\" role=\"{role}\" aria-labelledby=\"{ns}-{count}-label\" aria-describedby=\"{ns}-{count}-main\" tabindex=\"-1\">\n\n\t<header class=\"{ns}__header\">\n\t\t<h2 id=\"{ns}-{count}-label\" class=\"{ns}__title\">{title}</h2>\n\t\t<button class=\"dialog__close\" type=\"button\" data-action=\"close\"><i aria-hidden=\"true\" class=\"dialog__close-icon\"></i><span class=\"dialog__close-text\">{close}</span></button>\n\t</header>\n\n\t<div class=\"{ns}__main\" id=\"{ns}-{count}-main\"></div>\n\n\t<footer class=\"{ns}__footer\"></footer>\n\n</{nodeName}>"), {
                title: options.title || '',
                className: className,
                ns: namespace,
                count: this._id,
                role: options.role || 'dialog',
                close: options.closeLabel || 'Close',
                nodeName: options.nodeName || 'div'
            });

            var $dialog = $(html)
				.hide()
				.appendTo('body')
				.on('keydown', this._keydown.bind(this))
				.on('click', '[data-action=close]', this.close.bind(this));

            this.$content = $dialog.find('.' + namespace + '__main')
				.append(options.content);
            this.$footer = $dialog.find('.' + namespace + '__footer')
				.append(options.footer);
            this.$title = $dialog.find('.' + namespace + '__title');

            this.$dialog = $dialog;

            if (options.destroyOnClose) {
                this.on('close', this.destroy.bind(this));
            }
        },

        /**
		 *	Position the dialog centrally
		 *	This is almost all done with CSS, but some older browsers
		 *	and IE need a bit of JS to help them.
		 */
        _position: function () {

            var $dialog = this.$dialog;

            if (!supportsFlexBox || !supportsResizingScrollableChildren) {
                // All of IE
                var $content = this.$content;
                $dialog.css('height', '');
                $content.css('height', '');
                var height = $dialog.height();

                var headerHeight = $dialog.find('.' + namespace + '__header').outerHeight() || 0;
                var footerHeight = this.$footer.outerHeight() || 0;
                $content.height(height - headerHeight - footerHeight);
            }

            if (!supportsTransform && supportsFixed) {
                // IE < 9
                $dialog.css({
                    marginLeft: -$dialog.width() / 2,
                    marginTop: -$dialog.height() / 2
                });
            }
        },

        /**
		 *	Set the focus.  
		 * 
		 *	If inTabbingOrder is true it will be set to first focusable element
		 *
		 *	Otherwise it is set to:
		 *  * the first focusable element in .dialog__main or below with an autofocus attribute
		 *  * the first focusable element in .dialog__main or below
		 *	* the close cross
		 *	* the dialog
 		 *	
		 *	@param {Boolean} [inTabbingOrder=false] If true focus in strict tabbing order
		 */
        _focus: function (inTabbingOrder) {

            var $dialog = this.$dialog;
            var focusOn;

            var $focusable = getFocusable($dialog);

            if (inTabbingOrder) {
                focusOn = $focusable[0] || $dialog;
            } else {
                var close = $dialog.find('.' + namespace + '__close')[0];

                $focusable = $focusable.not(close);
                var $autofocus = $focusable.filter('[autofocus]');

                focusOn = $autofocus[0] ||
					$focusable[0] ||
					close ||
					$dialog;
            }

            $(focusOn).focus();
        },

        /**
		 *	Loop the focus round while tabbing
		 */
        _keydown: function (e) {
            if (e.which !== 9) {
                return;
            }
            var target = e.target;

            var $focusable = getFocusable(this.$dialog);
            if ($focusable.last().is(target) && !e.shiftKey) {
                e.preventDefault();
                $focusable.eq(0).focus();
            } else if ($focusable.eq(0).is(target) && e.shiftKey) {
                e.preventDefault();
                $focusable.last().focus();
            }
        }


    };

    // For the benefit of IE8.  Would prefer to use Object.create
    for (var i in proto) {
        Dialog.prototype[i] = proto[i];
    }

    $.Dialog = Dialog;


}(jQuery, window));
/**
 *	CSS transition based slide up and slide down
 */
(function ($) {

    var namespace = 'slide';
    var classHidden = namespace + '--hidden';
    var classUp = namespace + '--up';
    var classDown = namespace + '--down';
    var classDownSetup = classDown + '-setup';

    function getHeight($el) {

        // If the height has been saved used the saved height
        // This is only used if the element is mid transition
        var height = $el.data(namespace);
        if (height) {
            return height;
        }

        var hidden = $el.hasClass(classHidden);
        if (hidden) {
            $el.removeClass(classHidden);
        }


        // Get the appropriate height
        if ($el.css('box-sizing') === 'border-box') {
            height = $el.outerHeight();
        } else {
            height = $el.height();
        }

        // If required hide it again
        if (hidden) {
            $el.addClass(classHidden);
        }

        // Save the height
        $el.data(namespace, height);

        return height;

    }

    function cssSlideUp(el) {

        var $el = $(el);

        // Don't slide up if already hidden
        if (!$el.is(':visible')) {
            return;
        }

        var height = getHeight($el);

        $el.css('height', height);

        // Trigger a size calculation
        el.offsetHeight;

        $el
			.one('transitionend', function (e) {

			    // Remove our values and mark as hidden
			    // Remove data so it will be recalculated next time
			    $el
                	.css('height', '')
                	.addClass(classHidden)
                	.removeClass(classUp)
                	.removeData(namespace);
			})
            // Start the transition
            .css('height', 0)
			.addClass(classUp);

    }

    function cssSlideDown(el) {

        var $el = $(el);

        if ($el.is(':visible') && !$el.hasClass(classUp)) {
            return;
        }

        var height = getHeight($el);

        // Setup, remove a running slide up
        $el
			.removeClass(classUp + ' ' + classHidden)
			.addClass(classDownSetup)
			.css('height', 0);

        // Trigger a size calculation
        el.offsetHeight;

        $el
			.one('transitionend', function (e) {

			    // Remove our values and mark as hidden
			    // Remove data so it will be recalculated next time
			    // Remove hidden in-case we interupted a slide up
			    $el
                	.css('height', '')
                	.removeClass(classDown + ' ' + classHidden)
                	.removeData(namespace);
			})
            // Start the transition
            .css('height', height)
            .removeClass(classDownSetup)
            .addClass(classDown);
    }

    $.fn.cssSlideUp = function (el) {

        this.each(function () {
            cssSlideUp(this);
        });

        return this;

    };

    $.fn.cssSlideDown = function (el) {

        this.each(function () {
            cssSlideDown(this);
        });

        return this;

    };

    $.fn.cssSlideToggle = function (state) {

        this.each(function () {

            var $el = $(this);
            var show = typeof state === 'boolean' ? state : !$el.is(':visible') || $el.hasClass(classUp)

            if (show) {
                $el.cssSlideDown();
            } else {
                $el.cssSlideUp();
            }

        });

        return this;

    };


}(jQuery));

/**
 *	A simple script for setting floats in a row to an equal height
 */
(function ($, window) {

    var namespace = 'equalHeight';
    var className = 'js-equal-height';
    var classNameSetup = className + '-setup';

    // Check if flexbox is supported - new or tweener syntax only as we need wrap support
    var $test = $('<div style="display:-webkit-flex;display:-ms-flexbox;display:flex;"/>');
    var supportsFlexBox = $test.css('display').indexOf('flex') > -1;

    var globalEventsSetup = false;
    // This prevents IE8 fireing infinite resize events
    var resizeRunning = false;
    var $elements = $();

    function setupGlobalEvents() {
        if (globalEventsSetup) {
            return;
        }
        $(window).on('resize', function () {

            if (!resizeRunning) {
                resizeRunning = true;
                $elements.trigger('resize');
            }
            setTimeout(function () {
                resizeRunning = false;
            }, 0);

        });
    }

    function setHeight(items) {

        if (items.length <= 1) {
            return;
        }

        var maxHeight = 0;

        items.forEach(function (item) {
            // Don't use .height(), it gets and sets the innerHeight only
            var height = item.outerHeight();

            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        items.forEach(function (item) {
            item.css( 'height', maxHeight );
        });

    }

    function equalHeight() {

        var $this = $(this);
        var lastOffsetTop = 0;
        var row = [];

        $this.children().toArray()
            .map(function (item) {
                // Reset all heights
                var $item = $(item);
                $item.css('height', '');
                return $item;
            } )
            .forEach(function ($item) {

			    var offset = $item.offset();

			    if (offset.top === lastOffsetTop) {
			        row.push($item);
			    } else {
			        setHeight(row);
			        offset = $item.offset();
			        row = [$item];
			        lastOffsetTop = offset.top;
			    }

			});
        setHeight(row);
    }

    function setup() {
        var $this = $(this);
        if ($this.hasClass(classNameSetup)) {
            return;
        }
        setupGlobalEvents();
        $elements = $elements.add(this);
        $this.on('resize', equalHeight);
        $this.addClass(classNameSetup);
        equalHeight.call(this);
        setTimeout(equalHeight.bind(this), 100);
    }

    $.fn[namespace] = function () {
        $(this).each(setup);
        return this;
    };

    $.fn[namespace].supportsFlexBox = supportsFlexBox;

    if (!supportsFlexBox) {
        $('.' + className)[namespace]();
    }

}(jQuery, window));
/*
* rwdImageMaps jQuery plugin v1.5
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2013 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").load(function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);
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
/* jshint laxbreak: true */

/*!
 * jQuery.fn.top-sticky.js v0.3
 * © 2014 Daniel Lewis github.com/mrdaniellewis/jquery.fn.top-sticky.js
 * MIT license
 */

( function( $, window, max, min ) {
    
    "use strict";

    var dataName = '.topSticky';

    // String constants for over the top minification optimisation
    var MARGIN = 'margin';
    var POSITION = 'position';
    var STICKY = 'sticky';
    var PADDING = 'padding';
    var RESIZE = 'resize';
    var STATIC = 'static';
    var ABSOLUTE = 'absolute';

    // Test for native support
    var nativeSupport = $('<i style="010-webkit-1"/>'
        .replace(/0|1/g,function(m) {
            return [ POSITION + ':', STICKY + ';' ][m];
        }))
        .css(POSITION)
        .indexOf(STICKY) > -1;

    // Cross browser request animation frame
    var RAF = 'equestAnimationFrame';
    var requestAnimationFrame = window[ 'r' + RAF ] 
        || window[ 'webkitR' + RAF ] 
        || window[ 'mozR' + RAF ] 
        || window[ 'oR' + RAF ] 
        || function(fn) {
            return setTimeout( fn, 0 ); // 0 results in less positioning errors and a smoother appearance
        };

    var $window = $(window);
    var windowHeight, scrollTop;
    var lastScrollTop = -1;

    // Elements to process when scrolling - these are elements that are actively being positioned
    var $scroll = $();
    // Elements to process when resizing - these are the scroll elements, 
    // plus any that are hidden or have top=auto
    var $resize = $();

    // Are we currently positioning
    var running = false;
    // Are we currently resizing
    var resizing = false;

    // Called when resizing
    function onResize() {
        resizing = true;
        onScroll();
    }

    // Update all elements
    function update() {

        var $collection = $scroll;
        // Swap to the resize collection in a resize
        if ( resizing ) {
            $collection = $resize;
        }

        windowHeight = $window.height();
        scrollTop = $window.scrollTop();

        $collection.each( function() {
            $.data( this, dataName )(resizing);
        } );

        if ( lastScrollTop != scrollTop ) {
            lastScrollTop = scrollTop;
            requestAnimationFrame( update );
        } else {
            running = resizing = false;
        }
    }

    // The scroll event - also called on a resize
    function onScroll() {

        if ( !running ) {
            requestAnimationFrame( update );
            running = true;
        }
    }

    // Add or remove the global scroll event
    var scrollEventSet = false;
    function setScrollEvent() {
        if ( !$scroll.length ) {
            $window.off( 'scroll' + dataName + ' touchmove' + dataName );
        } else if ( !scrollEventSet ) {
            $window.on( 'scroll' + dataName + ' touchmove' + dataName, onScroll );
            scrollEventSet = true;
        }
    }

    // Add or remove the global resize event
    var resizeEventSet = false;
    function setResizeEvent() {
        if ( !$resize.length ) {
            $window.off( RESIZE + dataName );
        } else if ( !resizeEventSet ) {
            $window.on( RESIZE + dataName, onResize );
            resizeEventSet = true;
        }
    }


    // Creates the functions and holds the values for moving an element
    // A closure, while less readable, minifies rather better
    function makeStickyClosure(el, parent) {
        var $el = $(el);
        
        var lastPosition = '';
        var $ghost = $();
        var width, height, top, marginTop, marginLeft, marginBottom, marginRight, parentHeight, 
            parentPaddingBottom, offset, windowHeight;
        var active = false;
        var lastState = false;
        var elResizing = false;
        var $parent;

        // Don't add it twice
        if ( $.data( el, dataName ) ) {
            return;
        }

        // Reset back to the elements natural position
        function reset() {
            $el.attr('style','');
            $ghost.hide();
        }

        function setPosition(isResize) {

            // IE8/7 triggers a resize event on itself when its dimensions change
            // Prevent endless loops
            elResizing = true;
            setTimeout( function() {
                elResizing = false;
            },0);

            if ( isResize ) {

                top = null;
                lastPosition = '';
                
                if ( $el.is(':visible') ) {

                    $parent = parent ? $(parent) : $el.parent();

                    // Reset original size and position
                    reset();

                    width = $el.outerWidth();
                    height = $el.outerHeight();

                    // This is part is painful
                    // If the element is hidden (and also positioned absolutely for Safari)
                    // then getComputedStyle gives you the actual CSS value
                    // If it shows and is absolute/fixed you get the pixels from its offset parent
                    // which isn't what we want
                    // For top jQuery manages to give you the value in pixels
                    // For bottom (which this doesn't need) some browsers give it you in what ever
                    // units you used.
                    $el.css( {display: 'none', position: ABSOLUTE } );
                    if ( $el.css('top') == 'auto' ) {
                        // Auto means it isn't set
                        top = null;
                    } else {
                        // Display and get the top property
                        // Providing it is set we seem to get it in pixels in all browsers
                        $el.css('display','');
                        top = getDimension( $el, 'top' );
                    }
                }

                active = top !== null;
            
                if ( lastState !== active ) {
                    // Add or remove from the scroll list
                    // and set the event so scroll is only
                    // running if it really needs to
                    if ( active ) {
                        $scroll = $scroll.add(el);
                    } else {
                        $scroll = $scroll.not(el);
                    }
                    lastState = active;
                    setScrollEvent();
                }

                if ( !active ) {
                    reset();
                    return;
                }

                // Get the normal position
                $el.css(POSITION, STATIC);
                offset = $el.offset();

                // We need all the margins for the ghost
                marginTop = getDimension( $el, MARGIN + 'Top' ) || 0;
                marginLeft = getDimension( $el, MARGIN + 'Left' ) || 0;
                marginBottom = getDimension( $el, MARGIN + 'Bottom' ) || 0;
                marginRight = getDimension( $el, MARGIN + 'Right' ) || 0;

                parentHeight = $parent.innerHeight();
                parentPaddingBottom = getDimension( $parent, PADDING + 'Bottom' );
            }

            var position = '';
            var currentOffset = $el.offset();
            var windowTop = scrollTop + top;
            var parentBottom = $parent.offset().top + parentHeight - parentPaddingBottom - height - marginBottom;

            var calculatedTop = max( 
                offset.top,
                min( 
                    windowTop,
                    parentBottom
                )
            );

            if ( offset.top === calculatedTop ) {
                position = STATIC;
            } else if ( calculatedTop === windowTop ) {
                position = 'fixed';
            } else if ( calculatedTop === parentBottom ) {
                position = ABSOLUTE;
            }

            // Only reposition if we have to
            if ( lastPosition != position || currentOffset.left != offset.left ) {

                lastPosition = position;

                if ( position == STATIC ) {
                    reset();
                    $ghost.hide();
                    return;
                } 

                $el
                    .css( POSITION, position )
                    .offset({ top: calculatedTop, left: offset.left })
                    .outerWidth(width)
                    .outerHeight(height);

                if ( !$ghost.length ) {
                    $ghost = $('<div>')
                        .css( {
                            visibility: 'hidden',
                            width: width,
                            height: height,
                            margin: [marginTop,marginRight,marginBottom,marginLeft].join('px ') + 'px',
                            border: 0,
                            padding: 0
                        } )
                        .insertAfter($el);
                }
                $ghost.show();

            }
        }

        // Function to remove the stickyness
        setPosition.x = function() {
            if ( $ghost ) {
                $ghost.remove();                
            }

            $el
                .css(reset)
                .off(dataname)
                .removeData(dataName);

            $resize = $resize.not(el);
            $scroll = $scroll.not(el);
            setScrollEvent();
            setResizeEvent();       
        };

        $resize = $resize.add(el);
        $.data( el, dataName, setPosition );
        setResizeEvent();
        $el.on( RESIZE + dataName, function() {
            // IE8 can call resize on elements
            // It then ends up in endless loops
            if ( elResizing ) {
                return;
            }
            setPosition(true);
        } );
        setPosition(true);
    }

    function getDimension($el,prop) {
        var val = parseFloat($el.css(prop));
        if ( isNaN(val) ) {
            val = null;
        }
        return val;
    }

    function stickify(parent) {
        /* jshint -W040 */
        this.each(function() {
            makeStickyClosure(this,parent);
        } );
        return this;
    }

    stickify.support = nativeSupport;
    $.fn.stickify = stickify;

    $.fn.unstickify = function() {
        this.each( function() {
            var fn = $.data(this,dataName);
            if ( fn ) {
                fn.x();
            }
        } );
        return this;
    };

    $( function($) {
        if (!$.fn.stickify.support) {
            $('.js-make-sticky').stickify();
        }
    } );


}( jQuery, window, Math.max, Math.min ) );



/* jshint laxbreak: true */

/*!
 * jQuery.fn.top-sticky.js v0.3
 * © 2014 Daniel Lewis github.com/mrdaniellewis/jquery.fn.top-sticky.js
 * MIT license
 */

( function( $, window, max, min ) {
	
	"use strict";

	var dataName = '.topSticky';

	// String constants for over the top minification optimisation
	var MARGIN = 'margin';
	var POSITION = 'position';
	var STICKY = 'sticky';
	var PADDING = 'padding';
	var RESIZE = 'resize';
	var STATIC = 'static';
	var ABSOLUTE = 'absolute';

	// Test for native support
	var nativeSupport = $('<i style="010-webkit-1"/>'
		.replace(/0|1/g,function(m) {
			return [ POSITION + ':', STICKY + ';' ][m];
		}))
		.css(POSITION)
		.indexOf(STICKY) > -1;

	// Cross browser request animation frame
	var RAF = 'equestAnimationFrame';
	var requestAnimationFrame = window[ 'r' + RAF ] 
		|| window[ 'webkitR' + RAF ] 
		|| window[ 'mozR' + RAF ] 
		|| window[ 'oR' + RAF ] 
		|| function(fn) {
			return setTimeout( fn, 0 ); // 0 results in less positioning errors and a smoother appearance
		};

	var $window = $(window);
	var windowHeight, scrollTop;
	var lastScrollTop = -1;

	// Elements to process when scrolling - these are elements that are actively being positioned
	var $scroll = $();
	// Elements to process when resizing - these are the scroll elements, 
	// plus any that are hidden or have top=auto
	var $resize = $();

	// Are we currently positioning
	var running = false;
	// Are we currently resizing
	var resizing = false;

	// Called when resizing
	function onResize() {
		resizing = true;
		onScroll();
	}

	// Update all elements
	function update() {

		var $collection = $scroll;
		// Swap to the resize collection in a resize
		if ( resizing ) {
			$collection = $resize;
		}

		windowHeight = $window.height();
		scrollTop = $window.scrollTop();

		$collection.each( function() {
			$.data( this, dataName )(resizing);
		} );

		if ( lastScrollTop != scrollTop ) {
			lastScrollTop = scrollTop;
			requestAnimationFrame( update );
		} else {
			running = resizing = false;
		}
	}

	// The scroll event - also called on a resize
	function onScroll() {

		if ( !running ) {
			requestAnimationFrame( update );
			running = true;
		}
	}

	// Add or remove the global scroll event
	var scrollEventSet = false;
	function setScrollEvent() {
		if ( !$scroll.length ) {
			$window.off( 'scroll' + dataName + ' touchmove' + dataName );
		} else if ( !scrollEventSet ) {
			$window.on( 'scroll' + dataName + ' touchmove' + dataName, onScroll );
			scrollEventSet = true;
		}
	}

	// Add or remove the global resize event
	var resizeEventSet = false;
	function setResizeEvent() {
		if ( !$resize.length ) {
			$window.off( RESIZE + dataName );
		} else if ( !resizeEventSet ) {
			$window.on( RESIZE + dataName, onResize );
			resizeEventSet = true;
		}
	}


	// Creates the functions and holds the values for moving an element
	// A closure, while less readable, minifies rather better
	function makeStickyClosure(el, parent) {
		var $el = $(el);
		
		var lastPosition = '';
		var $ghost = $();
		var width, height, top, marginTop, marginLeft, marginBottom, marginRight, parentHeight, 
			parentPaddingBottom, offset, windowHeight;
		var active = false;
		var lastState = false;
		var elResizing = false;
		var $parent;

		// Don't add it twice
		if ( $.data( el, dataName ) ) {
			return;
		}

		// Reset back to the elements natural position
		function reset() {
			$el.attr('style','');
			$ghost.hide();
		}

		function setPosition(isResize) {

			// IE8/7 triggers a resize event on itself when its dimensions change
			// Prevent endless loops
			elResizing = true;
			setTimeout( function() {
				elResizing = false;
			},0);

			if ( isResize ) {

				top = null;
				lastPosition = '';
				
				if ( $el.is(':visible') ) {

					$parent = parent ? $(parent) : $el.parent();

					// Reset original size and position
					reset();

					width = $el.outerWidth();
					height = $el.outerHeight();

					// This is part is painful
					// If the element is hidden (and also positioned absolutely for Safari)
					// then getComputedStyle gives you the actual CSS value
					// If it shows and is absolute/fixed you get the pixels from its offset parent
					// which isn't what we want
					// For top jQuery manages to give you the value in pixels
					// For bottom (which this doesn't need) some browsers give it you in what ever
					// units you used.
					$el.css( {display: 'none', position: ABSOLUTE } );
					if ( $el.css('top') == 'auto' ) {
						// Auto means it isn't set
						top = null;
					} else {
						// Display and get the top property
						// Providing it is set we seem to get it in pixels in all browsers
						$el.css('display','');
						top = getDimension( $el, 'top' );
					}
				}

				active = top !== null;
			
				if ( lastState !== active ) {
					// Add or remove from the scroll list
					// and set the event so scroll is only
					// running if it really needs to
					if ( active ) {
						$scroll = $scroll.add(el);
					} else {
						$scroll = $scroll.not(el);
					}
					lastState = active;
					setScrollEvent();
				}

				if ( !active ) {
					reset();
					return;
				}

				// Get the normal position
				$el.css(POSITION, STATIC);
				offset = $el.offset();

				// We need all the margins for the ghost
				marginTop = getDimension( $el, MARGIN + 'Top' ) || 0;
				marginLeft = getDimension( $el, MARGIN + 'Left' ) || 0;
				marginBottom = getDimension( $el, MARGIN + 'Bottom' ) || 0;
				marginRight = getDimension( $el, MARGIN + 'Right' ) || 0;

				parentHeight = $parent.innerHeight();
				parentPaddingBottom = getDimension( $parent, PADDING + 'Bottom' );
			}

			var position = '';
			var currentOffset = $el.offset();
			var windowTop = scrollTop + top;
			var parentBottom = $parent.offset().top + parentHeight - parentPaddingBottom - height - marginBottom;

			var calculatedTop = max( 
				offset.top,
				min( 
					windowTop,
					parentBottom
				)
			);

			if ( offset.top === calculatedTop ) {
				position = STATIC;
			} else if ( calculatedTop === windowTop ) {
				position = 'fixed';
			} else if ( calculatedTop === parentBottom ) {
				position = ABSOLUTE;
			}

			// Only reposition if we have to
			if ( lastPosition != position || currentOffset.left != offset.left ) {

				lastPosition = position;

				if ( position == STATIC ) {
					reset();
					$ghost.hide();
					return;
				} 

				$el
					.css( POSITION, position )
					.offset({ top: calculatedTop, left: offset.left })
					.outerWidth(width)
					.outerHeight(height);

				if ( !$ghost.length ) {
					$ghost = $('<div>')
						.css( {
							visibility: 'hidden',
							width: width,
							height: height,
							margin: [marginTop,marginRight,marginBottom,marginLeft].join('px ') + 'px',
							border: 0,
							padding: 0
						} )
						.insertAfter($el);
				}
				$ghost.show();

			}
		}

		// Function to remove the stickyness
		setPosition.x = function() {
			if ( $ghost ) {
				$ghost.remove();				
			}

			$el
				.css(reset)
				.off(dataname)
				.removeData(dataName);

			$resize = $resize.not(el);
			$scroll = $scroll.not(el);
			setScrollEvent();
			setResizeEvent();		
		};

		$resize = $resize.add(el);
		$.data( el, dataName, setPosition );
		setResizeEvent();
		$el.on( RESIZE + dataName, function() {
			// IE8 can call resize on elements
			// It then ends up in endless loops
			if ( elResizing ) {
				return;
			}
			setPosition(true);
		} );
		setPosition(true);
	}

	function getDimension($el,prop) {
		var val = parseFloat($el.css(prop));
		if ( isNaN(val) ) {
			val = null;
		}
		return val;
	}

	function stickify(parent) {
		/* jshint -W040 */
		this.each(function() {
			makeStickyClosure(this,parent);
		} );
		return this;
	}

	stickify.support = nativeSupport;
	$.fn.stickify = stickify;

	$.fn.unstickify = function() {
		this.each( function() {
			var fn = $.data(this,dataName);
			if ( fn ) {
				fn.x();
			}
		} );
		return this;
	};


}( jQuery, window, Math.max, Math.min ) );

// Polyfill
if (!$.fn.stickify.support) {
    $('.js-make-sticky').stickify();
}


/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/**
 *	Run any deferred scripts that were added before jQuery was loaded
 *  See head.js
 *  @author Daniel Lewis
 */
(function (jQuery, window) {
    var fake$;

    // Get the original $ back
    jQuery.noConflict();

    fake$ = window.$;

    if (fake$ && (q = fake$.q) && q.length) {

        jQuery.each(q, function (i, fn) {
            jQuery(fn);
        });

    }

    // Restore jQuery to $
    window.$ = jQuery;

}(jQuery, window));
/**
 *	CSS transition based slide up and slide down
 */
(function ($) {

    var namespace = 'slide';
    var classHidden = namespace + '--hidden';
    var classUp = namespace + '--up';
    var classDown = namespace + '--down';
    var classDownSetup = classDown + '-setup';

    function getHeight($el) {

        // If the height has been saved used the saved height
        // This is only used if the element is mid transition
        var height = $el.data(namespace);
        if (height) {
            return height;
        }

        var hidden = $el.hasClass(classHidden);
        if (hidden) {
            $el.removeClass(classHidden);
        }


        // Get the appropriate height
        if ($el.css('box-sizing') === 'border-box') {
            height = $el.outerHeight();
        } else {
            height = $el.height();
        }

        // If required hide it again
        if (hidden) {
            $el.addClass(classHidden);
        }

        // Save the height
        $el.data(namespace, height);

        return height;

    }

    function cssSlideUp(el) {

        var $el = $(el);

        // Don't slide up if already hidden
        if (!$el.is(':visible')) {
            return;
        }

        var height = getHeight($el);

        $el.css('height', height);

        // Trigger a size calculation
        el.offsetHeight;

        $el
			.one('transitionend', function (e) {

			    // Remove our values and mark as hidden
			    // Remove data so it will be recalculated next time
			    $el
                	.css('height', '')
                	.addClass(classHidden)
                	.removeClass(classUp)
                	.removeData(namespace);
			})
            // Start the transition
            .css('height', 0)
			.addClass(classUp);

    }

    function cssSlideDown(el) {

        var $el = $(el);

        if ($el.is(':visible') && !$el.hasClass(classUp)) {
            return;
        }

        var height = getHeight($el);

        // Setup, remove a running slide up
        $el
			.removeClass(classUp + ' ' + classHidden)
			.addClass(classDownSetup)
			.css('height', 0);

        // Trigger a size calculation
        el.offsetHeight;

        $el
			.one('transitionend', function (e) {

			    // Remove our values and mark as hidden
			    // Remove data so it will be recalculated next time
			    // Remove hidden in-case we interupted a slide up
			    $el
                	.css('height', '')
                	.removeClass(classDown + ' ' + classHidden)
                	.removeData(namespace);
			})
            // Start the transition
            .css('height', height)
            .removeClass(classDownSetup)
            .addClass(classDown);
    }

    $.fn.cssSlideUp = function (el) {

        this.each(function () {
            cssSlideUp(this);
        });

        return this;

    };

    $.fn.cssSlideDown = function (el) {

        this.each(function () {
            cssSlideDown(this);
        });

        return this;

    };

    $.fn.cssSlideToggle = function (state) {

        this.each(function () {

            var $el = $(this);
            var show = typeof state === 'boolean' ? state : !$el.is(':visible') || $el.hasClass(classUp)

            if (show) {
                $el.cssSlideDown();
            } else {
                $el.cssSlideUp();
            }

        });

        return this;

    };


}(jQuery));

$(function ($) {
    "use strict";

    // Show more menu and mega menus

    var $navContainer = $('.nav-list-primary');
    // Used to hide the menus
    var $menus = $('.js-mega-menu, .js-more-menu');
    var timeout;

    $('.js-more-menu')
        .on('focusin mouseenter', function () {
            clearTimeout(timeout);
            $menus.removeClass('active');
            $(this).addClass('active');
        })
        .on('focusout mouseleave', function (e) {
            clearTimeout(timeout);
            var $this = $(this);
            // Set the timeout to 250ms on this one.
            // It feels better if it is a little more responive
            timeout = setTimeout(function () {
                $this.removeClass('active');
            }, e.type === 'mouseleave' ? 250 : 0);
        })
        .on('keyup', arrowKeyNavigation)
        .children('a')
            .on('click', false);

    // Megamenu drop downs

    $('.js-mega-menu')
        .on('focusin', function () {
            clearTimeout(timeout);
            showMegaMenu($(this));
        })
        .on('mouseenter', function () {
            var $this = $(this);
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                showMegaMenu($this);
            }, 500);
        })
        .on('focusout mouseleave', function (e) {
            clearTimeout(timeout);
            var $this = $(this);

            // For mouseleave wait half a second.
            // For keyboard just wait long one tick so the focus can move
            timeout = setTimeout(function () {
                $this.removeClass('active');
            }, e.type === 'mouseleave' ? 500 : 0);

        })
        .on('keyup', arrowKeyNavigation);

    function arrowKeyNavigation(e) {
        var $target = $();
        var $this = $(this);
        if (e.keyCode === 37) {
            $target = traverseVisible($this, 'prev');
        } else if (e.keyCode === 39) {
            $target = traverseVisible($this, 'next');
        }
        $target.children().first('a').trigger('focus');
    }

    function traverseVisible($item, direction) {
        do {
            if (direction === 'next') {
                $item = $item.next();
            } else if (direction === 'prev') {
                $item = $item.prev();
            }

        } while ($item[0] && !$item.is(':visible'));
        return $item;
    }


    function showMegaMenu($li) {

        // Don't run if alway open
        if ($li.hasClass('active')) {
            return;
        }

        // Hide all the other menus
        $menus.removeClass('active');
        $li.addClass('active');

        // Find the menu
        var $menu = $li.children('.mega-menu');
        // If there isn't one return
        if ($menu.length === 0) {
            return;
        }

        // Clear any previously set left value
        $menu.css('left', '');

        // If the menu is off the right of the page then move it
        var rightEdge = $navContainer.offset().left + $navContainer.outerWidth();
        var menuWidth = $menu.outerWidth();
        var menuOffset = $menu.offset();
        var paddingRight = parseFloat($navContainer.css('paddingRight'));
        if (rightEdge - paddingRight < menuOffset.left + menuWidth) {
            $menu.offset({ left: rightEdge - menuWidth - paddingRight });
        }

        // Position the arrow
        // This needs to go in the middle of the <li> and at the top of the mega menu
        // As we are moving the menu around we need to manually set the left position
        // Chrome and Firefox have different interpretations of absolute positioning inside display table
        // One includes the border and one doesn't.  This means we need to manually set the top position
        // The + 1 on the top is to give a one pixel overlap, which stops separation at some zoom levels
        var $arrow = $menu.children('.mega-menu__arrow');
        var leftPos = $li.offset().left + $li.outerWidth() / 2 - $arrow.outerWidth() / 2;
        $arrow.offset({ left: leftPos, top: menuOffset.top - $arrow.outerHeight() + 1 });

    }

});
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




function onScroll(event){
    var scrollPos = $(document).scrollTop();

    $('.steps--navigation li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top + 100 <= scrollPos && refElement.position().top + 130 + refElement.height() > scrollPos) {
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });

    // Mobile
    $('.steps--navigation--fixed__link span').click(function(){
        $('.steps--navigation--overlay').addClass("open").css('opacity',1);
    });

    $('.steps--navigation--overlay__link a').click(function(){
        $('.steps--navigation--overlay').removeClass("open").css('opacity',0);
    });

    $('.steps--navigation--fixed__link span').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("class"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.steps--navigation--fixed__link').removeClass("active");
            currLink.parent().addClass("active");
            $(this).parent().show();
        }
        else{
            currLink.removeClass("active");
            $(this).parent().hide();
        }
    });

    $('.steps--navigation--overlay li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
$window = $(window);

$(function ($) {
    "use strict";

    // Resize main navigation

    var $more = $('.nav-list-primary-more');
    var $moreContainer = $('.main-nav__more-links');
    var $navItems = $('.top-item');
    // Used to check if we are in mobile mode (better support than matchMedia)
    var $mobileMenu = $('.js-toggle-menu');
    var ie8 = !!$('.ie8').length;
    var inResize = false;
    
    // Overflow is hidden to stop jumping as the page loads in the CSS
    // Allow it to show mega menus
    $('.main-nav').css('overflow', 'visible');

    // If we only have two items we will not need to resize
    if ($navItems.length < 2) {
        return;
    }

    function checkNav() {

        // IE8 is slightly hyperactive with resize.  Only run this once
        if (inResize) {
            return;
        }
        inResize = true;

        //If the site is being displayed on a mobile device, we will not need to resize
        if( !$mobileMenu.is(':visible') ){

            $navItems.hide();
            $more.show();
            var moreOffsetTop = $more.offset().top;
            $more.hide();
            $navItems.show();

            // Find the top offset of the first item
            var topOffset = $navItems.eq(0).offset().top;
            var lastTopOffset = $navItems.last().offset().top;

            // If the last item does not have the same top offset
            if (lastTopOffset > topOffset) {
                // Hide and show the more link
                $moreContainer.empty();
                hideItem($navItems.last());
                $more.show().css('visiblity', 'hidden');
               
                // Keep taking off items until the last item has the same offset as the first item
                for (var i = $navItems.length - 2; i >= 0; --i) {
                    var $item = $navItems.eq(i);
                    if ($item.offset().top > topOffset || $more.offset().top > moreOffsetTop) {
                        hideItem($item);
                    } else {
                        break;
                    }
                }
                $more.show().css('visiblity', 'visible');
            }
        } else {
            $more.hide();
            $navItems.show();
        }

        // IE8 will throw it's self into a never ending resize loop unless we do this
        if (ie8) {
            window.setTimeout( function() {
                inResize = false;
           }, 0 );
        } else {
            inResize = false;
        }
    }

    // Hide a menu item and add it to the more menu
    function hideItem($item) {
       
        var link = $item.children('a')[0];
        var html = '<li><a href="' + link.href + '">' + link.innerHTML + '</a></li>';
        $moreContainer.prepend(html);
        $item.hide();
    }

    $(window).on('resize', checkNav);
    checkNav();
});
$(function ($) {
    // To do - allow as many news items as required
    // To do - test no js
    // To do - check with feed
    // To do - check in old IE
    
    var currentClass = 'top-news__navigation__item--current';
    var $parent = $('.js-news-carousel');
    var $newsItems = $parent.find('.top-news__article');
    var $navigationItems = $parent.find('.top-news__navigation__item');
    var index = 0;
    var match;

    // Add index items so each control knows which news article is will be controlling
    $navigationItems.each(function (i) {
        $(this).attr('data-item', i);
    });

    $navigationItems
        .on('mouseenter focusin', function () {
            var $this = $(this);
            index = parseInt($this.attr('data-item'), 10);
            $newsItems.hide().eq(index).show();
            $navigationItems.removeClass(currentClass);
            $this.addClass(currentClass);
        });
    
    // Show them all on a mobile
    if (window.matchMedia) {
        match = matchMedia("(max-width:767px)");
        match.addListener(function (match) {
            if (match.matches) {
                $newsItems.show();
            } else {
                $navigationItems.eq(index).triggerHandler('mouseenter');
            }
        });
    }

    if ( !match || !match.matches ) {
        $navigationItems.eq(0).triggerHandler('mouseenter');
    }

});
/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=_self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var l=r[e];if(2==arguments.length){a=arguments[1];for(var i in a)a.hasOwnProperty(i)&&(l[i]=a[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==n)for(var i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);o[s]=l[s]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},plugins:{},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),l=0;a=r[l++];)t.highlightElement(a,e===!0,n)},highlightElement:function(n,a,r){for(var l,i,o=n;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1],i=t.languages[l]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var s=n.textContent,u={element:n,language:l,grammar:i,code:s};if(!s||!i)return t.hooks.run("complete",u),void 0;if(t.hooks.run("before-highlight",u),a&&_self.Worker){var g=new Worker(t.filename);g.onmessage=function(e){u.highlightedCode=e.data,t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),t.hooks.run("after-highlight",u),t.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(n),t.hooks.run("after-highlight",u),t.hooks.run("complete",u)},highlight:function(e,a,r){var l=t.tokenize(e,a);return n.stringify(t.util.encode(l),r)},tokenize:function(e,n){var a=t.Token,r=[e],l=n.rest;if(l){for(var i in l)n[i]=l[i];delete n.rest}e:for(var i in n)if(n.hasOwnProperty(i)&&n[i]){var o=n[i];o="Array"===t.util.type(o)?o:[o];for(var s=0;s<o.length;++s){var u=o[s],g=u.inside,c=!!u.lookbehind,f=0,h=u.alias;u=u.pattern||u;for(var p=0;p<r.length;p++){var d=r[p];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){c&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,k=y+v,b=d.slice(0,y+1),w=d.slice(k+1),P=[p,1];b&&P.push(b);var A=new a(i,g?t.tokenize(m,g):m,h);P.push(A),w&&P.push(w),Array.prototype.splice.apply(r,P)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,l=0;r=a[l++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var l={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==l.type&&(l.attributes.spellcheck="true"),e.alias){var i="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}t.hooks.run("wrap",l);var o="";for(var s in l.attributes)o+=(o?" ":"")+s+'="'+(l.attributes[s]||"")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'" '+o+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code,l=n.immediateClose;_self.postMessage(t.highlight(r,t.languages[a],a)),l&&_self.close()},!1),_self.Prism):_self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;

/**
 *  Resize an iframe when the content loads
 */
(function ($) {
    if ( !window.postMessage ) {
        return;
    }

    // Frames indexed by Livelink URL
    var frames = {};

    // I would use a class,but TinyMCE won't let me http://stackoverflow.com/questions/13161323/tinymce-strips-class-attribute-from-iframe-element
    $('iframe[data-auto-resize]')
        .each(function () {
            var iframe = this;
            var $iframe = $(this);

            // Extract the Livelink URL
            var frameId = iframe.src.replace(/\?.*$/, '').replace(/\/+$/, '').replace(/^.*\//, '');
            frames[frameId] = $iframe;+ 'id=' + frameId;

            $(this)
                .on('cabResizeFrame', function (e, height) {
                    // Get rid of scroll bars and stop jumping
                    iframe.scrolling = 'no';
                    currentHeight = $iframe.height();
                    // Don't change height if it is only 30px smaller - hoepfully stops jumping
                    if (height && height > currentHeight || height < (currentHeight - 30)) {
                        $iframe.height(height);
                    }
                })
                .on('cabScrollTop', function (e) {
                    // Scroll to top of iframe
                    $('html, body').animate({
                        scrollTop: $iframe.offset().top
                    }, 500);
                })
                .on('cabScrollTo', function (e, position) {
                    // Scroll to a position in the frame
                    $('html, body').animate({
                        scrollTop: $iframe.offset().top + position
                    }, 500);
                });
        });


    $(window).on('message', function(e) {
        var message = e.originalEvent;
        if (/(citizensadvice|cabsrv)\.org\.uk$/i.test(message.origin)) {
            // Message will be {url: url, height: int, scrollTop: boolean}
            // URL is to identify the frame (because you can't idenify a remote frame from a message)

            var data = JSON.parse(message.data) || {};

            var frame = frames[data.url];
            if (frame) {
                if (data.height) {
                    frame.trigger('cabResizeFrame', data.height);
                }
                if (data.scrollTop) {
                    frame.trigger('cabScrollTop');
                }
                if (data.scrollTo) {
                    frame.trigger('cabScrollTo', data.scrollTo);
                }
            }
        }
    });

}(jQuery));

/**
 *  Setup and run revealables
 *  @requires jQuery
 *  @requires jQuery.fn.cssSlide
 */
$( function ($) {
    'use strict';

    // Used to generate ids
    var count = 0;

    // If true refocus to the hash
    var refocus = false;

    var namespace = 'revealable';
    var classSetup = namespace + '--setup';

    // Generate an unique id
    function getId() {
        return namespace + '-' + (++count);
    }

    var w = window;
    var $w = $(w);

    var translate = w.cab && w.cab.translate;

    // Get translated labels
    var closeLabel = translate('Close');

    function refocusHash() {
        $w.scrollTop( $( location.hash ).offset().top );
    }

    function scrollTo($el) {

        var windowTop = $w.scrollTop();
        var offset = $el.offset();
        if (offset.top < windowTop || offset.top + 100 > $w.height() + windowTop ) {
            $('html, body').animate({
                scrollTop: offset.top
            }, 500);
        }

    }

    function setup() {

        var $this = $(this);

        // The state of the element
        var expanded = null;

        // Check this hasn't already been setup
        if ( $this.hasClass( classSetup ) ) {
            return;
        }

        var $children = $this.children();
        var $heading = $children.first();

        // The first item needs to be a heading for this to work
        if (!$heading.is('h2,h3,h4')) {
            return;
        }

        $this.addClass( classSetup );

        // Wrap the bit that will be hidden
        var containerId = getId();
        var $container = $('<div class="' + namespace + '__content" id="' + containerId + '" tabindex="-1" />');
        var container = $container[0];
        $heading.after($container.append($children.not($heading)));
        $heading.attr('data-action', 'toggle');

        // Setup the heading
        $heading.addClass(namespace + '__heading');
        $heading.attr('aria-controls', containerId);
        $heading.attr('tabindex', 0);

        // Setup the close link
        var $close = $('<button type="button" class="' + namespace + '__close" data-action="close">' + closeLabel + '</button>');
        $container.append($close);

        /**
         *  Toggle showing and hiding
         *  @param {Boolean} [forceClose] Force to a particular state.
         *  @param {Boolean} [noTransition] If true don't transition
         */
        function toggle( forceExpanded, noTransition ) {

            if (forceExpanded === expanded) {
                return;
            }

            var forced = forceExpanded !== undefined;
            expanded = forced ? forceExpanded : !expanded;

            $heading.attr('aria-expanded', String(expanded));

            if (noTransition) {
                $container.toggleClass('slide--hidden', !expanded);
            } else {
                $container.cssSlideToggle(expanded);
            }
            
            // Focus on the expanded section
            if (expanded) {
                var focus = document.activeElement;
                if (expanded && !noTransition && container[0] !== focus && !$.contains(focus, container[0])) {
                    $container.focus();
                }
            }

            if (!noTransition) {
                scrollTo($this);
            }

            // Allows other things based on the window height to resize
            $w.trigger('resize');

        }

        $this
            .on('click', '[data-action]', function (e) {
                    
                if (e.isDefaultPrevented()) {
                    return;
                }
                e.preventDefault();
                toggle(this.getAttribute('data-action') === 'close' ? false : undefined );
            });

        // Heading keyboard navigation
        $heading
            .on('keyup', function (e) {
                if (e.which === 32 || e.which===13 ) {
                    $heading.click();
                }
            });

        // Check if the hash is in this section
        function openHash() {
            if ( location.hash && $this.find( location.hash ).length ) {
                toggle(true,true);
                return true;
            }
        }

        // If someone links to something in this section expand to show it
        $w.on('hashchange', function () {
            if ( openHash() ) {
                refocusHash();
            }
        });

        // If we are in the expanded area than expand
        if ( openHash($this) ) {
            // Need to refocus as the opening and closing can confuse the browser
            refocus = true;
            return;
        }

        // Otherwise collapse this section
        toggle( false, true );

    }

    // Setup
    $('section.' + namespace).each(setup);

    // Refocus if required
    if (refocus) {
        refocusHash();
    }


});
/* jshint browser: true, undef: true */
/* global $: true */

$(function ($) {
    "use strict";

    // Used to generate ids
    var count = 0;

    // If true refocus to the hash
    var refocus = false;

    var namespace = 'revealable';
    var classSetup = namespace + '--setup';

    // Generate an unique id
    function getId() {
        return namespace + '-' + (++count);
    }

    var w = window;
    var $w = $(w);

    var translate = w.cab && w.cab.translate;

    // Get translated labels
    var closeLabel = translate('Close');

    function refocusHash() {
        $w.scrollTop($(location.hash).offset().top);
    }

    function scrollTo($el) {

        var windowTop = $w.scrollTop();
        var offset = $el.offset();
        if (offset.top < windowTop || offset.top + 100 > $w.height() + windowTop ) {
            $('html, body').animate({
                scrollTop: offset.top
            }, 500);
        }

    }

    function setup() {

        var $this = $(this);

        // The state of the element
        var expanded = null;

        // Check this hasn't already been setup
        if ($this.hasClass(classSetup)) {
            return;
        }

        var $children = $this.children();
        var $heading = $children.first();

        // The first item needs to be a heading for this to work
        if (!$heading.is('h2,h3,h4')) {
            return;
        }

        // Mark as setup
        $this.addClass(classSetup);

        // Wrap the bit that will be hidden
        var containerId = getId();
        var $container = $('<div class="' + namespace + '__content" id="' + containerId + '" tabindex="-1" />');
        var container = $container[0];
        $heading.after($container.append($children.not($heading)));
        $heading.attr('data-action', 'toggle');

        // Setup the heading
        $heading.addClass(namespace + '__heading');
        $heading.attr('aria-controls', containerId);
        $heading.attr('tabindex', 0);

        // Setup the close link
        var $close = $('<button type="button" class="' + namespace + '__close" data-action="close">' + closeLabel + '</button>');
        $container.append($close);

        /**
         *  Toggle showing and hiding
         *  @param {Boolean} [forceClose] Force to a particular state.
         *  @param {Boolean} [noTransition] If true don't transition
         */
        function toggle( forceExpanded, noTransition ) {

            if (forceExpanded === expanded) {
                return;
            }

            var forced = forceExpanded !== undefined;
            expanded = forced ? forceExpanded : !expanded;

            $heading.attr('aria-expanded', String(expanded));

            if (noTransition) {
                $container.toggleClass('slide--hidden', !expanded);
            } else {
                $container.cssSlideToggle(expanded);
            }
            
            // Focus on the expanded section
            if (expanded) {
                var focus = document.activeElement;
                if (expanded && !noTransition && container[0] !== focus && !$.contains(focus, container[0])) {
                    $container.focus();
                }
            }

            if (!noTransition) {
                scrollTo($this);
            }

            // Allows other things based on the window height to resize
            $w.trigger('resize');

        }

        $this
            .on('click', '[data-action]', function (e) {
                    
                if (e.isDefaultPrevented()) {
                    return;
                }
                e.preventDefault();
                toggle(this.getAttribute('data-action') === 'close' ? false : undefined );
            });

        // Heading keyboard navigation
        $heading
            .on('keyup', function (e) {
                if (e.which === 32 || e.which===13 ) {
                    $heading.click();
                }
            });

        // Check if the hash is in this section
        function openHash() {
            if (location.hash && $this.find(location.hash).length) {
                toggle(true,true);
                return true;
            }
        }

        // If someone links to something in this section expand to show it
        $w.on('hashchange', function () {
            if (openHash()) {
                refocusHash();
            }
        });

        // If we are in the expanded area than expand
        if (openHash($this)) {
            // Need to refocus as the opening and closing can confuse the browser
            refocus = true;
            return;
        }

        // Otherwise collapse this section
        toggle(false, true);

    }

    // Fix old revealables
    $('section.js-' + namespace).addClass(namespace);
    // Setup
    $('section.' + namespace).each(setup);

    // Refocus if required
    if (refocus) {
        refocusHash();
    }


});
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
jQuery(function($){
    // flag to allow clicking
    var clickAllowed = true;

    // click function
    $('.section-nav__heading').click(function(){
        if(clickAllowed) {
            $('.section-nav__heading').parent().toggleClass('expanded');
        }
    });

    // check if browser size is compatible with click event
    onResize = function() {
        if($(window).width() < 600){
            clickAllowed = true;
        } else {
            clickAllowed = false;
            $('.section-nav').removeClass('expanded');
        }
    }

    $(document).ready(onResize);
    $(window).bind('resize', onResize);
});
// Based on https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 350);
        return false;
      }
    }
  });
});
/*
  SortTable
  version 2
  7th April 2007
  Stuart Langridge, http://www.kryogenix.org/code/browser/sorttable/

  Instructions:
  Download this file
  Add <script src="sorttable.js"></script> to your HTML
  Add class="sortable" to any table you'd like to make sortable
  Click on the headers to sort

  Thanks to many, many people for contributions and suggestions.
  Licenced as X11: http://www.kryogenix.org/code/browser/licence.html
  This basically means: do what you want with it.
*/


var stIsIE = /*@cc_on!@*/false;

sorttable = {
  init: function() {
    // quit if this function has already been called
    if (arguments.callee.done) return;
    // flag this function so we don't do the same thing twice
    arguments.callee.done = true;
    // kill the timer
    if (_timer) clearInterval(_timer);

    if (!document.createElement || !document.getElementsByTagName) return;

    sorttable.DATE_RE = /^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/;

    forEach(document.getElementsByTagName('table'), function(table) {
      if (table.className.search(/\bsortable\b/) != -1) {
        sorttable.makeSortable(table);
      }
    });

  },

  makeSortable: function(table) {
    if (table.getElementsByTagName('thead').length == 0) {
      // table doesn't have a tHead. Since it should have, create one and
      // put the first table row in it.
      the = document.createElement('thead');
      the.appendChild(table.rows[0]);
      table.insertBefore(the,table.firstChild);
    }
    // Safari doesn't support table.tHead, sigh
    if (table.tHead == null) table.tHead = table.getElementsByTagName('thead')[0];

    if (table.tHead.rows.length != 1) return; // can't cope with two header rows

    // Sorttable v1 put rows with a class of "sortbottom" at the bottom (as
    // "total" rows, for example). This is B&R, since what you're supposed
    // to do is put them in a tfoot. So, if there are sortbottom rows,
    // for backwards compatibility, move them to tfoot (creating it if needed).
    sortbottomrows = [];
    for (var i=0; i<table.rows.length; i++) {
      if (table.rows[i].className.search(/\bsortbottom\b/) != -1) {
        sortbottomrows[sortbottomrows.length] = table.rows[i];
      }
    }
    if (sortbottomrows) {
      if (table.tFoot == null) {
        // table doesn't have a tfoot. Create one.
        tfo = document.createElement('tfoot');
        table.appendChild(tfo);
      }
      for (var i=0; i<sortbottomrows.length; i++) {
        tfo.appendChild(sortbottomrows[i]);
      }
      delete sortbottomrows;
    }

    // work through each column and calculate its type
    headrow = table.tHead.rows[0].cells;
    for (var i=0; i<headrow.length; i++) {
      // manually override the type with a sorttable_type attribute
      if (!headrow[i].className.match(/\bsorttable_nosort\b/)) { // skip this col
        mtch = headrow[i].className.match(/\bsorttable_([a-z0-9]+)\b/);
        if (mtch) { override = mtch[1]; }
	      if (mtch && typeof sorttable["sort_"+override] == 'function') {
	        headrow[i].sorttable_sortfunction = sorttable["sort_"+override];
	      } else {
	        headrow[i].sorttable_sortfunction = sorttable.guessType(table,i);
	      }
	      // make it clickable to sort
	      headrow[i].sorttable_columnindex = i;
	      headrow[i].sorttable_tbody = table.tBodies[0];
	      dean_addEvent(headrow[i],"click", sorttable.innerSortFunction = function(e) {

          if (this.className.search(/\bsorttable_sorted\b/) != -1) {
            // if we're already sorted by this column, just
            // reverse the table, which is quicker
            sorttable.reverse(this.sorttable_tbody);
            this.className = this.className.replace('sorttable_sorted',
                                                    'sorttable_sorted_reverse');
            this.removeChild(document.getElementById('sorttable_sortfwdind'));
            sortrevind = document.createElement('span');
            sortrevind.id = "sorttable_sortrevind";
            sortrevind.innerHTML = stIsIE ? '&nbsp<font face="webdings">5</font>' : '&nbsp;&#x25B4;';
            this.appendChild(sortrevind);
            return;
          }
          if (this.className.search(/\bsorttable_sorted_reverse\b/) != -1) {
            // if we're already sorted by this column in reverse, just
            // re-reverse the table, which is quicker
            sorttable.reverse(this.sorttable_tbody);
            this.className = this.className.replace('sorttable_sorted_reverse',
                                                    'sorttable_sorted');
            this.removeChild(document.getElementById('sorttable_sortrevind'));
            sortfwdind = document.createElement('span');
            sortfwdind.id = "sorttable_sortfwdind";
            sortfwdind.innerHTML = stIsIE ? '&nbsp<font face="webdings">6</font>' : '&nbsp;&#x25BE;';
            this.appendChild(sortfwdind);
            return;
          }

          // remove sorttable_sorted classes
          theadrow = this.parentNode;
          forEach(theadrow.childNodes, function(cell) {
            if (cell.nodeType == 1) { // an element
              cell.className = cell.className.replace('sorttable_sorted_reverse','');
              cell.className = cell.className.replace('sorttable_sorted','');
            }
          });
          sortfwdind = document.getElementById('sorttable_sortfwdind');
          if (sortfwdind) { sortfwdind.parentNode.removeChild(sortfwdind); }
          sortrevind = document.getElementById('sorttable_sortrevind');
          if (sortrevind) { sortrevind.parentNode.removeChild(sortrevind); }

          this.className += ' sorttable_sorted';
          sortfwdind = document.createElement('span');
          sortfwdind.id = "sorttable_sortfwdind";
          sortfwdind.innerHTML = stIsIE ? '&nbsp<font face="webdings">6</font>' : '&nbsp;&#x25BE;';
          this.appendChild(sortfwdind);

	        // build an array to sort. This is a Schwartzian transform thing,
	        // i.e., we "decorate" each row with the actual sort key,
	        // sort based on the sort keys, and then put the rows back in order
	        // which is a lot faster because you only do getInnerText once per row
	        row_array = [];
	        col = this.sorttable_columnindex;
	        rows = this.sorttable_tbody.rows;
	        for (var j=0; j<rows.length; j++) {
	          row_array[row_array.length] = [sorttable.getInnerText(rows[j].cells[col]), rows[j]];
	        }
	        /* If you want a stable sort, uncomment the following line */
	        //sorttable.shaker_sort(row_array, this.sorttable_sortfunction);
	        /* and comment out this one */
	        row_array.sort(this.sorttable_sortfunction);
          row_array.reverse();

	        tb = this.sorttable_tbody;
	        for (var j=0; j<row_array.length; j++) {
	          tb.appendChild(row_array[j][1]);
	        }

	        delete row_array;
	      });
	    }
    }
  },

  guessType: function(table, column) {
    // guess the type of a column based on its first non-blank row
    sortfn = sorttable.sort_alpha;
    for (var i=0; i<table.tBodies[0].rows.length; i++) {
      text = sorttable.getInnerText(table.tBodies[0].rows[i].cells[column]);
      if (text != '') {
        if (text.match(/^-?[�$�]?[\d,.]+%?$/)) {
          return sorttable.sort_numeric;
        }
        // check for a date: dd/mm/yyyy or dd/mm/yy
        // can have / or . or - as separator
        // can be mm/dd as well
        possdate = text.match(sorttable.DATE_RE)
        if (possdate) {
          // looks like a date
          first = parseInt(possdate[1]);
          second = parseInt(possdate[2]);
          if (first > 12) {
            // definitely dd/mm
            return sorttable.sort_ddmm;
          } else if (second > 12) {
            return sorttable.sort_mmdd;
          } else {
            // looks like a date, but we can't tell which, so assume
            // that it's dd/mm (English imperialism!) and keep looking
            sortfn = sorttable.sort_ddmm;
          }
        }
      }
    }
    return sortfn;
  },

  getInnerText: function(node) {
    // gets the text we want to use for sorting for a cell.
    // strips leading and trailing whitespace.
    // this is *not* a generic getInnerText function; it's special to sorttable.
    // for example, you can override the cell text with a customkey attribute.
    // it also gets .value for <input> fields.

    if (!node) return "";

    hasInputs = (typeof node.getElementsByTagName == 'function') &&
                 node.getElementsByTagName('input').length;

    if (node.getAttribute("sorttable_customkey") != null) {
      return node.getAttribute("sorttable_customkey");
    }
    else if (typeof node.textContent != 'undefined' && !hasInputs) {
      return node.textContent.replace(/^\s+|\s+$/g, '');
    }
    else if (typeof node.innerText != 'undefined' && !hasInputs) {
      return node.innerText.replace(/^\s+|\s+$/g, '');
    }
    else if (typeof node.text != 'undefined' && !hasInputs) {
      return node.text.replace(/^\s+|\s+$/g, '');
    }
    else {
      switch (node.nodeType) {
        case 3:
          if (node.nodeName.toLowerCase() == 'input') {
            return node.value.replace(/^\s+|\s+$/g, '');
          }
        case 4:
          return node.nodeValue.replace(/^\s+|\s+$/g, '');
          break;
        case 1:
        case 11:
          var innerText = '';
          for (var i = 0; i < node.childNodes.length; i++) {
            innerText += sorttable.getInnerText(node.childNodes[i]);
          }
          return innerText.replace(/^\s+|\s+$/g, '');
          break;
        default:
          return '';
      }
    }
  },

  reverse: function(tbody) {
    // reverse the rows in a tbody
    newrows = [];
    for (var i=0; i<tbody.rows.length; i++) {
      newrows[newrows.length] = tbody.rows[i];
    }
    for (var i=newrows.length-1; i>=0; i--) {
       tbody.appendChild(newrows[i]);
    }
    delete newrows;
  },

  /* sort functions
     each sort function takes two parameters, a and b
     you are comparing a[0] and b[0] */
  sort_numeric: function(a,b) {
    aa = parseFloat(a[0].replace(/[^0-9.-]/g,''));
    if (isNaN(aa)) aa = 0;
    bb = parseFloat(b[0].replace(/[^0-9.-]/g,''));
    if (isNaN(bb)) bb = 0;
    return aa-bb;
  },
  sort_alpha: function(a,b) {
    if (a[0]==b[0]) return 0;
    if (a[0]<b[0]) return -1;
    return 1;
  },
  sort_ddmm: function(a,b) {
    mtch = a[0].match(sorttable.DATE_RE);
    y = mtch[3]; m = mtch[2]; d = mtch[1];
    if (m.length == 1) m = '0'+m;
    if (d.length == 1) d = '0'+d;
    dt1 = y+m+d;
    mtch = b[0].match(sorttable.DATE_RE);
    y = mtch[3]; m = mtch[2]; d = mtch[1];
    if (m.length == 1) m = '0'+m;
    if (d.length == 1) d = '0'+d;
    dt2 = y+m+d;
    if (dt1==dt2) return 0;
    if (dt1<dt2) return -1;
    return 1;
  },
  sort_mmdd: function(a,b) {
    mtch = a[0].match(sorttable.DATE_RE);
    y = mtch[3]; d = mtch[2]; m = mtch[1];
    if (m.length == 1) m = '0'+m;
    if (d.length == 1) d = '0'+d;
    dt1 = y+m+d;
    mtch = b[0].match(sorttable.DATE_RE);
    y = mtch[3]; d = mtch[2]; m = mtch[1];
    if (m.length == 1) m = '0'+m;
    if (d.length == 1) d = '0'+d;
    dt2 = y+m+d;
    if (dt1==dt2) return 0;
    if (dt1<dt2) return -1;
    return 1;
  },

  shaker_sort: function(list, comp_func) {
    // A stable sort function to allow multi-level sorting of data
    // see: http://en.wikipedia.org/wiki/Cocktail_sort
    // thanks to Joseph Nahmias
    var b = 0;
    var t = list.length - 1;
    var swap = true;

    while(swap) {
        swap = false;
        for(var i = b; i < t; ++i) {
            if ( comp_func(list[i], list[i+1]) > 0 ) {
                var q = list[i]; list[i] = list[i+1]; list[i+1] = q;
                swap = true;
            }
        } // for
        t--;

        if (!swap) break;

        for(var i = t; i > b; --i) {
            if ( comp_func(list[i], list[i-1]) < 0 ) {
                var q = list[i]; list[i] = list[i-1]; list[i-1] = q;
                swap = true;
            }
        } // for
        b++;

    } // while(swap)
  }
}

/* ******************************************************************
   Supporting functions: bundled here to avoid depending on a library
   ****************************************************************** */

// Dean Edwards/Matthias Miller/John Resig

/* for Mozilla/Opera9 */
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", sorttable.init, false);
}

/* for Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
    document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
    var script = document.getElementById("__ie_onload");
    script.onreadystatechange = function() {
        if (this.readyState == "complete") {
            sorttable.init(); // call the onload handler
        }
    };
/*@end @*/

/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
    var _timer = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            sorttable.init(); // call the onload handler
        }
    }, 10);
}

/* for other browsers */
window.onload = sorttable.init;

// written by Dean Edwards, 2005
// with input from Tino Zijdel, Matthias Miller, Diego Perini

// http://dean.edwards.name/weblog/2005/10/add-event/

function dean_addEvent(element, type, handler) {
	if (element.addEventListener) {
		element.addEventListener(type, handler, false);
	} else {
		// assign each event handler a unique ID
		if (!handler.$$guid) handler.$$guid = dean_addEvent.guid++;
		// create a hash table of event types for the element
		if (!element.events) element.events = {};
		// create a hash table of event handlers for each element/event pair
		var handlers = element.events[type];
		if (!handlers) {
			handlers = element.events[type] = {};
			// store the existing event handler (if there is one)
			if (element["on" + type]) {
				handlers[0] = element["on" + type];
			}
		}
		// store the event handler in the hash table
		handlers[handler.$$guid] = handler;
		// assign a global event handler to do all the work
		element["on" + type] = handleEvent;
	}
};
// a counter used to create unique IDs
dean_addEvent.guid = 1;

function removeEvent(element, type, handler) {
	if (element.removeEventListener) {
		element.removeEventListener(type, handler, false);
	} else {
		// delete the event handler from the hash table
		if (element.events && element.events[type]) {
			delete element.events[type][handler.$$guid];
		}
	}
};

function handleEvent(event) {
	var returnValue = true;
	// grab the event object (IE uses a global event object)
	event = event || fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
	// get a reference to the hash table of event handlers
	var handlers = this.events[event.type];
	// execute each event handler
	for (var i in handlers) {
		this.$$handleEvent = handlers[i];
		if (this.$$handleEvent(event) === false) {
			returnValue = false;
		}
	}
	return returnValue;
};

function fixEvent(event) {
	// add W3C standard event methods
	event.preventDefault = fixEvent.preventDefault;
	event.stopPropagation = fixEvent.stopPropagation;
	return event;
};
fixEvent.preventDefault = function() {
	this.returnValue = false;
};
fixEvent.stopPropagation = function() {
  this.cancelBubble = true;
}

// Dean's forEach: http://dean.edwards.name/base/forEach.js
/*
	forEach, version 1.0
	Copyright 2006, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

// array-like enumeration
if (!Array.forEach) { // mozilla already supports this
	Array.forEach = function(array, block, context) {
		for (var i = 0; i < array.length; i++) {
			block.call(context, array[i], i, array);
		}
	};
}

// generic enumeration
Function.prototype.forEach = function(object, block, context) {
	for (var key in object) {
		if (typeof this.prototype[key] == "undefined") {
			block.call(context, object[key], key, object);
		}
	}
};

// character enumeration
String.forEach = function(string, block, context) {
	Array.forEach(string.split(""), function(chr, index) {
		block.call(context, chr, index, string);
	});
};

// globally resolve forEach enumeration
var forEach = function(object, block, context) {
	if (object) {
		var resolve = Object; // default
		if (object instanceof Function) {
			// functions have a "length" property
			resolve = Function;
		} else if (object.forEach instanceof Function) {
			// the object implements a custom forEach method so use that
			object.forEach(block, context);
			return;
		} else if (typeof object == "string") {
			// the object is a string
			resolve = String;
		} else if (typeof object.length == "number") {
			// the object is array-like
			resolve = Array;
		}
		resolve.forEach(object, block, context);
	}
};


/**
 *  Detect support for pointer events
 *  Used to disable the custom dropdown button
 *  See https://github.com/ausi/Feature-detection-technique-for-pointer-events/blob/master/modernizr-pointerevents.js
 */
(function () {
    var pointerEvents = 'pointer-events';
    var element = document.createElement('x');
    element.style.cssText = pointerEvents + ':auto';
    if (element.style.pointerEvents !== 'auto') {
        document.documentElement.className += ' no-' + pointerEvents;
    }
}());

// Collapsible tables
$(document).ready(function() {
    $('.table-collapse--toggle').click(function(){
        $(this).toggleClass("active");
        $(this).next().toggle();
    });
});
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