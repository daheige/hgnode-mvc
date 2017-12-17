var Model = require(__dirname + '/Base.class');
class OrderModel extends Model {
    constructor(connection, table) {
        super(connection, table);
    }
    getList() {
        console.log(2);
    }
    getInfo() {
        return this.connection + this.table;
    }
}

var connection = 'heige';
var table = 'order';
module.exports = new OrderModel(connection, table); //采用单例模式，隐式返回this
