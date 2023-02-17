const express = require("express");
const router = express.Router();
const {
  getDestination,
  setDestination,
} = require("../controller/destination.controller");

router.route("/").get(getDestination).post(setDestination);
module.exports = router;
