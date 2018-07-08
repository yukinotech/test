const { Router } = require('express')
const confirm = require('../../db/confirm.js')
const router = Router()
// const user = require("~/db/test.json")

router.post("/admin/login",function(req,res,next){
    // console.log(req.body.username)
    if(confirm.find(req.body.username,req.body.password)){
        res.redirect("/admin/"+username)
    }
    res.send(confirm.find(req.body.username,req.body.password))
})

router.get('/learnmore/getuser',function(req,res,next){
    console.log('helo')
    res.send("hello api")
})

module.exports = router