import Vue from 'vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

import iView from 'iview/dist/iview.min'
import 'iview/dist/styles/iview.css';
Vue.use(iView)

Vue.use(VueResource)
Vue.config.productionTip = false

import App from './components/App.vue'

router.beforeEach((to, from, next) => {
  const storage = window.localStorage;
  if (storage.getItem('user')) {
    store.commit('SET_USER', JSON.parse(storage.getItem('user')));
  }
  next();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
