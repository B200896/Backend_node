const mongoose = require('mongoose')
const ProductsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Field required"],
    },
    description:{
        type:String,
        required:[true,"Field required"],
    },
    price:{
        type:Number,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    brandid:{
        type:Number,
        required:true
    },
    subcategoryid:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true

    },
})
module.exports=mongoose.model("Products",ProductsSchema);