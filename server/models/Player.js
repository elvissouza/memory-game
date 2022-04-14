const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: [true, `*Required Field!`]
  },
  rounds: {
    type: Number,
    required: [true, `*Required Field!`]
  }
});

const Player = mongoose.model('RankPlayers', PlayerSchema);

module.exports = Player;