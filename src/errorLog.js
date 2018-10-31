/**
 * Author: Erchoc(erchoc@163.com)
 * Date: 2018/10/31
 * Desc: ErrorLog
 */

import Vue from 'vue';
import Store from './store';

// If run in production mode, show the error-log
if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandle = (err, vm, info, a) => {
    // doc: https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandle-has-some-problem/23500
    Vue.nextTick(() => {
      Store.dispatch('addErrorLog', {
        err,
        vm,
        info,
        url: window.location.href
      });
      console.error(err, info);
    });
  }
}

