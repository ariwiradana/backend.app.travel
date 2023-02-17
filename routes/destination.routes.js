const express = require("express");
const router = express.Router();
const {
  getDestination,
  setDestination,
  getDestinationSlug,
} = require("../controller/destination.controller");

router.route("/").get(getDestination).post(setDestination);
router.route("/:slug").get(getDestinationSlug);
module.exports = router;
