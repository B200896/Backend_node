const express = require('express')
const bodyParser=require('body-parser')
const Connectdb = require('./db/connect')
const cors = require('cors');
// const User=require('./models/user')
const router=require('./routes/route');
const app=express()
app.use(bodyParser.json())

require('dotenv').config();
app.use(cors());
app.listen(process.env.PORT,(   )=>{
    console.log("server run on" ,process.env.PORT)
})

const start = async ()=>{
    console.log('connection')
    let dbString = await Connectdb()
    console.log('==dbString===')
  
}

start();

app.use('/',router);