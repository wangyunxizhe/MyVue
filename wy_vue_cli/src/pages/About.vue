<!-- 路由组件About，路由组件通常放在“pages”文件夹中（规范） -->
<template>
<h2>这里是About的内容</h2>
</template>

<script>
export default {
    name: 'About',
    //组件内路由守卫：注意与 router/index.js（路由器配置）区别，组件内路由守卫是写在“组件”内的，使用场景：当某个组件有独有需求时，可以使用
    //beforeRouteEnter：通过路由规则，进入该组件时被调用
    beforeRouteEnter(to, from, next) {
        console.log('组件内路由守卫--beforeRouteEnter', to, from)
        //放行
        next()
    },
    //beforeRouteLeave：通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
        console.log('组件内路由守卫--beforeRouteLeave', to, from)
        //放行
        next()
    }
}
</script>

<style>

</style>
