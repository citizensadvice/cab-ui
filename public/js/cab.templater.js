/**
 *  Micro-templater
 *  Replaces {name} with the property from data
 */
window.cab.templater = function templater(str, data) {
    return str.replace(/\{([^}]+)\}/g, function (m, name) {
        return data[name] || '';
    });
};