import VueRouter from 'vue-router';
import WelcomePage from './components/shared/welcome';

const routes = [{
  path: '/', component: WelcomePage,
}];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  const extraStr = "_=_";
  if (to.path.indexOf(extraStr) === -1) {
    next();
  } else {
    next("/");
  }
});

export default router;
