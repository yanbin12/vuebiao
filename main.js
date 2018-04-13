import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'; 
import Bin from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Bin)
Vue.use(Element, { size: 'small' });
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')