const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const tightsProductSchema = mongoose.Schema({
  name: {
    type: String
    //required: true
  },
  category: {
    type: String,
    required: true
  },
  large: {
    type: Object
  },
  medium: {
    type: Object

  },
  small: {
    type: Object

  },
  color: {
    type: Array

  }

});

//clothProductSchema.plugin(uniqueValidator);
module.exports = mongoose.model("tights", tightsProductSchema);
