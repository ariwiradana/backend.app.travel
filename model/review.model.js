const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  rating: Number,
  name: String,
  review: String,
  created_at: Number,
});

module.exports = mongoose.model("review", ReviewSchema);
