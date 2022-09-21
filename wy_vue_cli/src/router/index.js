// Vue中对“路由”的使用规范（强制）。注意“router”文件夹的位置（与“store”有所区别，router在src目录下，store在components目录下）
// 作用：专门用于创建整个应用的“路由器”


//引入第3方的插件 vue-router
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建一个路由器
const router = new VueRouter({
    //路由器默认模式：hash，直观的区别就是hash在路由中含有“/#/”，“history”没有
    // mode:'history',
    routes: [{
            //在router-link标签中也可以使用name属性进行跳转
            name: 'eBaoTe',
            path: '/about',
            component: About,
            meta: {
                title: '关于'
            }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {
                title: '主页'
            },
            children: [{
                //children里的路径别带 斜杠，vue会自动补
                path: 'news',
                component: News,
                //在meta中加入自定义属性isAuth，用于前置路由守卫来判断是否需要验证放行
                meta: {
                    isAuth: true,
                    title: '新闻'
                },
                beforeEnter: (to, from, next) => {
                    //独享路由守卫：只控制“news”路由。只有前置，没有后置
                    console.log('只在news路由触发', to, from)
                    //放行
                    next()
                }
            }, {
                path: 'msg',
                component: Message,
                //在meta中加入自定义属性isAuth，用于前置路由守卫来判断是否需要验证放行
                meta: {
                    isAuth: true,
                    title: '消息'
                },
                children: [{
                    name: 'diTaiErSi',
                    path: 'detail',
                    component: Detail,
                    meta: {
                        isAuth: true,
                        title: '详情'
                    },
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

//“路由守卫”章节改造
//beforeEach()：全局前置路由守卫，在每次路由切换之前都会调用，初始化时也会被调用
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from)
    // if (to.path === '/home/news' || to.path === '/home/msg') {
    //改用meta中的自定义属性isAuth来判断是否需要鉴权放行
    if (to.meta.isAuth) {
        if (localStorage.getItem('ent') === '研究院') {
            //放行
            next()
        } else {
            alert('信息不符，无权跳转查看')
        }
    } else {
        //放行
        next()
    }
})

//afterEach()：全局后置路由守卫，在每次路由切换之后都会调用，初始化时也会被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    //路由完成切换后再将网页title进行赋值替换
    document.title = to.meta.title || 'MyVue'
})

//将路由器暴露出去
export default router