const mutations = {
  login(state, data) {
    state.signedIn = true;
    state.currentUser = data.user;
  },
};

export default mutations;