const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const errorHandler = require("./controller/errorController");
const AppError = require("./utils/AppError");
require("dotenv").config();

const app = express();
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "started successfully!",
  });
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

module.exports = app;
