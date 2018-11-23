module.exports = {
    default_redis: __dirname + '/' + APP_ENV + '/redis',
    //需要导入的函数文件
    functions_list: {
        functions: 1,
        tools: 1,
    },
    log_dir: ROOT_PATH + '/logs'
}
