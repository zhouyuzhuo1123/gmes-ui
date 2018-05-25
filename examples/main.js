// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
 
import carUi from '../src/index'
import './assets/defined.js'
//上面是开发模式
//下面是打包后的
//import '../css/static/app.css'
//import carUi from '../libs/app'
import demoBlock from './components/demo-block.vue';

Vue.use(carUi)
Vue.component('demo-block', demoBlock);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
