const mongoose = require("mongoose");
const beltsSchema = new mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  quantity: {
    type: Number
  },
  length: {
    type: Number
  }


})

module.exports = mongoose.model("belts", beltsSchema);
