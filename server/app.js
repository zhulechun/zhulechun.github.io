//引入express框架
const express = require('express');
//路劲处理模块
const path = require('path');
//创建 web服务器
const app = express();
//静态资源访问服务功能
app.use(express.static(path.join(__dirname,'public')));

app.get('/first',(req, res) => {
    res.send('Hello ajax');
});

app.get('/responseData',(req,res) => {
    res.send({"name":"zs"});
});

//监听端口
app.listen(3000);
//控制台提示输出
console.log('服务器启动成功');
