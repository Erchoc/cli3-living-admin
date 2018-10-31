/**
 * Author: Erchoc(erchoc@163.com)
 * Date: 2018/10/31
 * Desc: Permission
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '钟琳',
  },
  mutations: {
    marry(state) {
      state.name = '杨钟琳';
    },
  },
  actions: {

  },
});
