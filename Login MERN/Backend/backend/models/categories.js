const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

            // <th>Price</th>
            // <th>Category</th>
            // <th>Brand</th>
            // <th>CreatedAt</
const CategoriesSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true

    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }


})
module.exports=mongoose.model("Categories",CategoriesSchema);