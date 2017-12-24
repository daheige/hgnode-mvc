module.exports = {
    index: function(req, res, next) {
        return res.render('index/index', {
            title: 'hgnode',
            require_js: 'test'
        });
    },
    test: function(req, res, next) {
        return res.send('hi,this is a test!' + helper.logic('Test').test());
    },
    info: function(req, res, next) {
        return res.json({
            code: 200,
            message: "ok",
            data: {
                id: 1,
                name: "heige",
                sex: 1
            }
        })
    },
    //{"servers":[{"serverName":"heige_vpn","serverIp":"127.0.0.1"},{"serverName":"test_vpn","serverIp":"127.0.0.1"}],"serversId":"test_team"}
    addUser: function(req, res, next) {
        return res.json({
            code: 200,
            message: "ok",
            data: {
                info: req.body.servers,
                ip: req.ip
            },
            request_time: Math.floor((new Date()).getTime() / 1000)
        })
    }
}
