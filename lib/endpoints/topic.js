var Topic = function(imgur) {

    this.topics = function(params) {
        params = params || {};
        var options = params;
        return imgur.request('get', 'topics/defaults', options);
    };

    this.topic = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id,
            sort: params.sort || 'viral',
            window: params.window || 'week',
            page: params.page || 0,
        });
        return imgur.request('get', 'topics/{id}/{sort}/{window}/{page}', options);
    };

    this.item = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('topic_id')) {
            throw new Error('topic_id required');
        }
        if (!params.hasOwnProperty('item_id')) {
            throw new Error('item_id required');
        }
        var options = imgur.extend(params, {
            topic_id: params.topic_id,
            item_id: params.item_id
        });
        return imgur.request('get', 'topics/{topic_id}/{item_id}', options);
    };

    return this;
};

module.exports = Topic;
