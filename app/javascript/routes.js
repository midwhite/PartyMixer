import VueRouter from 'vue-router';
import UsersComponent from './components/users';
import ShowUserComponent from './components/users/show';
import EditUserComponent from './components/users/edit';

const routes = [{
  path: '/', component: UsersComponent,
},{
  path: '/users/edit', component: EditUserComponent,
},{
  path: '/users/:id', component: ShowUserComponent,
}];

export default new VueRouter({ routes });
