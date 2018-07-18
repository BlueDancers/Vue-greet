let mysql = require('mysql');
let config = require('../config/defaut');

let connection = mysql.createConnection({    //链接数据库
  host: config.database.host,
  port: config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database
})

connection.connect(err => {                   //判断时候链接数据库
  if (err) {
    console.log("mysql is fail" + err);
    return;
  }
  console.log("mysql is success!"); //数据库链接成功标志
})

let select = "select * from users";
connection.query(select, (err, done) => {
  if (done == undefined) { //创建之前进行判断 创建用户表
    let createUser = `
          create table if not exists users(
          user_id INT NOT NULL AUTO_INCREMENT,
          user_name VARCHAR(20) NOT NULL,
          user_password VARCHAR(20) NOT NULL,
          user_PhoneNumber VARCHAR(20) NOT NULL,
          PRIMARY KEY(user_id)
        )`
    connection.query(createUser, (err, result) => { //创建数据库表
      if (err) {
        console.error("create is err" + err);
        return;
      }
      console.log('create is success', result); //创建成功就返回创建的表
    })
  } else {
    console.log("表已经存在,query代码不再加载");
  }
})

module.exports = connection;



let addusers = 'insert into  users (user_id,user_name,user_password,user_PhoneNumber) values (?,?,?,?)';
    let addusersSql = [, '张三', '000000', '11111111111'];
    connection.query(addusers, addusersSql, (err, done) => {
      if (err) {
        console.log("[insert into is error]" + err.message);
        return;
      }
      console.log("-------------------------insert-----------------------------");
      console.log("Id to", done.insertId);
    })


    //这是原生mysql的创表方式,这项目里面不使用
