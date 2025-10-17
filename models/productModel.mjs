import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required.']
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'Price is required.']
    },
    discount: {
        type: Number,
        min: [0, 'Minimum discount of product must be 0.'],
        max: [50, 'Maximum discount of product must be 50.'],
    },
    rating: {
        type: Number,
        min: [0, 'Minimum rating of product must be 0.'],
        max: [5, 'Maximum rating of product must be 5.'],
        default: 0
    },
    stock: {
        type: Number,
        min: [1, 'Minimum stock of product must be 1.']
    },
    brand: {
        type: String,
        required: [true, 'Brand is required.']
    },
    category: {
        type: String,
        required: [true, 'Category is required.']
    },
    images: [String]
});
// making model of product schema
const Product = mongoose.model('Product', productSchema);
export default Product;