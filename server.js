const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/destination", require("./routes/destination.routes"));
app.use("/api/thumbnail", require("./routes/thumbnail.routes"));
app.use("/api/transport", require("./routes/transport.routes"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is running in port: ${PORT}`));
