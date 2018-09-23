const { Router } = require('express')
const confirm = require('../../db/confirm.js')
const fs=require("fs")
var test=require("../../db/dbtest")
const fileName=test.querystr("")
const fileNamede=test.filesNamede
const router = Router()
// const user = require("~/db/test.json")
const mockdata=[
    {
        columns: ['日期', '访问用户', '下单用户'],
        rows: [
          { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
          { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
          { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
        ]
    },
    {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
    },
    {
        columns: ['date', 'PV', 'Order'],
        rows: [
          { 'date': '2018-05-22', 'PV': 32371, 'Order': 19810 },
          { 'date': '2018-05-23', 'PV': 12328, 'Order': 4398 },
          { 'date': '2018-05-24', 'PV': 92381, 'Order': 52910 }
        ]
      }
    ]
router.post("/admin/login",function(req,res,next){
    // console.log(req.body.username)
    if(confirm.find(req.body.username,req.body.password)){
        res.redirect("/admin/"+username)
    }
    res.send(confirm.find(req.body.username,req.body.password))
})

router.get('/learnmore/getuser',function(req,res,next){
    // console.log('helo')
    res.send("hello api")
})
router.get('/show/:pagenum',function name(req,res,next) {
    console.log(req.param.pagenum);
    // 不能直接写数字，express会将其识别为状态码，就是这样Status :233
    res.send("91")
    // console.log(fileName);

})
router.get('/sug/:str',function name(req,res,next) {
    result=test.querystr(req.params.str)
    // console.log(req.params.str);
    // 不能直接写注释，express会将其识别为状态码，就是这样Status :233
    for(let i=0;i<result.length;i++){
        result[i]=decodeURI(result[i])
    }
    res.send(result)
})
router.get('/getindex/:str',function name(req,res,next) {
    console.log(req.params.str);
    // console.log(fileNamede);
    result=fileNamede.indexOf(req.params.str)
    // console.log(req.params.str);
    // 不能直接写注释，express会将其识别为状态码，就是这样Status :233
    console.log("result:"+result);
    res.send({"res":result})
})
router.get('/show/',function name(req,res,next) {
    // console.log(req.query.page,req.query.id,req.originalUrl);
    const message = parseInt(req.query.page)
    if(message<fileName.length){
        fs.readFile('./db/dbjson/'+fileName[message-1],'utf8',function(err,data){
            if(err){
            console.log(err)
            }else{
                res.send(data)
            }
            })
    }
    else{
        res.status(404).send('error  unfind')
    }
})

module.exports = router