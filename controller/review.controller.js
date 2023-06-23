const Review = require("../model/review.model");

const getReview = async (req, res) => {
  try {
    const data = await Review.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const setReview = async (req, res) => {
  const { rating, name, content, created_at } = req.body;

  try {
    const newReview = await Review.create({ rating, name, content, created_at});
    res.status(200).json(newReview);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getReview,
  setReview,
};
