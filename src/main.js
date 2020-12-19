import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/wyz-echarts/wyz-echarts.js'
Vue.config.productionTip = false
Vue.use(ElementUI);

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


import VCharts from 'v-charts'
Vue.use(VCharts)
new Vue({

  router,
  store,
  render: h => h(App),

}).$mount('#app')
