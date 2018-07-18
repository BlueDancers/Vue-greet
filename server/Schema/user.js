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

Users.sync({
  force: false //设置为fasle 否则会覆盖
}).then(() => {
  console.log("[Users is success]");
})

//创建用户
//force:true 先销毁再创建表
let addUSers = async (username, password, number) => {
  return await Users.create({
    user_name: username,
    user_password: password,
    user_PhoneNumber: number
  })
}

//登录验证
let userlogin = async (username,password) => {
  await Users.find({
    where: {
      user_name: username
    }
  }).then((res)=> {
    let pass = JSON.parse(JSON.stringify(res)).user_password;//通过用户名获取密码
    if (password == pass){
      return true;
    }else {
      return false;
    }
  })
}

//查看用户
let lookUser = async () => {
  await Users.findAll().then((res) => {
    console.log(JSON.parse(JSON.stringify(res)));
    return JSON.parse(JSON.stringify(res));
  })
}


module.exports = {
  addUSers,
  userlogin,
  lookUser
}