import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  color: String,
  price: Number,
  qty: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;