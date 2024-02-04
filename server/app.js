const Koa = require('koa');
const cors = require('koa2-cors');// 用来解决跨域问题
const bodyParser = require('koa-bodyparser')  // 为了让 koa 可以解析出来 post 请求传递的参数
const app = new Koa()
const mongoose = require('mongoose')   // 用来连接mongodb

// 消除严格模式
mongoose.set("strictQuery", true)

const config = require('./config.js')

mongoose.connect(config.db, { useNewUrlParser: true },(err)=> {
    if (err) {
        console.error(err)
    } else {
        console.log('数据库连接成功');
    }
})

app.use(bodyParser())
app.use(cors())

app.listen(3000, () => {
  console.log('项目已经启动');
})