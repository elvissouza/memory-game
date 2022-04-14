import store from '../store';

export const userService = {
  login,
  logout,
  getName,
};

function login(name) {
  store.commit('UPDATE_PLAYERNAME', name);
  localStorage.setItem('playerName', name);
  return this.$router.push('/');
}

function logout() {
  store.commit('UPDATE_PLAYERNAME', null);
  localStorage.removeItem('playerName');
  return this.$router.push('/login');
}

function getName() {
  return localStorage.getItem('playerName');
}
