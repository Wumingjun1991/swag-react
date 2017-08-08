let express = require("express");
let bodyParser = require("body-parser");// 请求体解析器
let path = require("path");
let app = express();
let port = require('./port');
// 首页模拟数据
let indexData = require('./data/index');
let {searchList} = require('./data/searchList');
let messages = require('./data/messages');
let buyList = require('./data/buyList');
let detail = require('./data/detail');

app.use(bodyParser.urlencoded({extended:true}));
// parse application/json
app.use(bodyParser.json());
// 静态文件中间件 参数是静态文件的根路径
app.use(express.static(path.resolve(__dirname,"img/")));
// 允许跨域中间件
app.use(function (req,res,next) {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","content-type");
<<<<<<< HEAD
    console.log(1);
=======
>>>>>>> 262c94e267f7b353dac951bafd46586b53803e60
    next();
});

// 首页  slider + bar请求
app.get("/index",function (req, res) {
    let data = {
        code:1,
        data: indexData,
    };
    res.send(JSON.stringify(data));
});

// 商品列表请求
app.get("/search/:id",function (req, res) {
    let data = {
        code:1,
        data:searchList,
    };
    res.send(JSON.stringify(data));
});

// 消息请求
app.post('/messages',function (req, res) {
    //判断登录状态
<<<<<<< HEAD
    console.log(1);
=======
>>>>>>> 262c94e267f7b353dac951bafd46586b53803e60
    let data = null;
    if(req.body.loged.toString() === 'true'){
        data = {
            code:1,
            data:messages,
        };
    }else{
        data = {
            code:0,
            data:'未登录'
        }
    }

    res.send(JSON.stringify(data));
});

app.post('/buycar',function (req, res) {
   // 判断登录状态
    let data = null;
    if(req.body.loged.toString() === 'true'){
        data = {
            code:1,
            data:buyList,
        };
    }else{
        data = {
            code:0,
            data:'未登录'
        }
    }
    res.send(JSON.stringify(data));
});

app.get('/detail/:id',function (req, res) {
    let data = null;
    if(!req.params.id){
        data = {
            code:0,
            data:'无结果'
        };
        res.send(JSON.stringify(data));
    }
    data = {
        code:1,
        data:detail
    };
    res.send(JSON.stringify(data));
});

app.get('/userinfo',function (req, res){
    let data = {
        code:1,
        data:{
            avatar:`http://localhost:${port}/pdd.jpg`,
            name:'我最帅',
            username:'amhandsome',
        }
    };
    res.send(JSON.stringify(data));
});

app.listen(port,()=>{
    console.log(`运行成功, 监听${8333}端口`);
});