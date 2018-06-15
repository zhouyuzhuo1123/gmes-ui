
import Vue from 'vue'
import App from './App'
import router from './router'
import carUi from '../src/index'
import '../src/theme-default/lib/index.css';
import demoBlock from './components/demo-block.vue';

import './assets/style.scss'
Vue.use(carUi)
Vue.component('demo-block', demoBlock);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
