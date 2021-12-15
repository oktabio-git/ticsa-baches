import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import {
  instance,
  factories
} from './api'
import router from './router';
import store from './store';
import * as VueGoogleMaps from 'vue2-google-maps'

import registerIconsFA from '@/fontawesome/icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './filters/toUppercase';

Vue.prototype.$axios = instance;
Vue.prototype.$api = factories(instance);

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDS8ucvBw36czfxSFiK7dY1y2YQDNNkImw',
    libraries: 'places',
  },
});

registerIconsFA()

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')