/**
 * [BaseLogic es5写法]
 * 采用单例模式，隐式返回this
 */
function BaseLogic(){
    // 判断是否存在实例
    if (typeof BaseLogic.instance === 'object') {
          return BaseLogic.instance;
    }
    BaseLogic.instance = this; // 缓存,隐式返回this
}

BaseLogic.prototype.auth = function(){};
module.exports = BaseLogic;
