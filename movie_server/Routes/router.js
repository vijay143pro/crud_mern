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

route.put('/update',async(req,res)=>{
    var updatee= await SchemaData.updateOne({_id:req.body},{$set:{
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        password:req.body.password
    }})
    res.json(updatee)
})

route.delete('/del/:id',async (req,res)=>{
    var del= await SchemaData.findByIdAndRemove(req.params.id).then((e)=>{
        res.json({message:"data deleted"})
    })
})


module.exports=route