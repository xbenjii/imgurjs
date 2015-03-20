# imgurjs
A wrapper for the Imgur API written in JavaScript. All methods take advantage of Promises.

## Installation

    npm install --save imgurjs

## Instantiation
    var Imgur = require('imgurjs');
    var imgur = new Imgur({
        clientId: 'myClientId',
        clientSecret: 'myClientSecret'
    });

##Using it
##### Since this library takes advantage of promises, all methods should use the promise pattern. Options should be passed as an object to the method.

    var options = {
        username: 'me'
    };
    imgur.endpoint.method(options).then(function(data) {
        console.log(data);
    }).catch(function(error) {
        console.log(error);
    });

## Authentication
##### Example uses Express
    router.get('/login', function(req, res, next) {
        res.redirect(imgur.oauth.getOauthUrl());
    });

    router.get('/loginCallback', function(req, res, next) {
        imgur.oauth.authorizeCallback(req.query.code).then(function(user) {
            req.session.user = user;
            res.redirect('/');
        });
    });

    router.get('./refreshsession', function(req, res, next) {
        imgur.oauth.refreshToken(req.session.user.refresh_token).then(function(user) {
            req.session.user = user;
            res.redirect('/');
        });
    });

Full documentation is available at [https://xbenjii.github.io/imgurjs](https://xbenjii.github.io/imgurjs)