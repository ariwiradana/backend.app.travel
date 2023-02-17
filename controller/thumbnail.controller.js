const Thumbnail = require("../model/thumbnail.model");

const getThumbnail = async (req, res) => {
  const thumbnail = await Thumbnail.find();
  res.status(200).json(thumbnail);
};

const setThumbnail = async (req, res) => {
  const { image_url } = req.body;
  const thumbnail = await Thumbnail.create({
    image_url,
  });
  res.status(200).json(thumbnail);
};

module.exports = {
  getThumbnail,
  setThumbnail,
};
