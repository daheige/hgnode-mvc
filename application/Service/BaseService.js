/**
 * [BaseService es6写法]
 * 服务类公共方法定义
 */
class BaseService {
    constructor() {}
    async callApi(url = '', method = 'get', params = {}, is_format = true) {
        if (typeof url == 'undefined' || url == '') {
            return {
                code: 500,
                message: 'url不能为空',
                data: null
            };
        }

        if (!['get', 'post'].includes(method.toLowerCase())) {
            return {
                code: 500,
                message: '必须是post或get方式请求',
                data: null
            }
        }

        if (method == 'post') {
            let data = await helper.post(url, params, is_format);
            return data;
        } else {
            let data = await helper.get(url, params, is_format);
            return data;
        }
    }

    async post(url, params = {}, is_format = true) {
        let data = await this.callApi(url, 'post', params, is_format);
        return data;
    }

    async get(url, params = {}, is_format = true) {
        let data = await this.callApi(url, 'get', params, is_format);
        return data;
    }
}

module.exports = BaseService;
