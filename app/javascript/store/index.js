import actions from './action-types';
import mutations from './mutation-types';

const state = {
  signedIn: false,
  currentUser: { interests: [] },
  users: [],
  selectedUsers: [],
};

const getters = {};

export default store => new store({
  state,
  getters,
  actions,
  mutations,
});
