let user = require('../Schema/user');

//给collection提供数据库数据接口


//注册
let addUsers = async (username,password,number)=> {
  //将注册的参数穿给数据库
  return await user.addUSers(username,password,number);
}

//登录
let userLogin = async (username,password) => {
  return await user.userlogin(username).then((res) => {
    console.log("-----------------------------------------");
    if(res === null) {
      return {
        text: "该用户不存在",
        message: false
      }
    }
    let pass = JSON.parse(JSON.stringify(res)).user_password; //通过用户名获取密码
    if (password == pass) {
      return {
        text: "登陆成功",
        message: true
      }
    } else {
      return {
        text: "密码错误",
        message: false
      }
    }
  })
}

//获取当前用户
let getUsers = async ()=> {
 return await user.lookUser().then((res) => {
   let data = JSON.parse(JSON.stringify(res))
   return data;
 })
}

module.exports = {
  addUsers,
  userLogin,
  getUsers
}