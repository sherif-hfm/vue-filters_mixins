import Vue from 'vue'
import App from './App.vue'
import {toLower} from './Filters/toLower.js'

Vue.config.productionTip = false
// Vue.filter('toLower',function(value){
// return value.toLowerCase();
// })
Vue.mixin({
  data:function(){
    return {
      globalData:'my global data'
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
