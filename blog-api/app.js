const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "started successfully!",
  });
});

module.exports = app;
