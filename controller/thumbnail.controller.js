const Thumbnail = require("../model/thumbnail.model");

const getThumbnail = async (req, res) => {
  try {
    const thumbnail = await Thumbnail.find();
    res.status(200).json(thumbnail);
  } catch (error) {
    res.status(500).json(error);
  }
};

const setThumbnail = async (req, res) => {
  const { image_url } = req.body;
  try {
    const thumbnail = await Thumbnail.create({
      image_url,
    });
    res.status(200).json(thumbnail);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getThumbnail,
  setThumbnail,
};
