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
    const index = state.selectedUsers.findIndex(user => user.id === data.user.id);
    if (index === -1) {
      state.selectedUsers.push(data.user);
    } else {
      state.selectedUsers.splice(index, 1);
    }
  }
};
