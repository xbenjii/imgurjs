var Oauth = function(imgur) {

    this.getOauthUrl = function() {
        return 'https://api.imgur.com/oauth2/authorize?client_id=' + imgur.options.clientId + '&response_type=code';
    };

    this.authorizeCallback = function(authCode) {
        if (typeof authCode === "undefined" || !authCode) {
            throw new Error('authorization code required');
        }
        var options = {
            data: {
                client_id: imgur.options.clientId,
                client_secret: imgur.options.clientSecret,
                grant_type: 'authorization_code',
                code: authCode
            }
        };
        return imgur.request('post', 'https://api.imgur.com/oauth2/token', options).then(function(data) {
            data.expiresAt = Math.round(Date.now() + (data.expires_in * 1000));
            return data;
        });
    };

    this.refreshToken = function(refreshToken) {
        if (typeof refreshToken === "undefined" || !refreshToken) {
            throw new Error('No refresh token defined');
        }
        var options = {
            data: {
                client_id: imgur.options.clientId,
                client_secret: imgur.options.clientSecret,
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            }
        };
        return imgur.request('post', 'https://api.imgur.com/oauth2/token', options).then(function(data) {
            data.expiresAt = Math.round(Date.now() + (data.expires_in * 1000));
            return data;
        });
    };

    return this;

};

module.exports = Oauth;