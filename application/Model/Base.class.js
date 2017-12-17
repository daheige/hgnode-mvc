/**
 * [BaseModel es6写法]
 * @param {[type]} connection [数据库采用的连接]
 * @param {[type]} table      [数据table]
 * 采用单例模式，隐式返回this
 */
class Model {
    constructor(connection, table) {
        // 判断是否存在实例
        if (typeof Model.instance === 'object') {
            return Model.instance;
        }
        this.connection = connection;
        this.table = table;
        Model.instance = this;
    }
}

module.exports = Model;
