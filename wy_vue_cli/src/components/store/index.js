// 文件夹命名 store，文件命名 index.js。均遵循Vue官网的“vuex”使用规范
//该文件的作用：结合“Count章节”用到的所有组件演示“vuex版”相关的功能，用于创建Vuex中最为核心的store

//引入Vue（完整版）
import Vue from 'vue/dist/vue'
//引入Vuex
import Vuex from 'vuex'

//使用第3方的插件vuex
Vue.use(Vuex)

//准备actions -- 用于响应组件中的动作
const actions = {
    //若CountVuex.vue中使用了写法二，以下代码可以注释
    /* //参数1：可以理解为一个mini版的store。参数2，调用时的传参
    jia(context, param) {
        //继续传往mutations中（tips：mutations中的函数名一般使用全大写的命名）
        context.commit('JIA', param)
    },
    jian(context, param) {
        context.commit('JIAN', param)
    }, */

    jiaOdd(context, param) {
        //因为mutations中不处理任何业务逻辑，业务逻辑只在actions中处理。所以这里处理完业务逻辑后，直接调用JIA方法
        if (context.state.sum % 2) {
            context.commit('JIA', param)
        }
    },
    jiaWait(context, param) {
        setTimeout(() => {
            context.commit('JIA', param)
        }, 500)
    }
}

//准备mutations -- 用于操作数据（state）
const mutations = {
    //参数1：与actions中的context性质一样都是系统参数。参数2，调用时的传参
    JIA(state, param) {
        state.sum += param
    },
    JIAN(state, param) {
        state.sum -= param
    }
}

//准备state -- 用于存储数据
const state = {
    //当前的和（提供给vuex版使用，vue版写在了自己的组件中）
    sum: 0
}

//创建并导出store
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state
})