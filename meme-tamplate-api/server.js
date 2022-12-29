const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3000;

const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(DB)
  .then(() => console.log("mongodb connected.."))
  .catch((err) => console.error("mongodb connection failed!", err));

app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
