const mongoose = require("mongoose");

const DestinationSchema = mongoose.Schema(
  {
    title: String,
    image_url: String,
    category: String,
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("destination", DestinationSchema);
