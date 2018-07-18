let user = require('../Schema/user');

//给collection提供数据库数据接口


//注册
let addUsers = async (username,password,number)=> {
  //将注册的参数穿给数据库
  return await user.addUSers(username,password,number);
}

//登录
let userLogin = async (username,password) => {
  return await user.userlogin(username,password);
}

//获取当前用户
let getUsers = async ()=> {
  
  
  console.log(await user.lookUser());
  console.log("dasdassdasda");
  //return list;
}

getUsers()
module.exports = {
  addUsers,
  userLogin,
  getUsers
}