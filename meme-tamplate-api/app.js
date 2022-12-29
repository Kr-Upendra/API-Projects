const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const errorHandler = require("./controller/errorController");
const memeRoute = require("./routes/memeRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

mongoose.set("strictQuery", "false");

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "running!!",
  });
});

app.use("/api/memes", memeRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

module.exports = app;
