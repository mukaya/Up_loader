const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PhotoUpload", photoSchema);
