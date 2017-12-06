import actions from './action-types';
import mutations from './mutation-types';

const state = {
  signedIn: false,
  currentUser: { interests: [] },
  users: [],
  selectedUsers: [],
  displayMode: 1,
};

const getters = {};

export default store => new store({
  state,
  getters,
  actions,
  mutations,
});
