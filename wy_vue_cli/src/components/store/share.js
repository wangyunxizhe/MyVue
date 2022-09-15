//将vuex进行模块化管理，按照不同业务，分别管理，实际工作中需要如此
//“共享章节”的业务
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, param) {
            if (param.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', param)
            } else {
                alert('添加的人必须姓王！')
            }
        }
    },
    mutations: {
        ADD_PERSON(state, param) {
            state.personList.unshift(param)
        }
    },
    state: {
        personList: [{
            id: '001',
            name: '张三'
        }]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}