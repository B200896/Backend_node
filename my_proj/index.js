import express from 'express'
const port=3000
const app=express()
app.get('/',(req,res)=>{
    res.send("This is my project")

})
app.get('/name',(req,res)=>{
    res.send("Express project")
})
app.get('/data',(req,res)=>{
    
    const data = [

        {
            id:1,
            name:"mohit",
            city:"jaipur"
        },
        {
            id:2,
            name:"aman",
            city:"udaipur"
        },
        {
            id:3,
            name:"Ankit",
            city:"Udaipur"
        }
    ]

    res.send(data)
})
app.listen(port)
