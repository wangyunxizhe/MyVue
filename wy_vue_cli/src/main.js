/*
该文件是整个项目的入口文件
 */

//引入Vue
import Vue from 'vue'
//引入App组件，因为它是自定义的所有组件的父组件
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false

new Vue({
  //下面这段代码的作用：将App组件放入容器中
  render: h => h(App),
}).$mount('#app')
