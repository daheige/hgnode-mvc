const root_path = __dirname;
const application = "application";
const app_path = root_path + '/' + application; //应用目录名
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const helmet = require('helmet');

//设置app运行环境和端口，网站根目录
Object.defineProperty(global, 'APP_ENV', {
    value: (process.env.NODE_ENV || 'production').toLowerCase(),
    writable: false,
    configurable: false,
});
const env_info = require(root_path + '/bootstrap/env/' + APP_ENV);
Object.defineProperty(global, 'ENV_INFO', {
    value: env_info,
    writable: false,
    configurable: false,
});
Object.defineProperty(global, 'ROOT_PATH', {
    value: root_path,
    writable: false,
    configurable: false,
});
Object.defineProperty(global, 'APP_PATH', {
    value: app_path,
    writable: false,
    configurable: false,
});

//定义系统常量
const constants = require(APP_PATH + '/config/constants');
for (let i in constants) {
    Object.defineProperty(global, i, {
        value: constants[i],
        writable: false,
        configurable: false,
    });
}

//导入全局配置文件和系统全局函数
const config = require(APP_PATH + '/config/config');
let functions_list = config.functions_list;
global.helper = {};
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
delete config.functions_list; //删除functions_list属性
Object.defineProperty(global, 'config', {
    value: config,
    writable: false,
    configurable: false,
});

//启动应用
let app = express();
//运行环境和端口设置
app.set('env', process.env.NODE_ENV || 'production');
app.set('node_port', process.env.NODE_PORT || '1337');

//模板配置 模板的后缀为html
//如果需要添加nunjucks过滤器请打开下面代码
app.set('view engine', 'html');
nunjucks.configure(app_path + '/views', {
        autoescape: true,
        express: app
    }).addFilter('json', JSON.stringify)
    .addFilter('getJsVersion', helper.getJsVersion)
    .addFilter('hgtest', function(str) {
        return str + 'haha';
    });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(helmet());

//如果开启了nginx反向代理，请注释掉该行
app.use(express.static(root_path + '/public'));

//客户端常量设置
app.locals.constants = constants;
app.locals.IS_PRO = APP_ENV == 'production' ? 1 : 0;

//路由控制
const routers = require(app_path + '/routes/index'); //路由设置
routers(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('errors/error');
});

module.exports = app;
