const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 5050;

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log("Connection Successfull..."))
  .catch((err) => console.error("connection failed..", err));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
