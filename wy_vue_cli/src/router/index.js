// Vue中对“路由”的使用规范（强制）。注意“router”文件夹的位置（与“store”有所区别，router在src目录下，store在components目录下）
// 作用：专门用于创建整个应用的路由器


//引入第3方的插件 vue-router
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [{
            //在router-link标签中也可以使用name属性进行跳转
            name: 'eBaoTe',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [{
                //children里的路径别带 斜杠，vue会自动补
                path: 'news',
                component: News
            }, {
                path: 'msg',
                component: Message,
                children: [{
                    name: 'diTaiErSi',
                    path: 'detail',
                    component: Detail,
                    //props写法一（不常用）：值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                    /* props: {
                        a: 1,
                        b: 'hello'
                    }, */

                    //props写法二：值为布尔值。若值为true，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                    // props: true

                    //props写法三：值为函数，该对象中的所有key-value都会以props的形式传给Detail组件
                    props($route) {
                        return {
                            id: $route.query.id,
                            title: $route.query.title,
                            a: 1,
                            b: 'hello'
                        }
                    }
                }]
            }]
        }
    ]
})