let usermodels = require('../models/user');

//注册接口
let addUsers = async (username,password,number) => {
  return await usermodels.addUSers(username,password,number);       
}

//登录接口
let userLogin = async (username, password) => {
  let data =  await usermodels.userLogin(username,password)
  return data;
}
//获取用户名接口
let getUsers =  new Promise(resovle => {
   let data = usermodels.getUsers();
    resovle(data)
})

module.exports = {
  addUsers,
  userLogin,
  getUsers
}