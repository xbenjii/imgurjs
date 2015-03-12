var Notification = function(imgur) {

    this.notifications = function(params) {
        params = params || {};
        var options = imgur.extend(params, {
            newReplies: params.newReplies || 'true'
        });
        return imgur.request('get', 'notification?new={newReplies}', options);
    };

    this.notification = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id
        });
        return imgur.request('get', 'notification/{id}', options);
    };

    this.setViewed = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('ids') || !Array.isArray(params.ids)) {
            throw new Error('ids required and must be an array');
        }
        var options = imgur.extend(params, {
            ids: params.id.join(",")
        });
        return imgur.request('post', 'notification', options);
    };

    return this;
};

module.exports = Notification;