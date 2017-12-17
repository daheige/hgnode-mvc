module.exports = function(app) {
    app.get('/', function(req, res, next) {
        res.render('index/index', {
            title: 'hgnode-mvc'
        });
    });
    app.get('/index', helper.controller('Index', 'index'));
    app.get('/test', helper.controller('Index', 'test'));
}
