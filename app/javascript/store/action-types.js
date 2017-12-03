import axios from './axios';

const actions = {
  login({ commit }){
    axios.get('/api/users/me').then(data => {
      commit('login', data);
    });
  },
};

export default actions;