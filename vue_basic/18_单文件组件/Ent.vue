<!-- 一个标准的组件 -->

<template>
<!-- 组件的结构 -->
<div class="demo">
    <h2>单位名称：{{ name }}</h2>
    <h2>单位地址：{{ addr }}</h2>
    <button @click="showName">点击提示单位名</button>
</div>
</template>

<script>
//组件交互相关的代码
export default {
    //最好跟文件同名
    name: 'Ent',
    data() {
        return {
            name: "研究院",
            addr: "南京鼓楼"
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    }
}
</script>

<style>
/*组件的样式*/
.demo {
    background-color: orange;
}
</style>
