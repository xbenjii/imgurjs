var CustomGallery = function(imgur) {

    this.galleries = function(params) {
        params = params || {};
        var options = imgur.extend(params, {
            sort: params.sort || 'viral',
            page: params.page || 0,
            window: params.window || 'week'
        });
        return imgur.request('get', 'g/custom/{sort}/{window}/{page}', options);
    };

    this.filtered = function(params) {
        params = params || {};
        var options = imgur.extend(params, {
            sort: params.sort || 'viral',
            page: params.page || 0,
            window: params.window || 'week'
        });
        return imgur.request('get', 'g/filtered/{sort}/{window}/{page}', options);
    };

    this.image = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('comment id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('get', 'g/custom/{id}', options);
    };

    this.addTags = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('tags') || !Array.isArray(params.tags)) {
            throw new Error('tags required and must be an array');
        }
        var options = imgur.extend(params, {
            data: {
                tags: params.tags
            }
        });
        return imgur.request('put', 'g/custom/add_tags', options);
    };

    this.removeTags = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('tags') || !Array.isArray(params.tags)) {
            throw new Error('tags required and must be an array');
        }
        var options = imgur.extend(params, {
            data: {
                tags: params.tags
            }
        });
        return imgur.request('delete', 'g/custom/remove_tags', options);
    };

    this.filteredBlockTag = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('tag')) {
            throw new Error('tag required');
        }
        var options = imgur.extend(params, {
            data: {
                tag: params.tag
            }
        });
        return imgur.request('post', 'g/custom/block_tag', options);
    };

    this.filteredUnblockTag = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('tag')) {
            throw new Error('tag required');
        }
        var options = imgur.extend(params, {
            data: {
                tag: params.tag
            }
        });
        return imgur.request('post', 'g/custom/unblock_tag', options);
    };

    return this;

};

module.exports = CustomGallery;