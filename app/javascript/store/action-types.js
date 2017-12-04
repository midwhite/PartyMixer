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
  updateUser({ commit }, { user }) {
    commit('setCurrentUser', { user });
    axios.put(`/api/users/${user.id}`, { user });
  },
};
