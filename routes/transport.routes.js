const express = require("express");
const router = express.Router();
const {
  getTransport,
  setTransport,
  getTransportLimit,
} = require("../controller/transport.controller");

router.route("/").get(getTransport).post(setTransport);
router.route("/:limit").get(getTransportLimit);
module.exports = router;
