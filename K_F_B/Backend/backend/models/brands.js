const mongoose= require('mongoose')
const BrandsSchema= new mongoose.Schema({
    name:{
    type:String,
    required:[true,"field is required"]
    },
    description:{
        type:String,
        required:[true,"field is required"]
    }
    
})
module.exports = mongoose.model("Brands",BrandsSchema)