const mongoose = require("mongoose");

const DestinationSchema = mongoose.Schema({
  title: String,
  image_url: String,
  price: Number,
  slug: String,
  minimum_pax: Number,
  inclution: Array,
  destination: Array,
});

module.exports = mongoose.model("destination", DestinationSchema);
