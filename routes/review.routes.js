const express = require("express");
const router = express.Router();
const { getReview, setReview } = require("../controller/review.controller");

router.route("/").get(getReview).post(setReview);
module.exports = router;
