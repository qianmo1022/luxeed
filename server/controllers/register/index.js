const userInfo = require('../../models/login')   // UserInfo 就是生成的user表
const register = async (ctx, next) => {
    console.log(ctx.request.body);
    // ctx.body('这是注册页面')
    const { username, password } = ctx.request.body

    // 在数据库中查找账号是否已经注册  不存在 result = null
    const result = await userInfo.findOne({
        username: username
    })

    ctx.status = 200
    if (result) {
        ctx.body = {
            code: 0,
            msg: '账号已存在'
        }
    }
    // 账号不存在 向数据库插入数据
    if (result === null) {
        console.log(username);
        userInfo.create({   // 创建用户信息表
            username: username,
            password: password
        })

        ctx.body = {
            code: 1,
            msg: '注册成功'
        }
    }
}

module.exports = {
    register
}