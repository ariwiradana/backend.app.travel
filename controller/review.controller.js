const Review = require("../model/review.model");
const sanitizeHtml = require("sanitize-html");

const getReview = async (req, res) => {
  const { limit } = req.query;
  try {
    let data;
    if (limit) {
      data = await Review.find().limit(Number(limit));
    } else {
      data = await Review.find();
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const setReview = async (req, res) => {
  const { rating, name, review, created_at } = req.body;

  try {
    const newReview = await Review.create({
      rating,
      name: sanitizeHtml(name),
      review: sanitizeHtml(review),
      created_at,
    });
    res.status(200).json(newReview);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteReview = async (req, res) => {
  const { _id } = req.params;
  try {
    const deletedReview = await Review.deleteOne({ _id });
    res.status(200).json(deletedReview);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getReview,
  setReview,
  deleteReview,
};
