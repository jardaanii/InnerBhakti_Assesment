const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db/index");
const apiRoutes = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

const { PORT } = require("./config/server-config");

const prepareAndStartServer = async () => {
  const app = express();

  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  await connectDB();

  app.use("/api", apiRoutes);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

prepareAndStartServer();
