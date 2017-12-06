import axios from './axios';
import { CURRENT_EVENT_ID } from '../constants';

export default {
  login({ commit }) {
    return axios.get('/api/users/me').then(data => {
      commit('login', data);
    });
  },
  getUsers({ commit }) {
    return axios.get('/api/users').then(data => {
      commit('setUsers', data);
    });
  },
  updateUser({ commit }, { user }) {
    commit('setCurrentUser', { user });
    return axios.put(`/api/users/${user.id}`, { user });
  },
  selectUser({ commit }, { user }) {
    return axios.post(`/api/users/relations`, { user_id: user.id, event_id: CURRENT_EVENT_ID }).then(data => {
      commit('selectUser', { user });
    });
  }
};
