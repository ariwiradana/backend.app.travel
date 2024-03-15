const Contact = require("../model/contact.model");

const getContact = async (req, res) => {
  try {
    const data = await Contact.findOne();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const setContact = async (req, res) => {
  const { phone } = req.body;

  try {
    const exists = await Contact.find();
    if (exists?.length == 0) {
      const newContact = await Contact.create({ phone });
      res.status(200).json(newContact);
    } else {
      const allPhone = await Contact.find();
      const phones = allPhone?.map((p) => p.phone);
      await Contact.deleteMany({ phone: { $in: phones } });
      const newContact = await Contact.create({ phone });
      res.status(200).json(newContact);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getContact,
  setContact,
};
