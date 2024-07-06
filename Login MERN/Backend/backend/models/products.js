const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: {
        type: String,
        required: [true, "Field required"],
    },
    description: {
        type: String,
        required: [true, "Field required"],
    },
    price: {
        type: Number,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    brandid: {
        type: Schema.Types.ObjectId,  // Correct usage: Schema.Types.ObjectId
        ref: 'Brands',
        required: true
    },
    subcategoryid: {
        type: Schema.Types.ObjectId,  // Correct usage: Schema.Types.ObjectId
        ref: 'Subcategory',
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Products", ProductsSchema);
