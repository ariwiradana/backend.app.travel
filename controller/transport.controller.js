const Transport = require("../model/transport.model");

const getTransport = async (req, res) => {
  const { limit } = req.query;

  try {
    let transport;
    if (limit) {
      transport = await Transport.find().limit(Number(limit));
    } else {
      transport = await Transport.find();
    }
    res.status(200).json(transport);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTransportSlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const transport = await Transport.findOne({ slug });
    res.status(200).json(transport[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

const setTransport = async (req, res) => {
  const { title, image_url, price, destination } = req.body;
  try {
    const response = await Transport.create({
      title,
      image_url,
      price,
      destination,
      slug: title?.toLowerCase().replaceAll(" ", "-"),
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTransport = async (req, res) => {
  const data = req.body;
  const { slug } = req.params;
  try {
    Transport.findOneAndUpdate(
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
  getTransport,
  setTransport,
  getTransportSlug,
  updateTransport,
};
