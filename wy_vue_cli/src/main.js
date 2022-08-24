/*
该文件是整个项目的入口文件
 */

//引入Vue（非完整版）
// import Vue from 'vue'

//引入Vue（完整版）
import Vue from 'vue/dist/vue'
//引入App组件，因为它是自定义的所有组件的父组件
import App from './App.vue'
/*
关于不同版本的vue：
    1，vue.js与vue.runtime.xxx.js的区别：
     （1）vue.js是完整版的vue，包含核心功能 + 模板解析器
     （2）vue.runtime.xxx.js是运行版的Vue，只包含核心功能，没有版本解析器
    2，因为vue.runtime.xxx.js没有模板解析器，所以不能使用 template 配置项，
    需要使用render函数接收到的createElement函数去指定具体内容
 */


//关闭Vue的生产提示
Vue.config.productionTip = false

/* new Vue({
  //下面这段代码的作用：将App组件放入容器中
  //注意：要么引入“完整版”的Vue，要么使用如下的render函数，否则无法实例化
  render: h => h(App)
}).$mount('#app') */

//在引入“完整版”的vue后，就可以用一贯的写法了
new Vue({
  el: "#app",
    template: `<App></App>`,
    components: {
        App: App
    }
})


