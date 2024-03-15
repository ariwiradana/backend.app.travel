const express = require("express");
const router = express.Router();
const {
  getThumbnail,
  setThumbnail,
} = require("../controller/thumbnail.controller");

router.route("/").get(getThumbnail).post(setThumbnail);
module.exports = router;
