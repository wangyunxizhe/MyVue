<!-- 
    路由组件News，路由组件通常放在“pages”文件夹中（规范）
    “嵌套路由”章节（起）
 -->
<template>
<ul>
    <li :style="{opacity}">欢迎</li>
    <li>news001<input type="text"></li>
    <li>news002<input type="text"></li>
    <li>news003<input type="text"></li>
</ul>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            opacity: 1
        }
    },
    //vue组件“独有”的两个生命周期钩子
    activated() {
        //生命周期钩子：激活
        console.log('News组件被激活了')
        this.timer = setInterval(() => {
            console.log('@')
            this.opacity -= 0.01
            if (this.opacity <= 0) {
                this.opacity = 1
            }
        }, 16)
    },
    deactivated() {
        //生命周期钩子：失活
        console.log('News组件失活了')
        clearInterval(this.timer)
    }
}
</script>

<style>

</style>
