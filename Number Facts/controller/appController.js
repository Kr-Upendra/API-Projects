const https = require("https");

exports.mathFact = (req, res) => {
  let mathNumber = req.query.number || 1;
  const options = {
    method: "GET",
    hostname: "numbersapi.p.rapidapi.com",
    port: null,
    path: `/${mathNumber}/math?fragment=true&json=true`,
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      useQueryString: true,
    },
  };

  const title = "The math facts | Amazing facts";
  makeRequest(options, res, title, "mathFact");
};

exports.dateFact = (req, res) => {
  let day = req.query.day || 1;
  let month = req.query.month || 1;
  const options = {
    method: "GET",
    hostname: "numbersapi.p.rapidapi.com",
    port: null,
    path: `/${month}/${day}/date?fragment=true&json=true`,
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      useQueryString: true,
    },
  };

  const title = "The date facts | Amazing facts";
  makeRequest(options, res, title, "dateFact");
};

exports.triviaFact = (req, res) => {
  let triviaNumber = req.query.triviaNum || 1;
  const options = {
    method: "GET",
    hostname: "numbersapi.p.rapidapi.com",
    port: null,
    path: `/${triviaNumber}/trivia?fragment=true&notfound=floor&json=true`,
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      useQueryString: true,
    },
  };

  const title = "The trivia facts | Amazing facts";
  makeRequest(options, res, title, "triviaFact");
};

exports.randomFact = (req, res) => {
  let minNumber = req.query.minRandom || 1;
  let maxNumber = req.query.maxRandom || 10;

  const options = {
    method: "GET",
    hostname: "numbersapi.p.rapidapi.com",
    port: null,
    path: `/random/trivia?min=${minNumber}&max=${maxNumber}&fragment=true&json=true`,
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      useQueryString: true,
    },
  };

  const title = "The random facts | Amazing facts";
  makeRequest(options, res, title, "randomFact");
};

exports.yearFact = (req, res) => {
  let year = req.query.year || 2000;
  const title = "The year Fact | Amazing facts";
  const options = {
    method: "GET",
    hostname: "numbersapi.p.rapidapi.com",
    port: null,
    path: `/${year}/year?fragment=true&json=true`,
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      useQueryString: true,
    },
  };

  makeRequest(options, res, title, "yearFact");
};

const makeRequest = (options, res, title, page) => {
  try {
    const request = https.request(options, (response) => {
      const data = [];
      response.on("data", (d) => {
        data.push(d);
      });
      response.on("end", () => {
        const body = JSON.parse(data);
        res.render(page, {
          title: title,
          result: body,
        });
      });
    });
    request.end();
  } catch (err) {
    res.send("err");
  }
};
