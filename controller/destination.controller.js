const Destination = require("../model/destination.model");

const getDestination = async (req, res) => {
  const destination = await Destination.find();
  res.status(200).json(destination);
};

const getDestinationLimit = async (req, res) => {
  const limit = req.params.limit;
  const destination = await Destination.find().limit(limit);
  res.status(200).json(destination);
};

const setDestination = async (req, res) => {
  const { title, image_url, price, minimum_pax, inclution, destination } =
    req.body;
  const response = await Destination.create({
    title,
    image_url,
    price,
    minimum_pax,
    inclution,
    destination,
    slug: title?.toLowerCase().replaceAll(" ", "-"),
  });
  res.status(200).json(response);
};

module.exports = {
  getDestination,
  setDestination,
  getDestinationLimit,
};
