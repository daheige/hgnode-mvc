const root_path = __dirname;
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const helmet = require('helmet');

/*===============app运行环境和端口==========*/
let env_info = {
    NODE_PORT: process.env.NODE_PORT || 1337, //生产环境默认1337
    NODE_ENV: (process.env.NODE_ENV || 'production').toLowerCase(),
}

/*===============定义系统常量===============*/
Object.defineProperty(global, 'ENV_INFO', {
    value: env_info,
    writable: false,
    configurable: false,
});

Object.defineProperty(global, 'APP_ENV', {
    value: env_info.NODE_ENV,
    writable: false,
    configurable: false,
});

Object.defineProperty(global, 'ROOT_PATH', {
    value: root_path,
    writable: false,
    configurable: false,
});

Object.defineProperty(global, 'APP_PATH', {
    value: root_path + '/application',
    writable: false,
    configurable: false,
});

Object.defineProperty(global, 'PUBLIC_PATH', {
    value: root_path + '/public',
    writable: false,
    configurable: false,
});

const constants = require(ROOT_PATH + '/config/constants');
for (let i in constants) {
    Object.defineProperty(global, i, {
        value: constants[i],
        writable: false,
        configurable: false,
    });
}

/*=========导入全局配置文件和系统全局函数=======*/
const config = require(ROOT_PATH + '/config/config');
let functions_list = config.functions_list;
global.helper = {}; //将函数挂载在helper命名空间上
for (let i in functions_list) {
    if (functions_list[i]) {
        let fnObj = require(APP_PATH + '/Library/' + i);
        for (let func in fnObj) {
            if (typeof fnObj[func] != 'function') {
                continue;
            }
            Object.defineProperty(helper, func, {
                value: fnObj[func],
                writable: false,
                configurable: false,
            });
        }
    }
}

/**=============设置config.xxx========*/
delete config.functions_list; //删除functions_list属性
Object.defineProperty(global, 'config', {
    value: config,
    writable: false,
    configurable: false,
});

//启动应用
let app = express();

//将模板的后缀设置为html格式
//如果需要添加nunjucks过滤器请打开下面代码
app.set('view engine', 'html');
nunjucks.configure(APP_PATH + '/views', {
        autoescape: true,
        express: app
    }).addFilter('json', JSON.stringify)
    .addFilter('getJsVersion', helper.getJsVersion);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser()); //cookie解析
app.use(helmet());

//如果开启了nginx反向代理，请注释掉该行
app.use(express.static(root_path + '/public'));

//客户端常量设置
app.locals.constants = constants;
app.locals.IS_PRO = APP_ENV == 'production' ? 1 : 0;

// 打印日志中间件
app.use((req, res, next) => {
    //请求开始
    let log_id = helper.uuid();
    helper.log('exec start', {
        request_uri: req.originalUrl,
        request_path: req.path,
        request_data: req.method != 'GET' ? req.body : req.query,
        ip: req.ip,
        method: req.method,
        ua: req.get('User-Agent') || '',
        log_id: log_id
    });

    let start = new Date();
    next();

    //请求结束
    let ms = new Date() - start;
    console.log(`${req.method} ${req.originalUrl} - cost:${ms}ms`);

    helper.log('exec end', {
        request_path: req.path,
        log_id: log_id,
        exec_time: ms + 'ms',
    });

    res.set('X-request-time', ms + 'ms');
});

//路由控制
const routers = require(APP_PATH + '/routes/index'); //路由设置
routers(app);

// catch 404 and forward to error handler
app.use(async function(req, res, next) {
    let err = new Error('Sorry, we cannot find that!');
    err.status = 404;
    await next(err);
});

// server error handler
app.use(function(err, req, res, next) {
    //捕捉错误日志
    let errCode = err.status || 500;
    helper.log('exec error', {
        request_uri: req.originalUrl,
        request_path: req.path,
        request_data: req.method != 'GET' ? req.body : req.query,
        ip: req.ip,
        method: req.method,
        ua: req.get('User-Agent') || '',
        error: {
            code: errCode,
            message: err.message || '',
        }
    }, 'error');

    res.status(errCode).send({
        code: errCode,
        message: err.message || 'server error'
    });
});

module.exports = app;
