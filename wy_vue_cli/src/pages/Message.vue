<!-- 
    路由组件Message，路由组件通常放在“pages”文件夹中（规范）
    “嵌套路由”章节（起）
 -->
<template>
<div>
    <ul>
        <li v-for="m in messageList" :key="m.id">
            <!-- 路由传参，写法一：跳转路由并携带query参数，to的字符串写法，适合query参数较少的情况 -->
            <!-- <router-link :to="`/home/msg/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

            <!-- 路由传参，写法二（）：跳转路由并携带query参数，to的对象写法，适合query参数多的情况 -->
            <router-link :to="{
                //不使用“path”，使用“name”进行跳转
                //path:'/home/msg/detail',
                name:'diTaiErSi',
                query:{
                    id:m.id,
                    title:m.title
                }
            }">{{m.title}}</router-link>
            <button @click="pushShow(m)">push查看</button>
            <button @click="replaceShow(m)">replace查看</button>
        </li>
    </ul>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [{
                    id: '001',
                    title: '消息001'
                },
                {
                    id: '002',
                    title: '消息002'
                },
                {
                    id: '003',
                    title: '消息003'
                }
            ]
        }
    },
    methods: {
        pushShow(m) {
            this.$router.push({
                name: 'diTaiErSi',
                query: {
                    id: m.id,
                    title: m.title
                }
            })
        },
        replaceShow(m) {
            this.$router.replace({
                name: 'diTaiErSi',
                query: {
                    id: m.id,
                    title: m.title
                }
            })
        }
    }
}
</script>

<style>

</style>
