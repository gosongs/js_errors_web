import Vue from 'vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

import VueHighcharts from 'vue-highcharts';
Vue.use(VueHighcharts);

import iView from 'iview/dist/iview.min'
import 'iview/dist/styles/iview.css';
Vue.use(iView)

Vue.use(VueResource)
Vue.config.productionTip = false

// hack localStorage
// https://github.com/pinguinjkeke/vue-local-storage
// useage:
// set: this.$localStorage.set('item', 'item_value');
// get: this.$localStorage.get('item');
// remove: this.$localStorage.remove('item');
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

import App from './components/App.vue'

router.beforeEach((to, from, next) => {
  next();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
