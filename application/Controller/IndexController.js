module.exports = {
    index: function(req, res, next) {
        return res.render('index/index', {
            title: 'hgnode',
            require_js: 'test'
        });
    },
    test: function(req, res, next) {
        return res.send('hi,this is a test!' + helper.logic('Test').test());
    }
}
