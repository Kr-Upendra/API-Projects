const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 5050;

const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => console.log("Mongodb connected..."))
  .catch((err) => console.error("Mongo connection failed..", err));

app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
