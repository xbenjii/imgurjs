var qs = require('querystring');

var Album = function(imgur) {

    this.album = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('get', 'album/{id}', options);
    };

    this.images = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('get', 'album/{id}/images', options);
    };

    this.image = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('album_id')) {
            throw new Error('album_id required');
        }
        if (!params.hasOwnProperty('image_id')) {
            throw new Error('image_id required');
        }
        var options = imgur.extend(params, {
            album_id: params.album_id,
            image_id: params.image_id
        });
        return imgur.request('get', 'album/{album_id}/image/{image_id}', options);
    };

    this.create = function(params) {
        params = params || {};
        var options = imgur.extend(params, {
            data: params.data
        });
        return imgur.request('post', 'album', options);
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
        return imgur.request('post', 'album/{id}', options);
    };

    this.delete = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('album id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('delete', 'album/{id}', options);
    };

    this.favorite = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('post', 'album/{id}/favorite', options);
    };

    this.setImages = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('album_id')) {
            throw new Error('album_id required');
        }
        if (!params.hasOwnProperty('image_ids') || !Array.isArray(params.image_ids)) {
            throw new Error('array of image_ids required');
        }
        var options = imgur.extend(params, {
            album_id: params.album_id,
            data: {
                ids: params.image_ids.join(",")
            }
        });
        return imgur.request('post', 'album/{album_id}', options);
    };

    this.addImages = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('album_id')) {
            throw new Error('album_id required');
        }
        if (!params.hasOwnProperty('image_ids') || !Array.isArray(params.image_ids)) {
            throw new Error('array of image_ids required');
        }
        var options = imgur.extend(params, {
            album_id: params.album_id,
            data: {
                ids: params.image_ids.join(",")
            }
        });
        return imgur.request('put', 'album/{album_id}/add', options);
    };

    this.deleteImages = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('album_id')) {
            throw new Error('album_id required');
        }
        if (!params.hasOwnProperty('image_ids') || !Array.isArray(params.image_ids)) {
            throw new Error('array of image_ids required');
        }
        var options = imgur.extend(params, {
            album_id: params.album_id,
            data: {
                ids: params.image_ids.join(",")
            }
        });
        return imgur.request('delete', 'album/{album_id}/remove_images?' + qs.stringify(options.data), options);
    };

    return this;
};

module.exports = Album;
