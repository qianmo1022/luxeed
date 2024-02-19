const userInfo = require("../../models/login.js"); // UserInfo 就是生成的user表
// 登录操作
const login = async (ctx, next) => {
  console.log(ctx.request.body);
  const { username, password } = ctx.request.body; // 从请求体里面获取账号密码，然后拿到这个区数据库匹配
  // 在 user 表中查找 username 是否存在
  const user = await userInfo.findOne({
    username: username,
  });
  if (!user) {
    ctx.status = 200;
    ctx.body = {
      code: 0,
      msg: "用户名不存在",
    };
    return;
  } else {
    // 匹配密码
    if (user.password !== password) {
      // 密码不匹配
      ctx.body = {
        code: 0,
        msg: "密码错误",
      };
      // console.log('密码错误');
    }
  }
};

module.exports = {
  login,
};
