const express=require('express');
const app=express()
const mongoose=require('mongoose')
const port=4000
const router=require('./Routes/router')
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json())
app.use('/info',router)

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://vijayaragavan:suryajabro@cluster0.tl9mitk.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("db connected"))

app.listen(port,()=>console.log(`server started in http://localhost:${port}`));