var qs = require('querystring');

var Gallery = function(imgur) {

    this.gallery = function(params) {
        params = params || {};
        var options = imgur.extend(params, {
            section: params.section || 'hot',
            sort: params.sort || 'viral',
            page: params.page || 0,
            window: params.window || 'day',
            showViral: params.showViral || true
        });
        return imgur.request('get', 'gallery/{section}/{sort}/{page}?showViral={showViral}', options);
    };

    this.memes = function(params) {
        params = params || {};
        var options = imgur.extend(params, {
            sort: params.sort || 'viral',
            page: params.page || 0,
            window: params.window || 'week'
        });
        return imgur.request('get', 'g/memes/{sort}/{window}/{page}', options);
    };

    this.memeImage = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('image_id')) {
            throw new Error('image_id required');
        }
        var options = imgur.extend(params, {
            image_id: params.image_id
        });
        return imgur.request('get', 'g/memes/{image_id}', options);
    };

    this.subreddit = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('subreddit')) {
            throw new Error('subreddit required');
        }
        var options = imgur.extend(params, {
            subreddit: params.subreddit,
            sort: params.sort || 'time',
            page: params.page || 0,
            window: params.window || 'week'
        });
        return imgur.request('get', 'gallery/r/{subreddit}/{sort}/{window}/{page}', options);
    };

    this.subredditImage = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('subreddit')) {
            throw new Error('subreddit required');
        }
        if (!params.hasOwnProperty('image_id')) {
            throw new Error('image_id required');
        }
        var options = imgur.extend(params, {
            subreddit: params.subreddit,
            image_id: params.image_id
        });
        return imgur.request('get', 'gallery/r/{subreddit}/{image_id}', options);
    };

    this.tag = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('t_name')) {
            throw new Error('t_name required');
        }
        var options = imgur.extend(params, {
            t_name: params.t_name,
            sort: params.sort || 'viral',
            page: params.page || 0,
            window: params.window || 'week'
        });
        return imgur.request('get', 'gallery/t/{t_name}/{sort}/{page}', options);
    };

    this.tagImage = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('t_name')) {
            throw new Error('t_name required');
        }
        if (!params.hasOwnProperty('image_id')) {
            throw new Error('image_id required');
        }
        var options = imgur.extend(params, {
            t_name: params.t_name,
            image_id: params.image_id
        });
        return imgur.request('get', 'gallery/t/{t_name}/{image_id}', options);
    };

    this.itemTags = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('get', 'gallery/{id}/tags', options);
    };

    this.tagVote = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        if (!params.hasOwnProperty('t_name')) {
            throw new Error('t_name required');
        }
        if (!params.hasOwnProperty('vote')) {
            throw new Error('vote required');
        }
        var options = imgur.extend(params, {
            id: params.id,
            t_name: params.t_name,
            vote: params.vote
        });
        return imgur.request('post', 'gallery/{id}/vote/tag/{t_name}/{vote}', options);
    };

    this.search = function(params) {
        params = params || {};
        var options = imgur.extend(params, {
            sort: params.sort || 'time',
            window: params.window || 'all',
            page: params.page || 0
        });
        var query;
        if (typeof params.q === 'undefined') {
            throw new Error('q required');
        } else if (typeof params.q === 'string') {
            query = 'q=' + params.q;
        } else {
            query = qs.stringify(params.q);
        }
        return imgur.request('get', 'gallery/search/{sort}/{window}/{page}?' + query, options);
    };

    this.random = function(params) {
        params = params || {};
        var options = imgur.extend(params, {
            page: params.page || 0
        });
        return imgur.request('get', 'gallery/random/random/{page}', options);
    };

    this.publish = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id,
            data: {
                topic: params.topic || '',
                terms: 1
            }
        });
        return imgur.request('post', 'gallery/{id}', options);
    };

    this.delete = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('delete', 'gallery/{id}', options);
    };

    this.album = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('get', 'gallery/album/{id}', options);
    };

    this.image = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('get', 'gallery/image/{id}', options);
    };

    this.report = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('post', 'gallery/{id}/report', options);
    };

    this.votes = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('get', 'gallery/{id}/votes', options);
    };

    this.vote = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        if (!params.hasOwnProperty('vote')) {
            throw new Error('vote required');
        }
        var options = imgur.extend(params, {
            id: params.id,
            vote: params.vote
        });
        return imgur.request('post', 'gallery/{id}/vote/{vote}', options);
    };

    this.comments = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id,
            sort: params.sort || 'best'
        });
        return imgur.request('get', 'gallery/{id}/comments/{sort}', options);
    };

    this.comment = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('gallery_id')) {
            throw new Error('gallery_id required');
        }
        if (!params.hasOwnProperty('comment_id')) {
            throw new Error('comment_id required');
        }
        var options = imgur.extend(params, {
            gallery_id: params.gallery_id,
            comment_id: params.comment_id
        });
        return imgur.request('get', 'gallery/{gallery_id}/comment/{comment_id}', options);
    };

    this.createCommentReply = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('gallery_id')) {
            throw new Error('gallery_id required');
        }
        if (!params.hasOwnProperty('comment_id')) {
            throw new Error('comment_id required');
        }
        if (!params.hasOwnProperty('comment')) {
            throw new Error('comment required');
        }
        var options = imgur.extend(params, {
            gallery_id: params.gallery_id,
            comment_id: params.comment_id,
            data: {
                comment: params.comment
            }
        });
        return imgur.request('post', 'gallery/{gallery_id}/comment/{comment_id}', options);
    };

    this.createComment = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        if (!params.hasOwnProperty('comment')) {
            throw new Error('comment required');
        }
        var options = imgur.extend(params, {
            id: params.id,
            data: {
                comment: params.comment
            }
        });
        return imgur.request('post', 'gallery/{id}/comment', options);
    };

    this.commentIds = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id,
        });
        return imgur.request('get', 'gallery/{id}/comments/ids', options);
    };

    this.commentCount = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('get', 'gallery/{id}/comments/count', options);
    };

    return this;
};

module.exports = Gallery;