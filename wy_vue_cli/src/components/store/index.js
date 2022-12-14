// 文件夹命名 store，文件命名 index.js。均遵循Vue官网的“vuex”使用规范
//该文件的作用：结合“Count章节”用到的所有组件演示“vuex版”相关的功能，用于创建Vuex中最为核心的store

//引入Vue（完整版）
import Vue from 'vue/dist/vue'
//引入Vuex
import Vuex from 'vuex'
//“模块化管理”：引入按业务拆分后的js
import countOptions from './count'
import shareOptions from './share'

//使用第3方的插件vuex
Vue.use(Vuex)

//准备actions -- 用于响应组件中的动作
//tips：使用“模块化管理”后，以下代码可注释（仅学习时便于理解）因为工作中所有业务写在一个对象中无法管理，都会写在各自的js文件中
/* const actions = {
    //若CountVuex.vue中使用了写法二，以下代码可以注释
    //参数1：可以理解为一个mini版的store。参数2，调用时的传参
    // jia(context, param) {
    //     //继续传往mutations中（tips：mutations中的函数名一般使用全大写的命名）
    //     context.commit('JIA', param)
    // },
    // jian(context, param) {
    //     context.commit('JIAN', param)
    // },

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
} */

//准备mutations -- 用于操作数据（state）
//tips：使用“模块化管理”后，以下代码可注释（仅学习时便于理解）因为工作中所有业务写在一个对象中无法管理，都会写在各自的js文件中
/* const mutations = {
    //参数1：与actions中的context性质一样都是系统参数。参数2，调用时的传参
    JIA(state, param) {
        state.sum += param
    },
    JIAN(state, param) {
        state.sum -= param
    },

    // ***** “共享数据”章节 ***** 
    ADD_PERSON(state, param) {
        state.personList.unshift(param)
    }
} */

//准备state -- 用于存储数据
//tips：使用“模块化管理”后，以下代码可注释（仅学习时便于理解）因为工作中所有业务写在一个对象中无法管理，都会写在各自的js文件中
/* const state = {
    //当前的和（提供给vuex版使用，vue版写在了自己的组件中）
    sum: 0,
    ent: '研究院',
    subject: '后端',
    personList: [{
        id: '001',
        name: '张三'
    }]
} */

//getters配置项：用于将state中的数据进行加工
//区别：actions/mutations/state这3个配置项是store中不可或缺的，而getters不是
//tips：使用“模块化管理”后，以下代码可注释（仅学习时便于理解）因为工作中所有业务写在一个对象中无法管理，都会写在各自的js文件中
/* const getters = {
    bigSum(state) {
        return state.sum * 10
    },
    doubleSum(state) {
        return state.sum * 2
    }
} */

//创建并导出store
export default new Vuex.Store({
    /* actions: actions,
    mutations: mutations,
    state: state,
    //将getters加入Store的配置项
    getters: getters */

    modules: {
        count: countOptions,
        share: shareOptions
    }
})