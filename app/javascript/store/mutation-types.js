export default {
  login(state, data) {
    state.signedIn = !!data.user;
    state.currentUser = data.user || {};
  },
  setCurrentUser(state, data) {
    state.currentUser = data.user || {};
  },
  setUsers(state, data) {
    state.users = data.users;
  },
};
