const express = require('express');
const app =express();
const bodyParser = require('body-parser');
const userRouter=require('./router/user.js')

// 端口
app.listen(8080);
// 静态资源
app.use(express.static('./public'));
// 解析请求字符串
app.use(bodyParser.urlencoded({extended:false}));
// 引入路由
app.use('/user',userRouter);