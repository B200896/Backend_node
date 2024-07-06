const mongoose = require('mongoose')

const subCategorySchema= new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    }
}, { strictPopulate: false });

module.exports=mongoose.model("Subcategory",subCategorySchema)