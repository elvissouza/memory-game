const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.options('*', cors());

mongoose.connect('Your Database Connection');

mongoose.connection.on("connected", function () {
  console.log("Connected to Database");
});

mongoose.connection.on('error', (error) => {
  console.log("Connection error" + error);
});

app.get('/', function (req, res) {
  res.send('End Point Error');
});

app.use(bodyParser.json());

const routes = require('./routes/api');
app.use('/api', routes);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(422).send({ error: err.message });
});

let port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log('Server host on port: ' + port);
});