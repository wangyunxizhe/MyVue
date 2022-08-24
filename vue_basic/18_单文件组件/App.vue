<!-- 用于汇总所有的组件 -->

<template>
<div>
    <Ent></Ent>
    <Emp></Emp>
</div>
</template>

<script>
// 引入组件
import Ent from './Ent.vue'
import Emp from './Emp.vue'

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
