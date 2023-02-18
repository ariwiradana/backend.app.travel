const Destination = require("../model/destination.model");

const getDestination = async (req, res) => {
  const { limit } = req.query;
  let destination;
  if (limit) {
    destination = await Destination.find().limit(Number(limit));
  } else {
    destination = await Destination.find();
  }
  res.status(200).json(destination);
};

const getDestinationSlug = async (req, res) => {
  const { slug } = req.params;
  const destination = await Destination.find({ slug });
  res.status(200).json(destination[0]);
};

const setDestination = async (req, res) => {
  const {
    title,
    image_url,
    price,
    minimum_pax,
    inclution,
    destination,
    description,
  } = req.body;
  const response = await Destination.create({
    title,
    image_url,
    price,
    minimum_pax,
    inclution,
    destination,
    description,
    slug: title?.toLowerCase().replaceAll(" ", "-"),
  });
  res.status(200).json(response);
};

module.exports = {
  getDestination,
  setDestination,
  getDestinationSlug,
};
