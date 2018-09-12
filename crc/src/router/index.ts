import Vue from 'vue';
import VueRouter from 'vue-router';

// conatiners
import { AppContainer } from '../components/containers/App';

import { FormContainer } from '../components/containers/Form';
import { DashboardContainer } from '../components/containers/Dashboard';
import { AdminContainer } from '../components/containers/Admin';

// modules
import { Navbar } from '../components/modules/Navbar';

////for testing
import { CounterContainer } from '../components/containers/Counter';
import { ListContainer } from '../components/containers/List';


// register the plugin
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      component: AppContainer,
      name: 'index',
      path: '/',
    }, {
      component: FormContainer,
      name: 'form',
      path: '/form',
    }, {
      component: DashboardContainer,
      name: 'dashboard',
      path: '/dashboard',
    }, {
      component: AdminContainer,
      name: 'admin',
      path: '/admin',
    }, 
    
    
    ////////////////// --------testing------ ////////////
    {
      component: CounterContainer,
      name: 'counter',
      path: '/counter',
    }, {
      component: ListContainer,
      name: 'list',
      path: '/list',
    }
  ],
});

export default router;
