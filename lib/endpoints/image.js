var stream = require('stream');

var Image = function(imgur) {

    this.image = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('get', 'image/{id}', options);
    };

    this.upload = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('image')) {
            throw new Error('image required, can be a binary file, base64 data or a URL');
        }
        var options = imgur.extend(params, {
            data: params.data,
            file: params.file
        });
        if (typeof params.file === 'string') {
            if (/https?:\/\//.test(params.file)) {
                options.data.file = 'URL';
            } else {
                options.data.type = 'base64';
            }
        } else if (params.file instanceof stream.Stream) {
            options.data.type = 'file'
        }
        return imgur.request('post', 'image', options);
    };

    this.delete = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('delete', 'image/{id}', options);
    };

    this.update = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id,
            data: params.data
        });
        return imgur.request('post', 'image/{id}', options);
    };

    this.favorite = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('post', 'image/{id}/favorite', options);
    };

    return this;

};

module.exports = Image;