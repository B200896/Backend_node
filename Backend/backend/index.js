const express = require('express')
const bodyParser=require('body-parser')
const Connectdb = require('./db/connect')
// const User=require('./models/user')
const router=require('./routes/route');
const app=express()
app.use(bodyParser.json())

require('dotenv').config();





app.listen(process.env.PORT,(   )=>{
    console.log("server run on" ,process.env.PORT)
})

const start = async ()=>{
    await Connectdb()
    
  
}

start();

app.use('/',router);