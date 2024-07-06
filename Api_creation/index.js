const connectDB=require('./db/connect')
const product=require('./models/product')
const bodyparser=require('body-parser')
const express= require ('express')
const app=express()
const port=4000
app.get('/',(req,res)=>{
    res.send([
        {
            name:"kashish",
            age:18,
            city:"Jaipur"
        },
        {
            name:"Aakar",
            age:32,
            city:"kota"
        }
    ])
})
app.use(bodyparser.json())
app.post('/',async (req,res)=>{
    const prod=new product(req.body)
    await prod.save()
    res.send(req.body)
})
const start = async () => {
    try {
      await connectDB();
      app.listen(4000, () => {
        console.log("server started.... yes i am connected");
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  start();