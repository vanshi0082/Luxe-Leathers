const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    Image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolour: {
        type: String
    },
    panlecolour: String,
    textcolour: String,
});

module.exports = mongoose.model("product", "productSchema");