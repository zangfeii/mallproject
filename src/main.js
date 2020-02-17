import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueLazyload from 'vue-lazyload'

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(VueLazyload, {
  // error:require('./assets/images/logo.png'),
  loading: require('./assets/img/loadimg/loading.gif')
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')