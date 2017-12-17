//公共的中间件
module.exports = {
    setHeader: async function(req, res, next) {
        let isAjax = req.xhr || req.is('json');
        if (isAjax) {
            res.set('Content-Type', 'application/json');
        }
        next();
    }
};
