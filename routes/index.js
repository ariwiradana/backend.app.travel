const routes = (app) => {
  app.use("/api/destination", require("../routes/destination.routes"));
  app.use("/api/thumbnail", require("../routes/thumbnail.routes"));
  app.use("/api/transport", require("../routes/transport.routes"));
  app.use("/api/contact", require("../routes/contact.routes"));
};

module.exports = routes;
