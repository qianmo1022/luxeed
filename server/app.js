const Koa = require("koa"); // 引入 koa
const cors = require("koa2-cors"); // 用来解决跨域问题
const bodyParser = require("koa-bodyparser"); // 为了让 koa 可以解析出来 post 请求传递的参数
const app = new Koa();
const mongoose = require("mongoose"); // 用来连接mongodb

// 消除严格模式
mongoose.set("strictQuery", true);

// const config = require('./config.js')

// 连接数据库
mongoose
  .connect("mongodb://localhost/luxeed")
  .then(() => console.log("数据库连接成功"))
  .catch((err) => console.log("数据库连接失败", err));
// test
// const main = (ctx) => {
//   ctx.body = 'Hello World';
// }

// app.use(main)

app.use(bodyParser());
app.use(cors());

const login_router = require("./routes/login/index.js");
const register_router = require("./routes/register/index.js");

app.use(login_router.routes()).use(login_router.allowedMethods()); // 让路由与koa联系起来
app.use(register_router.routes()).use(register_router.allowedMethods());

app.listen(3000, () => {
  console.log("项目已经启动");
});
