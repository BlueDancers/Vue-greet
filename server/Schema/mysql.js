let config = require('../config/defaut');
let Sequelize = require('sequelize');
// new Sequelize(database, [username=null], [password=null], [options={}])
// class Sequelize 接收 4 个参数，后三个参数是可选的

let sequelize = new Sequelize(config.database.database, config.database.user, config.database.password,{
  host: config.database.host,
  dialect: 'mysql',
  pool: {
    max: 3,       //连接池最大链接数量
    min: 1,       //连接池最小链接数量
    idle: 10000   //线程10秒内没有被操作就会释放线程
  }
})

//连接测试
sequelize.authenticate()
.then(()=> {
  console.log("mysql is Success");
})
.catch (err=> {
  console.log(err);
})


module.exports = sequelize;