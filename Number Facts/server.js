require("dotenv").config();
const app = require("./index");

const port = process.env.PORT || 7878;

app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
