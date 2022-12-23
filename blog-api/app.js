const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "started successfully!",
  });
});

module.exports = app;
