<!-- 具名插槽样例 -->

<template>
<div class="category">
    <h3>{{title}}</h3>
    <slot name="center">我是默认值1</slot>
    <slot name="footer">我是默认值2</slot>
</div>
</template>

<script>
export default {
    name: "SlotNamedCategory",
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
