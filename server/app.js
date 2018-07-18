const koa = require('koa');
const app = new koa();


app.use(async (ctx,next)=> {
  let start = Date.now();
  for (let index = 0; index < 1000000; index++) {
    
  }
  await next();
  let end = Date.now();
  let ms = end- start;
  console.log(start);
  console.log(end);
  ctx.set('X-Response-Time',`${ms}ms`)
  ctx.body = "koa";
}).listen(3000);

app.use(async (ctx, next) => {
  console.log("运行到了这里");
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});
