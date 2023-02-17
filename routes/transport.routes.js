const express = require("express");
const router = express.Router();
const {
  getTransport,
  setTransport,
  getTransportSlug,
} = require("../controller/transport.controller");

router.route("/").get(getTransport).post(setTransport);
router.route("/:slug").get(getTransportSlug);
module.exports = router;
