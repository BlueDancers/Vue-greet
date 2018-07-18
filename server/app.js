const koa = require('koa');
const bodyParser = require('koa-bodyparser')
const router = require('../server/routes/user')
const cros = require('koa2-cors')
const app = new koa();


app.use(bodyParser())
app.use(cros())

app.listen(3000,()=> {
  console.log("[koa] is start!");
}); 

router.use('/api',router.routes())
app.use(router.routes())  //注册路由

