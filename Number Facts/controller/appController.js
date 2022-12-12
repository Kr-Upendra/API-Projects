const axios = require("axios");

exports.mathFact = (req, res) => {
  const options = {
    method: "GET",
    url: `https://numbersapi.p.rapidapi.com/${req.body.num}/math`,
    params: { fragment: "true", json: "true" },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.status(200).json({
        status: "success",
        data: response.data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        status: "fail",
        message: err.message,
      });
    });
};

exports.dateFact = (req, res) => {
  const parameters = req.body;
  const options = {
    method: "GET",
    url: `https://numbersapi.p.rapidapi.com/${parameters.month}/${parameters.day}/date`,
    params: { fragment: "true", json: "true" },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.status(response.status).json({
        status: "success",
        data: response.data,
      });
    })
    .catch((err) => {
      res.status(err.status).json({
        status: "fail",
        message: err.message,
      });
    });
};

exports.triviaFact = (req, res) => {
  const parameters = req.body;
  const options = {
    method: "GET",
    url: `https://numbersapi.p.rapidapi.com/${parameters.num}/trivia`,
    params: { fragment: "true", notfound: "floor", json: "true" },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.status(response.status).json({
        status: "success",
        data: response.data,
      });
    })
    .catch((err) => {
      res.status(err.status).json({
        status: "fail",
        message: err.message,
      });
    });
};

exports.randomFact = (req, res) => {
  const parameters = req.body;
  const options = {
    method: "GET",
    url: "https://numbersapi.p.rapidapi.com/random/trivia",
    params: {
      min: parameters.min,
      max: parameters.max,
      fragment: "true",
      json: "true",
    },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.status(response.status).json({
        status: "success",
        data: response.data,
      });
    })
    .catch((err) => {
      res.status(err.status).json({
        status: "fail",
        message: err.message,
      });
    });
};

exports.yearFact = (req, res) => {
  const parameters = req.body;
  const options = {
    method: "GET",
    url: `https://numbersapi.p.rapidapi.com/${parameters.year}/year`,
    params: {
      fragment: "true",
      json: "true",
    },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.status(response.status).json({
        status: "success",
        data: response.data,
      });
    })
    .catch((err) => {
      res.status(err.status).json({
        status: "fail",
        message: err.message,
      });
    });
};
