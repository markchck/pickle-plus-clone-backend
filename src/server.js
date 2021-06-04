const sequelize = require('./database/models').sequelize
// sequelize.sync()

const koa = require('koa');
const Router = require('koa-router')
const app = new koa();
const router = new Router();
const api = require('./api')
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

router.get('/', (ctx, next) => {
  ctx.body = '루트페이지'
})

router.use('/api', api.routes())

app.use(router.routes())
app.use(router.allowedMethods)


app.listen(3000, () => { console.info('Server is running on port 3000'); });

