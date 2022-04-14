const modelPlayer = require('../models/Player.js');

exports.test = function (req, res) {
  res.send("Olá! Teste ao Controller");
};

exports.getPlayers = function (req, res, next) {
  modelPlayer.find({}).then(function (players) {
    res.send(players);
  }).catch(next);
};

exports.create = function (req, res, next) {
  modelPlayer.create(req.body).then(function (player) {
    res.send(player);
  }).catch(next);
};
