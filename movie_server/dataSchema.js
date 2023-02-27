const mongoose=require('mongoose')
const data=mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});

module.exports=mongoose.model('data',data)