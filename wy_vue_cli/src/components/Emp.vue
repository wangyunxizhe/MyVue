<!-- 没有样式的组件 -->

<template>
<!-- 组件的结构 -->
<div>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="showName">点击提示姓名</button>
</div>
</template>

<script>
//组件交互相关的代码
export default {
    //最好跟文件同名
    name: 'Emp',
    data() {
        return {
            name: "wyuan",
            age: 18
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    }
}
</script>