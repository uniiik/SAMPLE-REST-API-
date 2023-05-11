const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Special type of datatype in Mongoose which is a long and unique identifier
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

mongoose.model("Product", productSchema); // Register the schema

module.exports = mongoose.model("Product");
