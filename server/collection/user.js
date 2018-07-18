let usermodels = require('../models/user');

//注册接口
let addUsers = async (username,password,number) => {
  return await usermodels.addUSers(username,password,number);       
}

//登录接口
let userLogin = async (username, password) => {
  return await usermodels.userLogin(username,password)
}

//获取用户名接口
let getUsers = async () => {
  return await usermodels.getUsers();
}

console.log("dadadadad");

console.log(getUsers());