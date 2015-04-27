var request = require('request-promise'),
    fs = require('fs'),
    path = require('path');

var Imgur = function(options) {

    this.options = {};

    if(typeof options === 'undefined') {
        throw new Error('No options specified');
    }

    if (typeof options.clientId === 'undefined' || !options.clientId) {
        throw new Error('No client ID specified, register one at "https://api.imgur.com/oauth2/addclient"');
    }

    if (typeof options.clientSecret !== 'undefined') {
        this.options.clientSecret = options.clientSecret;
    }

    this.options.clientId = options.clientId;
    this.options.version = options.version || 3;
    this.options.endPoint = 'https://api.imgur.com/' + this.options.version + '/';

    fs
        .readdirSync(path.join(__dirname, './endpoints'))
        .forEach(function(file) {
            if (~file.indexOf('.js')) {
                this[file.substring(0, file.indexOf('.'))] = require(path.join(__dirname, './endpoints', file))(this);
            }
        }.bind(this));
};

Imgur.prototype.extend = function(target, source) {
    var extended = {};
    for (var prop in target) {
        if (Object.prototype.hasOwnProperty.call(target, prop)) {
            extended[prop] = target[prop];
        }
    }
    for (var prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
            extended[prop] = source[prop];
        }
    }
    return extended;
};

Imgur.prototype.request = function(method, path, params) {
    params = params || {};
    if (typeof method === 'undefined' || ['get', 'post', 'head', 'delete'].indexOf(method.toLowerCase()) === -1) {
        throw new Error('no method specified or method isn\'t in [get, post, head, delete]');
    }
    var options = {
        method: method,
        headers: {
            Authorization: 'Client-ID ' + this.options.clientId
        },
        json: true
    };
    if (typeof params.data !== 'undefined' && method.toLowerCase() !== 'get' || method.toLowerCase() !== 'delete') {
        options.form = params.data;
    }
    if (typeof params.file !== 'undefined') {
        options.formData = params.file;
    }
    if (typeof params.access_token !== 'undefined') {
        options.headers.Authorization = 'Bearer ' + params.access_token;
    }
    for (var key in params) {
        if (['data', 'file', 'access_token'].indexOf(key) != -1)
            continue;
        if (params.hasOwnProperty(key)) {
            path = path.replace(new RegExp('\{' + key + '\}', 'g'), params[key]);
        }
    }
    options.url = /^https?:\/\//.test(path) ? path : this.options.endPoint + path;
    return request(options);
};

module.exports = Imgur;
