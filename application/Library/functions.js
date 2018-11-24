module.exports = {
    var_dump: function(str, req, res) {
        if (typeof req != 'undefined') {
            res.send('' + str);
        } else {
            console.log(str);
        }
    },
    catchPanic: function(err, req, res, next) {
        //捕捉错误日志
        console.log("exec error: ", err);
        let errCode = err.statusCode || err.status || 500;
        //生产环境统一抛出 server error
        let errMsg = errCode != 404 && ['production'].includes(APP_ENV) ? 'server error' : (err.message || '');
        helper.errorLog('exec error', {
            request_id: res.get('x-request-id'),
            error: {
                code: errCode,
                message: err.message || '',
            }
        });

        res.status(errCode).send({
            code: errCode,
            message: errMsg,
        });
    }
};
