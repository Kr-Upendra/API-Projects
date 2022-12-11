import express from "express";
import cors from "cors";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
const PORT = 8888;

const app = express();
app.use(cors());

app.get("/convert", (req, res) => {
  console.log(req.query);
  const options = {
    method: "GET",
    url: "https://alpha-vantage.p.rapidapi.com/query",
    params: {
      from_currency: req.query.from_currency,
      function: "CURRENCY_EXCHANGE_RATE",
      to_currency: req.query.to_currency,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(
        response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
      );
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/news", (req, res) => {
  const options = {
    method: "GET",
    url: "https://crypto-update-live.p.rapidapi.com/news",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "crypto-update-live.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
