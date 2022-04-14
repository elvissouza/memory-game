const axios = require('axios');
import store from '../store';

const BASE_URL = 'https://memory-nodejs.herokuapp.com/api';

export const playerService = {
  getPlayers,
  addPlayer,
  finishGame,
};

async function getPlayers() {
  try {
    const response = await axios.get(`${BASE_URL}/players`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function addPlayer(player) {
  await axios.post(`${BASE_URL}/addPlayer`, {
    "name": player.name,
    "rounds": player.rounds
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function finishGame(finished) {
  return store.commit('UPDATE_FINISHGAME', finished);
}