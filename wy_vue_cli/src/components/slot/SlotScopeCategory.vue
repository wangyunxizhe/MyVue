<!-- 作用域插槽样例 -->

<template>
<div class="category">
    <h3>{{title}}</h3>
    <!-- 通过 :cars 将 cars数组 传递给插槽的使用者。Tips：作用域插槽也可以有name，变得跟具名插槽一样 -->
    <slot :cars="cars" :diy="msg">我是默认值1</slot>
</div>
</template>

<script>
export default {
    name: "SlotScopeCategory",
    props: ['title'],
    data() {
        return {
            cars: ['奔驰', '宝马', '奥迪', '路虎'],
            msg:'还可以传递更多的值'
        }
    }
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
