// https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/Date.now/polyfill.js
Date.now = Date.now || function now() {
    return new Date().getTime();
};
