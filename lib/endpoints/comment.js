var Comment = function(imgur) {

    this.comment = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('comment id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('get', 'comment/{id}', options);
    };

    this.create = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('image_id')) {
            throw new Error('image_id required');
        }
        if (!params.hasOwnProperty('comment')) {
            throw new Error('comment text required');
        }
        var options = imgur.extend(params, {
            data: {
                image_id: params.image_id,
                comment: params.comment
            }
        });
        if (typeof params.parent_id !== "undefined") {
            options.data.parent_id = params.parent_id;
        }
        return imgur.request('post', 'comment', options);
    };

    this.delete = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('comment id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('delete', 'comment/{id}', options);
    };

    this.replies = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('comment id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('get', 'comment/{id}/replies', options);
    };

    this.createReply = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('comment_id')) {
            throw new Error('comment id required');
        }
        if (!params.hasOwnProperty('image_id')) {
            throw new Error('image id required');
        }
        if (!params.hasOwnProperty('comment')) {
            throw new Error('comment text required');
        }
        var options = imgur.extend(params, {
            comment_id: params.comment_id,
            data: {
                image_id: params.image_id,
                comment: params.comment
            }
        });
        return imgur.request('post', 'comment/{comment_id}', options);
    };

    this.vote = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('comment id required');
        }
        if (!params.hasOwnProperty('vote') && (params.vote !== 'up' || params.vote !== 'down')) {
            throw new Error('vote required and must be "up" or "down"');
        }
        var options = imgur.extend(params, {
            id: params.id,
            vote: params.vote
        });
        return imgur.request('post', 'comment/{id}/vote/{vote}', options);
    };

    this.report = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('comment id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('post', 'comment/{id}/report', options);
    };

    return this;

};

module.exports = Comment;
