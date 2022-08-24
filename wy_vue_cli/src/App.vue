<!-- 用于汇总所有的组件 -->

<template>
<div>
    <img src="./assets/logo.png" alt="logo">
    <Ent></Ent>
    <Emp></Emp>
</div>
</template>

<script>
// 引入组件
import Ent from './components/Ent.vue'
import Emp from './components/Emp.vue'

export default {
    name: "App",
    components: {
        Ent: Ent,
        Emp: Emp
    }
}
</script>

<style>

</style>
