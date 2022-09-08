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
//引入自定义的插件
import plugins from './plugins'
//引入第3方的插件
import vueResource from 'vue-resource'
//引入TodoList章节的组件
import AppTodoList from './AppTodoList.vue'
import AppTodoListStorage from './AppTodoListStorage.vue'
import AppTodoListDiy from './AppTodoListDiy.vue'
import AppTodoListBus from './AppTodoListBus.vue'
import AppTodoListPubsub from './AppTodoListPubsub.vue'
import AppGithubList from './AppGithubList.vue'
import AppSlot from './AppSlot.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false

//使用自定义的插件
Vue.use(plugins)
//使用第3方的插件
Vue.use(vueResource)

/* new Vue({
  //下面这段代码的作用：将App组件放入容器中
  //注意：要么引入“完整版”的Vue，要么使用如下的render函数，否则无法实例化
  render: h => h(App)
}).$mount('#app') */

//在引入“完整版”的vue后，就可以用一贯的写法了
new Vue({
  el: "#app",
  template: `
    <div>
      <App></App>
      <h1>======TodoList章节测试======</h1>
      <AppTodoList></AppTodoList>
      <h1>======TodoList章节测试Storage方案======</h1>
      <AppTodoListStorage></AppTodoListStorage>
      <h1>======TodoList章节测试自定义事件方案======</h1>
      <AppTodoListDiy></AppTodoListDiy>
      <h1>======TodoList章节测试全局事件总线方案======</h1>
      <AppTodoListBus></AppTodoListBus>
      <h1>======TodoList章节测试消息订阅发布方案======</h1>
      <AppTodoListPubsub></AppTodoListPubsub>
      <h1>======GithubList案例章节======</h1>
      <AppGithubList></AppGithubList>
      <h1>======插槽章节======</h1>
      <AppSlot></AppSlot>
    </div>
    `,
  components: {
    App: App,
    //只是为了方便练习，正常工作中main.js中只会引入App这一个组件
    AppTodoList: AppTodoList,
    AppTodoListStorage: AppTodoListStorage,
    AppTodoListDiy: AppTodoListDiy,
    AppTodoListBus: AppTodoListBus,
    AppTodoListPubsub: AppTodoListPubsub,
    AppGithubList: AppGithubList,
    AppSlot: AppSlot
  },
  //4，全局事件总线章节：安装全局事件总线
  beforeCreate() {
    //bus：约定俗成对全局事件总线的命名
    Vue.prototype.$bus = this
  }
})