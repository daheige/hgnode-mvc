//基本的常量配置
let js_base_path = APP_ENV != 'production' ? 'js_src/' : 'es6/';
let assets_domain = '/';
module.exports = {
    DOMAIN: '/',
    PUBLIC_PATH: ROOT_PATH + '/public',
    APP_NAME: 'daheige_koa',
    APP_VERSION: '1.0.0',
    ASSETS_STATIC: assets_domain + 'assets/',
    JS_SRC: assets_domain + js_base_path,
}
