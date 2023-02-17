const express = require("express");
const router = express.Router();
const {
  getDestination,
  setDestination,
  getDestinationLimit,
} = require("../controller/destination.controller");

router.route("/").get(getDestination).post(setDestination);
router.route("/:limit").get(getDestinationLimit);
module.exports = router;
