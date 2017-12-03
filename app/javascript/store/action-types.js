import axios from './axios';

export default {
  login({ commit }) {
    axios.get('/api/users/me').then(data => {
      commit('login', data);
    });
  },
  getUsers({ commit }) {
    axios.get('/api/users').then(data => {
      commit('setUsers', data);
    });
  },
};
