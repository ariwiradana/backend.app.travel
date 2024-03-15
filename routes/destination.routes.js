const express = require("express");
const router = express.Router();
const {
  getDestination,
  setDestination,
  getDestinationSlug,
  updateDestination,
} = require("../controller/destination.controller");

router.route("/").get(getDestination).post(setDestination);
router.route("/:slug").get(getDestinationSlug).put(updateDestination);
module.exports = router;
