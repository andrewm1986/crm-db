import Vue from 'vue';
import Router from 'vue-router';
import ListCompanies from './views/ListCompanies.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'listCompanies',
      component: ListCompanies,
    },
    {
      path: '/add-company',
      name: 'addCompany',
      component: () => import('./views/AddCompany.vue'),
    },
    {
      path: '/edit-company/:id',
      name: 'editCompany',
      component: () => import('./views/EditCompany.vue'),
      props: (route: any) => ({ id: parseInt(route.params.id, 10) }),
    },
  ],
});
