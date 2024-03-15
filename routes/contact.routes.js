const express = require("express");
const router = express.Router();
const { getContact, setContact } = require("../controller/contact.controller");

router.route("/").get(getContact).post(setContact);
module.exports = router;
