import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import getStore from '../store';
import router from '../routes';
import App from '../app';

import '../assets/css/application';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = getStore(Vuex.Store);

router.beforeEach((to, from, next) => {
  const extraStr = "_=_";
  if (to.path.indexOf(extraStr) === -1) {
    next();
  } else {
    store.dispatch("login");
    next("/");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#application',
    store,
    router,
    render: (h) => h(App),
  });
});
