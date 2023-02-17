const mongoose = require("mongoose");

const TransportSchema = mongoose.Schema({
  title: String,
  image_url: String,
  price: Object,
  slug: String,
  destination: Array,
});

module.exports = mongoose.model("transport", TransportSchema);
