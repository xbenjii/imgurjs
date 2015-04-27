var Memegen = function(imgur) {

    this.memeGen = function(params) {
        params = params || {};
        var options = params;
        return imgur.request('get', 'memegen/defaults', options);
    };

    return this;
};

module.exports = Memegen;
