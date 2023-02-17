const mongoose = require("mongoose");

const ThumbnailSchema = new mongoose.Schema({
  image_url: String,
});

module.exports = mongoose.model("thumbnail", ThumbnailSchema);
