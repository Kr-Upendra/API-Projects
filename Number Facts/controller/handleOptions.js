exports.option = (path) => {
  const options = {
    method: "GET",
    hostname: "numbersapi.p.rapidapi.com",
    port: null,
    path: path,
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      useQueryString: true,
    },
  };
  return options;
};
