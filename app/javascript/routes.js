import VueRouter from 'vue-router';
import CardsPage from './components/cards';

const routes = [{
  path: '/', component: CardsPage,
}];

export default new VueRouter({ routes });
