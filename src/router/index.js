/**
 * Author: Erchoc(erchoc@163.com)
 * Date: 2018/10/31
 * Desc: Router
 */

import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '@/views/dashboard/index.vue';

Vue.use(Router);

/* Router Modules */
// import xxxRouter from './modules/xxx';

export const RouterMap = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
  },
  {
    path: '*',
    redirect: '/404',
  },
];

export default new Router({
  mode: 'history', // need service support
  scrollBehavior: () => ({ y: 0 }),
  routes: RouterMap,
});
