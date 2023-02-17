const Transport = require("../model/transport.model");

const getTransport = async (req, res) => {
  const { limit } = req.query;

  let transport;
  if (limit) {
    transport = await Transport.find().limit(Number(limit));
  } else {
    transport = await Transport.find();
  }
  res.status(200).json(transport);
};

const getTransportSlug = async (req, res) => {
  const { slug } = req.params;
  const transport = await Transport.find({ slug });
  res.status(200).json(transport);
};

const setTransport = async (req, res) => {
  const { title, image_url, price, destination } = req.body;
  const response = await Transport.create({
    title,
    image_url,
    price,
    destination,
    slug: title?.toLowerCase().replaceAll(" ", "-"),
  });
  res.status(200).json(response);
};

module.exports = {
  getTransport,
  setTransport,
  getTransportSlug,
};
