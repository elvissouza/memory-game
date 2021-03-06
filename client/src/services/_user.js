import router from '../router';
import store from '../store';

export const userService = {
  login,
  logout,
};

function login(name) {
  store.commit('UPDATE_PLAYERNAME', name);
  localStorage.setItem('playerName', name);
  return router.push('/');
}

function logout() {
  store.commit('UPDATE_PLAYERNAME', null);
  localStorage.removeItem('playerName');
  return router.push('/login');
}
