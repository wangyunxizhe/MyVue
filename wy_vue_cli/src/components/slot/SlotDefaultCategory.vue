<!-- 默认插槽样例 -->

<template>
<div class="category">
    <h3>{{title}}</h3>
    <!-- <ul>
        <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul> -->

    <!-- <slot>：定义一个插槽，等待组件使用者进行填充（本案例 使用者：AppSlot组件；填充内容：<img>标签） -->
    <slot>我是默认值，当组件使用者没有传递具体结构时，就会显示</slot>
</div>
</template>

<script>
export default {
    name: "SlotDefaultCategory",
    props: ['title']
}
</script>

<style scoped>
.category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
}

h3 {
    text-align: center;
    background-color: orange;
}
</style>
