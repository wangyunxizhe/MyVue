//Vue2中的引用：import Vue from 'vue'
//对比：Vue3如下，引入的不再是Vue构造函数了，引入的是一个名为 createApp 的工厂函数
import {
    createApp
} from 'vue'

import App from './App.vue'


//Vue2中创建vm实例的代码
/* const vm = new Vue({
    render: h => h(App)
}).$mount('#app') */

//对比：Vue3如下，创建应用实例对象（app，类似于之前的vm，但app比vm更轻量）
const app = createApp(App)
app.mount('#app')