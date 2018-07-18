let Router = require('koa-router')
let users = require('../collection/user')
var router = new Router();

router.get('/getUser', async (ctx,next)=> {
  await users.getUsers.then( (res)=> {
    ctx.body = res
  })
})


router.post('/login',async (ctx) => {
  let message = ctx.request.body;
  let data = await users.userLogin(message.username, message.password)
  ctx.body = data
  console.log(ctx.path);
})

module.exports = router;


