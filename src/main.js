import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import { userService } from './services/_user';

Vue.config.productionTip = false;
Vue.prototype.$userService = userService; //Set globally function

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
