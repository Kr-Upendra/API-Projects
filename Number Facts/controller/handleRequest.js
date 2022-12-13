const https = require("https");

exports.makeRequest = (options, res, title, page) => {
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
    res.render("error", {
      title: "not found | return home",
      message: err.message,
    });
  }
};
