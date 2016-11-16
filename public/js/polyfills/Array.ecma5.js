// Taken from https://github.com/Financial-Times/polyfill-service/tree/master/polyfills
// See http://kangax.github.io/compat-table/es5/
// All array extras are included here
(function (Array) {
    var arrayProto = Array.prototype;

    // Not quite a full polyfill as this is enumerable, but that is fine for our purposes
    Array.isArray = Array.isArray || function (object) {
        return Object.prototype.toString.call(object) === '[object Array]';
    };

    arrayProto.every = arrayProto.every || function every(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }
        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }
        var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Number(arraylike.length) || 0,
        index = -1;
        while (++index < length) {
            if (index in arraylike && !callback.call(scope, arraylike[index], index, object)) {
                return false;
            }
        }
        return true;
    };

    arrayProto.filter = arrayProto.filter || function filter(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }
        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }
        var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = -1,
        result = [],
        element;
        while (++index < length) {
            element = arraylike[index];
            if (index in arraylike && callback.call(scope, element, index, object)) {
                result.push(element);
            }
        }
        return result;
    };

    arrayProto.forEach = arrayProto.forEach || function forEach(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }
        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }
        var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = -1,
        result = [],
        element;
        while (++index < length) {
            if (index in arraylike) {
                callback.call(scope, arraylike[index], index, object);
            }
        }
    };

    arrayProto.indexOf = arrayProto.indexOf || function indexOf(searchElement) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }
        var
        arraylike = this instanceof String ? this.split('') : this,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = Number(arguments[1]) || 0;
        index = (index < 0 ? Math.max(length + index, 0) : index) - 1;
        while (++index < length) {
            if (index in arraylike && arraylike[index] === searchElement) {
                return index;
            }
        }
        return -1;
    };

    arrayProto.lastIndexOf = arrayProto.lastIndexOf || function lastIndexOf(searchElement) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }
        var
        arraylike = this instanceof String ? this.split('') : this,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = Number(arguments[1]) || 0;
        index = 1 in arguments ? (index < 0 ? Math.max(length + index, 0) : index) + 1 : length;
        while (--index >= 0) {
            if (index in arraylike && arraylike[index] === searchElement) {
                return index;
            }
        }
        return -1;
    };

    arrayProto.map = arrayProto.map || function map(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }
        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }
        var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = -1,
        result = [],
        element;
        while (++index < length) {
            if (index in arraylike) {
                result[index] = callback.call(scope, arraylike[index], index, object);
            }
        }
        return result;
    };

    arrayProto.reduce = arrayProto.reduce || function reduce(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }
        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }
        var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = -1,
        previousValue;
        if (1 in arguments) {
            previousValue = arguments[1];
        } else {
            while (++index < length && !(index in arraylike)) { }
            if (index >= length) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            previousValue = arraylike[index];
        }
        while (++index < length) {
            if (index in arraylike) {
                previousValue = callback(previousValue, arraylike[index], index, object);
            }
        }
        return previousValue;
    };

    arrayProto.reduceRight = arrayProto.reduceRight || function reduceRight(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }
        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }
        var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = -1,
        index = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        previousValue;
        if (1 in arguments) {
            previousValue = arguments[1];
        } else {
            while (--index > length && !(index in arraylike)) { }
            if (index <= length) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            previousValue = arraylike[index];
        }
        while (--index > length) {
            if (index in arraylike) {
                previousValue = callback(previousValue, arraylike[index], index, object);
            }
        }
        return previousValue;
    };

    arrayProto.some = arrayProto.some || function some(callback) {
        if (this === undefined || this === null) {
            throw new TypeError(this + 'is not an object');
        }
        if (!(callback instanceof Function)) {
            throw new TypeError(callback + ' is not a function');
        }
        var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = -1;
        while (++index < length) {
            if (index in arraylike && callback.call(scope, arraylike[index], index, object)) {
                return true;
            }
        }
        return false;
    };

}(Array));
