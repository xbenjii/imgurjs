var Conversation = function(imgur) {

    this.conversations = function(params) {
        params = params || {};
        var options = params;
        return imgur.request('get', 'conversations', options);
    };

    this.conversation = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id,
            page: params.page || 1,
            offset: params.offset || 0
        });
        return imgur.request('get', 'conversations/{id}/{page}/{offset}', options);
    };

    this.createMessage = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('recipient')) {
            throw new Error('recipient required');
        }
        if (!params.hasOwnProperty('message')) {
            throw new Error('message required');
        }
        var options = imgur.extend(params, {
            recipient: params.recipient,
            data: {
                body: params.message
            }
        });
        return imgur.request('post', 'conversations/{recipient}', options);
    };

    this.delete = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id required');
        }
        var options = imgur.extend(params, {
            id: params.id,
        });
        return imgur.request('delete', 'conversations/{id}', options);
    };

    this.reportSender = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username
        });
        return imgur.request('post', 'conversations/report/{username}', options);
    };

    this.blockSender = function(params) {
        params = params || {};
        if (!params.hasOwnProperty('username')) {
            throw new Error('username required');
        }
        var options = imgur.extend(params, {
            username: params.username
        });
        return imgur.request('get', 'conversations/block/{username}', options);
    };

    return this;
};

module.exports = Conversation;