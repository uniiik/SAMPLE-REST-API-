const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Special type of datatype in Mongoose which is a long and unique identifier
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, default: 1 },
});

mongoose.model("Order", orderSchema); // Register the schema

module.exports = mongoose.model("Order");
