const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  phone: String,
});

module.exports = mongoose.model("contact", ContactSchema);
