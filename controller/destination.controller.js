const Destination = require("../model/destination.model");

const getDestination = async (req, res) => {
  const { limit } = req.query;
  try {
    let destination;
    if (limit) {
      destination = await Destination.find().limit(Number(limit));
    } else {
      destination = await Destination.find();
    }
    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getDestinationSlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const destination = await Destination.findOne({ slug });
    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json(error);
  }
};

const setDestination = async (req, res) => {
  const { title, image_url, price, minimum_pax, inclution, destination } =
    req.body;

  try {
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
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateDestination = async (req, res) => {
  const data = req.body;
  const { slug } = req.params;
  try {
    Destination.findOneAndUpdate(
      { slug },
      data,
      { new: true, strict: false },
      (err, doc) => {
        if (err) {
          res.status(400).json({ error: true, message: err });
        }
        if (!doc)
          res.status(400).json({
            error: true,
            message: `data with slug ${slug} is not found`,
          });

        res.status(200).json(doc);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getDestination,
  setDestination,
  getDestinationSlug,
  updateDestination,
};
