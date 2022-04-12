import store from '../store';

export const userService = {
  login,
  logout,
  getName,
};

function login(name) {
  store.commit('UPDATE_PLAYERNAME', name);
  return localStorage.setItem('playerName', name);
}

function logout() {
  store.commit('UPDATE_PLAYERNAME', null);
  return localStorage.removeItem('playerName');
}

function getName() {
  return localStorage.getItem('playerName');
}
