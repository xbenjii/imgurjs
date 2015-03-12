# imgurjs
A wrapper for the Imgur API written in JavaScript.

## How to use
Init with:
``` JavaScript
var Imgur = require('imgurjs');
var imgur = new Imgur({
    clientId: '<Your Imgur Client ID>',
    clientSecret: '<Your Imgur Client Secret>' //Only needed if you're planning to use OAuth.
});
```
Using it:
``` JavaScript
imgur.gallery.gallery().then(function(response) {
    console.log(response);
}, function(error) {
    console.error(error);
});
```
Or:
``` JavaScript
imgur.gallery.search({
    q: 'Funny'
}).then(function(response) {
    console.log(response);
}).catch(function(errors) {
    console.log(errors);
});
```

Login in Express example:
``` JavaScript
//Instantiate with the client secret
var imgur = new Imgur({
    clientId: '<Your Imgur Client ID>',
    clientSecret: '<Your Imgur Client Secret>'
});

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
```

You need to pass the auth token along with the method if you want to use the authenticated user.
``` JavaScript
imgur.image.delete(imgur.extend({id: 1}, req.session.user))
```
Or
``` JavaScript
imgur.image.delete({id: 1, access_token: req.session.user.access_token})
```

Adding Options:
``` JavaScript
imgur.gallery.gallery({
    section: 'hot', // hot | top | user - defaults to hot
    sort: 'viral', //viral | top | time | rising (only available with user section) - defaults to viral
    //etc
}).then(function(response) {
    console.log(response);
}, function(error) {
    console.log(error);
});
```
# Full documentation and API coming soon...