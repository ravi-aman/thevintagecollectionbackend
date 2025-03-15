const app = require("../index");  // Import Express app

module.exports = (req, res) => {
  return app(req, res);  // Use Express as a serverless function
};
