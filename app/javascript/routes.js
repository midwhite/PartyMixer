import VueRouter from 'vue-router';
import UsersComponent from './components/users';
import ShowUser from './components/users/show';

const routes = [{
  path: '/', component: UsersComponent,
},{
  path: '/users/:id', component: ShowUser,
}];

export default new VueRouter({ routes });
