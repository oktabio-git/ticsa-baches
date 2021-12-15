import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import loader from './modules/loader';

Vue.use(Vuex);

let generalModules = {
  auth,
  loader
}

let modules = {
  ...generalModules
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: modules
});