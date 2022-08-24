/*
插件的概念
功能：用于增强Vue
本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
定义插件语法：
    install(Vue,options) {
        //例1：添加全局过滤器
        Vue.filter(...)
        //例2：添加全局指令
        Vue.directive(...)
        //例3：添加全局mixin
        Vue.mixin(...)
        //例4：添加实例方法、属性
        Vue.prototype.$diyMethod = function(){...}
        Vue.prototype.$diyProperty = xxx
    }
使用插件：Vue.use()
*/

//自定义vue插件
export default {
    install(Vue) {
        console.log('~~~install被调用了~~~')

        //给Vue原型上添加一个方法（vm和vc上就都能使用了）
        Vue.prototype.hello = () => {
            alert('hello!!!')
        }
    }
}