require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { errorHandler } = require("./middlewares/errorHandler");
const { sequelize } = require("./db");
const indexRouter = require("./routes");

const app = express();

const port = process.env.port || 3001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", indexRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Application listeting on port ${port}`);
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("DB synced.");
  } catch (e) {
    console.log(e);
  }
};

start();
