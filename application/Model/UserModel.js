var BaseModel = require(__dirname+'/BaseModel');
function UserModel(connection,table){
    BaseModel.call(this,connection,table);
}
UserModel.prototype = new BaseModel;

//定义方法
UserModel.prototype.getUser = function(){
    return '1111';
}

var connection = '';
var table      = '';
module.exports = new UserModel(connection,table); //采用单例模式，隐式返回this
