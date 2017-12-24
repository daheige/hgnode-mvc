module.exports = function(app) {
    app.get('/', function(req, res, next) {
        res.render('index/index', {
            title: 'hgnode-mvc'
        });
    });
    app.get('/index', helper.controller('Index', 'index'));
    app.get('/test', helper.controller('Index', 'test'));
    app.get('/info', helper.controller('Index', 'info'));
    app.get('/user', function(req, res, next) {
        res.send('heige');
    });
    app.post('/add-user', helper.controller('Index', 'addUser'));
}
