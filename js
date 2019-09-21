// 切换到admin库
// 创建用户
db.createUser(
  {
    user: "user1",
    pwd: "123",
    roles: [ { role: "root", db: "admin" } ]
  }
)
// 登录(同样在admin库)
db.auth({"user":"user1","pwd":"123"})
// 查看系统用户
db.system.users.find().pretty()
