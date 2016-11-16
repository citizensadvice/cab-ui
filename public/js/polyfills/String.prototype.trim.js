// https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/String.prototype.trim/polyfill.js
String.prototype.trim = String.prototype.trim || function trim() {
    return this.replace(/^\s+|\s+$/g, '');
};