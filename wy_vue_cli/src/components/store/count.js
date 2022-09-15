//将vuex进行模块化管理，按照不同业务，分别管理，实际工作中需要如此
//“Count章节”的业务
export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        JIA(state, param) {
            state.sum += param
        },
        JIAN(state, param) {
            state.sum -= param
        }
    },
    state: {
        sum: 0,
        ent: '研究院',
        subject: '后端'
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        },
        doubleSum(state) {
            return state.sum * 2
        }
    }
}