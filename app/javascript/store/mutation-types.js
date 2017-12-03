const mutations = {
  login(state, data) {
    state.signedIn = !!data.user;
    state.currentUser = data.user || {};
  },
};

export default mutations;