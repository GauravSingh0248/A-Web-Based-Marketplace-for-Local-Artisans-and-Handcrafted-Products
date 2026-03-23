// Product model (will be used when MongoDB is integrated)
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("Product", productSchema);