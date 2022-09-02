<!-- 
    用于汇总所有“消息订阅发布”章节的相关组件：
        一种组件间通信的方式，适用于“任意”组件间的通信
 -->
<template>
<div>
    <h1 class="app">{{msg}}</h1>

    <Hospital />

    <Doctor />
</div>
</template>

<script>
// 引入组件
import Hospital from './components/todo_list_pubsub/Hospital.vue'
import Doctor from './components/todo_list_pubsub/Doctor.vue'

//vc实例对象
export default {
    name: "AppTodoListPubsub",
    data() {
        return {
            msg: "来啦！！！",
            dname: ''
        }
    },
    components: {
        Hospital: Hospital,
        Doctor: Doctor
    }
}
</script>

<style>
.app {
    background-color: aquamarine;
    padding: 5px;
}
</style>
