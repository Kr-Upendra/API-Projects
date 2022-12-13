const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require("pug");
const factRoutes = require("./routes/factRoutes");
const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static(path.join(`${__dirname}/public`)));
app.set("view engine", "pug");

app.use("/", factRoutes);
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home page | Amazing facts",
  });
});

app.all("*", (req, res) => {
  res.render("error", {
    title: "not found!",
    message: "Page not found!",
  });
});

module.exports = app;
