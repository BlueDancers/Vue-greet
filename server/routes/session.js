app.keys = ['some secret hurr'] /*cookie的签名*/
const CONFIG = {
  key: 'Users', // 默认为'koa:sess',
  //maxAge: 10000,       //cookie的过期时间   设置没有用?????
  overwrite: true,
  httpOnly: true, //true表示只有服务器端可以获取cookie
  signed: true, //默认 签名
  rolling: false, //在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） 【需要修改】
}
app.use(session(CONFIG, app))