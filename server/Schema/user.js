let mysql = require('./mysql');
let Sequelize = require('sequelize');

let Users = mysql.define('user', {
  user_name: {
    type: Sequelize.STRING(100),
    field: 'user_name' // 指定存储在表中的键名称
  },
  // 没有指定 field，表中键名称则与对象键名相同，为 email
  user_password: {
    type: Sequelize.STRING(50)
  },
  user_PhoneNumber: {
    type: Sequelize.STRING(50)
  }
}, {
  // 如果为 true 则表的名称和 model 相同，即 user
  // 为 false MySQL 创建的表名称会是复数 users
  // 如果指定的表名称本就是复数形式则不变
  freezeTableName: false
});
// 创建表
// User.sync() 会创建表并且返回一个 Promise 对象
// 如果 force = true 则会把存在的表（如果 users 表已存在）先销毁再创建表
// 默认情况下 forse = false
Users.sync({
  force: false //设置为fasle 否则会覆盖
}).then(() => {
  console.log("[Users is success]");
})

//创建用户
let addUSers = async (username, password, number) => {
  return await Users.create({
    user_name: username,
    user_password: password,
    user_PhoneNumber: number
  })
}

//登录验证
let userlogin = async (username) => {
  return await Users.find({
    where: {
      user_name: username
    }
  })
}
//查看用户
let lookUser = async () => {
  return await Users.findAll()         //返回一个查询的promise对象
}
module.exports = {
  addUSers,
  userlogin,
  lookUser
}