const handleRequest = require("./handleRequest");
const handleOptions = require("./handleOptions");

exports.mathFact = (req, res) => {
  let mathNumber = req.query.number || 1;
  if (!parseInt(mathNumber))
    return res.render("error", { message: "Please provide a valid number!" });
  const path = `/${mathNumber}/math?fragment=true&json=true`;
  const options = handleOptions.option(path);
  const title = "The math facts | Amazing facts";
  handleRequest.makeRequest(options, res, title, "mathFact");
};

exports.dateFact = (req, res) => {
  let day = req.query.day || 1;
  let month = req.query.month || 1;
  const path = `/${month}/${day}/date?fragment=true&json=true`;
  const options = handleOptions.option(path);
  const title = "The date facts | Amazing facts";
  handleRequest.makeRequest(options, res, title, "dateFact");
};

exports.triviaFact = (req, res) => {
  let triviaNumber = req.query.triviaNum || 1;
  if (!parseInt(triviaNumber))
    return res.render("error", { message: "Please provide a valid number!" });
  const path = `/${triviaNumber}/trivia?fragment=true&notfound=floor&json=true`;
  const options = handleOptions.option(path);
  const title = "The trivia facts | Amazing facts";
  handleRequest.makeRequest(options, res, title, "triviaFact");
};

exports.randomFact = (req, res) => {
  let minNumber = req.query.minRandom || 1;
  let maxNumber = req.query.maxRandom || 10;
  const path = `/random/trivia?min=${minNumber}&max=${maxNumber}&fragment=true&json=true`;
  const options = handleOptions.option(path);
  const title = "The random facts | Amazing facts";
  handleRequest.makeRequest(options, res, title, "randomFact");
};

exports.yearFact = (req, res) => {
  let year = req.query.year || 2000;
  if (!parseInt(year))
    return res.render("error", { message: "Please provide a valid year!" });
  const title = "The year Fact | Amazing facts";
  const path = `/${year}/year?fragment=true&json=true`;
  const options = handleOptions.option(path);
  handleRequest.makeRequest(options, res, title, "yearFact");
};
