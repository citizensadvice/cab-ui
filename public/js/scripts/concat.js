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
/*!
 * clipboard.js v1.5.10
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(c,a){if(!n[c]){if(!e[c]){var s="function"==typeof require&&require;if(!a&&s)return s(c,!0);if(r)return r(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[c]={exports:{}};e[c][0].call(u.exports,function(t){var n=e[c][1][t];return i(n?n:t)},u,u.exports,t,e,n,o)}return n[c].exports}for(var r="function"==typeof require&&require,c=0;c<o.length;c++)i(o[c]);return i}({1:[function(t,e,n){var o=t("matches-selector");e.exports=function(t,e,n){for(var i=n?t:t.parentNode;i&&i!==document;){if(o(i,e))return i;i=i.parentNode}}},{"matches-selector":5}],2:[function(t,e,n){function o(t,e,n,o,r){var c=i.apply(this,arguments);return t.addEventListener(n,c,r),{destroy:function(){t.removeEventListener(n,c,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e,!0),n.delegateTarget&&o.call(t,n)}}var r=t("closest");e.exports=o},{closest:1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!a.string(e))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(t))return i(t,e,n);if(a.nodeList(t))return r(t,e,n);if(a.string(t))return c(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function c(t,e,n){return s(document.body,t,e,n)}var a=t("./is"),s=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t,e){if(r)return r.call(t,e);for(var n=t.parentNode.querySelectorAll(e),o=0;o<n.length;++o)if(n[o]==t)return!0;return!1}var i=Element.prototype,r=i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=o},{}],6:[function(t,e,n){function o(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=o},{}],7:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;i>o;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,c=o.length;c>r;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if("undefined"!=typeof o)r(n,e("select"));else{var c={exports:{}};r(c,i.select),i.clipboardAction=c.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){this.text?this.selectFake():this.target&&this.selectTarget()},t.prototype.selectFake=function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return e.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="fixed",this.fakeElem.style[n?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=(0,i.default)(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},c(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==("undefined"==typeof e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=a})},{select:6}],9:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var c={exports:{}};r(c,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=c.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=i(e),u=i(n),f=i(o),d=function(t){function e(n,o){r(this,e);var i=c(this,t.call(this));return i.resolveOptions(o),i.listenClick(n),i}return a(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.listenClick=function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})},e.prototype.onClick=function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})},e.prototype.defaultAction=function t(e){return s("action",e)},e.prototype.defaultTarget=function t(e){var n=s("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return s("text",e)},e.prototype.destroy=function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(u.default);t.exports=d})},{"./clipboard-action":8,"good-listener":4,"tiny-emitter":7}]},{},[9])(9)});
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
/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=_self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var l=r[e];if(2==arguments.length){a=arguments[1];for(var i in a)a.hasOwnProperty(i)&&(l[i]=a[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==n)for(var i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);o[s]=l[s]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},plugins:{},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),l=0;a=r[l++];)t.highlightElement(a,e===!0,n)},highlightElement:function(n,a,r){for(var l,i,o=n;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1],i=t.languages[l]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var s=n.textContent,u={element:n,language:l,grammar:i,code:s};if(!s||!i)return t.hooks.run("complete",u),void 0;if(t.hooks.run("before-highlight",u),a&&_self.Worker){var g=new Worker(t.filename);g.onmessage=function(e){u.highlightedCode=e.data,t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),t.hooks.run("after-highlight",u),t.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(n),t.hooks.run("after-highlight",u),t.hooks.run("complete",u)},highlight:function(e,a,r){var l=t.tokenize(e,a);return n.stringify(t.util.encode(l),r)},tokenize:function(e,n){var a=t.Token,r=[e],l=n.rest;if(l){for(var i in l)n[i]=l[i];delete n.rest}e:for(var i in n)if(n.hasOwnProperty(i)&&n[i]){var o=n[i];o="Array"===t.util.type(o)?o:[o];for(var s=0;s<o.length;++s){var u=o[s],g=u.inside,c=!!u.lookbehind,f=0,h=u.alias;u=u.pattern||u;for(var p=0;p<r.length;p++){var d=r[p];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){c&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,k=y+v,b=d.slice(0,y+1),w=d.slice(k+1),P=[p,1];b&&P.push(b);var A=new a(i,g?t.tokenize(m,g):m,h);P.push(A),w&&P.push(w),Array.prototype.splice.apply(r,P)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,l=0;r=a[l++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var l={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==l.type&&(l.attributes.spellcheck="true"),e.alias){var i="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}t.hooks.run("wrap",l);var o="";for(var s in l.attributes)o+=(o?" ":"")+s+'="'+(l.attributes[s]||"")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'" '+o+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code,l=n.immediateClose;_self.postMessage(t.highlight(r,t.languages[a],a)),l&&_self.close()},!1),_self.Prism):_self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;

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


// Collapsible tables
$(document).ready(function() {
    $('.table-collapse--toggle').click(function(){
        $(this).toggleClass("active");
        $(this).next().toggle();
    });
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