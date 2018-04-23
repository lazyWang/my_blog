// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import axios  from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/style.css';
import router from './router';
import $ from 'jquery';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({  
  state: {
  nickName:'',
  cartCount:0
  },
  mutations: {
    
  }
})

Vue.prototype.$http = axios;
Vue.prototype.api = 'http://www.why.com';
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
