const express = require('express');
const bodyparser =require('body-parser')
const app = express()
const connectDB = require('./db/connect')
const Student = require('./Models/student')
// const port = 5000
app.get('/', async (req,res)=>{
    try{
        const data = await Student.find({});
        res.status(200).json(data)
    }
    catch(error){

        res.status(500).send("data nhi mila")
    }
})
app.use(bodyparser.json())
app.post('/', async (req,res)=>{

    try{

        const prod = new Student(req.body)
        console.log(prod)
        await prod.save()
        res.status(200).json({message:"data successfully added",data:prod})
    }
    catch(error){
        res.send(500).send("data save nhi huaa")
    }
})
const start= async()=>{
    await connectDB()
    app.listen(8000,()=>{
        console.log("server start")
    })

}
start()
