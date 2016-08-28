var express = require("express");//引入express 模块
var app = express();
app.use(express.static("public"));//读取静态目录文件
app.listen(3000);  //设置监听端口
console.log("服务器启动成功");