const express = require("express");
const router = express.Router();
const {
  getReview,
  setReview,
  deleteReview,
} = require("../controller/review.controller");

router.route("/").get(getReview).post(setReview);
router.route("/:_id").post(deleteReview);
module.exports = router;
