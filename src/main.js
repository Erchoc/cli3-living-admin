/**
 * Author: Erchoc(erchoc@163.com)
 * Date: 2018/10/31
 * Desc: Main.js
 */

import Vue from 'vue';
import ElementUI from 'element-ui';

import App from './App.vue';
import Router from './router';
import Store from './store';
import 'element-ui/lib/theme-chalk/index.css';

// import i18n from './lang'; // Internationalization
import './mock';
import './icons';
import './errorLog';
import './permission';
// import * as filters from './filters';

// eslint-disable-next-line
Vue.use(ElementUI, {
  size: 'medium',
});

// Register global utility filters.
// Object.keys(filters).foreach(key => {
//   Vue.filter(key, filters[key]);
// });

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router: Router,
  store: Store,
  render: h => h(App),
});
