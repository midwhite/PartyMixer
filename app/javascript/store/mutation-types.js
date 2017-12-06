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
  selectUser(state, data) {
    if (!state.selectedUsers.some(user => user.id === data.user.id)) {
      state.selectedUsers.push(data.user);
    }
  }
};
