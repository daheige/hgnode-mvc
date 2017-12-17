/**
 * [BaseModel es5写法]
 * @param {[type]} connection [数据库采用的连接]
 * @param {[type]} table      [数据table]
 * 采用单例模式，隐式返回this
 */
function BaseModel(connection,table){
    // 判断是否存在实例
    if (typeof BaseModel.instance === 'object') {
          return BaseModel.instance;
    }
    this.connection = connection;
    this.table = table;
    BaseModel.instance = this; // 缓存,隐式返回this
}
BaseModel.prototype.beforeInsert = function(){};
BaseModel.prototype.beforeSave   = function(){};
BaseModel.prototype.getAll = function(){};
BaseModel.prototype.auth = function(){};

module.exports = BaseModel;
