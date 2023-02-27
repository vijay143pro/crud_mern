const { json } = require('express');
const express=require('express')
const route=express.Router()
const SchemaData=require('../dataSchema')


route.post('/',async(req,res)=>{
    var data=new SchemaData({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        password:req.body.password
    })
    await data.save()
    res.json(data)
    console.log(req.body);
})

route.get('/',async(req,res)=>{
    var findData=await SchemaData.find()
    res.json(findData)
})


module.exports=route