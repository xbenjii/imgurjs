var Account = function(imgur) {

    this.account = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username
        });
        return imgur.request('get', 'account/{username}', options);
    };

    this.galleryFavorites = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            page: params.page || 0,
            sort: params.sort || 'newest'
        });
        return imgur.request('get', 'account/{username}/gallery_favorites/{page}/{sort}', options);
    };

    this.favorites = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username
        });
        return imgur.request('get', 'account/{username}/favorites', options);
    };

    this.submissions = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            page: params.page || 0
        });
        return imgur.request('get', 'account/{username}/submissions/{page}', options);
    };

    this.settings = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username
        });
        return imgur.request('get', 'account/{username}/settings', options);
    };

    this.changeSettings = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            data: params.data
        });
        return imgur.request('post', 'account/{username}/settings', options);
    };

    this.galleryProfile = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username
        });
        return imgur.request('get', 'account/{username}/gallery_profile', options);
    };

    this.verifyEmail = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username
        });
        return imgur.request('get', 'account/{username}/verifyemail', options);
    }

    this.sendVerificationEmail = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username
        });
        return imgur.request('post', 'account/{username}/verifyemail', options);
    };

    this.albums = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            page: params.page || 0
        });
        return imgur.request('get', 'account/{username}/albums/{page}', options);
    };

    this.album = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            id: params.id
        });
        return imgur.request('get', 'account/{username}/album/{id}', options);
    };

    this.albumIds = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            page: params.page || 0
        });
        return imgur.request('get', 'account/{username}/albums/ids/{page}', options);
    };

    this.albumCount = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username
        });
        return imgur.request('get', 'account/{username}/albums/acount', options);
    };

    this.deleteAlbum = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            id: params.id
        });
        return imgur.request('delete', 'account/{username}/album/{id}', options);
    };

    this.comments = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            sort: params.sort || 'newest',
            page: params.page || 0
        });
        return imgur.request('get', 'account/{username}/comments/{sort}/{page}', options);
    };

    this.comment = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            id: params.id
        });
        return imgur.request('get', 'account/{username}/comment/{id}', options);
    };

    this.commentIds = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            sort: params.sort || 'newest',
            page: params.page || 0
        });
        return imgur.request('get', 'account/{username}/comments/ids/{sort}/{page}', options);
    };

    this.commentCount = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username,
        });
        return imgur.request('get', 'account/{username}/comments/count', options);
    };

    this.deleteComment = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            id: params.id
        });
        return imgur.request('delete', 'account/{username}/comment/{id}', options);
    };

    this.images = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            page: params.page || 0
        });
        return imgur.request('get', 'account/{username}/images/{page}', options);
    };

    this.image = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            id: params.id
        });
        return imgur.request('get', 'account/{username}/image/{id}', options);
    };

    this.imageIds = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            page: params.page || 0
        });
        return imgur.request('get', 'account/{username}/images/ids/{page}', options);
    };

    this.imageCount = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username,
        });
        return imgur.request('get', 'account/{username}/images/count', options);
    };

    this.deleteImage = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        if (!params.hasOwnProperty('deletehash')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            deletehash: params.deletehash
        });
        return imgur.request('get', 'account/{username}/image/{deletehash}', options);
    };

    this.replies = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username,
            newReplies: params.newReplies || 'true'
        });
        return imgur.request('get', 'account/{username}/notifications/replies?newReplies={newReplies}', options);
    };

    return this;
};

module.exports = Account;
