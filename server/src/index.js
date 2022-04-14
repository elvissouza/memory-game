const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const router = express.Router();

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);