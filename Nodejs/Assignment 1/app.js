const express = require("express");
const morgan = require("morgan");
const productRoute = require("./routes/productRoute");
const reviewRoute = require("./routes/reviewRoute");
const mongoose = require("mongoose");
const AppError = require("./utils/appError");
const errorHandler = require("./controller/errorController");
require("dotenv").config();

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
mongoose.set("strictQuery", false);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "you are at home route!",
  });
});

app.use("/products", productRoute);
app.use("/reviews", reviewRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

module.exports = app;
