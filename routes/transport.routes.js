const express = require("express");
const router = express.Router();
const {
  getTransport,
  setTransport,
  getTransportSlug,
  updateTransport,
} = require("../controller/transport.controller");

router.route("/").get(getTransport).post(setTransport);
router.route("/:slug").get(getTransportSlug).put(updateTransport);
module.exports = router;
