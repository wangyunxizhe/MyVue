// Vue中对“路由”的使用规范（强制）。注意“router”文件夹的位置（与“store”有所区别，router在src目录下，store在components目录下）
// 作用：专门用于创建整个应用的路由器


//引入第3方的插件 vue-router
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [{
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
            },{
                path: 'msg',
                component: Message
            }]
        }
    ]
})