const Destination = require("../model/destination.model");

const getDestination = async (req, res) => {
  const destination = await Destination.find();
  res.status(200).json(destination);
};

const setDestination = async (req, res) => {
  const { title, image_url, category } = req.body;
  const destination = await Destination.create({
    title,
    image_url,
    category,
  });
  res.status(200).json(destination);
};

module.exports = {
  getDestination,
  setDestination,
};
